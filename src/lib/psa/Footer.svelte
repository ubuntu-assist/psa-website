<script>
  import { _, json, locale } from 'svelte-i18n';
  import { newsletterSchema } from './schemas.js';
  import { NIU, RC, TEL_1, TEL_2, TEL_1_HREF, TEL_2_HREF, EMAIL, LINKS, socials } from './data.js';

  const stats = $derived(/** @type {{value:string,label:string}[]} */ ($json('footer.stats')) || []);

  const navCols = [
    [
      { href: '/produits', key: 'nav.produits' },
      { href: '/alimentation-sante', key: 'nav.sante' },
      { href: '/a-propos', key: 'nav.apropos' },
      { href: '/partenaires', key: 'nav.partenaires' }
    ],
    [
      { href: '/actions-sociales', key: 'nav.actions' },
      { href: '/mediatheque', key: 'nav.mediatheque' },
      { href: '/stage', key: 'stage.title' },
      { href: '/blog', key: 'nav.blog' },
      { href: '/contact', key: 'nav.contact' }
    ]
  ];

  // Newsletter: /api/newsletter adds the address to Resend Contacts and sends a welcome email.
  let email = $state('');
  let honeypot = $state('');
  let status = $state(/** @type {'' | 'invalid' | 'sending' | 'sent' | 'error'} */ (''));
  /** @param {SubmitEvent} e */
  const subscribe = async (e) => {
    e.preventDefault();
    if (!newsletterSchema.safeParse({ email }).success) return void (status = 'invalid');
    status = 'sending';
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), lang: ($locale || 'fr').slice(0, 2), website: honeypot })
      });
      if (!res.ok) throw new Error(String(res.status));
      status = 'sent';
      email = '';
    } catch {
      status = 'error';
    }
  };
</script>

<footer class="grain glow-sunrise overflow-hidden bg-forest text-paper">
  <div class="container relative z-10 pt-20 md:pt-28">
    <!-- tagline + newsletter -->
    <div class="grid grid-cols-12 gap-y-10 lg:gap-x-10 border-b border-paper/10 pb-16">
      <div class="col-span-12 lg:col-span-6">
        <h2 class="t-h2">
          <span class="t-em text-sun">{$_('footer.tagline')}</span>
        </h2>
      </div>
      <div class="col-span-12 lg:col-span-5 lg:col-start-8">
        <h3 class="t-h4">{$_('newsletter.title')}</h3>
        <p class="pt-2 text-paper/70">{$_('newsletter.text')}</p>
        <form class="pt-6" onsubmit={subscribe} novalidate>
          <div
            class="flex flex-col gap-1.5 rounded-[24px] border border-paper/20 bg-paper/5 p-1.5 transition-colors focus-within:border-sun min-[420px]:flex-row min-[420px]:items-center min-[420px]:rounded-full"
          >
            <label class="sr-only" for="psa-newsletter">{$_('newsletter.placeholder')}</label>
            <input
              id="psa-newsletter"
              type="email"
              autocomplete="email"
              bind:value={email}
              oninput={() => (status = '')}
              placeholder={$_('newsletter.placeholder')}
              aria-invalid={status === 'invalid'}
              class="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-paper outline-none placeholder:text-paper/40"
            />
            <input bind:value={honeypot} name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="absolute -left-[9999px] h-px w-px" />
            <button type="submit" class="btn-sun w-full shrink-0 !py-2.5 disabled:opacity-60 min-[420px]:w-auto" disabled={status === 'sending'}>
              {$_('newsletter.button')}
              <i class="ph-bold ph-arrow-right"></i>
            </button>
          </div>
          {#if status === 'invalid'}
            <p class="pt-2 text-sm font-medium text-sunsoft" role="alert">{$_('newsletter.invalid')}</p>
          {:else if status === 'sent'}
            <p class="pt-2 text-sm font-medium" role="status">{$_('newsletter.sent')}</p>
          {:else if status === 'error'}
            <p class="pt-2 text-sm font-medium text-sunsoft" role="alert">{$_('newsletter.error')}</p>
          {/if}
        </form>
      </div>
    </div>

    <!-- columns -->
    <div class="grid grid-cols-12 gap-y-10 lg:gap-x-10 py-16">
      <div class="col-span-12 sm:col-span-6 lg:col-span-3">
        <a href="/" class="inline-flex items-center gap-3">
          <img src="/assets/images/logo.png" alt="" class="h-14 w-auto" />
          <span class="font-display text-xl leading-tight">{$_('brand.name')}<br /><span class="text-sun">({$_('brand.short')})</span></span>
        </a>
        <ul class="flex flex-col gap-4 pt-8">
          {#each stats as s}
            <li class="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
              <span class="whitespace-nowrap font-display text-3xl text-sun lg:text-2xl xl:text-3xl">{s.value}</span>
              <span class="text-sm text-paper/60">{s.label}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div class="col-span-12 sm:col-span-6 lg:col-span-4 lg:col-start-5">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-paper/50">{$_('footer.navTitle')}</p>
        <div class="grid grid-cols-2 gap-x-6 pt-6">
          {#each navCols as col}
            <ul class="flex flex-col gap-3">
              {#each col as l}
                <li><a href={l.href} class="t-link text-paper/85 hover:text-paper">{$_(l.key)}</a></li>
              {/each}
            </ul>
          {/each}
        </div>
      </div>

      <div class="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-10">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-paper/50">{$_('footer.contactTitle')}</p>
        <ul class="flex flex-col gap-3 pt-6 text-paper/85">
          <li><a href={TEL_1_HREF} class="t-link">{TEL_1}</a></li>
          <li><a href={TEL_2_HREF} class="t-link">{TEL_2}</a></li>
          <li><a href="mailto:{EMAIL}" class="t-link break-all">{EMAIL}</a></li>
          <li>
            <a href={LINKS.graines} target="_blank" rel="noopener" class="t-link">{$_('contact.locateText')}</a>
          </li>
        </ul>
        <p class="pt-8 text-xs font-bold uppercase tracking-[0.18em] text-paper/50">{$_('footer.followTitle')}</p>
        <div class="flex flex-wrap gap-2 pt-4">
          {#each socials as s}
            <a
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={$_('channels.' + s.key)}
              class="flex size-10 items-center justify-center rounded-full border border-paper/15 text-lg transition-colors duration-300 hover:border-sun hover:bg-sun hover:text-ink"
              ><i class="ph {s.icon}"></i></a
            >
          {/each}
        </div>
      </div>
    </div>

    <!-- certifications + legal -->
    <div
      class="flex flex-col gap-6 border-t border-paper/10 py-8 text-sm text-paper/60 lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="flex flex-wrap gap-3">
        <span class="inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-2">
          <i class="ph-fill ph-seal-check text-sun"></i>
          <b class="text-paper">{$_('footer.minader')}</b> — {$_('footer.minaderDesc')}
        </span>
        <span class="inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-2">
          <i class="ph-fill ph-leaf text-sun"></i>
          <b class="text-paper">{$_('footer.bio')}</b> — {$_('footer.bioDesc')}
        </span>
      </div>
      <p>NIU {NIU} · {RC} · © {new Date().getFullYear()} {$_('footer.rights')}</p>
    </div>
  </div>

  <!-- giant wordmark -->
  <div class="relative z-10 select-none overflow-hidden px-[2vw] pb-[2vw]" aria-hidden="true">
    <p
      class="t-display whitespace-nowrap text-center text-[13.5vw] text-paper/[0.06]"
      style="line-height:1.1 !important"
    >
      Semences d'Avenir
    </p>
  </div>
</footer>
