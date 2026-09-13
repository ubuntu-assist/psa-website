<script>
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
  import SearchBox from '$lib/partials/SearchBox.svelte';
</script>

<svelte:head>
  <title>All Services - Servibe HTML Template</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- Header Section End -->

    <!-- Breadcrumb Section Start -->
    <section class="sbp-30 mt-[100px] bg-n20 pt-6">
      <div class="container">
        <ul
          class="flex flex-wrap items-center justify-start gap-2 pt-3 font-medium"
        >
          <li><a href="/index1">Home</a></li>

          <li class="text-r300"><i class="ph ph-caret-double-right"></i></li>
          <li class="text-r300">Services</li>
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
        <SearchBox />
      </div>
    </section>
    <!-- Search Box end -->

    <!-- Services Start -->
    <section class="sbp-30">
      <div class="container grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-4">
          <div class="rounded-xl border border-n30 px-6 py-8">
            <h5 class="heading-5">Filter by</h5>
            <div class="flex flex-col gap-6 pt-8">
              <div class="rounded-xl bg-n10 p-6">
                <p class="pb-3 text-lg font-semibold">Keyword</p>
                <input
                  type="text"
                  class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
                  placeholder="What are you looking for?"
                />
              </div>
              <div class="rounded-xl bg-n10 p-6">
                <p class="pb-3 text-lg font-semibold">Location</p>
                <input
                  type="text"
                  class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
                  placeholder="Location"
                />
              </div>
              <div class="rounded-xl bg-n10 p-6">
                <p class="pb-3 text-lg font-semibold">Categories</p>
                <input
                  type="text"
                  class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
                  placeholder="Categories"
                />
              </div>
              <button
                class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
              >
                <span class="relative z-10">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div
          class="col-span-12 rounded-xl border border-n30 p-4 sm:p-8 lg:col-span-8"
        >
          <div class="flex flex-col gap-4">
            <div
              class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
            >
              <div
                class="flex items-center justify-start max-xxl:gap-2 max-sm:flex-col"
              >
                <div
                  class="flex items-center justify-center self-stretch sm:w-[80%]"
                >
                  <img
                    src="/assets/images/workers_profile_service_img1.png"
                    alt=""
                    class="rounded-2xl object-cover"
                  />
                </div>
                <div class="">
                  <h5 class="heading-5">Sparkle Ease Cleaning Solutions</h5>
                  <div
                    class="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6"
                  >
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/settings_icon.png" alt="" />
                      <span>Handyman</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Plumber</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <span>+4</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]"
              >
                <p class="text-sm font-semibold">STARTING AT</p>
                <p class="py-1 font-semibold text-r300">$75 - &100/hr</p>
                <p class="pb-5 text-sm font-semibold">Fixed Price</p>
                <a
                  href="/service-details"
                  class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
                >
                  <span class="relative z-10">View Details</span>
                </a>
              </div>
            </div>
            <div
              class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
            >
              <div
                class="flex items-center justify-start max-xxl:gap-2 max-sm:flex-col"
              >
                <div
                  class="flex items-center justify-center self-stretch sm:w-[80%]"
                >
                  <img
                    src="/assets/images/workers_profile_service_img2.png"
                    alt=""
                    class="rounded-2xl object-cover"
                  />
                </div>
                <div class="">
                  <h5 class="heading-5">Sparkle Ease Cleaning Solutions</h5>
                  <div
                    class="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6"
                  >
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/settings_icon.png" alt="" />
                      <span>Handyman</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Plumber</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <span>+4</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]"
              >
                <p class="text-sm font-semibold">STARTING AT</p>
                <p class="py-1 font-semibold text-r300">$75 - &100/hr</p>
                <p class="pb-5 text-sm font-semibold">Fixed Price</p>
                <a
                  href="/service-details"
                  class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
                >
                  <span class="relative z-10">View Details</span>
                </a>
              </div>
            </div>
            <div
              class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
            >
              <div
                class="flex items-center justify-start max-xxl:gap-2 max-sm:flex-col"
              >
                <div
                  class="flex items-center justify-center self-stretch sm:w-[80%]"
                >
                  <img
                    src="/assets/images/workers_profile_service_img3.png"
                    alt=""
                    class="rounded-2xl object-cover"
                  />
                </div>
                <div class="">
                  <h5 class="heading-5">Sparkle Ease Cleaning Solutions</h5>
                  <div
                    class="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6"
                  >
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/settings_icon.png" alt="" />
                      <span>Handyman</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Plumber</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <span>+4</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]"
              >
                <p class="text-sm font-semibold">STARTING AT</p>
                <p class="py-1 font-semibold text-r300">$75 - &100/hr</p>
                <p class="pb-5 text-sm font-semibold">Fixed Price</p>
                <a
                  href="/service-details"
                  class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
                >
                  <span class="relative z-10">View Details</span>
                </a>
              </div>
            </div>
            <div
              class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
            >
              <div
                class="flex items-center justify-start max-xxl:gap-2 max-sm:flex-col"
              >
                <div
                  class="flex items-center justify-center self-stretch sm:w-[80%]"
                >
                  <img
                    src="/assets/images/workers_profile_service_img4.png"
                    alt=""
                    class="rounded-2xl object-cover"
                  />
                </div>
                <div class="">
                  <h5 class="heading-5">Sparkle Ease Cleaning Solutions</h5>
                  <div
                    class="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6"
                  >
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/settings_icon.png" alt="" />
                      <span>Handyman</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Plumber</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <span>+4</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]"
              >
                <p class="text-sm font-semibold">STARTING AT</p>
                <p class="py-1 font-semibold text-r300">$75 - &100/hr</p>
                <p class="pb-5 text-sm font-semibold">Fixed Price</p>
                <a
                  href="/service-details"
                  class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
                >
                  <span class="relative z-10">View Details</span>
                </a>
              </div>
            </div>
            <div
              class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
            >
              <div
                class="flex items-center justify-start max-xxl:gap-2 max-sm:flex-col"
              >
                <div
                  class="flex items-center justify-center self-stretch sm:w-[80%]"
                >
                  <img
                    src="/assets/images/workers_profile_service_img1.png"
                    alt=""
                    class="rounded-2xl object-cover"
                  />
                </div>
                <div class="">
                  <h5 class="heading-5">Sparkle Ease Cleaning Solutions</h5>
                  <div
                    class="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6"
                  >
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/settings_icon.png" alt="" />
                      <span>Handyman</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Plumber</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <span>+4</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]"
              >
                <p class="text-sm font-semibold">STARTING AT</p>
                <p class="py-1 font-semibold text-r300">$75 - &100/hr</p>
                <p class="pb-5 text-sm font-semibold">Fixed Price</p>
                <a
                  href="/service-details"
                  class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
                >
                  <span class="relative z-10">View Details</span>
                </a>
              </div>
            </div>
            <div
              class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
            >
              <div
                class="flex items-center justify-start max-xxl:gap-2 max-sm:flex-col"
              >
                <div
                  class="flex items-center justify-center self-stretch sm:w-[80%]"
                >
                  <img
                    src="/assets/images/workers_profile_service_img2.png"
                    alt=""
                    class="rounded-2xl object-cover"
                  />
                </div>
                <div class="">
                  <h5 class="heading-5">Sparkle Ease Cleaning Solutions</h5>
                  <div
                    class="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6"
                  >
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/settings_icon.png" alt="" />
                      <span>Handyman</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img src="/assets/images/tap_icon.png" alt="" />
                      <span>Plumber</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <span>+4</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]"
              >
                <p class="text-sm font-semibold">STARTING AT</p>
                <p class="py-1 font-semibold text-r300">$75 - &100/hr</p>
                <p class="pb-5 text-sm font-semibold">Fixed Price</p>
                <a
                  href="/service-details"
                  class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
                >
                  <span class="relative z-10">View Details</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Pagination section Start -->
          <div class="container pt-8">
            <ul
              class="flex items-center justify-center gap-2 font-medium text-white sm:gap-3"
            >
              <li
                class="flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300"
              >
                <i class="ph ph-caret-left"></i>
              </li>
              <li
                class="flex size-12 cursor-pointer items-center justify-center rounded-full bg-n900 duration-500 hover:bg-b300"
              >
                1
              </li>
              <li
                class="flex size-12 cursor-pointer items-center justify-center rounded-full bg-b300"
              >
                2
              </li>
              <li
                class="flex size-12 cursor-pointer items-center justify-center rounded-full bg-n900 duration-500 hover:bg-b300"
              >
                3
              </li>
              <li
                class="flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300"
              >
                <i class="ph ph-caret-right"></i>
              </li>
            </ul>
          </div>
          <!-- Pagination section End -->
        </div>
      </div>
    </section>
    <!-- Services End -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
