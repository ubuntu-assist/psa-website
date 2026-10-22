<script>
  import { onMount } from 'svelte';
  import { _, locale } from 'svelte-i18n';
  import { getCalendar } from '$lib/content.js';
  import { cropsForMonth, currentMonth, monthName, phasesIn, PHASE_STYLE } from './calendar.js';
  import { reveal } from './reveal.js';

  // prerendered with the build month, then corrected in the visitor's browser
  let month = $state(currentMonth());
  onMount(() => (month = currentMonth()));

  const cal = $derived(getCalendar($locale));
  const now = $derived(cropsForMonth(cal.crops, month));
  const name = $derived(monthName(month, $locale));
</script>

<section class="s-pad pat-field relative overflow-hidden bg-paper">
  <div class="container grid grid-cols-12 items-start gap-y-10 lg:gap-x-16">
    <div class="col-span-12 lg:col-span-5" use:reveal>
      <p class="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
        <i class="ph-bold ph-calendar-blank"></i>{$_('calendar.thisMonth')} · {name}
      </p>
      <h2 class="t-h2 pt-6">
        {$_('calendar.teaserTitlePre')}<span class="t-em text-moss">{$_('calendar.teaserTitleEm', { values: { month: name.toLowerCase() } })}</span>
      </h2>
      <p class="t-lead pt-5">{$_('calendar.subtitle')}</p>
      <a href="/calendrier" class="btn-primary mt-8">
        {$_('calendar.teaserCta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span>
      </a>
    </div>

    <div class="col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-7" use:reveal={{ delay: 120 }}>
      {#each [{ key: 'toSow', list: now.start, icon: 'ph-plant', tone: 'bg-sage' }, { key: 'toHarvest', list: now.harvest, icon: 'ph-basket', tone: 'bg-claysoft' }] as col}
        <div class="rounded-[28px] {col.tone} p-6">
          <p class="flex items-center gap-2 font-display text-xl">
            <i class="ph-bold {col.icon}"></i>{$_('calendar.' + col.key)}
          </p>
          {#if col.list.length}
            <ul class="flex flex-wrap gap-2 pt-5">
              {#each col.list as c}
                <li class="flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-sm font-semibold">
                  {#each phasesIn(c, month).filter((p) => (col.key === 'toHarvest') === (p === 'harvest')) as p}
                    <span class="size-2.5 rounded-full {PHASE_STYLE[p]}" title={$_('calendar.phases.' + p)}></span>
                  {/each}
                  {c.name}
                </li>
              {/each}
            </ul>
          {:else}
            <p class="pt-5 text-sm text-ink/70">{$_('calendar.none')}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
