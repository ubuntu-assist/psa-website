<script>
  import { _, json } from 'svelte-i18n';
  import { reveal } from './reveal.js';
  import { demarcheIcons } from './data.js';

  const etapes = $derived(/** @type {{titre:string,texte:string}[]} */ ($json('howitworks.etapes')) || []);
  const cards = $derived(
    /** @type {{titre:string,texte:string}[]} */ ($json('demarcheCards') || []).map((t, i) => ({ icon: demarcheIcons[i], ...t }))
  );
</script>

<div class="container">
  <div class="grid grid-cols-12 items-end gap-y-8 lg:gap-x-8" use:reveal>
    <div class="col-span-12 lg:col-span-7">
      <h2 class="t-h2">
        {$_('howitworks.titlePre')}<span class="t-em text-moss">{$_('howitworks.titleEm')}</span>
      </h2>
    </div>
  </div>

  <ol class="relative grid gap-10 pt-16 md:grid-cols-3 md:gap-8">
    <span class="absolute left-0 right-0 top-[calc(4rem+28px)] hidden h-px bg-ink/15 md:block" aria-hidden="true"></span>
    {#each etapes as e, i}
      <li class="relative" use:reveal={{ delay: i * 120 }}>
        <span
          class="relative flex size-14 items-center justify-center rounded-full font-display text-xl {i === 0
            ? 'bg-sun text-ink'
            : 'border border-ink/15 bg-paper'}"
        >
          {i + 1}
        </span>
        <h3 class="t-h3 pt-8">{e.titre}</h3>
        <p class="max-w-[320px] pt-3 text-ink/70">{e.texte}</p>
      </li>
    {/each}
  </ol>

  <ul class="grid gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-3">
    {#each cards as d, i}
      <li class="flex items-start gap-4 rounded-[22px] bg-cream p-6" use:reveal={{ delay: i * 80 }}>
        <span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-xl text-moss">
          <i class="ph-bold {d.icon}"></i>
        </span>
        <span>
          <span class="block font-bold">{d.titre}</span>
          <span class="block pt-1 text-sm text-ink/60">{d.texte}</span>
        </span>
      </li>
    {/each}
  </ul>
</div>
