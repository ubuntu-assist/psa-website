<script>
  import { _, json } from 'svelte-i18n';
  import HowItWorks from '$lib/psa/HowItWorks.svelte';
  import Faq from '$lib/psa/Faq.svelte';
  import CtaBand from '$lib/psa/CtaBand.svelte';
  import StageCta from '$lib/psa/StageCta.svelte';
  import PartnersRibbon from '$lib/psa/PartnersRibbon.svelte';
  import Testimonials from '$lib/psa/Testimonials.svelte';
  import PostCard from '$lib/psa/PostCard.svelte';
  import {
    offres as offresCfg,
    categories as catCfg,
    certifsIcons,
    pourquoiIcons,
    demarcheIcons,
    posts as postsCfg,
    waAgri
  } from '$lib/psa/data.js';

  /** @param {string} k */
  const arr = (k) => /** @type {any[]} */ ($json(k) || []);

  const offres = $derived(arr('offres').map((t, i) => ({ ...offresCfg[i], ...t })));
  const categories = $derived(arr('categories').map((t, i) => ({ ...catCfg[i], ...t })));
  const pourquoi = $derived(arr('pourquoi.items').map((t, i) => ({ icon: pourquoiIcons[i], ...t })));
  const certifs = $derived(arr('certifs').map((t, i) => ({ icon: certifsIcons[i], ...t })));
  const demarche = $derived(arr('demarcheCards').map((t, i) => ({ icon: demarcheIcons[i], ...t })));
  const posts = $derived(
    arr('posts').map((t) => ({ ...postsCfg.find((c) => c.slug === t.slug), ...t }))
  );
</script>

<svelte:head>
  <title>{$_('meta.homeTitle')}</title>
  <meta name="description" content={$_('meta.homeDesc')} />
</svelte:head>

<!-- HERO -->
<section>
  <div
    class="4xl:large-container relative mt-6 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-g400 pb-10 text-white max-4xl:container sm:pb-14"
  >
    <h1
      class="pt-8 text-center text-[40px] font-extrabold sm:text-[60px] md:text-[86px] lg:text-[110px] xl:text-[140px] xxl:text-[168px]"
    >
      {$_('hero.name')}
    </h1>

    <div class="items-center justify-center gap-4 max-xl:flex max-xl:pt-4 max-sm:flex-col max-sm:items-start">
      <div class="right-10 top-72 z-20 flex items-center justify-start gap-3 xl:absolute 3xl:right-[12%]">
        <div class="flex items-center justify-center rounded-full bg-bg1 p-2 text-xl !leading-none text-n900 sm:p-3">
          <i class="ph ph-seal-check"></i>
        </div>
        <p class="font-semibold max-sm:text-sm">{$_('hero.badge1')}</p>
      </div>
      <div class="left-2 top-72 z-20 flex items-center justify-start gap-3 xl:absolute 3xl:left-32">
        <div class="flex items-center justify-center rounded-full bg-y300 p-2 text-xl !leading-none text-n900 sm:p-3">
          <i class="ph ph-leaf"></i>
        </div>
        <p class="font-semibold max-sm:text-sm">{$_('hero.badge2')}</p>
      </div>
    </div>

    <div class="bottom-20 left-20 z-20 max-w-[400px] xl:absolute">
      <p
        class="relative rounded-xl bg-n900/70 px-4 py-3 font-medium backdrop-blur-sm after:absolute after:bottom-0 after:left-0 after:top-0 after:w-px after:bg-white max-xl:mt-4 max-sm:text-center max-sm:after:hidden"
      >
        {$_('hero.tagline')}
      </p>
    </div>

    <div class="bottom-32 right-16 z-20 text-n900 xl:absolute">
      <a href={waAgri} target="_blank" rel="noopener" class="group relative flex items-center justify-start pr-12 font-semibold">
        <span class="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">{$_('hero.cta')}</span>
        <i
          class="ph-bold ph-whatsapp-logo absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[190px] group-hover:rotate-12"
        ></i>
      </a>
    </div>

    <div class="relative z-10 pt-8 max-lg:px-2">
      <img src="/assets/images/hero-img.png" alt="Pépinière Semences d'Avenir" />
    </div>
  </div>
