<script>
  import { onMount } from 'svelte';
  import { _, locale } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import Seo from '$lib/psa/Seo.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { wa } from '$lib/psa/data.js';
  import { getCalendar } from '$lib/content.js';
  import {
    PHASES,
    PHASE_STYLE,
    CATEGORIES,
    SEASON_OF,
    SEASON_STYLE,
    monthName,
    currentMonth,
    phasesIn,
    cropsForMonth
  } from '$lib/psa/calendar.js';

  const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // prerendered with the build month, corrected in the visitor's browser
  let month = $state(currentMonth());
  let today = $state(currentMonth());
  onMount(() => (month = today = currentMonth()));

  let category = $state('all');
  let open = $state(/** @type {string | null} */ (null));

  const cal = $derived(getCalendar($locale));
  const crops = $derived(category === 'all' ? cal.crops : cal.crops.filter((c) => c.category === category));
  const now = $derived(cropsForMonth(crops, month));
  const mName = $derived(monthName(month, $locale));

  /** @param {string} crop */
  const orderLink = (crop) =>
    wa($_('calendar.orderMsg', { values: { crop: crop.toLowerCase(), month: mName.toLowerCase() } }));

  // consecutive runs of seasons for the strip above the grid
  const seasonRuns = MONTHS.reduce((runs, m) => {
    const s = SEASON_OF[m];
    const last = runs[runs.length - 1];
    if (last && last.season === s) last.span++;
    else runs.push({ season: s, span: 1 });
    return runs;
  }, /** @type {{season: 'dry'|'rain1'|'rain2', span: number}[]} */ ([]));
</script>

<Seo title={$_('calendar.title')} description={$_('seo.calendrier')} image="/og/calendrier.jpg" />

<PageHeader
  kicker={$_('calendar.thisMonth')}
  title={$_('calendar.title')}
  subtitle={$_('calendar.subtitle')}
  image="/assets/images/psa/stock/catalogue-agri.jpg"
/>

