<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { santeIcons, santeImages, catalogueImages, waSante, waAgri, categories as catCfg } from '$lib/psa/data.js';

  const santeList = $derived(/** @type {string[]} */ ($json('santeList') || []));
  const produits = $derived(
    /** @type {any[]} */ ($json('santePage.produits') || []).map((t, i) => ({ icon: santeIcons[i], image: santeImages[i], ...t }))
  );
  // the three « alimentation & santé » categories of the products page
  const related = $derived(
    /** @type {any[]} */ ($json('categories') || [])
      .map((t, i) => ({ ...catCfg[i], ...t }))
      .filter((c) => ['tisanes-miel', 'naturopathie', 'equipements'].includes(c.slug))
  );
  const tones = ['bg-sunsoft', 'bg-sage', 'bg-claysoft', 'bg-cream'];
  import Seo from '$lib/psa/Seo.svelte';
</script>

<Seo title={$_('santePage.title')} description={$_('seo.sante')} image="/og/alimentation-sante.jpg" />

<PageHeader
  kicker={$_('santeTeaser.kicker')}
  title={$_('santePage.title')}
  subtitle={$_('santePage.subtitle')}
  image="/assets/images/home_one_contact_img.jpg"
/>

<section class="s-pad">
  <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10 lg:gap-16">
    <div class="col-span-12 lg:col-span-6" use:reveal>
      <h2 class="t-h2">{$_('santePage.para2Title')}</h2>
    </div>
    <div class="col-span-12 lg:col-span-5 lg:col-start-8" use:reveal={{ delay: 100 }}>
      <p class="t-lead">{$_('santePage.para2')}</p>
      <ul class="flex flex-wrap gap-2 pt-8">
        {#each santeList as s}
          <li class="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold">
            <i class="ph-fill ph-leaf text-moss"></i>{s}
          </li>
        {/each}
      </ul>
      <a href={waSante} target="_blank" rel="noopener" class="btn-primary mt-10">
        <i class="ph-fill ph-whatsapp-logo text-lg"></i>{$_('santePage.ctaCatalog')}
      </a>
    </div>
  </div>
</section>

<section class="s-pad pat-paper bg-cream">
  <div class="container">
    <h2 class="t-h2" use:reveal>{$_('santePage.whatTitle')}</h2>
    <ul class="grid gap-4 pt-14 sm:grid-cols-2 lg:grid-cols-4">
      {#each produits as p, i}
        <li class="group flex flex-col overflow-hidden rounded-[28px] {tones[i]} p-2.5" use:reveal={{ delay: i * 80 }}>
          <div class="relative aspect-[4/5] overflow-hidden rounded-[20px]">
            <img src="/assets/images/{p.image}" alt={p.titre} loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span class="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full bg-paper/90 text-lg text-forest backdrop-blur">
              <i class="ph-bold {p.icon}"></i>
            </span>
          </div>
          <div class="p-5">
            <h3 class="t-h4">{p.titre}</h3>
            <p class="pt-2 text-sm text-ink/70">{p.texte}</p>
          </div>
        </li>
      {/each}
    </ul>

    <ul class="grid gap-4 pt-4 md:grid-cols-3">
      {#each related as c, i}
        <li use:reveal={{ delay: i * 80 }}>
          <a href="/produits#{c.slug}" class="group flex items-center justify-between gap-4 rounded-[22px] bg-paper p-6 transition-colors hover:bg-forest hover:text-paper">
            <span>
              <span class="block font-display text-xl tracking-tight">{c.titre}</span>
              <span class="block pt-1 text-sm opacity-60">{c.accroche}</span>
            </span>
            <i class="ph-bold ph-arrow-up-right text-xl transition-transform group-hover:rotate-45"></i>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- deux catalogues -->
<section class="s-pad">
  <div class="container grid gap-4 md:grid-cols-2">
    {#each [{ href: waAgri, img: catalogueImages.agri, title: 'santePage.splitAgriTitle', text: 'santePage.splitAgriText' }, { href: waSante, img: catalogueImages.sante, title: 'santePage.splitSanteTitle', text: 'santePage.splitSanteText' }] as cat, i}
      <a
        href={cat.href}
        target="_blank"
        rel="noopener"
        class="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[32px] bg-forest p-8 text-paper md:p-12"
        use:reveal={{ delay: i * 120 }}
      >
        <img src="/assets/images/{cat.img}" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/10"></div>
        <div class="relative z-10">
          <h3 class="t-h3">{$_(cat.title)}</h3>
          <p class="max-w-[440px] pt-3 text-paper/80">{$_(cat.text)}</p>
          <span class="btn-sun mt-8">{$_('santePage.splitCta')}<span class="btn-ico"><i class="ph-bold ph-arrow-up-right"></i></span></span>
        </div>
      </a>
    {/each}
  </div>
</section>
