<script>
  import Navbar from '$lib/psa/Navbar.svelte';
  import Footer from '$lib/psa/Footer.svelte';
  import ScrollTop from '$lib/psa/ScrollTop.svelte';

  let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
<ScrollTop />
