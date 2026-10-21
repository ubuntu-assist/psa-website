<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import { NAV, TEL_1, TEL_1_HREF, EMAIL, waAgri } from './data.js';
  import LangSwitch from './LangSwitch.svelte';

  let open = $state(false);
  let scrolled = $state(false);

  /** @param {string} href */
  const isActive = (href) => {
    const path = $page.url.pathname;
    return href === '/' ? path === '/' : path === href || path.startsWith(href + '/');
  };

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  // lock page scroll while the full-screen menu is open
  $effect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  });
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<!-- utility strip -->
<div class="hidden bg-forest text-[13px] text-paper/80 md:block">
  <div class="container flex items-center justify-between py-2">
    <p class="flex items-center gap-2">
      <span class="size-1.5 rounded-full bg-sun"></span>
      {$_('hero.eyebrow')}
    </p>
    <div class="flex items-center gap-6">
      <a href={TEL_1_HREF} class="flex items-center gap-2 hover:text-sun"><i class="ph ph-phone"></i>{TEL_1}</a>
      <a href="mailto:{EMAIL}" class="flex items-center gap-2 hover:text-sun"
        ><i class="ph ph-envelope-simple"></i>{EMAIL}</a
      >
    </div>
  </div>
</div>

<header
  class="sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 {scrolled ||
  open
    ? 'bg-paper/85 shadow-[0_1px_0_rgba(10,36,18,0.08)] backdrop-blur-xl'
    : 'bg-paper'}"
>
  <div class="container flex items-center justify-between gap-4 {scrolled ? 'py-3' : 'py-4'} transition-[padding] duration-500">
    <a
      href="/"
      class="group shrink-0"
      aria-label="{$_('brand.name')} ({$_('brand.short')})"
      onclick={() => (open = false)}
    >
      <img
        src="/assets/images/logo.png"
        alt=""
        class="h-12 w-auto transition-transform duration-700 group-hover:rotate-[20deg] xxl:h-14"
      />
    </a>

    <nav class="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex" aria-label="Menu">
      {#each NAV.filter((l) => !l.mobileOnly) as l}
        <a
          href={l.href}
          aria-current={isActive(l.href) ? 'page' : undefined}
          class="relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] font-semibold transition-colors duration-300 {isActive(
            l.href
          )
            ? 'bg-sage text-forest'
            : 'text-ink/70 hover:text-ink'}"
        >
          {$_('nav.' + l.key)}
        </a>
      {/each}
    </nav>

    <div class="flex shrink-0 items-center gap-3">
      <div class="hidden sm:block"><LangSwitch /></div>
      <a href={waAgri} target="_blank" rel="noopener" class="btn-primary hidden !px-5 !py-2.5 lg:inline-flex xl:hidden">
        <i class="ph-fill ph-whatsapp-logo text-lg"></i>
        {$_('nav.order')}
      </a>
      <button
        class="flex size-11 items-center justify-center rounded-full bg-forest text-xl text-paper xl:hidden"
        aria-label={$_('nav.menu')}
        aria-expanded={open}
        onclick={() => (open = !open)}
      >
        <i class="ph-bold {open ? 'ph-x' : 'ph-list'}"></i>
      </button>
    </div>
  </div>
</header>

<!-- full-screen mobile menu -->
{#if open}
  <div class="fixed inset-0 z-40 overflow-y-auto bg-forest pt-28 text-paper xl:hidden">
    <nav class="container flex min-h-full flex-col justify-between py-8" aria-label="Menu">
      <ul class="flex flex-col">
        {#each NAV as l, i}
          <li class="rise border-b border-paper/10" style="animation-delay:{i * 50}ms">
            <a
              href={l.href}
              onclick={() => (open = false)}
              aria-current={isActive(l.href) ? 'page' : undefined}
              class="flex items-baseline gap-4 py-4 {isActive(l.href) ? 'text-sun' : 'hover:text-sun'}"
            >
              <span class="text-xs font-bold text-paper/40">{String(i + 1).padStart(2, '0')}</span>
              <span class="font-display text-[34px] leading-none tracking-tight sm:text-5xl">{$_('nav.' + l.key)}</span>
            </a>
          </li>
        {/each}
      </ul>
      <div class="flex flex-wrap items-center justify-between gap-4 pt-10">
        <LangSwitch />
        <a href={waAgri} target="_blank" rel="noopener" class="btn-sun">
          <i class="ph-fill ph-whatsapp-logo text-lg"></i>
          {$_('nav.cta')}
        </a>
      </div>
    </nav>
  </div>
{/if}