<!-- month + category pickers (sticky) -->
<div class="sticky top-[68px] z-30 border-y border-ink/10 bg-paper/90 backdrop-blur-xl">
  <div class="container flex flex-col gap-2 py-3 lg:flex-row lg:items-center lg:justify-between">
    <div class="flex gap-1 overflow-x-auto [scrollbar-width:none]" role="radiogroup" aria-label={$_('calendar.pickMonth')}>
      {#each MONTHS as m}
        <button
          role="radio"
          aria-checked={month === m}
          onclick={() => (month = m)}
          class="relative shrink-0 rounded-full px-3 py-2 text-[13px] font-bold transition-colors duration-300 {month === m
            ? 'bg-forest text-paper'
            : 'text-ink/60 hover:bg-cream hover:text-ink'}"
        >
          {monthName(m, $locale, 'short')}
          {#if m === today}<span class="absolute right-1 top-1 size-1.5 rounded-full bg-sun" aria-hidden="true"></span>{/if}
        </button>
      {/each}
    </div>
    <div class="flex gap-1 overflow-x-auto [scrollbar-width:none]">
      {#each ['all', ...CATEGORIES] as c}
        <button
          onclick={() => (category = c)}
          aria-pressed={category === c}
          class="shrink-0 rounded-full border px-3 py-1.5 text-[13px] font-semibold transition-colors {category === c
            ? 'border-moss bg-sage text-forest'
            : 'border-ink/10 text-ink/60 hover:border-ink/30'}"
        >
          {c === 'all' ? $_('calendar.all') : $_('calendar.categories.' + c)}
        </button>
      {/each}
    </div>
  </div>
</div>

<!-- ce mois-ci -->
<section class="s-pad">
  <div class="container">
    <div class="flex flex-wrap items-end justify-between gap-4" use:reveal>
      <h2 class="t-h2">
        {mName}
        {#if month === today}<span class="t-em text-moss">— {$_('calendar.thisMonth').toLowerCase()}</span>{/if}
      </h2>
      <span class="rounded-full px-4 py-1.5 text-sm font-semibold {SEASON_STYLE[SEASON_OF[month]]}">
        {$_('calendar.seasons.' + SEASON_OF[month])}
      </span>
    </div>

    <div class="grid gap-6 pt-12 lg:grid-cols-2">
      {#each [{ key: 'toSow', list: now.start, icon: 'ph-plant' }, { key: 'toHarvest', list: now.harvest, icon: 'ph-basket' }] as col}
        <div>
          <p class="flex items-center gap-2 pb-4 font-display text-2xl">
            <i class="ph-bold {col.icon} text-moss"></i>{$_('calendar.' + col.key)}
            <span class="font-label text-sm text-ink/40">({col.list.length})</span>
          </p>
          {#if col.list.length}
            <ul class="grid gap-3">
              {#each col.list as c (c.name)}
                <li class="rounded-[22px] border border-ink/10 bg-paper p-5">
                  <div class="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p class="font-display text-xl leading-tight">{c.name}</p>
                      <p class="pt-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/45">{$_('calendar.categories.' + c.category)}</p>
                    </div>
                    <div class="flex flex-wrap gap-1.5">
                      {#each phasesIn(c, month).filter((p) => (col.key === 'toHarvest') === (p === 'harvest')) as p}
                        <span class="flex items-center gap-1.5 rounded-full bg-cream px-2.5 py-1 text-xs font-semibold">
                          <span class="size-2.5 rounded-full {PHASE_STYLE[p]}"></span>{$_('calendar.phases.' + p)}
                        </span>
                      {/each}
                    </div>
                  </div>
                  <p class="pt-3 text-sm text-ink/70">{c.tip}</p>
                  {#if col.key === 'toSow'}
                    <a href={orderLink(c.name)} target="_blank" rel="noopener" class="t-link mt-3 text-sm text-moss">
                      <i class="ph-fill ph-whatsapp-logo"></i>{$_('calendar.order')}
                    </a>
                  {/if}
                </li>
              {/each}
            </ul>
          {:else}
            <p class="rounded-[22px] bg-cream p-5 text-ink/70">{$_('calendar.none')}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- l'année -->
<section class="s-pad pat-paper bg-cream">
  <div class="container">
    <div use:reveal>
      <h2 class="t-h2">{$_('calendar.yearTitlePre')}<span class="t-em text-moss">{$_('calendar.yearTitleEm')}</span></h2>
      <p class="t-lead max-w-[760px] pt-5">{cal.intro}</p>
    </div>

    <!-- legend -->
    <ul class="flex flex-wrap gap-x-5 gap-y-2 pt-8 text-sm font-semibold">
      {#each PHASES as p}
        <li class="flex items-center gap-2"><span class="h-3 w-6 rounded-full {PHASE_STYLE[p]}"></span>{$_('calendar.phases.' + p)}</li>
      {/each}
    </ul>

    <p class="pt-6 text-xs text-ink/50 lg:hidden"><i class="ph ph-arrows-left-right"></i> {$_('calendar.scrollHint')}</p>
    <div class="mt-3 overflow-x-auto rounded-[24px] border border-ink/10 bg-paper lg:mt-8">
      <table class="w-full min-w-[760px] table-fixed border-collapse text-sm">
        <colgroup>
          <col class="w-[170px] lg:w-[200px]" />
          {#each MONTHS as m}<col />{/each}
        </colgroup>
        <thead>
          <!-- seasons -->
          <tr>
            <th></th>
            {#each seasonRuns as r}
              <th colspan={r.span} class="px-0.5 pt-3">
                <span class="block rounded-full py-1 text-[11px] font-bold {SEASON_STYLE[r.season]}">{$_('calendar.seasons.' + r.season)}</span>
              </th>
            {/each}
          </tr>
          <tr class="border-b border-ink/10">
            <th class="px-4 py-3 text-left font-label text-[11px] uppercase tracking-[0.12em] text-ink/50">{$_('calendar.crop')}</th>
            {#each MONTHS as m}
              <th class="py-3">
                <button
                  onclick={() => (month = m)}
                  class="w-full rounded-full py-1 font-label text-[11px] uppercase transition-colors {month === m ? 'bg-forest text-paper' : 'text-ink/50 hover:text-ink'}"
                >
                  {monthName(m, $locale, 'short').slice(0, 3)}
                </button>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each crops as c (c.name)}
            <tr class="border-b border-ink/5 last:border-0">
              <th scope="row" class="px-4 py-2 text-left font-normal">
                <button
                  onclick={() => (open = open === c.name ? null : c.name)}
                  aria-expanded={open === c.name}
                  class="flex w-full items-center justify-between gap-2 text-left font-semibold hover:text-moss"
                >
                  {c.name}<i class="ph-bold ph-caret-down text-xs text-ink/40 transition-transform {open === c.name ? 'rotate-180' : ''}"></i>
                </button>
              </th>
              {#each MONTHS as m}
                {@const ph = phasesIn(c, m)}
                <td class="px-0.5 py-2 {month === m ? 'bg-sun/10' : ''}" title="{monthName(m, $locale)} — {ph.map((p) => $_('calendar.phases.' + p)).join(', ')}">
                  <div class="flex h-7 flex-col justify-center gap-0.5">
                    {#each ph as p}
                      <span class="block flex-1 rounded-[4px] {PHASE_STYLE[p]}"></span>
                    {/each}
                  </div>
                </td>
              {/each}
            </tr>
            {#if open === c.name}
              <tr class="bg-cream/60">
                <td colspan="13" class="px-4 py-4">
                  <div class="flex flex-wrap items-center justify-between gap-4">
                    <p class="max-w-[640px] text-ink/80"><b>{$_('calendar.tip')} :</b> {c.tip}</p>
                    <a href={orderLink(c.name)} target="_blank" rel="noopener" class="btn-primary !py-2.5">
                      <i class="ph-fill ph-whatsapp-logo"></i>{$_('calendar.order')}
                    </a>
                  </div>
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>

    <!-- advice CTA -->
    <div class="grain pat-seeds mt-10 grid items-center gap-6 overflow-hidden rounded-[28px] bg-forest p-8 text-paper md:grid-cols-[1fr_auto] md:p-10" use:reveal>
      <div class="relative z-10">
        <h3 class="t-h3">{$_('calendar.adviceTitle')}</h3>
        <p class="pt-2 text-paper/75">{$_('calendar.adviceText')}</p>
      </div>
      <a href="/contact" class="btn-sun relative z-10">{$_('common.contactUs')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></a>
    </div>
  </div>
</section>
