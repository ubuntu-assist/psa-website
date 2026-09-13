<script>
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
</script>

<svelte:head>
  <title>Not Found - Servibe HTML Template</title>
</svelte:head>

<section
      class="stp-30 flex h-full w-full flex-col items-center justify-center"
    >
      <div class="">
        <img src="/assets/images/not-found-img.png" alt="" />
      </div>
      <div class="stp-15 flex flex-col items-center justify-center text-center">
        <h2 class="heading-2">Page Not Found</h2>
        <p class="pb-10 pt-3">
          The page you are looking for doesn't exist or has been moved
        </p>

        <a
          href="/index1"
          class="relative flex max-w-[300px] items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
        >
          <span class="relative z-10">Back To Home</span>
        </a>
      </div>
    </section>

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
