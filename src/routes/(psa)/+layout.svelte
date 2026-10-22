<script>
  import Navbar from '$lib/psa/Navbar.svelte';
  import Footer from '$lib/psa/Footer.svelte';
  import ScrollTop from '$lib/psa/ScrollTop.svelte';
  import { SITE_URL, BUSINESS, TEL_1, TEL_2, EMAIL, LINKS } from '$lib/psa/data.js';

  let { children } = $props();

  // Site-wide structured data: the business (Google Maps / local results) + the website.
  const business = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GardenStore'],
    '@id': SITE_URL + '/#business',
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: SITE_URL,
    logo: SITE_URL + '/icon-512.png',
    image: [SITE_URL + '/og/default.jpg', SITE_URL + '/assets/images/psa/photos/equipe-psa.jpg'],
    description:
      "Pépinière et entreprise semencière à Dschang (Ouest-Cameroun) : plants et semences, fertilisants et protecteurs des cultures, tisanes et miel, formations, prestations agricoles et naturopathie.",
    foundingDate: BUSINESS.foundingDate,
    telephone: TEL_1.replace(/\s/g, ''),
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country
    },
    hasMap: [LINKS.graines, LINKS.plantes],
    areaServed: ['Cameroun', 'Afrique centrale'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: BUSINESS.openingHours.days,
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes
      }
    ],
    contactPoint: [TEL_1, TEL_2].map((t) => ({
      '@type': 'ContactPoint',
      telephone: t.replace(/\s/g, ''),
      contactType: 'customer service',
      availableLanguage: ['French', 'English']
    })),
    sameAs: [LINKS.facebook, LINKS.youtube, LINKS.tiktok, LINKS.x, LINKS.linkedin]
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_URL + '/#website',
    url: SITE_URL,
    name: BUSINESS.name,
    inLanguage: ['fr', 'en'],
    publisher: { '@id': SITE_URL + '/#business' }
  };
  const ld = JSON.stringify([business, website]).replace(/</g, '\\u003c');
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${ld}</script>`}
</svelte:head>

<div class="psa min-h-screen">
  <Navbar />
  <main>
    {@render children()}
  </main>
  <Footer />
  <ScrollTop />
</div>
