<script>
  import { _ } from 'svelte-i18n';
</script>

<section
  class="relative z-20 mx-auto my-20 grid w-full max-w-7xl grid-cols-1 justify-start bg-gradient-to-br from-n20 to-white md:my-40 md:grid-cols-3"
>
  <!-- decorative fading grid lines -->
  <div
    class="absolute left-[calc(var(--offset)/2*-1)] top-0 z-30 h-[var(--height)] w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask-composite:exclude] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]"
    style="--background: #ffffff; --color: rgba(0, 0, 0, 0.15); --height: 1px; --width: 5px; --fade-stop: 90%; --offset: 200px; mask-composite: exclude;"
  ></div>
  <div
    class="absolute left-[calc(var(--offset)/2*-1)] top-auto bottom-0 z-30 h-[var(--height)] w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask-composite:exclude] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]"
    style="--background: #ffffff; --color: rgba(0, 0, 0, 0.15); --height: 1px; --width: 5px; --fade-stop: 90%; --offset: 200px; mask-composite: exclude;"
  ></div>
  <div
    class="absolute left-0 top-[calc(var(--offset)/2*-1)] z-30 h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask-composite:exclude] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]"
    style="--background: #ffffff; --color: rgba(0, 0, 0, 0.15); --height: 5px; --width: 1px; --fade-stop: 90%; --offset: 80px; mask-composite: exclude;"
  ></div>
  <div
    class="absolute left-auto right-0 top-[calc(var(--offset)/2*-1)] z-30 h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask-composite:exclude] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]"
    style="--background: #ffffff; --color: rgba(0, 0, 0, 0.15); --height: 5px; --width: 1px; --fade-stop: 90%; --offset: 80px; mask-composite: exclude;"
  ></div>

  <div class="p-8 md:col-span-2 md:p-14">
    <h2 class="text-left text-xl font-medium tracking-tight text-n300 md:text-3xl">
      {$_('stage.cta.titlePre')}<span class="font-bold text-n900">{$_('stage.cta.titleEm')}</span>
    </h2>
    <p class="mt-4 max-w-lg text-left text-xl font-medium tracking-tight text-n300 md:text-3xl">
      {$_('stage.cta.paraPre')}<span class="text-g400">{$_('stage.cta.paraEm1')}</span>{$_(
        'stage.cta.paraMid'
      )}<span class="text-y400">{$_('stage.cta.paraEm2')}</span>{$_('stage.cta.paraPost')}
    </p>
    <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
      <a
        href="/stage"
        class="group mt-8 flex items-center space-x-2 rounded-lg bg-gradient-to-b from-g400 to-[#146b2f] px-4 py-2 text-base text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
      >
        <span>{$_('stage.cta.button')}</span>
        <i
          class="ph-bold ph-arrow-right mt-0.5 h-3 w-3 text-sm text-white transition-transform duration-200 group-hover:translate-x-1"
        ></i>
      </a>
      <a
        href="/contact"
        class="group mt-8 flex items-center space-x-2 rounded-lg border border-n60 px-4 py-2 text-base text-n900 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
      >
        <span>{$_('stage.cta.buttonSecondary')}</span>
        <i
          class="ph-bold ph-chat-circle-text mt-0.5 h-3 w-3 text-sm text-n900 transition-transform duration-200 group-hover:translate-x-1"
        ></i>
      </a>
    </div>
  </div>

  <div class="border-t border-dashed p-8 md:border-l md:border-t-0 md:p-14">
    <p class="text-base text-n500">{$_('stage.cta.quote')}</p>
    <div class="mt-4 flex flex-col items-start gap-1 text-sm">
      <p class="font-bold text-n900">{$_('stage.cta.quoteName')}</p>
      <p class="text-n300">{$_('stage.cta.quoteRole')}</p>
    </div>
  </div>
</section>
