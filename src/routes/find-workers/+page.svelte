<script>
  import FaqSection from '$lib/partials/FaqSection.svelte';
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import NewsLetterSection from '$lib/partials/NewsLetterSection.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
  import SearchBox from '$lib/partials/SearchBox.svelte';
</script>

<svelte:head>
  <title>Find Workers - Servibe HTML Template</title>
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
          <li class="text-r300">Find Workers</li>
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

    <!--workers list start  -->
    <section class="sbp-15">
      <div class="container">
        <h2 class="heading-2 pb-3">
          Discover the world’s best flexible talent
        </h2>
        <p class="font-medium text-n300">
          Browse and connect with top talent who can help bring your next
          project to life
        </p>

        <div class="stp-15 sbp-15 flex items-start justify-start">
          <div
            class="flex flex-wrap items-center justify-start gap-3 overflow-hidden rounded-lg border border-b50 p-1 min-[380px]:rounded-full"
          >
            <div
              class="flex cursor-pointer items-center justify-start gap-3 rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300"
              id="filterButton"
            >
              <i class="ph ph-sliders"></i>
              <span class="">Filters</span>
            </div>
            <div
              class="flex cursor-pointer rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300"
              id="location"
            >
              <span class="">Location</span>
            </div>
            <div
              class="cursor-pointer rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300"
              id="rate"
            >
              <span class="">Rate</span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg5 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Mayme Cole</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg4 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Clyde Gordon</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg3 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Madge Dale</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg2 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Evan Dev</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg1 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Ruth Vega</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[20px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg5 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Scott Wade</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg4 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Mayme Cole</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[20px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg3 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Clyde Gordon</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
          >
            <div class="flex items-center justify-start gap-3 px-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[20px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg5 r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img src="/assets/images/verify-badge.png" alt="" class="" />
                </div>
              </div>
              <div class="max-[350px]:max-w-20">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">Madge Dale</h5>
                  <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                    PRO
                  </p>
                </div>
                <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-[13px]">
              <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                $75 - $100/hr
              </p>
              <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                TOP INDEPENDENT
              </p>
              <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                AVAILABLE
              </p>
            </div>

            <div class="flex flex-wrap gap-2 px-6 text-n400">
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
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>

            <div class="relative">
              <div class="swiper expert-slider-carousel group">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_6.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_1.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_4.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_5.png"
                      alt=""
                      class="w-full"
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_2.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="/assets/images/expert_slider_img_3.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="absolute left-2 right-2 top-28 z-10">
                  <div class="flex w-full items-center justify-between">
                    <button
                      class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-left"></i>
                    </button>
                    <button
                      class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <i class="ph-bold ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-2 px-6">
              <a
                href="/worker-profile"
                class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
              <button
                class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
              >
                <i class="ph ph-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--workers list end  -->

    <!-- Pagination section Start -->
    <section class="sbp-30 container max-lg:pt-8">
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
    </section>
    <!-- Pagination section End -->

    <!-- Newsletter Section Start -->
    <NewsLetterSection />
    <!-- Newsletter Section End -->

    <!-- Frequent Asked Questions Start -->
    <section class="stp-30 sbp-30">
      <FaqSection />
    </section>
    <!-- Frequent Asked Questions End -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Filter Modal Start -->
    <section
      id="filterModal"
      class="filterModalClose fixed left-0 right-0 top-0 z-[999] flex h-auto items-center justify-center overflow-y-auto bg-b50/60 delay-500 duration-1000"
    >
      <div
        class="mx-3 my-6 max-h-[95vh] max-w-[1175px] overflow-y-auto rounded-2xl bg-white p-8"
      >
        <div class="flex items-center justify-between gap-3">
          <p class="text-xl font-medium">All filters (0)</p>
          <button id="filterModalCloseButton">
            <i class="ph ph-x text-2xl"></i>
          </button>
        </div>
        <div
          class="flex w-full items-center justify-start gap-4 border-b border-n30 py-6"
        >
          <label class="inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" class="peer sr-only" />
            <span
              class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
            ></span>
          </label>

          <p class="text-lg text-n300">Accepting New Clients</p>
        </div>

        <div class="border-b border-n30 py-6">
          <p class="text-xl font-medium">Category (select one)</p>
          <div class="flex flex-wrap items-center justify-start gap-3 pt-3">
            <div
              class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
            >
              <img src="/assets/images/filter_category_1.png" alt="" />
              <p class="text-n300">All Categories</p>
            </div>
            <div
              class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
            >
              <img src="/assets/images/filter_category_2.svg" alt="" />
              <p class="text-n300">All Categories</p>
            </div>
            <div
              class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
            >
              <img src="/assets/images/filter_category_3.svg" alt="" />
              <p class="text-n300">All Categories</p>
            </div>
            <div
              class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
            >
              <img src="/assets/images/filter_category_4.svg" alt="" />
              <p class="text-n300">All Categories</p>
            </div>
            <div
              class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
            >
              <img src="/assets/images/filter_category_5.svg" alt="" />
              <p class="text-n300">All Categories</p>
            </div>

            <div
              class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
            >
              <img src="/assets/images/filter_category_6.svg" alt="" />
              <p class="text-n300">All Categories</p>
            </div>
            <div
              class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
            >
              <img src="/assets/images/filter_category_7.svg" alt="" />
              <p class="text-n300">All Categories</p>
            </div>
          </div>
        </div>

        <div class="border-b border-n30 py-6">
          <p class="pb-3 text-xl font-medium">Services</p>
          <div
            class="flex items-center justify-between rounded-xl border border-n30 px-3 py-2 text-n300"
          >
            <p>Choose your Services</p>
            <i class="ph ph-caret-down"></i>
          </div>
        </div>

        <div class="border-b border-n30 py-6">
          <p class="pb-3 text-xl font-medium">Hourly Rate (select multiple)</p>
          <div
            class="flex flex-wrap items-center justify-start gap-3 text-sm text-n300"
          >
            <p class="rounded-2xl border border-n30 px-4 py-2">$25 - $50/hr</p>
            <p class="rounded-2xl border border-n30 px-4 py-2">$50 - $75/hr</p>
            <p class="rounded-2xl border border-n30 px-4 py-2">$75 - $100/hr</p>
            <p class="rounded-2xl border border-n30 px-4 py-2">
              $100 - $150/hr
            </p>
            <p class="rounded-2xl border border-n30 px-4 py-2">
              $150 - $200/hr
            </p>
            <p class="rounded-2xl border border-n30 px-4 py-2">$200+/hr</p>
          </div>
        </div>

        <div
          class="flex items-center justify-between gap-6 border-b border-n30 py-6 max-md:flex-col"
        >
          <div class="w-full">
            <p class="pb-3 text-xl font-medium">Location</p>
            <div
              class="flex items-center justify-between rounded-xl border border-n30 px-3 py-2 text-n300"
            >
              <input
                type="text"
                placeholder="Type your Location"
                class="w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <div class="w-full">
            <p class="pb-3 text-xl font-medium">Languages</p>
            <div
              class="flex items-center justify-between rounded-xl border border-n30 px-3 py-2 text-n300"
            >
              <input
                type="text"
                placeholder="Type your Location"
                class="w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div class="flex items-end justify-end gap-6 pt-6 max-[400px]:flex-col">
          <button
            class="relative flex items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
          >
            <span class="relative z-10">Clear Filters</span>
          </button>
          <button
            class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
          >
            <span class="relative z-10">View 120 result</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Filter Modal End -->
    <div
      id="filterModalBg"
      class="filterModalBgClose fixed inset-0 z-[998] bg-b50/60 duration-700"
    ></div>
    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
