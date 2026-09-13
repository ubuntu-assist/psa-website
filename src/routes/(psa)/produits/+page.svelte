<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import { categories as catCfg, waAgri } from '$lib/psa/data.js';

  const categories = $derived(
    /** @type {any[]} */ ($json('categories') || []).map((t, i) => ({ ...catCfg[i], ...t }))
  );
  const services = $derived(/** @type {string[]} */ ($json('produitsPage.servicesList') || []));
</script>

<svelte:head>
  <title>{$_('produitsPage.title')} — Pépinière Semences d'Avenir</title>
  <meta name="description" content={$_('produitsPage.subtitle')} />
</svelte:head>

<PageHeader title={$_('produitsPage.title')} subtitle={$_('produitsPage.subtitle')} />

<section class="sbp-30">
  <div
    class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl md:p-15 lg:rounded-[60px]"
  >
    <div class="grid grid-cols-12 gap-6">
      {#each categories as c}
        <div
          class="col-span-12 flex flex-col items-center justify-center rounded-xl {c.bg} p-4 sm:col-span-6 lg:col-span-4 xl:p-8"
        >
          <div class="rounded-full {c.pill} p-5">
            <img src="/assets/images/{c.icon}" alt="" />
          </div>
          <h3 class="heading-3 pb-3 pt-5 text-center">{c.titre}</h3>
          <p class="pb-6 text-center font-medium text-n500 xl:pb-8">{c.texte}</p>
          <div class="flex w-full items-center justify-between">
            <p class="font-semibold">{$_('common.inStock')}</p>
            <a
              href={waAgri}
              target="_blank"
              rel="noopener"
              aria-label={$_('common.order', { values: { name: c.titre } })}
              class="text-4xl !leading-none text-n900 duration-300 hover:text-g400"
            >
              <i class="ph-thin ph-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Services agricoles & ruraux -->
<section class="stp-30 sbp-30 bg-n20">
  <div class="container grid grid-cols-12 max-lg:gap-6">
    <div class="col-span-12 lg:col-span-6">
      <h5 class="heading-5 text-g400">{$_('produitsPage.servicesKicker')}</h5>
      <h2 class="heading-2 max-w-[520px] pt-4">{$_('produitsPage.servicesTitle')}</h2>
      <ul class="flex flex-col gap-4 pt-6">
        {#each services as s}
          <li class="flex items-start gap-3">
            <i class="ph-fill ph-check-circle mt-1 text-g400"></i>
            <span>{s}</span>
          </li>
        {/each}
      </ul>
      <div class="pt-8">
        <a href="/#demarche" class="group relative flex items-center justify-start pr-12 font-semibold">
          <span class="rounded-full bg-y300 px-6 py-3 text-n900 duration-500 group-hover:translate-x-12">{$_('produitsPage.servicesCta')}</span>
          <i class="ph-bold ph-arrow-right absolute right-0 top-0 rounded-full bg-y300 p-[14px] text-xl !leading-none text-n900 duration-500 group-hover:right-[175px]"></i>
        </a>
      </div>
    </div>
    <div class="relative col-span-12 flex items-center justify-center sm:py-12 lg:col-span-6 lg:col-start-7">
      <div class="overflow-hidden rounded-xl">
        <img src="/assets/images/fixed_price_service_img.jpg" alt="" />
      </div>

      <div
        class="box-shadow-1 absolute right-0 top-0 overflow-hidden rounded-2xl border border-g75 bg-white pb-5 max-sm:hidden 3xl:-right-14"
      >
        <p class="bg-n10 px-6 py-3 font-semibold">{$_('produitsPage.fDevisTitle')}</p>
        <div class="flex items-center justify-between gap-6 px-6 pt-5 sm:gap-28">
          <div>
            <p class="font-medium">{$_('produitsPage.fDevisName')}</p>
            <p class="text-sm text-n500">{$_('produitsPage.fDevisAgo')}</p>
          </div>
          <p class="heading-4 pb-1 font-bold text-g400">OK</p>
        </div>
      </div>

      <div class="absolute right-0 top-36 max-sm:hidden 3xl:-right-14">
        <p class="box-shadow-2 flex items-center justify-center gap-2 rounded-full bg-g100 px-8 py-3 font-medium">
          <i class="ph-bold ph-seedling text-xl"></i>
          {$_('produitsPage.fAlert')}
        </p>
      </div>

      <div
        class="box-shadow-1 absolute bottom-0 left-0 overflow-hidden rounded-2xl border border-g75 bg-white pb-5 max-sm:hidden"
      >
        <p class="bg-n10 px-6 py-3 font-semibold">{$_('produitsPage.fProjectsTitle')}</p>
        <div class="px-6">
          <div class="py-5">
            <img src="/assets/images/total_earnings_line.png" alt="" class="w-full max-sm:max-h-[50px]" />
          </div>
          <p class="heading-4 pb-1 font-bold">+30</p>
          <p><i class="ph ph-arrow-up text-xl text-g400"></i> {$_('produitsPage.fProjectsYear')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

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
      {$_('produitsPage.catalogCta.titlePre')}<span class="font-bold text-n900"
        >{$_('produitsPage.catalogCta.titleEm')}</span
      >
    </h2>
    <p class="mt-4 max-w-lg text-left text-xl font-medium tracking-tight text-n300 md:text-3xl">
      {$_('produitsPage.catalogCta.paraPre')}<span class="text-g400"
        >{$_('produitsPage.catalogCta.paraEm1')}</span
      >{$_('produitsPage.catalogCta.paraMid')}<span class="text-y400"
        >{$_('produitsPage.catalogCta.paraEm2')}</span
      >{$_('produitsPage.catalogCta.paraPost')}
    </p>
    <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
      <a
        href={waAgri}
        target="_blank"
        rel="noopener"
        class="group mt-8 flex items-center space-x-2 rounded-lg bg-gradient-to-b from-g400 to-[#146b2f] px-4 py-2 text-base text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
      >
        <i class="ph-fill ph-whatsapp-logo text-lg"></i>
        <span>{$_('produitsPage.catalogCta.button')}</span>
      </a>
      <a
        href="/contact"
        class="group mt-8 flex items-center space-x-2 rounded-lg border border-n60 px-4 py-2 text-base text-n900 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
      >
        <span>{$_('produitsPage.catalogCta.buttonSecondary')}</span>
        <i
          class="ph-bold ph-arrow-right mt-0.5 h-3 w-3 text-sm text-n900 transition-transform duration-200 group-hover:translate-x-1"
        ></i>
      </a>
    </div>
  </div>

  <div class="border-t border-dashed p-8 md:border-l md:border-t-0 md:p-14">
    <p class="font-bold text-n900">{$_('produitsPage.catalogCta.infoTitle')}</p>
    <ul class="mt-4 flex flex-col gap-3 text-sm text-n500">
      <li class="flex items-start gap-2">
        <i class="ph-fill ph-check-circle mt-0.5 shrink-0 text-g400"></i>
        {$_('produitsPage.catalogCta.info1')}
      </li>
      <li class="flex items-start gap-2">
        <i class="ph-fill ph-check-circle mt-0.5 shrink-0 text-g400"></i>
        {$_('produitsPage.catalogCta.info2')}
      </li>
      <li class="flex items-start gap-2">
        <i class="ph-fill ph-check-circle mt-0.5 shrink-0 text-g400"></i>
        {$_('produitsPage.catalogCta.info3')}
      </li>
    </ul>
  </div>
</section>
