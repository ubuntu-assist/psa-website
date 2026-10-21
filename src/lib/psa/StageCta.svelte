<script>
  import { _ } from 'svelte-i18n';
  import { reveal } from './reveal.js';
</script>

<section class="py-16 md:py-24">
  <div class="container">
    <div class="grain pat-cross grid grid-cols-12 overflow-hidden rounded-[32px] bg-sun md:rounded-[48px]" use:reveal>
      <div class="relative z-10 col-span-12 p-8 sm:p-12 lg:col-span-7 lg:p-16">
        <h2 class="t-h2">
          {$_('stage.cta.titlePre')}<span class="t-em">{$_('stage.cta.titleEm')}</span>
        </h2>
        <p class="t-lead pt-6 !text-ink/80">
          {$_('stage.cta.paraPre')}<b>{$_('stage.cta.paraEm1')}</b>{$_('stage.cta.paraMid')}<b>{$_('stage.cta.paraEm2')}</b>{$_('stage.cta.paraPost')}
        </p>
        <div class="flex flex-wrap gap-3 pt-10">
          <a href="/stage" class="btn-primary">{$_('stage.cta.button')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></a>
          <a href="/contact" class="btn-ghost">{$_('stage.cta.buttonSecondary')}</a>
        </div>
      </div>
      <figure class="relative z-10 col-span-12 flex flex-col justify-end bg-forest p-8 text-paper sm:p-12 lg:col-span-5 lg:p-14">
        <i class="ph-fill ph-quotes text-5xl text-sun"></i>
        <blockquote class="pt-4 font-display text-2xl leading-snug tracking-tight">{$_('stage.cta.quote')}</blockquote>
        <figcaption class="pt-8 text-sm">
          <b>{$_('stage.cta.quoteName')}</b> <span class="text-paper/60">— {$_('stage.cta.quoteRole')}</span>
        </figcaption>
      </figure>
    </div>
  </div>
</section>
