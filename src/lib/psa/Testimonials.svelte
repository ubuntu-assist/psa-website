<script>
  import { json } from 'svelte-i18n';
  import { temoignageHeads } from './data.js';

  const items = $derived(
    /** @type {any[]} */ ($json('temoignages.items') || []).map((t, i) => ({
      ...t,
      head: temoignageHeads[i % temoignageHeads.length]
    }))
  );
</script>

<section class="stp-30 sbp-30">
  <div class="container">
    <div class="swiper home3-testimonial-carousel psa-testimonial-carousel">
      <div class="swiper-wrapper">
        {#each items as t (t.nom + t.role)}
          <div class="swiper-slide flex flex-col items-start justify-start">
            <div class="flex items-center justify-start gap-2 text-2xl text-g400">
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
            </div>
            <p class="pt-6 text-lg font-medium text-n500">"{t.texte}"</p>
            <div
              class="flex items-center justify-start gap-4 pt-6 sm:gap-8 sm:pt-8"
            >
              <div
                class="flex items-center justify-start gap-4 border-r border-n60 pr-4 sm:pr-8"
              >
                <div class="rounded-full bg-n60 p-[2px]">
                  <img
                    src="/assets/images/{t.head}"
                    alt=""
                    class="h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p class="heading-5">{t.nom}</p>
                  <p class="font-medium text-n500">{t.role}</p>
                </div>
              </div>
              <div class="text-3xl !leading-none text-g400">
                <i class="ph-fill ph-quotes"></i>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="flex items-center justify-between">
        <div
          class="swiper-pagination relative mt-16 max-w-[120px] rounded-full bg-white px-2 pt-0.5"
        ></div>
        <div
          class="flex items-center justify-end gap-3 pt-6 text-2xl !leading-none text-g400 lg:pt-10"
        >
          <button
            aria-label="Précédent"
            class="hover: ara-prev flex items-center justify-center rounded-full border border-g400 p-3 duration-500 hover:-rotate-45 hover:bg-g400 hover:text-white lg:p-4"
          >
            <i class="ph ph-arrow-up-left"></i>
          </button>
          <button
            aria-label="Suivant"
            class="hover: ara-next flex items-center justify-center rounded-full border border-g400 p-3 duration-500 hover:rotate-45 hover:bg-g400 hover:text-white lg:p-4"
          >
            <i class="ph ph-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  :global(.psa-testimonial-carousel .swiper-pagination-bullet-active) {
    background-color: #1b8a3d;
  }
  /* the stock swiper CSS makes the pagination position:absolute + width:100%,
     which silently overlaps the nav arrows placed next to it in the flex row */
  :global(.psa-testimonial-carousel .swiper-pagination.swiper-pagination-bullets) {
    position: relative !important;
    bottom: auto !important;
    left: auto !important;
    width: auto !important;
  }
</style>
