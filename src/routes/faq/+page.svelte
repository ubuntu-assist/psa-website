<script>
  import FaqSection from '$lib/partials/FaqSection.svelte';
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
</script>

<svelte:head>
  <title>FAQ - Servibe HTML Template</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- Header Section End -->

    <!-- Breadcrumb Section Start  -->
    <section
      class="stp-30 4xl:large-container mx-4 mt-[100px] rounded-3xl bg-n900 pb-52 md:pb-60 lg:rounded-[60px] lg:pb-72"
    >
      <div
        class="container flex flex-col items-center justify-center gap-3 text-white"
      >
        <h2 class="heading-2">FAQ Page</h2>

        <ul class="flex items-center justify-start gap-2 pt-3 font-medium">
          <li><a href="/index1">Home</a></li>
          <li class="text-r300"><i class="ph ph-caret-double-right"></i></li>
          <li class="text-r300">FAQ</li>
        </ul>
      </div>
    </section>
    <!-- Breadcrumb Section End  -->

    <!-- faq Section Start -->
    <section class="sbp-30">
      <div
        class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15"
      >
        <FaqSection />
      </div>
    </section>

    <!-- faq Section End -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
