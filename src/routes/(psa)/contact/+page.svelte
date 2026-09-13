<script>
  import { _ } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import ContactSection from '$lib/psa/ContactSection.svelte';
</script>

<svelte:head>
  <title>{$_('contactPage.title')} — Pépinière Semences d'Avenir</title>
  <meta name="description" content={$_('contactPage.subtitle')} />
</svelte:head>

<PageHeader title={$_('contactPage.title')} subtitle={$_('contactPage.subtitle')} />

<ContactSection />
