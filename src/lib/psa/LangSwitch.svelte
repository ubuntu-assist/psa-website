<script>
  import { locale } from 'svelte-i18n';
  import { _ } from 'svelte-i18n';
  import { setLocale } from '$lib/i18n';

  const langs = [
    { code: 'fr', flag: 'fr', label: 'Français' },
    { code: 'en', flag: 'gb', label: 'English' }
  ];

  const current = $derived(($locale || 'fr').slice(0, 2));
</script>

<div class="flex items-center gap-1 rounded-full border border-ink/10 p-1" role="group" aria-label={$_('nav.lang')}>
  {#each langs as l}
    <button
      type="button"
      onclick={() => setLocale(l.code)}
      aria-pressed={current === l.code}
      title={l.label}
      class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-bold uppercase duration-200 {current ===
      l.code
        ? 'bg-sun text-ink'
        : 'opacity-60 hover:opacity-100'}"
    >
      <img
        src="https://flagcdn.com/w20/{l.flag}.png"
        srcset="https://flagcdn.com/w40/{l.flag}.png 2x"
        width="20"
        height="15"
        alt=""
        class="rounded-[2px]"
      />
      {l.code}
    </button>
  {/each}
</div>
