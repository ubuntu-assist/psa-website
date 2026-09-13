<script>
  import FaqSection from '$lib/partials/FaqSection.svelte';
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
  import TestimonialThree from '$lib/partials/TestimonialThree.svelte';
</script>

<svelte:head>
  <title>About Us - Servive Html Template</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- headerbg -->

    <!-- Breadcrump Section Start -->
    <section class="stp-15 sbp-15 mt-[100px] bg-n20">
      <div class="container flex flex-col items-center justify-center">
        <h2 class="heading-2">About Us</h2>
        <ul class="flex items-center justify-center gap-2 pt-3 font-medium">
          <li><a href="/index1">Home</a></li>
          <li class="text-r300"><i class="ph ph-caret-double-right"></i></li>
          <li class="text-r300">About Us</li>
        </ul>
      </div>
    </section>
    <!-- Breadcrump Section End -->

    <!-- About Us Section Start -->
    <section class="stp-30 sbp-30">
      <div class="container grid grid-cols-12 max-xl:gap-6">
        <div class="col-span-12 lg:col-span-7 xl:col-span-6">
          <div class="flex items-start justify-start gap-4 sm:gap-8">
            <div class="overflow-hidden rounded-2xl">
              <img src="/assets/images/about_us_img_1.png" alt="" />
            </div>
            <div
              class="flex flex-col items-center justify-center md:mt-16 xl:mt-4"
            >
              <p class="display-3 font-extrabold text-b300">
                0<span class="odometer" data-odometer-final="07">0</span>+
              </p>
              <p class="text-lg font-medium sm:min-w-[200px] xxl:text-xl">
                Years Experience
              </p>
            </div>
          </div>
          <div
            class="-mt-24 flex items-end justify-end overflow-hidden min-[370px]:-mt-40 sm:-mt-72 md:-mt-80 lg:-mt-52 xl:-mt-64 xxl:-mt-80"
          >
            <img
              src="/assets/images/about_us_img_2.png"
              alt=""
              class="rounded-2xl max-sm:max-w-[250px] max-[480px]:max-w-[180px] max-[370px]:max-w-[130px]"
            />
          </div>
        </div>

        <div
          class="col-span-12 flex flex-col items-start justify-center lg:col-span-5 xl:col-start-8"
        >
          <h5 class="heading-5 text-r300">About Us</h5>
          <h2 class="heading-2 max-w-[500px] pt-4">
            Know Our On-Demand Services Platform
          </h2>
          <p class="pb-4 pt-3 text-n300 xl:pb-8">
            Readers are distracted by readable content when viewing page layout.
            This phenomenon has long been recognized in the design and
            publishing industries.
          </p>
          <ul class="ml-4 flex list-disc flex-col gap-3 pb-6 xl:pb-10">
            <li>Readers are distracted by readable content when viewing</li>
            <li>Biodegradable chemicals are used</li>
            <li>Cleaning Tools will be used to remove deep stains</li>
            <li>Complete Sanitization and cleaning of bathroom</li>
          </ul>

          <div class="text-sm text-white">
            <a
              href="/contact"
              class="group relative flex items-center justify-start pr-12 font-semibold"
              ><span
                class="rounded-full bg-b300 px-6 py-3 duration-500 group-hover:translate-x-12"
                >Know More About</span
              >
              <i
                class="ph-bold ph-arrow-up-right absolute right-0.5 top-0 translate-x-0 rounded-full bg-b300 p-[14px] text-lg !leading-none duration-500 group-hover:right-[178px] group-hover:rotate-45"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us Section End -->

    <!-- How Does Service Work Start -->
    <section class="stp-30 sbp-30 bg-n900">
      <div class="container text-white">
        <h2 class="heading-2 text-center">How does Servibe work?</h2>

        <div class="stp-15 grid grid-cols-12 gap-6">
          <div
            class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
          >
            <div
              class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900"
            >
              <i class="ph-bold ph-files text-3xl !leading-none"></i>
            </div>
            <div class="max-w-[380px]">
              <h5 class="heading-5 pt-10">Businesses post Shifts for free</h5>
              <p class="pt-3">
                Tap into a nationwide network of Workers as your reserve labor
                pool
              </p>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
          >
            <div
              class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900"
            >
              <i class="ph-bold ph-shield-checkered text-3xl !leading-none"></i>
            </div>
            <div class="max-w-[380px]">
              <h5 class="heading-5 pt-10">Hire with confidence</h5>
              <p class="pt-3">
                Tap into a nationwide network of Workers as your reserve labor
                pool
              </p>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
          >
            <div
              class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900"
            >
              <i class="ph-bold ph-users-three text-3xl !leading-none"></i>
            </div>
            <div class="max-w-[380px]">
              <h5 class="heading-5 pt-10">
                Qualified Workers notified instantly
              </h5>
              <p class="pt-3">
                Tap into a nationwide network of Workers as your reserve labor
                pool
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How Does Service Work End -->

    <!-- Top Expert Section Start -->
    <section class="stp-30 sbp-30">
      <div class="container">
        <div class="flex items-center justify-between gap-2">
          <div class="flex max-w-[300px] flex-col">
            <h2 class="heading-2 font-bold text-n900">
              Top <span class="text-b300 underline">Experts</span>
            </h2>
            <p class="pt-4 font-medium text-n500">
              Our skilled and reliable experts, your most trusted partners.
            </p>
          </div>
          <div class="">
            <a
              href="/find-workers"
              class="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
              >All Experts
              <i class="ph-bold ph-arrow-right text-2xl !leading-none"></i
            ></a>
          </div>
        </div>

        <div class="stp-15 grid grid-cols-12 gap-6">
          <div
            class="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
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
                      <div class="absolute -top-[19px] left-[4px] z-20">
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
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
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
                      <div class="absolute -top-[19px] left-[4px] z-20">
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
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
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
                      <div class="absolute -top-[19px] left-[4px] z-20">
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
        </div>
      </div>
    </section>
    <!-- Top Expert Section End -->

    <!-- Testimonial Section Start -->
    <TestimonialThree />
    <!-- Testimonial Section End -->

    <!-- Frequent Asked Questions Start -->
    <section class="stp-30 sbp-30">
      <FaqSection />
    </section>
    <!-- Frequent Asked Questions End -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
