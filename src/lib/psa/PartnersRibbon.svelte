<script>
  import { _ } from 'svelte-i18n';
  import { partnersRibbon } from './data.js';

  // doubled list -> seamless CSS marquee (track animates 0 -> -50%)
  const marquee = [...partnersRibbon, ...partnersRibbon];
</script>

<section
  id="partenaires"
  class="relative overflow-hidden scroll-mt-24 bg-y100 py-20 md:py-28"
>
  <div class="container mb-12">
    <h5 class="heading-5 text-g400">{$_('partenaires.kicker')}</h5>
    <h2 class="heading-2 pt-3">{$_('partenaires.title')}</h2>
    <p class="max-w-[560px] pt-4 text-n600">{$_('partenaires.para')}</p>
  </div>

  <div class="relative">
    <!-- band 1 -->
    <div
      class="flex translate-y-1/2 rotate-[7deg] scale-110 overflow-hidden border-y-4 border-n900 bg-white"
    >
      <div class="ribbon-track flex w-max shrink-0 px-2">
        {#each marquee as p, i}
          <span
            class="flex items-center justify-center gap-3 px-4 py-4 text-n900 transition-colors hover:bg-n20 md:gap-4 md:py-6"
            aria-hidden={i >= partnersRibbon.length ? 'true' : undefined}
          >
            <i class="ph {p.icon} text-3xl md:text-4xl"></i>
            <span class="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">{p.label}</span>
          </span>
        {/each}
      </div>
    </div>

    <!-- band 2 (crosses the first, scrolls the other way) -->
    <div
      class="flex -translate-y-1/2 -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-n900 bg-white"
    >
      <div class="ribbon-track ribbon-track--rev flex w-max shrink-0 px-2">
        {#each marquee as p, i}
          <span
            class="flex items-center justify-center gap-3 px-4 py-4 text-n900 transition-colors hover:bg-n20 md:gap-4 md:py-6"
            aria-hidden={i >= partnersRibbon.length ? 'true' : undefined}
          >
            <i class="ph {p.icon} text-3xl md:text-4xl"></i>
            <span class="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">{p.label}</span>
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
