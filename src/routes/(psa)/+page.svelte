<script>
  import { _, json, locale } from 'svelte-i18n';
  import Seo from '$lib/psa/Seo.svelte';
  import CalendarTeaser from '$lib/psa/CalendarTeaser.svelte';
  import { getPosts } from '$lib/content.js';
  import HowItWorks from '$lib/psa/HowItWorks.svelte';
  import Faq from '$lib/psa/Faq.svelte';
  import CtaBand from '$lib/psa/CtaBand.svelte';
  import StageCta from '$lib/psa/StageCta.svelte';
  import PartnersRibbon from '$lib/psa/PartnersRibbon.svelte';
  import Testimonials from '$lib/psa/Testimonials.svelte';
  import PostCard from '$lib/psa/PostCard.svelte';
  import StatsBand from '$lib/psa/StatsBand.svelte';
  import ScanSection from '$lib/psa/ScanSection.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import {
    secteurs as secteursCfg,
    categories as catCfg,
    certifsIcons,
    pourquoiIcons,
    waAgri
  } from '$lib/psa/data.js';

  /** @param {string} k */
  const arr = (k) => /** @type {any[]} */ ($json(k) || []);

  const secteurs = $derived(arr('secteurs.items').map((t, i) => ({ ...secteursCfg[i], ...t })));
  const categories = $derived(arr('categories').map((t, i) => ({ ...catCfg[i], ...t })));
  const pourquoi = $derived(arr('pourquoi.items').map((t, i) => ({ icon: pourquoiIcons[i], ...t })));
  const certifs = $derived(arr('certifs').map((t, i) => ({ icon: certifsIcons[i], ...t })));
  const stats = $derived(/** @type {{value:string,label:string}[]} */ (arr('stats.items')));
  const posts = $derived(getPosts($locale));

  // bento layout for the 7 categories (4-col grid, 3 rows on desktop)
  const bento = [
    'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    'lg:col-span-2',
    '',
    '',
    'lg:col-span-2',
    '',
    ''
  ];
</script>

<Seo title={$_('meta.homeTitle')} description={$_('meta.homeDesc')} image="/og/home.jpg" />

