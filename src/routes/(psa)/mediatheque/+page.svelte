<script>
  import { _, json } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { mediaDocs, mediaPhotos, LINKS } from '$lib/psa/data.js';

  const P = '/assets/images/psa/photos/';

  const docs = $derived(
    /** @type {any[]} */ ($json('mediatheque.docs') || []).map((t, i) => ({ ...mediaDocs[i], ...t }))
  );
  const photos = $derived(
    /** @type {string[]} */ ($json('mediatheque.photos') || []).map((caption, i) => ({
      file: mediaPhotos[i],
      caption
    }))
  );

  const TABS = /** @type {const} */ (['docs', 'photos', 'videos']);
  const ICONS = { docs: 'ph-file-text', photos: 'ph-images', videos: 'ph-play-circle' };
  let tab = $state(/** @type {'docs' | 'photos' | 'videos'} */ ('docs'));

  // simple lightbox for the photo gallery
  let viewing = $state(/** @type {{file:string, caption:string} | null} */ (null));
</script>

<svelte:head>
  <title>{$_('mediatheque.metaTitle')}</title>
  <meta name="description" content={$_('mediatheque.subtitle')} />
</svelte:head>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (viewing = null)} />

<PageHeader
  kicker={$_('nav.mediatheque')}
  title={$_('mediatheque.title')}
  subtitle={$_('mediatheque.subtitle')}
  image="/assets/images/psa/stock/secteur-rural.jpg"
/>

<section class="pb-20 md:pb-28">
  <div class="sticky top-[68px] z-30 border-y border-ink/10 bg-paper/90 backdrop-blur-xl">
    <div role="tablist" class="container flex gap-1 py-3">
      {#each TABS as t}
        <button
          role="tab"
          aria-selected={tab === t}
          onclick={() => (tab = t)}
          class="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300 {tab === t
            ? 'bg-forest text-paper'
            : 'text-ink/60 hover:bg-cream hover:text-ink'}"
        >
          <i class="ph-bold {ICONS[t]}"></i>
          {$_('mediatheque.tabs.' + t)}
        </button>
      {/each}
    </div>
  </div>

  <div class="container pt-14" role="tabpanel">
    {#if tab === 'docs'}
      <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each docs as d, i}
          <li use:reveal={{ delay: i * 80 }}>
            <a href={P + d.file} target="_blank" rel="noopener" class="group block">
              <div class="aspect-[4/3] overflow-hidden rounded-[24px] bg-cream p-5">
                <img
                  src={P + d.file}
                  alt=""
                  loading="lazy"
                  class="h-full w-full rounded-[12px] object-cover object-top shadow-[0_20px_40px_-25px_rgba(10,36,18,0.5)] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div class="flex items-start gap-4 pt-5">
                <span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage text-lg text-forest"><i class="ph-bold {d.icon}"></i></span>
                <div class="flex-1">
                  <h3 class="t-h4 transition-colors group-hover:text-moss">{d.titre}</h3>
                  <p class="pt-1 text-sm text-ink/60">{d.texte}</p>
                </div>
                <i class="ph-bold ph-arrow-up-right pt-1 text-lg transition-transform group-hover:rotate-45"></i>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {:else if tab === 'photos'}
      <ul class="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {#each photos as ph}
          <li class="mb-6 break-inside-avoid">
            <button type="button" onclick={() => (viewing = ph)} class="group block w-full text-left">
              <span class="block overflow-hidden rounded-[24px] bg-cream">
                <img src={P + ph.file} alt={ph.caption} loading="lazy" class="w-full transition-transform duration-700 group-hover:scale-[1.03]" />
              </span>
              <span class="flex items-center justify-between gap-3 pt-3 text-sm font-semibold text-ink/70">
                {ph.caption}<i class="ph-bold ph-arrows-out-simple"></i>
              </span>
            </button>
          </li>
        {/each}
      </ul>
    {:else}
      <div class="grain glow-sunrise grid items-center gap-10 overflow-hidden rounded-[32px] bg-forest p-8 text-paper md:grid-cols-2 md:p-14">
        <div class="relative z-10">
          <h2 class="t-h2">{$_('mediatheque.videosTitle')}</h2>
          <p class="t-lead pt-5 !text-paper/70">{$_('mediatheque.videosText')}</p>
          <div class="flex flex-wrap gap-3 pt-8">
            <a href={LINKS.youtube} target="_blank" rel="noopener" class="btn-sun"><i class="ph-fill ph-youtube-logo text-lg"></i>{$_('mediatheque.youtubeCta')}</a>
            <a href={LINKS.tiktok} target="_blank" rel="noopener" class="btn-ghost-light"><i class="ph-fill ph-tiktok-logo text-lg"></i>{$_('mediatheque.tiktokCta')}</a>
          </div>
        </div>
        <a href={LINKS.youtube} target="_blank" rel="noopener" class="group relative z-10 block overflow-hidden rounded-[24px]" aria-label={$_('mediatheque.youtubeCta')}>
          <img src="{P}prestations.jpg" alt="" class="aspect-video w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />
          <span class="absolute inset-0 flex items-center justify-center">
            <span class="flex size-20 items-center justify-center rounded-full bg-sun text-3xl text-ink transition-transform duration-500 group-hover:scale-110">
              <i class="ph-fill ph-play"></i>
            </span>
          </span>
        </a>
      </div>
    {/if}
  </div>
</section>

{#if viewing}
  <div class="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={viewing.caption}>
    <button class="absolute inset-0 cursor-default" aria-label={$_('common.close')} onclick={() => (viewing = null)}></button>
    <figure class="rise relative max-h-full max-w-5xl">
      <img src={P + viewing.file} alt={viewing.caption} class="max-h-[80vh] w-auto rounded-[20px]" />
      <figcaption class="pt-4 text-center font-display text-lg text-paper">{viewing.caption}</figcaption>
    </figure>
    <button class="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full bg-paper text-xl text-ink" aria-label={$_('common.close')} onclick={() => (viewing = null)}>
      <i class="ph-bold ph-x"></i>
    </button>
  </div>
{/if}
