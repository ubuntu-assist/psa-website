<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import StageCta from '$lib/psa/StageCta.svelte';
  import TeamSection from '$lib/psa/TeamSection.svelte';
  import { certifsIcons } from '$lib/psa/data.js';

  const certifs = $derived(
    /** @type {any[]} */ ($json('certifs') || []).map((t, i) => ({ icon: certifsIcons[i], ...t }))
  );
  const whoList = $derived(/** @type {string[]} */ ($json('aproposPage.whoList') || []));
</script>

<svelte:head>
  <title>{$_('aproposPage.title')} — Pépinière Semences d'Avenir</title>
  <meta name="description" content={$_('aproposPage.subtitle')} />
</svelte:head>

<PageHeader title={$_('aproposPage.title')} subtitle={$_('aproposPage.subtitle')} />

<!-- Présentation — collage image + stat (design about-us) -->
<section class="sbp-30">
  <div
    class="container -mt-40 rounded-xl bg-white p-4 sm:p-6 md:rounded-3xl md:p-12 lg:rounded-[60px] lg:p-15"
  >
  <div class="grid grid-cols-12 max-xl:gap-10">
    <div class="col-span-12 lg:col-span-7 xl:col-span-6">
      <div class="flex flex-col items-start gap-6 sm:flex-row sm:gap-10">
        <div class="relative min-w-0 shrink">
          <div class="overflow-hidden rounded-2xl">
            <img src="/assets/images/about_us_img_1.jpg" alt="Pépinière Semences d'Avenir" class="max-w-full" />
          </div>
          <div
            class="absolute -bottom-[8%] -right-[10%] w-[45%] overflow-hidden rounded-2xl border-4 border-white shadow-lg"
          >
            <img src="/assets/images/about_us_img_2.jpg" alt="" class="w-full" />
          </div>
        </div>
        <div class="flex shrink-0 flex-col items-center justify-center pt-4">
          <p class="display-3 font-extrabold text-g400">10+</p>
          <p class="text-lg font-medium sm:min-w-[200px] xxl:text-xl">{$_('aproposPage.yearsExp')}</p>
        </div>
      </div>
    </div>

    <div class="col-span-12 flex flex-col items-start justify-center lg:col-span-5 xl:col-start-8">
      <h5 class="heading-5 text-g400">{$_('aproposPage.whoKicker')}</h5>
      <h2 class="heading-2 max-w-[500px] pt-4">{$_('aproposPage.whoTitle')}</h2>
      <p class="pb-4 pt-3 text-n300 xl:pb-6">{$_('aproposPage.whoPara')}</p>
      <ul class="ml-4 flex list-disc flex-col gap-3 pb-6 xl:pb-8">
        {#each whoList as item}
          <li>{item}</li>
        {/each}
      </ul>
      <div class="grid w-full grid-cols-2 gap-4">
        <div class="rounded-xl bg-n20 p-4">
          <h3 class="heading-6 flex items-center gap-2">
            <i class="ph ph-target text-g400"></i>
            {$_('aproposPage.mission')}
          </h3>
          <p class="pt-2 text-sm text-n300">{$_('aproposPage.missionText')}</p>
        </div>
        <div class="rounded-xl bg-n20 p-4">
          <h3 class="heading-6 flex items-center gap-2">
            <i class="ph ph-heart text-g400"></i>
            {$_('aproposPage.values')}
          </h3>
          <p class="pt-2 text-sm text-n300">{$_('aproposPage.valuesText')}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

<!-- Certifications -->
<section class="stp-30 sbp-30 bg-n20">
  <div class="container grid grid-cols-12 max-lg:gap-6">
    <div class="col-span-12 lg:col-span-6">
      <h5 class="heading-5 text-g400">{$_('aproposPage.certsKicker')}</h5>
      <h2 class="heading-2 max-w-[550px] pt-4">{$_('aproposPage.certsTitle')}</h2>
      <ul class="flex flex-col gap-8 pt-6 lg:pt-10">
        {#each certifs as c}
          <li class="relative flex items-start justify-start gap-4">
            <div class="flex items-center justify-center rounded-full bg-g400 p-3 text-2xl !leading-none text-white">
              <i class="ph {c.icon}"></i>
              <div
                class="absolute bottom-3 left-6 h-[50px] w-[2px] bg-gradient-to-b from-g400/0 to-g400"
              ></div>
            </div>
            <div>
              <h3 class="heading-5">{c.titre}</h3>
              <p class="max-w-[500px] py-2 text-n500">{c.texte}</p>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <div class="relative col-span-12 items-end justify-center lg:col-span-5 lg:col-start-8 lg:flex">
      <div class="overflow-hidden pb-4 pr-4">
        <img src="/assets/images/safe_guard_section_img.jpg" alt="" class="relative z-10 h-full w-full overflow-hidden rounded-2xl" />
      </div>
      <div class="absolute bottom-0 right-0 h-[250px] w-[200px] rounded-2xl bg-g400 sm:h-[300px] lg:w-[300px] xl:h-[500px]"></div>
      <div
        class="box-shadow-2 absolute right-0 top-4 z-10 flex items-center justify-start gap-2 rounded-xl border border-g75 bg-white px-3 py-2 sm:top-12 sm:gap-3 sm:px-8 sm:py-6 3xl:-right-24"
      >
        <div class="rounded-full bg-g75 p-0.5">
          <img src="/assets/images/safe_guard_review_img.jpg" alt="" class="rounded-full" />
        </div>
        <div>
          <span class="heading-3">{$_('aproposPage.badgeMinader')}</span>
          <p class="font-medium text-n500">{$_('aproposPage.badgeMinaderSub')}</p>
        </div>
      </div>
      <div
        class="box-shadow-2 absolute -left-2 bottom-16 z-10 flex items-center justify-start gap-2 rounded-xl border border-g75 bg-white px-3 py-2 font-medium sm:gap-3 sm:px-8 sm:py-6 lg:-left-20"
      >
        <i class="ph ph-leaf text-xl !leading-none text-g400"></i>
        <p>{$_('aproposPage.badgeBio')}</p>
      </div>
    </div>
  </div>
</section>

<TeamSection />

<StageCta />
