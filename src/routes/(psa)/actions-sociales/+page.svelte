<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { DON, actionsIcons, actionsImages, wa } from '$lib/psa/data.js';

  const items = $derived(
    /** @type {any[]} */ ($json('actionsPage.items') || []).map((t, i) => ({ icon: actionsIcons[i], image: actionsImages[i], ...t }))
  );
  const tones = ['bg-sage', 'bg-sunsoft', 'bg-claysoft'];

  let copied = $state('');
  /** @param {string} key @param {string} value */
  const copy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      copied = key;
      setTimeout(() => (copied = copied === key ? '' : copied), 2000);
    } catch {
      // clipboard unavailable (insecure context / denied) — the value stays selectable
    }
  };
  import Seo from '$lib/psa/Seo.svelte';
</script>

<Seo title={$_('actionsPage.title')} description={$_('seo.actions')} image="/og/actions-sociales.jpg" />

{#snippet copyBtn(/** @type {string} */ key, /** @type {string} */ value, /** @type {boolean} */ dark = false)}
  <button
    type="button"
    onclick={() => copy(key, value)}
    class="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors duration-300 {copied === key
      ? 'bg-moss text-paper'
      : dark
        ? 'bg-paper/10 text-paper hover:bg-paper/20'
        : 'bg-ink/5 hover:bg-ink/10'}"
  >
    <i class="ph-bold {copied === key ? 'ph-check' : 'ph-copy'}"></i>
    {copied === key ? $_('common.copied') : $_('common.copy')}
  </button>
{/snippet}

<PageHeader
  kicker={$_('actionsPage.kicker')}
  title={$_('actionsPage.title')}
  subtitle={$_('actionsPage.subtitle')}
  image="/assets/images/psa/stock/action-dons.jpg"
/>

<!-- Les actions -->
<section class="s-pad">
  <div class="container">
    <h2 class="t-h2 max-w-[760px]" use:reveal>{$_('actionsPage.heading')}</h2>
    <div class="grid gap-4 pt-14 md:grid-cols-3">
      {#each items as a, i}
        <article class="group flex flex-col overflow-hidden rounded-[28px] {tones[i]} p-2.5" use:reveal={{ delay: i * 100 }}>
          <div class="relative aspect-[4/3] overflow-hidden rounded-[20px]">
            <img src="/assets/images/{a.image}" alt="" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent"></div>
            <span class="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full bg-paper/90 text-lg text-forest backdrop-blur">
              <i class="ph-bold {a.icon}"></i>
            </span>
            <p class="t-display absolute bottom-4 left-5 text-[56px] text-paper md:text-[64px]">{a.value}</p>
          </div>
          <div class="p-5 pt-6">
            <h3 class="t-h4">{a.titre}</h3>
            <p class="pt-3 text-ink/70">{a.texte}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- Appel + dons -->
<section id="don" class="grain pat-seeds glow-emerald scroll-mt-24 overflow-hidden bg-forest text-paper">
  <div class="container relative z-10 s-pad">
    <div class="grid grid-cols-12 gap-y-10 lg:gap-x-10">
      <div class="col-span-12 lg:col-span-5">
        <div class="lg:sticky lg:top-32" use:reveal>
          <i class="ph-fill ph-heart text-4xl text-sun"></i>
          <h2 class="t-h2 pt-6">{$_('actionsPage.appeal')}</h2>
          <p class="t-lead pt-6 !text-paper/70">{$_('actionsPage.donText')}</p>
          <p class="pt-10 text-sm text-paper/60">{$_('actionsPage.thanks')}</p>
          <a href={wa($_('actionsPage.waMessage'))} target="_blank" rel="noopener" class="btn-sun mt-5">
            <i class="ph-fill ph-whatsapp-logo text-lg"></i>{$_('actionsPage.thanksCta')}
          </a>
        </div>
      </div>

      <div class="col-span-12 flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
        <h3 class="t-h4 text-sun" use:reveal>{$_('actionsPage.donTitle')}</h3>
        {#each [{ k: 'momo', label: 'actionsPage.momo', value: DON.momo, dot: 'bg-[#FFCC00]' }, { k: 'om', label: 'actionsPage.om', value: DON.om, dot: 'bg-[#FF7900]' }] as m}
          <div class="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-paper/15 p-6" use:reveal>
            <div>
              <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-paper/60">
                <span class="size-2.5 rounded-full {m.dot}"></span>{$_(m.label)}
              </p>
              <p class="pt-2 font-display text-3xl tracking-tight">{m.value}</p>
            </div>
            {@render copyBtn(m.k, m.value.replace(/\s/g, ''), true)}
          </div>
        {/each}

        <div class="rounded-[24px] bg-paper p-6 text-ink md:p-8" use:reveal>
          <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/60">
            <i class="ph-bold ph-bank text-base text-moss"></i>{$_('actionsPage.bank')}
          </p>
          <dl class="pt-3">
            {#each DON.rib as r}
              <div class="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 py-3.5 last:border-0">
                <dt class="text-sm text-ink/60">{$_('actionsPage.rib.' + r.key)}</dt>
                <dd class="flex items-center gap-3">
                  <span class="font-mono text-[15px] font-bold tracking-tight">{r.value}</span>
                  {@render copyBtn(r.key, r.value)}
                </dd>
              </div>
            {/each}
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>
