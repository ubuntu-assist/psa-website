<script>
  import { _ } from 'svelte-i18n';
  import PageHeader from './PageHeader.svelte';
  /** @type {{ title: string, crumb?: string, subtitle?: string, image?: string }} */
  let { title, crumb = '', subtitle = '', image = '' } = $props();
</script>

<PageHeader
  {title}
  {subtitle}
  {image}
  crumbs={crumb ? [{ label: $_('nav.blog'), href: '/blog' }, { label: crumb }] : [{ label: $_('nav.blog') }]}
/>