<!-- ═══ HERO ═══ -->
<section class="grain pat-field overflow-hidden bg-cream">
  <div class="container relative z-10 pt-10 md:pt-14">
    <div class="rise flex flex-wrap items-center justify-start gap-4">
      <ul class="flex flex-wrap gap-2 text-xs font-bold">
        <li class="flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper px-3 py-1.5">
          <i class="ph-fill ph-seal-check text-moss"></i>{$_('hero.badge1')}
        </li>
        <li class="flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper px-3 py-1.5">
          <i class="ph-fill ph-leaf text-moss"></i>{$_('hero.badge2')}
        </li>
      </ul>
    </div>

    <h1
      class="t-display rise pt-8 text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[140px] xxl:text-[156px]"
      style="animation-delay:80ms"
    >
      {$_('hero.name')}
      <span class="t-em text-moss">{$_('hero.short')}</span>
    </h1>

    <!-- visual -->
    <div
      class="rise relative mt-10 h-[380px] overflow-hidden rounded-[32px] bg-forest sm:h-[460px] md:mt-14 md:h-[560px] md:rounded-[48px]"
      style="animation-delay:180ms"
    >
      <!-- Photo : Richard Nyoni / Unsplash (Unsplash License) -->
      <img
        src="/assets/images/psa/photos/hero-farmer.jpg"
        srcset="/assets/images/psa/photos/hero-farmer-1200.jpg 1200w, /assets/images/psa/photos/hero-farmer.jpg 2400w"
        sizes="(min-width: 1400px) 1296px, 100vw"
        alt={$_('hero.imageAlt')}
        fetchpriority="high"
        class="absolute inset-0 h-full w-full object-cover object-[30%_40%]"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent md:bg-gradient-to-l md:from-forest/55 md:via-transparent"
        aria-hidden="true"
      ></div>

      <!-- floating cards -->
      <div class="absolute bottom-4 left-4 hidden rounded-[20px] bg-paper/95 px-5 py-4 backdrop-blur sm:block md:bottom-8 md:left-8">
        <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50">{$_('stats.since')}</p>
        <p class="font-display text-4xl leading-none text-forest">{$_('stats.year')}</p>
      </div>
      {#if stats[3]}
        <div
          class="absolute bottom-6 right-4 hidden items-center gap-3 rounded-full bg-paper/95 py-2 pl-2 pr-5 backdrop-blur sm:flex md:bottom-10 md:right-8"
        >
          <span class="flex size-10 items-center justify-center rounded-full bg-moss text-paper"><i class="ph-fill ph-users-three"></i></span>
          <span>
            <span class="block font-display text-xl leading-none">{stats[3].value}</span>
            <span class="block text-xs text-ink/60">{stats[3].label}</span>
          </span>
        </div>
      {/if}
      {#if stats[1]}
        <div
          class="absolute right-4 top-4 hidden items-center gap-3 rounded-full bg-paper/95 py-2 pl-2 pr-5 backdrop-blur md:right-8 md:top-8 md:flex"
        >
          <span class="flex size-10 items-center justify-center rounded-full bg-sun text-ink"><i class="ph-fill ph-plant"></i></span>
          <span>
            <span class="block font-display text-xl leading-none">{stats[1].value}</span>
            <span class="block text-xs text-ink/60">{stats[1].label}</span>
          </span>
        </div>
      {/if}
    </div>

    <!-- slogan, under the photo -->
    <div class="grid grid-cols-12 items-end gap-y-8 lg:gap-x-8 py-14 md:py-20">
      <p
        class="t-display rise col-span-12 text-[34px] sm:text-[44px] lg:col-span-8 lg:text-[56px] xl:text-[64px]"
        style="animation-delay:260ms; line-height:1.05"
      >
        <span class="t-em">«&nbsp;{$_('hero.tagline')}&nbsp;»</span>
      </p>
      <div class="rise col-span-12 flex flex-wrap gap-3 lg:col-span-4 lg:justify-end" style="animation-delay:340ms">
        <a href={waAgri} target="_blank" rel="noopener" class="btn-primary">
          <i class="ph-fill ph-whatsapp-logo text-lg"></i>{$_('hero.cta')}
        </a>
        <a href="/produits" class="btn-ghost">
          {$_('hero.discover')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ═══ MARQUEE ═══ -->
<div class="overflow-hidden border-y border-ink/10 bg-forest py-5 text-paper" aria-hidden="true">
  <div class="marquee-track flex w-max">
    {#each [0, 1] as _k}
      <ul class="flex shrink-0 items-center">
        {#each categories as c}
          <li class="flex items-center gap-8 px-4 font-display text-2xl italic md:text-3xl">
            {c.titre}<i class="ph-fill ph-asterisk text-xl not-italic text-sun"></i>
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</div>

<!-- ═══ 01 — SECTEURS ═══ -->
<section class="s-pad glow-corners-green">
  <div class="container">
    <div class="grid grid-cols-12 items-end gap-y-8 lg:gap-x-8" use:reveal>
      <div class="col-span-12 lg:col-span-8">
        <h2 class="t-h2">
          {$_('home.secteursTitlePre')}<span class="t-em text-moss">{$_('home.secteursTitleEm')}</span>
        </h2>
      </div>
    </div>

    <div class="grid gap-4 pt-14 sm:grid-cols-2 lg:grid-cols-4">
      {#each secteurs as s, i}
        <a
          href={s.href}
          use:reveal={{ delay: i * 90 }}
          class="group flex flex-col overflow-hidden rounded-[28px] {s.tone} p-2.5 transition-transform duration-500 hover:-translate-y-1.5"
        >
          <div class="relative aspect-[4/3] overflow-hidden rounded-[20px]">
            <img
              src="/assets/images/{s.image}"
              alt=""
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span class="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 font-display text-sm backdrop-blur">0{i + 1}</span>
            <span
              class="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-paper transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-forest group-hover:text-paper"
            >
              <i class="ph-bold ph-arrow-right"></i>
            </span>
          </div>
          <div class="flex flex-1 flex-col p-5 pt-6">
            <h3 class="t-h4 flex items-start gap-2">
              <i class="ph-bold {s.icon} mt-1 text-lg text-moss"></i>{s.heading}
            </h3>
            <p class="pt-2 text-sm text-ink/70">{s.text}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- ═══ DEPUIS 2014 ═══ -->
<StatsBand />

<!-- ═══ 02 — PRODUITS & SERVICES (bento) ═══ -->
<section class="s-pad pat-paper bg-cream">
  <div class="container">
    <div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
      <div>
        <h2 class="t-h2">
          {$_('home.produitsTitlePre')}<span class="t-em text-moss">{$_('home.produitsTitleEm')}</span>
        </h2>
      </div>
      <a href="/produits" class="btn-ghost">{$_('common.seeAll')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></a>
    </div>

    <div class="grid gap-4 pt-14 sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-4">
      {#each categories as c, i}
        <a
          href="/produits#{c.slug}"
          use:reveal={{ delay: (i % 4) * 70 }}
          class="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[28px] {c.tone} lg:min-h-0 {bento[i]}"
        >
          {#if c.image && c.fit === 'cover'}
            <img src="/assets/images/{c.image}" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent"></div>
          {:else if c.image}
            <div class="flex min-h-0 flex-1 items-center justify-center p-6 pb-0">
              <img src="/assets/images/{c.image}" alt="" loading="lazy" class="max-h-full w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.03] {i === 0 ? 'lg:max-h-[300px]' : 'max-h-[150px]'}" />
            </div>
          {:else}
            <div class="flex flex-1 items-center justify-center">
              <i class="ph-thin {c.icon} text-[96px] text-forest/70 transition-transform duration-700 group-hover:scale-110"></i>
            </div>
          {/if}

          <div class="relative mt-auto flex items-end justify-between gap-4 p-6 {c.image && c.fit === 'cover' ? 'text-paper' : ''}">
            <div>
              <h3 class="font-display tracking-tight {i === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl lg:text-lg xl:text-2xl'}" style="line-height:1.1">{c.titre}</h3>
              <p class="pt-2 text-sm {c.image && c.fit === 'cover' ? 'text-paper/80' : 'text-ink/65'} {i === 0 ? '' : 'line-clamp-2'}">{c.accroche}</p>
            </div>
            <span
              class="flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 group-hover:-rotate-45 {c.image && c.fit === 'cover'
                ? 'bg-paper text-ink'
                : 'bg-forest text-paper'}"
            >
              <i class="ph-bold ph-arrow-right"></i>
            </span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- ═══ CALENDRIER — ce mois-ci ═══ -->
<CalendarTeaser />

<!-- ═══ 03 — POURQUOI PSA ═══ -->
<section class="s-pad">
  <div class="container grid grid-cols-12 items-center gap-y-10 lg:gap-x-10 lg:gap-16">
    <div class="relative col-span-12 lg:col-span-6" use:reveal>
      <img src="/assets/images/home_two_hero_img.jpg" alt="" loading="lazy" class="aspect-[4/5] w-full rounded-[32px] object-cover md:aspect-square" />
      <div class="absolute -bottom-6 right-6 max-w-[260px] rounded-[24px] bg-sun p-6 shadow-[0_30px_60px_-30px_rgba(10,36,18,0.5)]">
        <i class="ph-fill ph-seal-check text-3xl"></i>
        <p class="pt-2 font-display text-xl leading-tight">{certifs[2]?.titre}</p>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <div use:reveal>
        <h2 class="t-h2">{$_('pourquoi.title')}</h2>
        <p class="t-lead pt-6">{$_('pourquoi.subtitle')}</p>
      </div>
      <ul class="pt-10">
        {#each pourquoi as p, i}
          <li class="flex gap-5 border-t border-ink/10 py-6" use:reveal={{ delay: i * 90 }}>
            <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage text-xl text-forest">
              <i class="ph-bold {p.icon}"></i>
            </span>
            <span>
              <span class="t-h4 block">{p.titre}</span>
              <span class="block pt-2 text-ink/70">{p.texte}</span>
            </span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- ═══ 04 — DÉMARCHE ═══ -->
<section id="demarche" class="scroll-mt-24 bg-paper pb-8">
  <HowItWorks />
</section>

<StageCta />

<!-- ═══ À PROPOS + SANTÉ ═══ -->
<section class="pb-20 md:pb-28">
  <div class="container grid gap-4 lg:grid-cols-2">
    <a href="/a-propos" class="group grain relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[32px] bg-forest p-8 text-paper md:p-12" use:reveal>
      <img src="/assets/images/psa/photos/equipe-psa.jpg" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent"></div>
      <div class="relative z-10">
        <h2 class="t-h3 max-w-[480px]">{$_('aproposTeaser.title')}</h2>
        <p class="max-w-[460px] pt-4 text-paper/75">{$_('aproposTeaser.para')}</p>
        <ul class="flex flex-wrap gap-2 pt-6">
          {#each certifs.slice(2) as c}
            <li class="flex items-center gap-1.5 rounded-full border border-paper/20 px-3 py-1.5 text-xs font-semibold">
              <i class="ph {c.icon} text-sun"></i>{c.titre}
            </li>
          {/each}
        </ul>
        <span class="btn-sun mt-8">{$_('aproposTeaser.cta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></span>
      </div>
    </a>
    <a href="/alimentation-sante" class="group relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[32px] bg-claysoft p-8 md:p-12" use:reveal={{ delay: 120 }}>
      <img src="/assets/images/home_one_contact_img.jpg" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-transparent"></div>
      <div class="relative z-10">
        <h2 class="t-h3 max-w-[480px]">{$_('santeTeaser.title')}</h2>
        <p class="max-w-[460px] pt-4 text-ink/75">{$_('santeTeaser.para')}</p>
        <span class="btn-primary mt-8">{$_('santeTeaser.cta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></span>
      </div>
    </a>
  </div>
</section>

<!-- ═══ FAQ ═══ -->
<section class="s-pad pat-paper bg-cream">
  <Faq />
</section>

<Testimonials />

<PartnersRibbon />

<!-- ═══ JOURNAL ═══ -->
<section class="s-pad">
  <div class="container">
    <div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
      <div>
        <h2 class="t-h2">
          {$_('actus.titlePre')}<span class="t-em text-moss">{$_('actus.titleEm')}</span>
        </h2>
      </div>
      <a href="/blog" class="btn-ghost">{$_('common.allArticles')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></a>
    </div>
    <div class="grid gap-y-10 lg:gap-x-10 pt-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
      {#each posts.slice(0, 3) as post, i}
        <div class={i === 0 ? 'md:col-span-2 lg:col-span-6' : 'lg:col-span-3'} use:reveal={{ delay: i * 90 }}>
          <PostCard {post} feature={i === 0} showExcerpt={i === 0} />
        </div>
      {/each}
    </div>
  </div>
</section>

<ScanSection />

<CtaBand />
