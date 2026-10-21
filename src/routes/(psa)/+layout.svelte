<script>
  import Navbar from '$lib/psa/Navbar.svelte';
  import Footer from '$lib/psa/Footer.svelte';
  import ScrollTop from '$lib/psa/ScrollTop.svelte';

  let { children } = $props();
</script>

<div class="psa min-h-screen">
  <Navbar />
  <main>
    {@render children()}
  </main>
  <Footer />
  <ScrollTop />
</div>
