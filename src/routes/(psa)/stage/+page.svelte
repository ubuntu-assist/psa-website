<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import InternshipForm from '$lib/psa/InternshipForm.svelte';
  import { reveal } from '$lib/psa/reveal.js';

  const benefits = $derived(/** @type {string[]} */ ($json('stage.benefits') || []));
  const icons = ['ph-users-three', 'ph-plant', 'ph-certificate', 'ph-graduation-cap'];
  import Seo from '$lib/psa/Seo.svelte';
</script>

<Seo title={$_('stage.title')} description={$_('seo.stage')} image="/og/stage.jpg" />

<PageHeader
  kicker={$_('stage.introKicker')}
  title={$_('stage.title')}
  subtitle={$_('stage.subtitle')}
  image="/assets/images/fixed_price_service_img.jpg"
/>

<section class="s-pad">
  <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10 lg:gap-16">
    <div class="col-span-12 lg:col-span-5" use:reveal>
      <h2 class="t-h2">{$_('stage.introTitle')}</h2>
    </div>
    <p class="t-lead col-span-12 lg:col-span-6 lg:col-start-7" use:reveal={{ delay: 100 }}>{$_('stage.introPara')}</p>
  </div>
  <ul class="container grid gap-4 pt-14 sm:grid-cols-2 lg:grid-cols-4">
    {#each benefits as b, i}
      <li class="flex min-h-[220px] flex-col justify-between rounded-[24px] bg-cream p-6" use:reveal={{ delay: i * 80 }}>
        <span class="flex items-center justify-between">
          <span class="flex size-11 items-center justify-center rounded-full bg-forest text-lg text-sun"><i class="ph-bold {icons[i % icons.length]}"></i></span>
          <span class="font-display text-ink/30">0{i + 1}</span>
        </span>
        <span class="font-display text-xl leading-snug tracking-tight">{b}</span>
      </li>
    {/each}
  </ul>
</section>

<section class="pb-20 md:pb-28">
  <div class="container">
    <div class="pb-10" use:reveal>
      <h2 class="t-h3">{$_('stage.formTitle')}</h2>
    </div>
    <InternshipForm />
  </div>
</section>
