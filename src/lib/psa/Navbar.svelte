<script>
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import { NAV } from './data.js';
  import LangSwitch from './LangSwitch.svelte';

  let open = $state(false);
  /** @param {string} href */
  const isActive = (href) => {
    const path = $page.url.pathname;
    return href === '/' ? path === '/' : path === href || path.startsWith(href + '/');
  };
</script>

<header class="sticky top-0 z-50 border-b border-n30 bg-white/95 backdrop-blur">
  <div class="container flex items-center justify-between gap-3 py-4">
    <a href="/" class="flex shrink-0 items-center gap-3" onclick={() => (open = false)}>
      <img
        src="/assets/images/logo.png"
        alt="Pépinière Semences d'Avenir"
        class="h-10 w-auto sm:h-12 lg:h-14"
      />
    </a>

    <nav
      class="hidden items-center gap-4 whitespace-nowrap text-sm font-medium text-n700 lg:flex xl:gap-6 xl:text-base"
    >
      {#each NAV as l}
        <a
          href={l.href}
          class="py-2 duration-300 hover:text-g400 {isActive(l.href) ? 'text-g400' : ''}"
          aria-current={isActive(l.href) ? 'page' : undefined}
        >
          {$_('nav.' + l.key)}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-3">
      <LangSwitch />
      <button
        class="text-3xl !leading-none text-g400 lg:hidden"
        aria-label={$_('nav.menu')}
        onclick={() => (open = !open)}
      >
        <i class="ph-bold {open ? 'ph-x' : 'ph-list'}"></i>
      </button>
    </div>
  </div>

  {#if open}
    <nav class="border-t border-n30 bg-white lg:hidden">
      <ul class="container flex flex-col py-2 font-medium text-n700">
        {#each NAV as l}
          <li>
            <a
              href={l.href}
              class="block py-3 duration-300 hover:text-g400 {isActive(l.href) ? 'text-g400' : ''}"
              onclick={() => (open = false)}
            >
              {$_('nav.' + l.key)}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</header>
