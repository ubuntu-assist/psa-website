<script>
  // Per-page SEO + link previews (WhatsApp, Facebook, LinkedIn, X…).
  // Pages are prerendered in French (the default locale); the tags follow the visitor's
  // language on the client once they switch to English.
  import { page } from '$app/stores';
  import { locale } from 'svelte-i18n';
  import { SITE_URL } from './data.js';

  /**
   * @type {{
   *   title: string, description?: string, image?: string, imageAlt?: string,
   *   type?: 'website' | 'article', published?: string, noindex?: boolean, jsonld?: object | object[]
   * }}
   */
  let {
    title,
    description = '',
    image = '/og/default.jpg',
    imageAlt = '',
    type = 'website',
    published = '',
    noindex = false,
    jsonld
  } = $props();

  const SUFFIX = " — Pépinière Semences d'Avenir";
  const full = $derived(title.includes("Semences d'Avenir") ? title : title + SUFFIX);
  const abs = (/** @type {string} */ u) => (/^https?:/.test(u) ? u : SITE_URL + u);
  const canonical = $derived(SITE_URL + ($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/$/, '')));
  const desc = $derived(description.length > 160 ? description.slice(0, 157).trimEnd() + '…' : description);
  const isEn = $derived(String($locale || 'fr').startsWith('en'));
  // `<` escaped so content can never close the script tag
  const ld = $derived(jsonld ? JSON.stringify(jsonld).replace(/</g, '\\u003c') : '');
</script>

<svelte:head>
  <title>{full}</title>
  {#if desc}<meta name="description" content={desc} />{/if}
  <link rel="canonical" href={canonical} />
  {#if noindex}<meta name="robots" content="noindex" />{/if}

  <meta property="og:site_name" content="Pépinière Semences d'Avenir" />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={full} />
  {#if desc}<meta property="og:description" content={desc} />{/if}
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={abs(image)} />
  {#if image.startsWith('/og/')}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  {/if}
  <meta property="og:image:alt" content={imageAlt || full} />
  <meta property="og:locale" content={isEn ? 'en_GB' : 'fr_FR'} />
  <meta property="og:locale:alternate" content={isEn ? 'fr_FR' : 'en_GB'} />
  {#if type === 'article' && published}<meta property="article:published_time" content={published} />{/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@semencesavenir" />
  <meta name="twitter:title" content={full} />
  {#if desc}<meta name="twitter:description" content={desc} />{/if}
  <meta name="twitter:image" content={abs(image)} />

  {#if ld}
    {@html `<script type="application/ld+json">${ld}</script>`}
  {/if}
</svelte:head>
