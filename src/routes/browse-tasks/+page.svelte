<script>
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
</script>

<svelte:head>
  <title>Browse Tasks - Servibe HTML Template</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- Header Section End -->

    <!-- Breadcrumb Section Start -->
    <section class="sbp-30 mt-[100px] bg-n20 pt-6">
      <div class="container">
        <ul class="flex items-center justify-start gap-2 pt-3 font-medium">
          <li><a href="/index1">Home</a></li>
          <li class="text-r300"><i class="ph ph-caret-double-right"></i></li>
          <li class="text-r300">Browse Tasks</li>
        </ul>
        <div
          class="flex items-center justify-between pt-10 max-md:gap-6 max-sm:flex-col"
        >
          <div class="flex flex-col items-start justify-start">
            <h3 class="heading-3">Turn this search into a job post</h3>
            <p class="max-w-[500px] pt-3 text-lg font-medium text-n300">
              Post a job for free and we’ll match you with experts perfect for
              your needs.
            </p>
            <div class="pt-8">
              <a
                href="/working-processed-step-01"
                class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
              >
                <span class="relative z-10">Post a job for free</span>
              </a>
            </div>
          </div>

          <div class="rounded-xl border border-b50 bg-white p-6">
            <div class="flex items-center justify-between gap-10 pb-6">
              <p class="heading-5">Your job</p>
              <p class="rounded-lg bg-b50 px-3 py-2 font-medium">MATCHED</p>
            </div>
            <div class="flex items-center justify-start">
              <div class="rounded-full bg-white p-1">
                <img
                  src="/assets/images/expert_img_1.png"
                  alt=""
                  class="size-12 rounded-full"
                />
              </div>
              <div class="-ml-4 rounded-full bg-white p-1">
                <img
                  src="/assets/images/expert_img_2.png"
                  alt=""
                  class="size-12 rounded-full"
                />
              </div>
              <div class="-ml-4 rounded-full bg-white p-1">
                <img
                  src="/assets/images/expert_img_3.png"
                  alt=""
                  class="size-12 rounded-full"
                />
              </div>

              <div class="pl-8 text-2xl">
                <i class="ph-bold ph-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Search Box Start -->
    <section class="sbp-30">
      <div class="container -mt-8 md:-mt-16">
        <div
          class="relative z-20 w-full rounded-3xl border border-n20 bg-white p-4 sm:p-8"
        >
          <form
            class="flex items-center justify-between text-lg font-medium max-sm:text-sm"
          >
            <div class="flex items-center justify-start gap-4 sm:gap-10">
              <div
                class="relative border-r pr-4 sm:pr-10"
                id="locationModalOpenButton"
              >
                <div
                  class="flex cursor-pointer items-center justify-between gap-2"
                >
                  <i class="ph ph-map-pin"></i>
                  <span class="locationText"
                    ><span class="max-[400px]:hidden">Select</span>
                    Location</span
                  >
                </div>

                <div
                  id="locationModal"
                  class="modalClose absolute left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-base duration-700 max-sm:text-sm sm:-left-8 sm:w-[220px] sm:py-5"
                >
                  <input
                    type="text"
                    class="mx-2 w-[90%] rounded-xl border border-n30 px-2 py-2 outline-none placeholder:text-n800 sm:mx-3 sm:px-3"
                    placeholder="Search"
                  />
                  <p
                    class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
                  >
                    Alaska
                  </p>
                  <p
                    class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
                  >
                    New York
                  </p>
                  <p
                    class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
                  >
                    California
                  </p>
                  <p
                    class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
                  >
                    Washington
                  </p>
                </div>
              </div>
              <div
                class="relative flex cursor-pointer items-center justify-between gap-2"
                id="servicesModalOpenButton"
              >
                <span class="serviceText"
                  ><span class="max-[400px]:hidden">Select your</span>
                  service</span
                >
                <i class="ph ph-caret-down"></i>

                <div
                  id="servicesModal"
                  class="modalClose absolute right-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-sm duration-700 sm:-left-8 sm:w-[220px] sm:py-5 sm:text-base"
                >
                  <p
                    class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
                  >
                    Handyman
                  </p>
                  <p
                    class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
                  >
                    Cleaning
                  </p>
                  <p
                    class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
                  >
                    Renovation
                  </p>
                  <p
                    class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
                  >
                    Photography
                  </p>
                </div>
              </div>
            </div>
            <button
              class="relative ml-2 flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:!leading-none max-md:size-11 md:px-8 md:py-3"
            >
              <i
                class="ph ph-magnifying-glass text-base !leading-none sm:text-xl md:hidden"
              ></i>
              <span class="relative z-10 max-md:hidden">Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
    <!-- Search Box end -->

    <!-- Browse Section Start -->
    <section class="sbp-30 overflow-hidden">
      <div
        class="4xl:large-container grid grid-cols-12 gap-6 max-4xl:container"
      >
        <div
          class="col-span-12 flex flex-col gap-6 lg:col-span-6 4xl:col-span-4"
        >
          <div
            class="flex w-full items-center justify-between gap-6 rounded-2xl border border-n30 px-6 py-5 max-sm:flex-col"
          >
            <div class="sm:max-w-[350px] lg:max-w-[230px] xxl:max-w-[300px]">
              <p class="heading-5">New Home Cleaning Solutions</p>
              <div
                class="flex flex-wrap gap-1 pt-6 text-sm font-medium text-n400"
              >
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/settings_icon.png" alt="" />
                  <span>Handyman</span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/cleaning_icon.svg" alt="" />
                  <span>Cleaning </span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/tap_icon.png" alt="" />
                  <span>Plumber </span>
                </p>
                <p class="rounded-xl bg-b50 px-3 py-2">+3</p>
              </div>
            </div>
            <div
              class="w-full rounded-2xl border border-n30 px-6 py-8 text-center font-medium text-n500 sm:w-[200px]"
            >
              <p class="text-sm">STARTING AT</p>
              <p class="py-1 font-semibold text-r300">$80 - &100/hr</p>
              <p class="pb-6 text-sm">Fixed Price</p>
              <a
                href="/service-details"
                class="block rounded-full border border-n200 px-5 py-2 text-sm"
                >View Details</a
              >
            </div>
          </div>
          <div
            class="flex w-full items-center justify-between gap-6 rounded-2xl border border-n30 px-6 py-5 max-sm:flex-col"
          >
            <div class="sm:max-w-[350px] lg:max-w-[230px] xxl:max-w-[300px]">
              <p class="heading-5">Full Garden Cleaning Solutions</p>
              <div
                class="flex flex-wrap gap-1 pt-6 text-sm font-medium text-n400"
              >
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/settings_icon.png" alt="" />
                  <span>Handyman</span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/cleaning_icon.svg" alt="" />
                  <span>Cleaning </span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/tap_icon.png" alt="" />
                  <span>Plumber </span>
                </p>
                <p class="rounded-xl bg-b50 px-3 py-2">+3</p>
              </div>
            </div>
            <div
              class="w-full rounded-2xl border border-n30 px-6 py-8 text-center font-medium text-n500 sm:w-[200px]"
            >
              <p class="text-sm">STARTING AT</p>
              <p class="py-1 font-semibold text-r300">$80 - &100/hr</p>
              <p class="pb-6 text-sm">Fixed Price</p>
              <a
                href="/service-details"
                class="block rounded-full border border-n200 px-5 py-2 text-sm"
                >View Details</a
              >
            </div>
          </div>
          <div
            class="flex w-full items-center justify-between gap-6 rounded-2xl border border-n30 px-6 py-5 max-sm:flex-col"
          >
            <div class="sm:max-w-[350px] lg:max-w-[230px] xxl:max-w-[300px]">
              <p class="heading-5">Sparkle Ease Cleaning Solutions</p>
              <div
                class="flex flex-wrap gap-1 pt-6 text-sm font-medium text-n400"
              >
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/settings_icon.png" alt="" />
                  <span>Handyman</span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/cleaning_icon.svg" alt="" />
                  <span>Cleaning </span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <img src="/assets/images/tap_icon.png" alt="" />
                  <span>Plumber </span>
                </p>
                <p class="rounded-xl bg-b50 px-3 py-2">+3</p>
              </div>
            </div>
            <div
              class="w-full rounded-2xl border border-n30 px-6 py-8 text-center font-medium text-n500 sm:w-[200px]"
            >
              <p class="text-sm">STARTING AT</p>
              <p class="py-1 font-semibold text-r300">$80 - &100/hr</p>
              <p class="pb-6 text-sm">Fixed Price</p>
              <a
                href="/service-details"
                class="block rounded-full border border-n200 px-5 py-2 text-sm"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-span-12 h-full w-full lg:col-span-6 lg:-mr-28 4xl:col-span-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99421.90003961018!2d-77.23924581739114!3d38.85685914425235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b82921a2cf17%3A0x482a3f7c10cf8c4!2sUnited%20States%20Capitol!5e0!3m2!1sen!2sbd!4v1709620058739!5m2!1sen!2sbd"
            class="h-full min-h-[200px] w-full"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
    <!-- Browse Section End -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
