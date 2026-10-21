<script>
  import { _ } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import ContactSection from '$lib/psa/ContactSection.svelte';
  import ScanSection from '$lib/psa/ScanSection.svelte';
</script>

<svelte:head>
  <title>{$_('contactPage.title')} — Pépinière Semences d'Avenir</title>
  <meta name="description" content={$_('contactPage.subtitle')} />
</svelte:head>

<PageHeader
  kicker={$_('hero.eyebrow')}
  title={$_('contactPage.title')}
  subtitle={$_('contactPage.subtitle')}
  image="/assets/images/psa/photos/hero-farmer-1200.jpg"
/>

<ContactSection />

<ScanSection />
