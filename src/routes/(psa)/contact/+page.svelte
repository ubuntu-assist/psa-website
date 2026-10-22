<script>
  import { _ } from 'svelte-i18n';
  import PageHeader from '$lib/psa/PageHeader.svelte';
  import ContactSection from '$lib/psa/ContactSection.svelte';
  import ScanSection from '$lib/psa/ScanSection.svelte';
  import Seo from '$lib/psa/Seo.svelte';
</script>

<Seo title={$_('contactPage.title')} description={$_('seo.contact')} image="/og/contact.jpg" />

<PageHeader
  kicker={$_('hero.eyebrow')}
  title={$_('contactPage.title')}
  subtitle={$_('contactPage.subtitle')}
  image="/assets/images/psa/photos/hero-farmer-1200.jpg"
/>

<ContactSection />

<ScanSection />
