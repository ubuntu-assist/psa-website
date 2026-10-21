<script>
  import { _, locale } from 'svelte-i18n';
  import {
    getCountries,
    getCountryCallingCode,
    AsYouType,
    parsePhoneNumberFromString
  } from 'libphonenumber-js';

  let {
    /** E.164 value, e.g. "+237699000000" */
    value = $bindable(''),
    /** selected ISO country, e.g. "CM" */
    country = $bindable('CM'),
    /** whether the current input is a valid phone number */
    valid = $bindable(false),
    name = 'tel',
    id = undefined,
    placeholder = '',
    invalid = false
  } = $props();

  let root = $state(/** @type {HTMLElement | null} */ (null));
  let open = $state(false);
  let search = $state('');
  let national = $state('');

  const norm = (/** @type {string} */ s) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const countryList = $derived.by(() => {
    const dn = new Intl.DisplayNames([$locale || 'fr'], { type: 'region' });
    return getCountries()
      .map((iso) => ({
        iso,
        name: dn.of(iso) || iso,
        code: getCountryCallingCode(iso)
      }))
      .sort((a, b) => a.name.localeCompare(b.name, $locale || 'fr'));
  });

  const filtered = $derived(
    search.trim()
      ? countryList.filter(
          (c) =>
            norm(c.name).includes(norm(search)) ||
            c.iso.toLowerCase().includes(search.toLowerCase().replace('+', '')) ||
            ('+' + c.code).includes(search)
        )
      : countryList
  );

  const currentCode = $derived(() => {
    try {
      return getCountryCallingCode(/** @type {any} */ (country));
    } catch {
      return '';
    }
  });

  // keep E.164 `value` + `valid` in sync with the national input / country
  $effect(() => {
    const parsed = parsePhoneNumberFromString(national || '', /** @type {any} */ (country));
    value = parsed ? parsed.number : '';
    valid = parsed ? parsed.isValid() : false;
  });

  // parent-set value -> hydrate country + national (run once-ish)
  let hydrated = false;
  $effect(() => {
    if (hydrated || !value) return;
    const parsed = parsePhoneNumberFromString(value);
    if (parsed) {
      if (parsed.country) country = parsed.country;
      national = parsed.formatNational();
    }
    hydrated = true;
  });

  /** @param {Event} e */
  function onInput(e) {
    const raw = /** @type {HTMLInputElement} */ (e.currentTarget).value;
    national = new AsYouType(/** @type {any} */ (country)).input(raw);
  }

  /** @param {string} iso */
  function pick(iso) {
    country = iso;
    open = false;
    search = '';
    // re-run AsYouType for the new country
    national = new AsYouType(/** @type {any} */ (iso)).input(national);
  }

  $effect(() => {
    if (!open) return;
    /** @param {MouseEvent} e */
    const onDoc = (e) => {
      if (root && !root.contains(/** @type {Node} */ (e.target))) open = false;
    };
    document.addEventListener('click', onDoc, true);
    return () => document.removeEventListener('click', onDoc, true);
  });

  const flag = (/** @type {string} */ iso) => `https://flagcdn.com/w20/${iso.toLowerCase()}.png`;
</script>

<div
  bind:this={root}
  class="relative flex rounded-2xl border bg-paper {invalid
    ? 'border-clay'
    : 'border-ink/10 focus-within:border-moss'}"
>
  <!-- country trigger -->
  <button
    type="button"
    class="flex items-center gap-1.5 rounded-s-2xl border-e border-ink/10 px-3 py-3.5 text-sm hover:bg-cream"
    aria-haspopup="listbox"
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    <img src={flag(country)} width="20" height="15" alt={country} class="rounded-[2px]" />
    <span class="text-n500">+{currentCode()}</span>
    <i class="ph-bold ph-caret-down text-xs !leading-none text-n300"></i>
  </button>

  <input
    {id}
    {name}
    {placeholder}
    type="tel"
    inputmode="tel"
    autocomplete="tel"
    value={national}
    oninput={onInput}
    class="w-full rounded-e-2xl bg-transparent px-3 py-3.5 outline-none placeholder:text-ink/40"
  />

  {#if open}
    <div
      class="absolute left-0 top-[calc(100%+6px)] z-30 w-[320px] max-w-[90vw] overflow-hidden rounded-xl border border-n30 bg-white shadow-lg"
      role="listbox"
    >
      <div class="border-b border-n30 p-2">
        <input
          bind:value={search}
          type="text"
          placeholder={$_('phone.search')}
          class="w-full rounded-lg border border-n30 px-3 py-2 text-sm outline-none focus:border-g400"
        />
      </div>
      <ul class="max-h-64 overflow-y-auto py-1">
        {#each filtered as c (c.iso)}
          <li>
            <button
              type="button"
              class="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-n20 {c.iso ===
              country
                ? 'bg-g50 text-g400'
                : ''}"
              onclick={() => pick(c.iso)}
            >
              <img src={flag(c.iso)} width="20" height="15" alt="" class="rounded-[2px]" />
              <span class="flex-1 truncate">{c.name}</span>
              <span class="text-n300">+{c.code}</span>
              {#if c.iso === country}<i class="ph-bold ph-check text-g400"></i>{/if}
            </button>
          </li>
        {:else}
          <li class="px-3 py-4 text-center text-sm text-n300">{$_('phone.empty')}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
