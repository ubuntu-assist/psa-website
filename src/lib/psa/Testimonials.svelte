<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { _, json } from 'svelte-i18n';
  import { temoignageHeads } from './data.js';
  import { reveal } from './reveal.js';

  const items = $derived(
    /** @type {any[]} */ ($json('temoignages.items') || []).map((t, i) => ({
      ...t,
      head: temoignageHeads[i % temoignageHeads.length]
    }))
  );

  let i = $state(0);
  let paused = $state(false);
  const go = (/** @type {number} */ d) => (i = (i + d + items.length) % items.length);
  const t = $derived(items[i]);

  onMount(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => !paused && items.length && go(1), 6500);
    return () => clearInterval(id);
  });
</script>

<section
  class="s-pad glow-corners-sun overflow-hidden bg-paper"
  onmouseenter={() => (paused = true)}
  onmouseleave={() => (paused = false)}
  aria-roledescription="carousel"
  aria-label={$_('temoignages.title')}
>
  <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10">
    <div class="col-span-12 lg:col-span-4" use:reveal>
      <h2 class="t-h2">{$_('temoignages.title')}</h2>
      <div class="flex items-center gap-3 pt-10">
        <button class="flex size-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-forest hover:text-paper" aria-label="Précédent" onclick={() => go(-1)}>
          <i class="ph-bold ph-arrow-left"></i>
        </button>
        <button class="flex size-12 items-center justify-center rounded-full bg-forest text-paper transition-colors hover:bg-moss" aria-label="Suivant" onclick={() => go(1)}>
          <i class="ph-bold ph-arrow-right"></i>
        </button>
        <span class="pl-3 font-display text-lg tabular-nums text-ink/50">
          {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
      </div>
    </div>

    <div class="relative col-span-12 flex min-h-[380px] flex-col lg:col-span-7 lg:col-start-6" aria-live="polite">
      <i class="ph-fill ph-quotes text-6xl leading-none text-sun" aria-hidden="true"></i>
      <div class="grid flex-1 pb-12 pt-6">
        {#if t}
          {#key i}
            <figure class="[grid-area:1/1]" in:fly={{ y: 24, duration: 600, delay: 200 }} out:fade={{ duration: 180 }}>
              <blockquote class="font-display text-[28px] leading-[1.25] tracking-tight md:text-[38px]">
                {t.texte}
              </blockquote>
              <figcaption class="flex items-center gap-4 pt-10">
                <img src="/assets/images/{t.head}" alt="" class="size-14 rounded-full object-cover" />
                <span>
                  <span class="block font-bold">{t.nom}</span>
                  <span class="block text-sm text-ink/60">{t.role}</span>
                </span>
                <span class="ml-auto flex gap-0.5 text-sun"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i></span>
              </figcaption>
            </figure>
          {/key}
        {/if}
      </div>
      <div class="absolute bottom-0 left-0 right-0 flex gap-1.5">
        {#each items as _x, k}
          <button
            class="group/dot flex h-8 flex-1 items-center"
            aria-label={String(k + 1)}
            aria-current={k === i}
            onclick={() => (i = k)}
          >
            <span
              class="block h-1 w-full rounded-full transition-colors duration-500 {k === i
                ? 'bg-forest'
                : 'bg-ink/10 group-hover/dot:bg-ink/30'}"
            ></span>
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>
