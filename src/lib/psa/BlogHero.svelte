<script>
  import { _ } from 'svelte-i18n';
  /** @type {{ title: string, crumb?: string }} */
  let { title, crumb = '' } = $props();
</script>

<section
  class="stp-30 4xl:large-container mx-4 mt-4 rounded-3xl bg-n900 pb-52 md:pb-60 lg:rounded-[60px] lg:pb-72"
>
  <div class="container flex flex-col items-center justify-center gap-3 text-white">
    <h1 class="heading-2 text-center">{title}</h1>
    <ul class="flex flex-wrap items-center justify-center gap-2 pt-3 font-medium">
      <li><a href="/" class="hover:text-y300">{$_('nav.accueil')}</a></li>
      <li class="text-y300"><i class="ph ph-caret-double-right"></i></li>
      <li><a href="/blog" class="hover:text-y300">{$_('nav.blog')}</a></li>
      {#if crumb}
        <li class="text-y300"><i class="ph ph-caret-double-right"></i></li>
        <li class="text-y300">{crumb}</li>
      {/if}
    </ul>
  </div>
</section>
