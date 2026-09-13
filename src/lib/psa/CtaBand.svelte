<script>
  import { _ } from 'svelte-i18n';
  import { waContact } from './data.js';
</script>

<section class="stp-30 sbp-30 relative overflow-hidden bg-g400 text-white">
  <div
    class="jumping1 absolute -right-40 top-40 size-[300px] rounded-full bg-[#0f5c28] sm:top-24 sm:size-[400px] lg:-right-10 xl:size-[560px]"
  ></div>
  <div
    class="jumping2 absolute -left-64 bottom-40 z-10 size-[320px] rounded-full bg-g300 sm:bottom-24 sm:size-[400px] lg:-left-40 xl:size-[560px]"
  ></div>
  <div
    class="slideRight absolute -left-56 top-40 size-[340px] rounded-full bg-g75 sm:top-24 sm:size-[460px] lg:-left-40 xl:size-[760px]"
  ></div>
  <div
    class="slideLeft absolute left-1/4 top-[380px] size-[300px] rounded-full bg-y200 max-sm:hidden sm:size-[400px] lg:top-40 xl:size-[640px]"
  ></div>

  <div class="container relative z-20 flex flex-col items-center text-center">
    <h5 class="heading-6">{$_('ctaBand.kicker')}</h5>
    <h2 class="heading-2 max-w-[640px] pt-3">{$_('ctaBand.title')}</h2>
    <p class="max-w-[560px] pt-4 font-medium text-white/90">{$_('ctaBand.para')}</p>

    <div class="flex flex-wrap items-center justify-center gap-4 pt-8 text-n900">
      <a
        href={waContact}
        target="_blank"
        rel="noopener"
        class="flex items-center gap-2 rounded-full bg-y300 px-6 py-3 font-semibold duration-300 hover:bg-white"
      >
        <i class="ph-fill ph-whatsapp-logo text-lg"></i>
        {$_('ctaBand.whatsapp')}
      </a>
      <a
        href="/contact"
        class="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold duration-300 hover:bg-y300"
      >
        {$_('ctaBand.contact')} <i class="ph-bold ph-arrow-right"></i>
      </a>
    </div>

    <div class="stp-15 flex items-center justify-center gap-4">
      <div class="flex items-center">
        <div class="overflow-hidden rounded-full bg-n900 p-1">
          <img src="/assets/images/cta_img1.jpg" alt="" class="rounded-full" />
        </div>
        <div class="-ml-5 overflow-hidden rounded-full bg-n900 p-1">
          <img src="/assets/images/cta_img2.jpg" alt="" class="rounded-full" />
        </div>
        <div class="-ml-5 overflow-hidden rounded-full bg-n900 p-1">
          <p
            class="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white text-base font-semibold !leading-none text-n900"
          >
            +50
          </p>
        </div>
      </div>
      <p class="max-w-[220px] text-left font-medium">{$_('ctaBand.countLabel')}</p>
    </div>
  </div>
</section>