</section>

<!-- 4 OFFRES -->
<section class="4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container">
  {#each offres as f}
    <a
      href={f.href}
      class="col-span-12 block rounded-xl {f.bg} px-4 pt-8 min-[400px]:col-span-6 sm:px-8 lg:col-span-3 lg:px-4 xxl:px-8 xxl:pt-12"
    >
      <h3 class="heading-3">{f.heading}</h3>
      <p class="pt-3 text-lg font-medium">{f.text}</p>
      <div class="flex items-end justify-between">
        <div class="pb-12">
          <span class="ph-bold ph-arrow-right inline-block rounded-full border {f.arrow} p-3"></span>
        </div>
        <div class="text-[100px] !leading-none {f.tint} sm:text-[150px]">
          <i class="ph-thin {f.icon}"></i>
        </div>
      </div>
    </a>
  {/each}
</section>

<!-- PRODUITS — aperçu -->
<section class="stp-30 sbp-30 bg-n20">
  <div class="container">
    <div class="flex items-end justify-between gap-4">
      <h2 class="max-sm:heading-4 sm:heading-2 font-bold text-n900">
        {$_('produitsTeaser.titlePre')}<span class="text-g400 underline">{$_('produitsTeaser.titleEm')}</span>
      </h2>
      <a href="/produits" class="flex items-center gap-3 font-bold duration-300 hover:text-g400">
        {$_('common.seeAll')} <i class="ph-bold ph-arrow-right text-2xl !leading-none"></i>
      </a>
    </div>

    <div class="stp-15 grid grid-cols-12 gap-6">
      {#each categories.slice(0, 3) as c}
        <div class="col-span-12 flex flex-col items-center justify-center rounded-xl {c.bg} p-4 sm:col-span-6 lg:col-span-4 xl:p-8">
          <div class="rounded-full {c.pill} p-5">
            <img src="/assets/images/{c.icon}" alt="" />
          </div>
          <h3 class="heading-3 pb-3 pt-5 text-center">{c.titre}</h3>
          <p class="pb-6 text-center font-medium text-n500 xl:pb-8">{c.texte}</p>
          <a href="/produits" class="font-semibold text-g400">{$_('common.learnMore')}</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- POURQUOI PSA -->
<section class="stp-30 sbp-30 bg-n900">
  <div class="container text-white">
    <div class="flex flex-col items-center text-center">
      <h2 class="heading-2">{$_('pourquoi.title')}</h2>
      <p class="max-w-[560px] pt-4 text-n40">{$_('pourquoi.subtitle')}</p>
    </div>
    <div class="stp-15 grid grid-cols-12 gap-6">
      {#each pourquoi as p}
        <div class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4">
          <div class="flex items-center justify-center rounded-full bg-white p-[14px] text-g400">
            <i class="ph-bold {p.icon} text-3xl !leading-none"></i>
          </div>
          <div class="max-w-[380px]">
            <h3 class="heading-5 pt-10">{p.titre}</h3>
            <p class="pt-3 text-n40">{p.texte}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- DÉMARCHE -->
<section id="demarche" class="stp-30 sbp-30 scroll-mt-24">
  <HowItWorks />
  <div class="container grid grid-cols-12 gap-6 pt-30">
    {#each demarche as d}
      <div class="col-span-12 rounded-2xl border border-n30 p-6 md:col-span-4 lg:p-8">
        <i class="ph {d.icon} text-3xl text-g400"></i>
        <h3 class="heading-5 pt-4">{d.titre}</h3>
        <p class="pt-2 text-sm text-n500">{d.texte}</p>
      </div>
    {/each}
  </div>
</section>

<!-- STAGES — CTA -->
<StageCta />

<!-- À PROPOS — aperçu certifications -->
<section class="stp-30 sbp-30 bg-n20">
  <div class="container grid grid-cols-12 max-lg:gap-6">
    <div class="col-span-12 lg:col-span-6">
      <h5 class="heading-5 text-g400">{$_('aproposTeaser.kicker')}</h5>
      <h2 class="heading-2 max-w-[520px] pt-4">{$_('aproposTeaser.title')}</h2>
      <p class="max-w-[540px] pt-4 text-n500">{$_('aproposTeaser.para')}</p>
      <div class="pt-6">
        <a href="/a-propos" class="group relative flex items-center justify-start pr-12 font-semibold">
          <span class="rounded-full bg-y300 px-6 py-3 text-n900 duration-500 group-hover:translate-x-12">{$_('aproposTeaser.cta')}</span>
          <i class="ph-bold ph-arrow-right absolute right-0 top-0 rounded-full bg-y300 p-[14px] text-xl !leading-none text-n900 duration-500 group-hover:right-[195px]"></i>
        </a>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5 lg:col-start-8">
      <ul class="flex flex-col gap-4">
        {#each certifs as c}
          <li class="flex items-center gap-4 rounded-xl bg-white px-4 py-3">
            <i class="ph {c.icon} text-2xl text-g400"></i>
            <span class="font-semibold text-n900">{c.titre}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- ALIMENTATION & SANTÉ — aperçu -->
<section class="stp-30 sbp-30">
  <div class="container grid grid-cols-12 max-lg:gap-6">
    <div class="relative col-span-12 lg:col-span-6">
      <div class="overflow-hidden pb-6 pl-6">
        <img src="/assets/images/home_one_contact_img.jpg" alt="" class="relative z-10 overflow-hidden rounded-2xl" />
      </div>
      <div class="absolute bottom-0 left-0 h-[250px] w-[200px] rounded-2xl bg-g400 sm:h-[300px] lg:w-[300px] xl:h-[500px]"></div>
    </div>
    <div class="col-span-12 flex flex-col items-start justify-center lg:col-span-5 lg:col-start-8">
      <h5 class="heading-5 pb-4 text-g400">{$_('santeTeaser.kicker')}</h5>
      <h2 class="heading-2 max-w-[440px] font-bold">{$_('santeTeaser.title')}</h2>
      <p class="pt-4 font-medium text-n500">{$_('santeTeaser.para')}</p>
      <div class="pt-6 sm:pt-8">
        <a href="/alimentation-sante" class="group relative flex items-center justify-start pr-12 font-semibold">
          <span class="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">{$_('santeTeaser.cta')}</span>
          <i class="ph-bold ph-arrow-right absolute right-0 top-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[210px]"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="stp-30 sbp-30 bg-n20">
  <Faq />
</section>

<!-- TÉMOIGNAGES -->
<Testimonials />

<!-- PARTENAIRES -->
<PartnersRibbon />

<!-- ACTUALITÉS / BLOG -->
<section class="stp-30 sbp-30">
  <div class="container">
    <div class="flex items-end justify-between gap-4">
      <div class="flex flex-col">
        <h2 class="heading-2 font-bold text-n900">
          {$_('actus.titlePre')}<span class="text-g400 underline">{$_('actus.titleEm')}</span>
        </h2>
        <p class="pt-4 font-medium text-n500">{$_('actus.subtitle')}</p>
      </div>
      <a href="/blog" class="flex items-center gap-3 font-bold duration-300 hover:text-g400">
        {$_('common.allArticles')} <i class="ph-bold ph-arrow-right text-2xl !leading-none"></i>
      </a>
    </div>
    <div class="stp-15 grid grid-cols-12 gap-6">
      {#each posts.slice(0, 3) as post}
        <PostCard {post} />
      {/each}
    </div>
  </div>
</section>

<CtaBand />
