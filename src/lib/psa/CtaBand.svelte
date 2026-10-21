<script>
  import { _ } from 'svelte-i18n';
  import { waContact } from './data.js';
  import { reveal } from './reveal.js';
</script>

<section class="grain pat-seeds relative overflow-hidden bg-moss text-paper">
  <div
    class="pointer-events-none absolute right-[4%] top-1/2 hidden w-[min(38vw,620px)] -translate-y-1/2 xl:block"
    aria-hidden="true"
  >
    <img src="/assets/images/logo.png" alt="" class="spin-slow w-full opacity-[0.14] mix-blend-luminosity" />
  </div>
  <div class="container relative z-10 s-pad">
    <div class="max-w-[900px] xl:max-w-[620px]" use:reveal>
      <h2 class="t-h1">{$_('ctaBand.title')}</h2>
      <p class="t-lead max-w-[560px] pt-6 !text-paper/80">{$_('ctaBand.para')}</p>
      <div class="flex flex-wrap items-center gap-3 pt-10">
        <a href={waContact} target="_blank" rel="noopener" class="btn-sun">
          <i class="ph-fill ph-whatsapp-logo text-lg"></i>{$_('ctaBand.whatsapp')}
        </a>
        <a href="/contact" class="btn-ghost-light">{$_('ctaBand.contact')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></a>
      </div>
      <div class="flex items-center gap-4 pt-14">
        <div class="flex -space-x-3">
          <img src="/assets/images/cta_img1.jpg" alt="" class="size-12 rounded-full border-2 border-moss object-cover" />
          <img src="/assets/images/cta_img2.jpg" alt="" class="size-12 rounded-full border-2 border-moss object-cover" />
          <span class="flex size-12 items-center justify-center rounded-full border-2 border-moss bg-sun text-sm font-extrabold text-ink">{$_('ctaBand.count')}</span>
        </div>
        <p class="max-w-[220px] text-sm font-semibold text-paper/80">{$_('ctaBand.countLabel')}</p>
      </div>
    </div>
  </div>
</section>
