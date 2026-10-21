<script>
  import { _ } from 'svelte-i18n';
  import { partenairesInstitutionnels, partenairesTechniques } from './data.js';

  // doubled lists -> seamless CSS marquee (track animates 0 -> -50%)
  const bands = [partenairesInstitutionnels, partenairesTechniques].map((l) => ({
    count: l.length,
    items: [...l, ...l]
  }));
</script>

<section id="partenaires" class="pat-woven relative scroll-mt-24 overflow-hidden bg-sage py-20 md:py-28">
  <div class="container mb-16 grid grid-cols-12 items-end gap-y-8 lg:gap-x-8">
    <div class="col-span-12 lg:col-span-7">
      <h2 class="t-h2">{$_('partenaires.title')}</h2>
    </div>
    <div class="col-span-12 lg:col-span-4 lg:col-start-9">
      <p class="t-lead">{$_('partenaires.para')}</p>
      <a href="/partenaires" class="btn-primary mt-6">
        {$_('partenaires.cta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span>
      </a>
    </div>
  </div>

  <div class="relative">
    <!-- band 1 -->
    <div
      class="flex translate-y-1/2 rotate-[7deg] scale-110 overflow-hidden border-y border-ink/15 bg-paper"
    >
      <div class="ribbon-track flex w-max shrink-0 px-2">
        {#each bands[0].items as p, i}
          <span
            class="flex items-center justify-center gap-3 px-5 py-3 text-n900 transition-colors hover:bg-cream md:gap-4 md:py-4"
            aria-hidden={i >= bands[0].count ? 'true' : undefined}
          >
            <img
              src="/assets/images/psa/partners/{p.logo}.png"
              alt={i >= bands[0].count ? '' : p.name}
              title={p.name}
              class="h-12 w-auto max-w-[160px] object-contain md:h-16"
            />
          </span>
        {/each}
      </div>
    </div>

    <!-- band 2 (crosses the first, scrolls the other way) -->
    <div
      class="flex -translate-y-1/2 -rotate-[7deg] scale-110 overflow-hidden border-y border-ink/15 bg-paper"
    >
      <div class="ribbon-track ribbon-track--rev flex w-max shrink-0 px-2">
        {#each bands[1].items as p, i}
          <span
            class="flex items-center justify-center gap-3 px-5 py-3 text-n900 transition-colors hover:bg-cream md:gap-4 md:py-4"
            aria-hidden={i >= bands[1].count ? 'true' : undefined}
          >
            <img
              src="/assets/images/psa/partners/{p.logo}.png"
              alt={i >= bands[1].count ? '' : p.name}
              title={p.name}
              class="h-12 w-auto max-w-[160px] object-contain md:h-16"
            />
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes ribbon {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  .ribbon-track {
    animation: ribbon 45s linear infinite;
  }
  .ribbon-track--rev {
    animation-direction: reverse;
  }
  section:hover .ribbon-track {
    animation-play-state: paused;
  }
  @media (prefers-reduced-motion: reduce) {
    .ribbon-track {
      animation: none;
    }
  }
</style>
