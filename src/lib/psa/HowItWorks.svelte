<script>
  import { _, json } from 'svelte-i18n';

  const styles = [
    { card: 'border-g75 bg-g50', pastille: 'bg-g200', shadow: 'border-g75/60 bg-g50/30' },
    { card: 'border-o300 bg-y50', pastille: 'bg-y300', shadow: 'border-y300/60 bg-y50/30' },
    { card: 'border-o300 bg-bg6', pastille: 'bg-o300', shadow: 'border-o300/60 bg-bg6/30' }
  ];
  const etapes = $derived(/** @type {{titre:string,texte:string}[]} */ ($json('howitworks.etapes')) || []);
</script>

<div class="container">
  <div class="flex w-full flex-col items-center justify-center text-center">
    <h5 class="pb-4 font-bold text-g400">{$_('howitworks.kicker')}</h5>
    <h2 class="heading-2 font-bold text-n900">
      {$_('howitworks.titlePre')}<span class="text-g400 underline">{$_('howitworks.titleEm')}</span>
    </h2>
  </div>

  <div class="stp-15 grid grid-cols-12 gap-4 sm:gap-6">
    {#each etapes as e, i}
      <div class="relative col-span-12 sm:col-span-6 md:col-span-4 {i === 1 ? 'md:-mb-8 md:mt-8' : ''}">
        <div
          class="relative z-10 flex h-full flex-col items-start justify-start gap-8 rounded-xl border {styles[i].card} px-4 py-8 lg:gap-14 lg:px-12 lg:py-16"
        >
          <p class="heading-4 flex size-[72px] items-center justify-center rounded-full {styles[i].pastille} !leading-none">
            0{i + 1}
          </p>
          <h3 class="heading-3 font-bold">{e.titre}</h3>
          <p class="font-medium">{e.texte}</p>
        </div>
        <div class="absolute -bottom-6 left-4 right-4 -z-10 h-[82px] rounded-xl border {styles[i].shadow}"></div>
      </div>
    {/each}
  </div>
</div>
