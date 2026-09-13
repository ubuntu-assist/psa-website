<script>
  import '../app.css';
  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(async () => {
    // The Servibe template pages need the vintage jQuery-free helpers + Swiper/AOS.
    // The PSA pages don't — so only pull that bundle in when template markup is present.
    const needsServibe = document.querySelector(
      '[data-aos], .expert2-slider-carousel, .professionalService, .home-four-slider-carousel, .hero-service-carousel, .stepsButton, .faqItem, .header, .odometer, .circleText, .home3-testimonial-carousel'
    );
    if (needsServibe) {
      const { initServibe } = await import('$lib/servibe.js');
      initServibe();
    }
  });
</script>

{@render children()}
