<script>
  import { onMount } from 'svelte';
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import ScanSection from '$lib/psa/ScanSection.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { categories as catCfg, waAgri } from '$lib/psa/data.js';

  const categories = $derived(
    /** @type {any[]} */ ($json('categories') || []).map((t, i) => ({ ...catCfg[i], ...t }))
  );
  /** @type {Record<string, string>} */
  const ctaHref = { order: waAgri, stage: '/stage', contact: '/contact' };
  /** @type {Record<string, string>} */
  const ctaLabel = { order: 'ctaOrder', stage: 'ctaStage', contact: 'ctaContact' };

  // scroll-spy for the sticky category index
  let active = $state(catCfg[0].slug);
  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) active = e.target.id;
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    catCfg.forEach((c) => {
      const el = document.getElementById(c.slug);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  });
</script>

<svelte:head>
  <title>{$_('produitsPage.title')} — Pépinière Semences d'Avenir</title>
  <meta name="description" content={$_('produitsPage.subtitle')} />
</svelte:head>

<PageHeader
  kicker={$_('produitsPage.introKicker')}
  title={$_('produitsPage.title')}
  subtitle={$_('produitsPage.subtitle')}
  image="/assets/images/psa/stock/secteur-agriculture.jpg"
/>

<!-- sticky index -->
<nav class="sticky top-[68px] z-30 border-y border-ink/10 bg-paper/90 backdrop-blur-xl" aria-label={$_('produitsPage.introKicker')}>
  <ul class="container flex gap-1 overflow-x-auto py-3 [scrollbar-width:none]">
    {#each categories as c, i}
      <li class="shrink-0">
        <a
          href="#{c.slug}"
          class="flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold transition-colors duration-300 {active === c.slug
            ? 'bg-forest text-paper'
            : 'text-ink/60 hover:bg-cream hover:text-ink'}"
        >
          <span class="font-display text-xs opacity-60">0{i + 1}</span>{c.titre}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<!-- intro -->
<section class="pt-20 md:pt-28">
  <div class="container" use:reveal>
    <h2 class="t-h2 max-w-[900px]">
      {$_('home.produitsTitlePre')}<span class="t-em text-moss">{$_('home.produitsTitleEm')}</span>
    </h2>
  </div>
</section>

<!-- chapters -->
<div class="pb-20 md:pb-28">
  {#each categories as c, i}
    <article id={c.slug} class="scroll-mt-40 pt-20 md:pt-28">
      <div class="container grid grid-cols-12 items-center gap-y-8 lg:gap-x-8 lg:gap-16">
        <div class="col-span-12 lg:col-span-6 {i % 2 ? 'lg:order-2' : ''}" use:reveal>
          <div class="relative overflow-hidden rounded-[32px] {c.tone} {c.fit === 'cover' ? '' : 'p-8 md:p-12'}">
            {#if c.image && c.fit === 'cover'}
              <img src="/assets/images/{c.image}" alt={c.titre} loading="lazy" class="aspect-[4/3] w-full object-cover" />
            {:else if c.image}
              <img src="/assets/images/{c.image}" alt={c.titre} loading="lazy" class="mx-auto max-h-[380px] w-auto mix-blend-multiply" />
            {:else}
              <div class="flex aspect-[4/3] items-center justify-center">
                <i class="ph-thin {c.icon} text-[180px] text-forest/70"></i>
              </div>
            {/if}
            <span class="absolute left-5 top-5 flex size-12 items-center justify-center rounded-full bg-paper text-xl text-forest">
              <i class="ph-bold {c.icon}"></i>
            </span>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 {i % 2 ? 'lg:order-1' : ''}" use:reveal={{ delay: 120 }}>
          <p class="font-display text-[80px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(10,36,18,0.25)] md:text-[110px]">
            {String(i + 1).padStart(2, '0')}
          </p>
          <h2 class="t-h2 pt-4">{c.titre}</h2>
          <p class="t-em pt-5 text-2xl text-moss md:text-[28px]" style="line-height:1.25">{c.accroche}</p>

          <dl class="grid gap-6 pt-10 sm:grid-cols-2">
            <div class="border-t border-ink/15 pt-5">
              <dt class="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">{$_('produitsPage.offre')}</dt>
              <dd class="pt-3 text-ink/80">{c.offre}</dd>
            </div>
            <div class="border-t border-ink/15 pt-5">
              <dt class="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">{$_('produitsPage.engagement')}</dt>
              <dd class="pt-3 text-ink/80">{c.engagement}</dd>
            </div>
          </dl>

          <a
            href={ctaHref[c.cta]}
            target={c.cta === 'order' ? '_blank' : undefined}
            rel={c.cta === 'order' ? 'noopener' : undefined}
            class="btn-primary mt-10"
          >
            {#if c.cta === 'order'}<i class="ph-fill ph-whatsapp-logo text-lg"></i>{/if}
            {$_('produitsPage.' + ctaLabel[c.cta])}
            <span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </article>
  {/each}
</div>

<!-- Alimentation & Santé -->
<section class="pb-20 md:pb-28">
  <div class="container">
    <a
      href="/alimentation-sante"
      use:reveal
      class="group grid items-center gap-8 overflow-hidden rounded-[32px] bg-claysoft md:grid-cols-2"
    >
      <div class="p-8 md:p-12">
        <h2 class="t-h2">{$_('produitsPage.santeTitle')}</h2>
        <p class="t-lead pt-5">{$_('produitsPage.santeText')}</p>
        <span class="btn-primary mt-8">{$_('produitsPage.santeCta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></span>
      </div>
      <img
        src="/assets/images/home_one_contact_img.jpg"
        alt=""
        loading="lazy"
        class="h-full max-h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </a>
  </div>
</section>

<ScanSection />
