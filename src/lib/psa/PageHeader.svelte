<script>
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import { NAV } from './data.js';

  /** @type {{ title: string, subtitle?: string, kicker?: string, image?: string, imageAlt?: string, crumbs?: {label:string, href?:string}[] }} */
  let { title, subtitle = '', kicker = '', image = '', imageAlt = '', crumbs = [] } = $props();

  const trail = $derived(crumbs.length ? crumbs : [{ label: title }]);

  // editorial accent: the last word of the title is set in italic green
  const split = $derived.by(() => {
    const t = title.trim();
    const i = t.lastIndexOf(' ');
    return i < 0 ? { head: '', tail: t } : { head: t.slice(0, i + 1), tail: t.slice(i + 1) };
  });

  // « 03 / 07 » — position of the current page in the main menu
  const menu = NAV.filter((l) => !l.mobileOnly);
  const index = $derived(
    menu.findIndex((l) => $page.url.pathname === l.href || $page.url.pathname.startsWith(l.href + '/'))
  );
  const pad = (/** @type {number} */ n) => String(n).padStart(2, '0');

  // circular badge text, repeated around the ring
  const ring = $derived(`${$_('brand.name')} • ${$_('stats.since')} ${$_('stats.year')} • `.toUpperCase());
</script>

<section class="grain pat-field relative overflow-hidden bg-cream">
  <div class="container relative z-10 pb-16 pt-8 md:pb-24 md:pt-10">
    <!-- top bar: breadcrumb + page index -->
    <div class="flex items-center justify-between gap-6 border-b border-ink/10 pb-5">
      <nav aria-label="Fil d'Ariane">
        <ol class="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-ink/50">
          <li><a href="/" class="inline-block py-2 transition-colors hover:text-moss">{$_('nav.accueil')}</a></li>
          {#each trail as c}
            <li aria-hidden="true" class="text-ink/25">/</li>
            <li>
              {#if c.href}<a href={c.href} class="inline-block py-2 transition-colors hover:text-moss">{c.label}</a>{:else}<span class="text-ink">{c.label}</span>{/if}
            </li>
          {/each}
        </ol>
      </nav>
      {#if index >= 0}
        <p class="hidden shrink-0 font-label text-xs tracking-[0.14em] text-ink/50 sm:block" aria-hidden="true">
          <span class="text-ink">{pad(index + 1)}</span> / {pad(menu.length)}
        </p>
      {/if}
    </div>

    <div class="grid grid-cols-12 items-end gap-y-12 pt-12 md:pt-16 lg:gap-x-16">
      <!-- text -->
      <div class="col-span-12 {image ? 'lg:col-span-7' : 'lg:col-span-8'}">
        <h1 class="t-h1 rise text-balance" style="animation-delay:80ms">
          {split.head}<span class="t-em text-moss">{split.tail}</span>
        </h1>
        {#if subtitle}
          <p class="t-lead rise max-w-[520px] pt-8" style="animation-delay:160ms">{subtitle}</p>
        {/if}
        <a
          href="#contenu"
          class="rise group mt-10 inline-flex items-center gap-4 font-label text-xs uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-ink"
          style="animation-delay:240ms"
        >
          <span
            class="flex size-11 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 group-hover:border-forest group-hover:bg-forest group-hover:text-paper"
          >
            <i class="ph-bold ph-arrow-down scroll-cue"></i>
          </span>
          {$_('hero.scroll')}
        </a>
      </div>

      <!-- visual -->
      <div class="relative col-span-12 {image ? 'lg:col-span-5' : 'hidden lg:col-span-4 lg:block'}">
        {#if image}
          <div class="rise relative mx-auto max-w-[300px] sm:max-w-[380px] lg:mr-0 lg:max-w-[460px]" style="animation-delay:200ms">
            <!-- arch-cropped photo -->
            <div class="aspect-[4/5] overflow-hidden rounded-b-[36px] rounded-t-[999px] bg-sage shadow-[0_40px_80px_-40px_rgba(10,36,18,0.45)]">
              <img src={image} alt={imageAlt} class="h-full w-full object-cover" />
            </div>

            <!-- rotating text badge -->
            <div class="absolute -bottom-6 -left-6 size-[132px] sm:-left-10 sm:size-[152px]" aria-hidden="true">
              <div class="absolute inset-0 rounded-full bg-sun shadow-[0_20px_40px_-20px_rgba(10,36,18,0.5)]"></div>
              <svg viewBox="0 0 100 100" class="spin-slow absolute inset-0 h-full w-full text-ink">
                <defs>
                  <path id="psa-ring" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text class="font-label" font-size="7.4" font-weight="600" fill="currentColor">
                  <textPath href="#psa-ring" textLength="230" lengthAdjust="spacing">{ring}</textPath>
                </text>
              </svg>
              <img src="/assets/images/logo.png" alt="" class="absolute left-1/2 top-1/2 size-[46%] -translate-x-1/2 -translate-y-1/2" />
            </div>

            <!-- line-drawn seedling peeking over the arch -->
            <svg
              viewBox="0 0 200 260"
              class="draw absolute -right-4 -top-10 hidden w-28 text-moss lg:block xl:-right-10"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              {@render seedling()}
            </svg>
          </div>
        {:else}
          <svg
            viewBox="0 0 200 260"
            class="draw ml-auto w-full max-w-[300px] text-moss"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            {@render seedling()}
          </svg>
        {/if}
      </div>
    </div>
  </div>
  <span id="contenu" class="absolute bottom-0" aria-hidden="true"></span>
</section>

{#snippet seedling()}
  <!-- ground -->
  <path pathLength="1" d="M18 200 C 60 194, 140 206, 182 198" />
  <path pathLength="1" d="M40 210 C 70 207, 120 213, 160 208" opacity="0.5" />
  <!-- stem -->
  <path pathLength="1" d="M100 200 C 100 172, 97 140, 102 98" />
  <!-- left leaf + vein -->
  <path pathLength="1" d="M100 146 C 72 142, 50 118, 50 88 C 78 90, 98 114, 100 146 Z" />
  <path pathLength="1" d="M100 146 C 86 130, 70 112, 55 93" />
  <!-- right leaf + vein -->
  <path pathLength="1" d="M102 116 C 126 104, 152 82, 160 50 C 130 52, 106 78, 102 116 Z" />
  <path pathLength="1" d="M102 116 C 120 96, 138 76, 156 55" />
  <!-- bud -->
  <path pathLength="1" d="M102 98 C 96 88, 98 76, 106 70 C 112 78, 110 90, 102 98 Z" />
  <!-- roots -->
  <path pathLength="1" d="M100 200 C 95 215, 86 226, 76 240" />
  <path pathLength="1" d="M100 200 C 105 216, 113 228, 124 236" />
  <path pathLength="1" d="M100 204 C 100 220, 101 232, 99 248" />
  <!-- sun -->
  <circle pathLength="1" cx="164" cy="150" r="14" class="text-sun" stroke="#FDC500" />
{/snippet}
