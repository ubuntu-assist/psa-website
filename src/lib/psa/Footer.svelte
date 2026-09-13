<script>
  import { _, json } from 'svelte-i18n';
  import { NIU, RC, waContact, TEL_1_HREF, EMAIL, statsValues } from './data.js';

  const stats = $derived(/** @type {{label:string}[]} */ ($json('footer.stats')) || []);
</script>

<footer class="bg-n900 text-white">
  <div class="container">
    <div
      class="grid grid-cols-1 items-center justify-items-center gap-6 py-10 text-center text-sm font-medium sm:text-base lg:py-14 xl:grid-cols-[1fr_auto_1fr] xl:justify-items-stretch xl:gap-8 xl:text-left"
    >
      <ul class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 xl:justify-start xl:gap-8">
        <li><a class="duration-500 hover:text-y300" href="/produits">{$_('nav.produits')}</a></li>
        <li><a class="duration-500 hover:text-y300" href="/a-propos">{$_('nav.apropos')}</a></li>
      </ul>
      <a href="/" class="shrink-0"
        ><img
          src="/assets/images/logo.png"
          alt="Pépinière Semences d'Avenir"
          class="h-14 w-auto sm:h-16 lg:h-20"
        /></a
      >
      <ul class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 xl:justify-end xl:gap-8">
        <li><a class="duration-500 hover:text-y300" href="/stage">{$_('stage.title')}</a></li>
        <li><a class="duration-500 hover:text-y300" href="/contact">{$_('nav.contact')}</a></li>
      </ul>
    </div>
  </div>

  <div class="border-t border-n500">
    <div class="container grid grid-cols-12 gap-6 py-10 max-sm:gap-8">
      {#each stats as s, i}
        <div class="col-span-12 text-center sm:col-span-4">
          <p class="display-4 !font-extrabold text-y300">{statsValues[i]}</p>
          <p class="mx-auto max-w-[220px] pt-2 text-sm font-medium">{s.label}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="border-y border-n500">
    <div class="grid grid-cols-12 lg:container max-xl:py-8">
      <div
        class="col-span-12 flex flex-col items-center justify-center border-n500 px-6 py-10 text-center max-lg:border-b sm:col-span-6 lg:border-r"
      >
        <p class="display-4 !font-extrabold">{$_('footer.minader')}</p>
        <p class="max-w-[250px] pt-2 text-sm font-medium">{$_('footer.minaderDesc')}</p>
      </div>
      <div class="col-span-12 flex flex-col items-center justify-center px-6 py-10 text-center sm:col-span-6">
        <p class="display-4 !font-extrabold">{$_('footer.bio')}</p>
        <p class="max-w-[250px] pt-2 text-sm font-medium">{$_('footer.bioDesc')}</p>
      </div>
    </div>
  </div>

  <div
    class="container flex flex-wrap items-center justify-between gap-6 py-8 text-sm font-medium max-md:flex-col"
  >
    <p>NIU : {NIU}&nbsp; •&nbsp; {RC}</p>
    <div class="flex items-center justify-center gap-5 text-2xl">
      <a href={waContact} target="_blank" rel="noopener" aria-label="WhatsApp"
        ><i class="ph ph-whatsapp-logo"></i></a
      >
      <a href={TEL_1_HREF} aria-label="Téléphone"><i class="ph ph-phone"></i></a>
      <a href="mailto:{EMAIL}" aria-label="Email"><i class="ph ph-envelope-simple"></i></a>
    </div>
    <p>© {new Date().getFullYear()} {$_('footer.rights')}</p>
  </div>
</footer>
