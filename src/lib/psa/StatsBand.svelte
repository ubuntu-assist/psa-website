<script>
  import { _, json } from 'svelte-i18n';
  import { reveal } from './reveal.js';

  const items = $derived(/** @type {{value:string,label:string}[]} */ ($json('stats.items')) || []);
</script>

<!-- « Depuis 2014 » + chiffres-clés -->
<section class="grain pat-seeds glow-sunrise overflow-hidden bg-forest text-paper">
  <div class="container relative z-10 s-pad">
    <div class="grid grid-cols-12 items-end gap-y-10 lg:gap-x-10">
      <div class="col-span-12 lg:col-span-5" use:reveal>
        <p class="text-lg font-semibold text-sun">{$_('stats.since')}</p>
        <p class="t-display pt-4 text-[120px] text-sun sm:text-[160px] xl:text-[200px]">{$_('stats.year')}</p>
        <p class="t-lead max-w-[380px] pt-4 !text-paper/70">{$_('stats.sinceText')}</p>
      </div>
      <ul class="col-span-12 grid grid-cols-2 sm:grid-cols-3 lg:col-span-7">
        {#each items as s, i}
          <li class="border-t border-paper/15 py-6 pr-4 {i < 3 ? '' : 'sm:border-t'}" use:reveal={{ delay: i * 80 }}>
            <p class="t-display whitespace-nowrap text-[32px] sm:text-[40px] md:text-[52px] lg:text-[38px] xl:text-[52px]">{s.value}</p>
            <p class="pt-2 text-sm font-semibold uppercase tracking-[0.12em] text-paper/60">{s.label}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
