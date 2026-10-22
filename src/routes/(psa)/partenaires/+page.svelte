<script>
  import { _ } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import PartnerGrid from '$lib/psa/PartnerGrid.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import Seo from '$lib/psa/Seo.svelte';
  import { getPartners } from '$lib/content.js';

  const { institutional: partenairesInstitutionnels, technical: partenairesTechniques } = getPartners();

  const groups = [
    { kicker: 'partenairesPage.instKicker', title: 'partenairesPage.instTitle', list: partenairesInstitutionnels },
    { kicker: 'partenairesPage.techKicker', title: 'partenairesPage.techTitle', list: partenairesTechniques }
  ];
</script>

<Seo title={$_('partenairesPage.title')} description={$_('seo.partenaires')} image="/og/partenaires.jpg" />

<PageHeader
  kicker={$_('partenaires.kicker')}
  title={$_('partenairesPage.title')}
  subtitle={$_('partenairesPage.subtitle')}
  image="/assets/images/psa/stock/secteur-formation.jpg"
/>

<!-- key figures -->
<section class="border-b border-ink/10">
  <div class="container grid grid-cols-2 divide-x divide-ink/10 md:grid-cols-3">
    <div class="py-10 pr-6">
      <p class="t-display text-[64px] text-moss">{partenairesInstitutionnels.length}</p>
      <p class="pt-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">{$_('partenairesPage.instKicker')}</p>
    </div>
    <div class="py-10 pl-6">
      <p class="t-display text-[64px] text-moss">{partenairesTechniques.length}</p>
      <p class="pt-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">{$_('partenairesPage.techKicker')}</p>
    </div>
    <div class="col-span-2 hidden items-center py-10 pl-6 md:col-span-1 md:flex">
      <a href="#devenir-partenaire" class="btn-primary">{$_('partenairesPage.becomeTitle')}<span class="btn-ico"><i class="ph-bold ph-arrow-down"></i></span></a>
    </div>
  </div>
</section>

{#each groups as g, gi}
  <section class="s-pad {gi ? 'bg-cream' : ''}">
    <div class="container">
      <div class="flex flex-wrap items-end justify-between gap-6 pb-12" use:reveal>
        <div>
          <h2 class="t-h2">{$_(g.title)}</h2>
        </div>
        <span class="font-display text-2xl text-ink/30">0{gi + 1} / 02</span>
      </div>
      <PartnerGrid partners={g.list} />
    </div>
  </section>
{/each}

<!-- Devenir partenaire -->
<section id="devenir-partenaire" class="scroll-mt-24 pb-20 md:pb-28 {groups.length % 2 ? '' : 'bg-cream'}">
  <div class="container">
    <div class="grain pat-seeds grid items-end gap-8 overflow-hidden rounded-[32px] bg-forest p-8 text-paper md:grid-cols-[1fr_auto] md:p-14" use:reveal>
      <div class="relative z-10">
        <h2 class="t-h2">{$_('partenairesPage.becomeTitle')}</h2>
        <p class="t-lead max-w-[560px] pt-5 !text-paper/75">{$_('partenairesPage.becomeText')}</p>
      </div>
      <a href="/contact" class="btn-sun relative z-10">{$_('partenairesPage.becomeCta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></a>
    </div>
  </div>
</section>
