<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import InternshipForm from '$lib/psa/InternshipForm.svelte';

  const benefits = $derived(/** @type {string[]} */ ($json('stage.benefits') || []));
</script>

<svelte:head>
  <title>{$_('stage.metaTitle')}</title>
  <meta name="description" content={$_('stage.metaDesc')} />
</svelte:head>

<PageHeader title={$_('stage.title')} subtitle={$_('stage.subtitle')} />

<!-- Présentation — pleine largeur -->
<section class="sbp-30">
  <div
    class="container -mt-40 rounded-xl bg-white p-4 sm:p-6 md:rounded-3xl md:p-12 lg:rounded-[60px] lg:p-15"
  >
    <div class="mx-auto max-w-[760px] text-center">
      <h5 class="heading-5 text-g400">{$_('stage.introKicker')}</h5>
      <h2 class="heading-2 pt-3">{$_('stage.introTitle')}</h2>
      <p class="pt-4 text-n500">{$_('stage.introPara')}</p>
    </div>

    <div class="grid grid-cols-12 gap-4 pt-10 sm:gap-6">
      {#each benefits as b}
        <div class="col-span-12 flex items-start gap-3 rounded-2xl bg-n20 p-4 sm:col-span-6 lg:col-span-3">
          <i class="ph-fill ph-check-circle mt-1 shrink-0 text-g400"></i>
          <span class="text-sm">{b}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Formulaire de candidature — même grille que la page "Post a Task" du legacy -->
<section class="sbp-30">
  <div class="container">
    <InternshipForm />
  </div>
</section>
