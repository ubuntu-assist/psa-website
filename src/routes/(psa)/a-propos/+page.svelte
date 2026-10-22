<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import StageCta from '$lib/psa/StageCta.svelte';
  import TeamSection from '$lib/psa/TeamSection.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { certifsIcons, valeursIcons } from '$lib/psa/data.js';

  /** @param {string} k */
  const arr = (k) => /** @type {any[]} */ ($json(k) || []);

  const certifs = $derived(arr('certifs').map((t, i) => ({ icon: certifsIcons[i], ...t })));
  const whoList = $derived(/** @type {string[]} */ (arr('aproposPage.whoList')));
  const vision = $derived(/** @type {string[]} */ (arr('aproposPage.vision')));
  const missionList = $derived(/** @type {string[]} */ (arr('aproposPage.missionList')));
  const values = $derived(arr('aproposPage.values').map((t, i) => ({ icon: valeursIcons[i], ...t })));

  const CERT = '/assets/images/psa/photos/certificat-activite-semenciere.jpg';
  import Seo from '$lib/psa/Seo.svelte';
</script>

<Seo title={$_('aproposPage.title')} description={$_('seo.apropos')} image="/og/a-propos.jpg" />

<PageHeader
  kicker={$_('aproposPage.whoKicker')}
  title={$_('aproposPage.whoTitle')}
  crumbs={[{ label: $_('aproposPage.title') }]}
  image="/assets/images/psa/photos/equipe-psa.jpg"
  imageAlt={$_('team.groupAlt')}
/>

<!-- Qui sommes-nous -->
<section class="s-pad">
  <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10 lg:gap-16">
    <div class="col-span-12 lg:col-span-4" use:reveal>
      <p class="text-lg font-semibold text-ink/60">{$_('aproposPage.since')}</p>
      <p class="t-display pt-4 text-[120px] text-moss md:text-[160px]">2014</p>
      <p class="pt-2 font-semibold text-ink/60">{$_('aproposPage.sinceLabel')}</p>
    </div>
    <div class="col-span-12 lg:col-span-7 lg:col-start-6" use:reveal={{ delay: 100 }}>
      <p class="font-display text-[26px] leading-[1.35] tracking-tight md:text-[32px]">{$_('aproposPage.whoPara')}</p>
      <ul class="grid gap-x-8 sm:grid-cols-2 pt-10">
        {#each whoList as item}
          <li class="flex items-start gap-3 border-t border-ink/10 py-4">
            <i class="ph-fill ph-check-circle mt-0.5 text-lg text-moss"></i>
            <span class="font-semibold">{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- Vision -->
<section class="grain pat-seeds glow-sunrise overflow-hidden bg-forest text-paper">
  <div class="container relative z-10 s-pad">
    <h2 class="t-h4 text-sun" use:reveal>{$_('aproposPage.visionTitle')} — 2030</h2>
    <p class="t-display max-w-[1100px] pt-8 text-[34px] sm:text-[44px] lg:text-[60px]" style="line-height:1.08" use:reveal>
      <span class="t-em text-sun">«</span>&nbsp;{vision[0]}&nbsp;<span class="t-em text-sun">»</span>
    </p>
    {#if vision[1]}
      <p class="t-lead max-w-[640px] pt-10 !text-paper/70" use:reveal>{vision[1]}</p>
    {/if}
  </div>
</section>

<!-- Mission -->
<section class="s-pad">
  <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10">
    <div class="col-span-12 lg:col-span-5">
      <div class="lg:sticky lg:top-32" use:reveal>
        <h2 class="t-h4 text-moss">{$_('aproposPage.missionTitle')}</h2>
        <p class="t-h3 pt-6">{$_('aproposPage.mission')}</p>
        <p class="pt-6 text-ink/60">{$_('aproposPage.missionIntro')}</p>
      </div>
    </div>
    <ol class="col-span-12 border-t border-ink/15 lg:col-span-6 lg:col-start-7">
      {#each missionList as m, i}
        <li class="flex gap-6 border-b border-ink/15 py-7" use:reveal={{ delay: i * 60 }}>
          <span class="font-display text-3xl text-moss">{String(i + 1).padStart(2, '0')}</span>
          <span class="pt-1.5 text-lg first-letter:uppercase">{m}</span>
        </li>
      {/each}
    </ol>
  </div>
</section>

<!-- Valeurs -->
<section class="s-pad pat-paper bg-cream">
  <div class="container">
    <div class="grid grid-cols-12 items-end gap-y-8 lg:gap-x-8" use:reveal>
      <div class="col-span-12 lg:col-span-7">
        <h2 class="t-h2">{$_('aproposPage.valuesTitle')}</h2>
      </div>
      <p class="t-lead col-span-12 lg:col-span-4 lg:col-start-9">{$_('aproposPage.valuesIntro')}</p>
    </div>
    <ul class="mt-14 grid overflow-hidden rounded-[28px] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3" style="gap:1px">
      {#each values as v, i}
        <li class="group bg-cream p-8 transition-colors duration-500 hover:bg-paper lg:p-10" use:reveal={{ delay: (i % 3) * 80 }}>
          <div class="flex items-center justify-between">
            <span class="flex size-12 items-center justify-center rounded-full bg-forest text-xl text-sun transition-transform duration-500 group-hover:rotate-12">
              <i class="ph-bold {v.icon}"></i>
            </span>
            <span class="font-display text-ink/30">0{i + 1}</span>
          </div>
          <h3 class="t-h4 pt-8">{v.titre}</h3>
          <p class="pt-3 text-ink/70">{v.texte}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Opportunité -->
<section class="pat-cross overflow-hidden bg-sun py-16 md:py-20">
  <p class="t-display text-center text-[40px] sm:text-[56px] lg:text-[80px]" use:reveal>
    <span class="t-em">{$_('aproposPage.opportunity')}</span>
  </p>
</section>

<!-- Certificat et références -->
<section class="s-pad">
  <div class="container grid grid-cols-12 items-center gap-y-10 lg:gap-x-10 lg:gap-16">
    <div class="col-span-12 lg:col-span-5">
      <div use:reveal>
        <h2 class="t-h2">{$_('aproposPage.certsTitle')}</h2>
      </div>
      <ul class="pt-10">
        {#each certifs as c, i}
          <li class="flex gap-5 border-t border-ink/10 py-5" use:reveal={{ delay: i * 60 }}>
            <span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage text-lg text-forest">
              <i class="ph-bold {c.icon}"></i>
            </span>
            <span>
              <span class="block font-bold">{c.titre}</span>
              <span class="block pt-1 text-sm text-ink/60">{c.texte}</span>
            </span>
          </li>
        {/each}
      </ul>
    </div>

    <figure class="col-span-12 lg:col-span-7" use:reveal={{ delay: 120 }}>
      <a href={CERT} target="_blank" rel="noopener" class="group block rounded-[32px] bg-cream p-4 md:p-8">
        <img
          src={CERT}
          alt={$_('aproposPage.certImageAlt')}
          loading="lazy"
          class="w-full rounded-[16px] shadow-[0_30px_60px_-30px_rgba(10,36,18,0.45)] transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-[1.02]"
        />
      </a>
      <figcaption class="flex items-center gap-2 pt-4 text-sm text-ink/60">
        <i class="ph ph-magnifying-glass-plus"></i>{$_('aproposPage.certImageCaption')}
      </figcaption>
    </figure>
  </div>
</section>

<TeamSection />

<StageCta />
