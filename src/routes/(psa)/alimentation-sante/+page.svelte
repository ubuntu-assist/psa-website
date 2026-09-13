<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import { santeIcons, waSante, waAgri } from '$lib/psa/data.js';

  const santeList = $derived(/** @type {string[]} */ ($json('santeList') || []));
  const produits = $derived(
    /** @type {any[]} */ ($json('santePage.produits') || []).map((t, i) => ({ icon: santeIcons[i], ...t }))
  );
</script>

<svelte:head>
  <title>{$_('santePage.title')} — Pépinière Semences d'Avenir</title>
  <meta name="description" content={$_('santePage.subtitle')} />
</svelte:head>

<PageHeader title={$_('santePage.title')} subtitle={$_('santePage.subtitle')} />

<section class="sbp-30">
  <div
    class="container -mt-40 rounded-xl bg-white p-4 sm:p-6 md:rounded-3xl md:p-12 lg:rounded-[60px] lg:p-15"
  >
  <div class="grid grid-cols-12 max-lg:gap-6">
    <div class="relative col-span-12 lg:col-span-6">
      <div class="overflow-hidden pb-6 pl-6">
        <img src="/assets/images/home_one_contact_img.jpg" alt="" class="relative z-10 overflow-hidden rounded-2xl" />
      </div>
      <div class="absolute bottom-0 left-0 h-[250px] w-[200px] rounded-2xl bg-g400 sm:h-[300px] lg:w-[300px] xl:h-[560px]"></div>
    </div>
    <div class="col-span-12 flex flex-col items-start justify-center lg:col-span-5 lg:col-start-8">
      <h5 class="heading-5 pb-4 text-g400">{$_('santeTeaser.kicker')}</h5>
      <ul class="flex flex-wrap items-center justify-start gap-3">
        {#each santeList as s}
          <li class="flex items-center justify-start gap-2">
            <i class="ph ph-check-circle text-xl !leading-none text-g400"></i>
            {s}
          </li>
        {/each}
      </ul>
      <h2 class="heading-2 max-w-[440px] pt-6 font-bold sm:pt-8">{$_('santePage.para2Title')}</h2>
      <p class="pt-4 font-medium text-n500">{$_('santePage.para2')}</p>
      <div class="pt-6 sm:pt-8">
        <a href={waSante} target="_blank" rel="noopener" class="group relative flex items-center justify-start pr-12 font-semibold">
          <span class="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">{$_('santePage.ctaCatalog')}</span>
          <i class="ph-bold ph-whatsapp-logo absolute right-0 top-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[230px]"></i>
        </a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="stp-30 sbp-30 bg-n20">
  <div class="container">
    <div class="mx-auto max-w-[640px] text-center">
      <h2 class="heading-2">{$_('santePage.whatTitle')}</h2>
    </div>
    <div class="stp-15 grid grid-cols-12 gap-6">
      {#each produits as p}
        <div class="col-span-12 rounded-2xl border border-n30 bg-white p-6 sm:col-span-6 lg:col-span-3">
          <div class="flex size-12 items-center justify-center rounded-full bg-y50 text-2xl text-y600">
            <i class="ph {p.icon}"></i>
          </div>
          <h3 class="heading-6 pt-4">{p.titre}</h3>
          <p class="pt-2 text-sm text-n300">{p.texte}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- SPLIT — deux catalogues -->
<section class="stp-30 sbp-30 relative">
  <div class="absolute left-0 top-0 w-full bg-g400 max-sm:h-1/2 sm:bottom-0 sm:w-1/2"></div>
  <div class="absolute bottom-0 right-0 w-full bg-y600 max-sm:h-1/2 sm:top-0 sm:w-1/2"></div>
  <div class="container relative z-10 grid grid-cols-12 text-white max-xxl:overflow-hidden max-sm:gap-6">
    <div class="col-span-12 flex flex-col items-start sm:col-span-5">
      <h3 class="heading-3">{$_('santePage.splitAgriTitle')}</h3>
      <p class="pb-6 pt-4 sm:pb-10 sm:pt-6">{$_('santePage.splitAgriText')}</p>
      <a href={waAgri} target="_blank" rel="noopener" class="group relative flex items-center justify-start pr-12 font-semibold text-n900">
        <span class="rounded-full bg-white px-6 py-3 duration-500 group-hover:translate-x-12">{$_('santePage.splitCta')}</span>
        <i class="ph-bold ph-whatsapp-logo absolute right-0 top-0 rounded-full bg-white p-[14px] text-xl !leading-none duration-500 group-hover:right-[168px]"></i>
      </a>
    </div>
    <div class="col-span-12 flex flex-col items-start max-sm:pt-6 sm:col-span-5 sm:col-start-8">
      <h3 class="heading-3">{$_('santePage.splitSanteTitle')}</h3>
      <p class="pb-6 pt-4 sm:pb-10 sm:pt-6">{$_('santePage.splitSanteText')}</p>
      <a href={waSante} target="_blank" rel="noopener" class="group relative flex items-center justify-start pr-12 font-semibold text-n900">
        <span class="rounded-full bg-white px-6 py-3 duration-500 group-hover:translate-x-12">{$_('santePage.splitCta')}</span>
        <i class="ph-bold ph-whatsapp-logo absolute right-0 top-0 rounded-full bg-white p-[14px] text-xl !leading-none duration-500 group-hover:right-[168px]"></i>
      </a>
    </div>
  </div>
</section>
