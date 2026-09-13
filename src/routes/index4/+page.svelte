<script>
  import GetHelpTodaySection from '$lib/partials/GetHelpTodaySection.svelte';
  import Header from '$lib/partials/Header.svelte';
  import HowItWorksSection from '$lib/partials/HowItWorksSection.svelte';
  import LookingForServiceSection from '$lib/partials/LookingForServiceSection.svelte';
  import NewsLetterSection from '$lib/partials/NewsLetterSection.svelte';
  import RecentPostsSection from '$lib/partials/RecentPostsSection.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
  import SearchBox from '$lib/partials/SearchBox.svelte';
  import SecureGuardSection from '$lib/partials/SecureGuardSection.svelte';
  import TopExpertsSection from '$lib/partials/TopExpertsSection.svelte';
  import { onMount } from 'svelte';
  import { loadPageScripts } from '$lib/pageScripts.js';

  onMount(() => loadPageScripts(["/assets/js/plugins/matter.min.js","/assets/js/plugins/matterjs-custom.js"]));
</script>

<svelte:head>
  <title>Servibe Home Page Three</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- Header Section End -->

    <!-- Hero Section Start -->
    <section class="pt-[100px]">
      <div
        class="bg relative z-10 h-[650px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
      >
        <div class="absolute inset-0 z-20 bg-n900/80"></div>
        <div class="swiper home-four-slider-carousel smooth absolute inset-0">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero1.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero2.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero3.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero4.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero1.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero2.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero3.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero4.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero1.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero2.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero3.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero4.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero1.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero2.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero3.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/images/home_four_hero4.png" alt="" />
            </div>
          </div>
        </div>

        <div
          class="relative z-30 mx-auto flex h-full max-w-[950px] flex-col items-center justify-center text-center text-white max-xxl:overflow-hidden"
        >
          <h5
            class="heading-5 pb-3 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            Your Solution Hub
          </h5>
          <h1
            class="display-2 pb-6 font-extrabold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            Find the Right <br />
            <span class="text-y300">Talent</span> for Any Task
          </h1>
          <p
            class="w-[95%] pb-10 text-xl sm:text-2xl"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            Access assistance from a vast network of reliable local experts,
            spanning home repairs to beauty services.
          </p>
          <div class="w-[95%] text-n900 md:w-[650px] lg:w-[800px] xl:w-[950px]">
            <SearchBox />
          </div>

          <ul
            class="flex flex-wrap items-center justify-start gap-2 pl-2 pt-8 font-medium text-n900 max-sm:text-sm sm:gap-3"
          >
            <li class="heading-5 text-white">Popular:</li>
            <li class="rounded-lg bg-b50 px-2 py-2 sm:px-4">Handyman</li>
            <li class="rounded-lg bg-bg2 px-2 py-2 sm:px-4">Babysitting</li>
            <li class="rounded-lg bg-eb50 px-2 py-2 sm:px-4">Photography</li>
            <li class="rounded-lg bg-bg1 px-2 py-2 sm:px-4">Renovation</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- How It Works Section Start -->
    <HowItWorksSection />
    <!-- How It Works Section End -->

    <!-- Top Expert Section Start -->
    <section class="stp-30 sbp-30 bg-n20">
      <TopExpertsSection />
    </section>
    <!-- Top Expert Section End -->

    <!-- Looking for service section Start -->
    <section class="stp-30 sbp-30">
      <LookingForServiceSection />
    </section>
    <!-- Looking for service section End -->

    <!-- Newsletter Section Start -->
    <NewsLetterSection />
    <!-- Newsletter Section End -->

    <!-- Secure Guard Start -->
    <section class="stp-30 sbp-30">
      <SecureGuardSection />
    </section>
    <!-- Secure Guard End -->

    <!-- Testimonial Section Start -->
    <section class="stp-30 sbp-30 relative overflow-hidden bg-b50">
      <div class="absolute right-0 top-0">
        <img
          src="/assets/images/home-four-illus.png"
          alt=""
          class="max-[1860px]:w-[280px] max-3xl:w-[150px] max-xl:hidden"
        />
      </div>
      <div class="container">
        <div
          class="sbp-15 flex items-center justify-between gap-6 border-b border-sp max-sm:flex-col"
        >
          <div class="">
            <h5 class="heading-5 text-r300">Testimonials</h5>
            <h2 class="heading-2 max-w-[500px] pt-4">
              What Users Are Saying About The Servibe
            </h2>
          </div>
          <p class="font-medium text-n500 sm:max-w-[300px]">
            Incredibly impressed on-demand cleaning service. Prompt, thorough
            and left home sparkling.
          </p>
        </div>

        <div class="grid grid-cols-12 max-lg:gap-6">
          <div
            class="stp-15 col-span-12 flex items-center justify-center border-sp pr-6 md:col-span-4 md:border-r lg:col-span-5 lg:pr-20"
          >
            <img
              src="/assets/images/testimonial_img.png"
              alt=""
              class="max-md:max-h-[300px]"
            />
          </div>

          <div
            class="col-span-12 flex items-center justify-start md:col-span-7 lg:col-span-6 lg:col-start-7"
          >
            <div class="swiper testimonial4-slider-carousel md:max-lg:pt-6">
              <div class="swiper-wrapper">
                <div class="swiper-slide w-full">
                  <p
                    class="border-b border-sp pb-5 text-lg font-medium text-n500 sm:text-xl"
                  >
                    "Incredibly impressed on-demand cleaning service. Prompt,
                    thorough and left home sparkling. A game-changer for busy
                    schedules! Uber has transformed my daily commute. Reliable
                    drivers, easy booking, and the app's convenience
                  </p>

                  <h4 class="heading-4 pt-5">Andrew Russel</h4>
                  <p class="pt-1 font-medium text-n500">VP of Marketing</p>
                </div>
              </div>
              <div
                class="flex items-center justify-start gap-3 pt-6 text-2xl !leading-none text-b300 lg:pt-10"
              >
                <button
                  class="hover: ara-prev flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:-rotate-45 hover:bg-b300 hover:text-white lg:p-4"
                >
                  <i class="ph ph-arrow-up-left"></i>
                </button>
                <button
                  class="hover: ara-next flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:rotate-45 hover:bg-b300 hover:text-white lg:p-4"
                >
                  <i class="ph ph-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Testimonial Section End -->

    <!-- Recent Post Section Start -->
    <section class="stp-30 sbp-30">
      <RecentPostsSection />
    </section>
    <!-- Recent Post Section End -->

    <!-- Find work and hiring section start -->
    <section class="stp-30 sbp-30 relative">
      <div
        class="absolute left-0 top-0 w-full bg-g300 max-md:h-1/2 md:bottom-0 md:w-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-full bg-r300 max-md:h-1/2 md:top-0 md:w-1/2"
      ></div>
      <div
        class="container relative z-10 grid grid-cols-12 overflow-hidden max-md:gap-6"
      >
        <div
          class="col-span-12 grid grid-cols-6 max-sm:pb-6 sm:max-md:pb-24 md:col-span-5"
        >
          <div class="col-span-6 rounded-xl border bg-g75 p-8 lg:col-span-5">
            <div class="flex items-start justify-between">
              <p class="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                PRO
              </p>
              <div class="">
                <div class="">
                  <img
                    src="/assets/images/review_img.png"
                    alt=""
                    class="w-[75px]"
                  />
                </div>
                <div class="flex gap-2 pt-2">
                  <p
                    class="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300"
                  >
                    <i class="ph-fill ph-star"></i> 4.7
                  </p>
                  <div class="text-sm text-n300">
                    <p class="">(81)</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center justify-center py-6">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]"
                >
                  <div class="absolute -top-11 left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]"
                    >
                      <div class="absolute -top-[42px] left-[5px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                class="expertImg5 r-hex-inner-3 before:h-[190px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-5 right-1 z-30">
                  <img
                    src="/assets/images/verify-badge2.png"
                    alt=""
                    class=""
                  />
                </div>
              </div>
              <div class="pt-3">
                <div class="flex flex-col items-center justify-start gap-3">
                  <h5 class="heading-5">I am an Expert</h5>
                </div>
                <p class="pt-2 text-center text-n500 sm:px-3">
                  I'm a Skilled Professional, Ready to Assist with Expertise and
                  Dedication in Your Task.
                </p>
              </div>
            </div>
            <div
              class="flex items-center justify-between border-b border-n40 pb-6"
            >
              <div class="flex items-center justify-start gap-2">
                <i class="ph ph-clock text-2xl !leading-none"></i>
                <p>Full-Time</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <i class="ph ph-chart-line text-2xl !leading-none"></i>
                <p>10+ Years</p>
              </div>
            </div>

            <div class="flex w-full items-center justify-center pt-8">
              <a
                href="/find-workers"
                class="group relative flex items-center justify-start pr-12 font-semibold"
                ><span
                  class="rounded-full bg-g300 px-6 py-3 duration-500 group-hover:translate-x-12"
                  >Explore Now</span
                >
                <i
                  class="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-g300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[152px] group-hover:rotate-45"
                ></i
              ></a>
            </div>
          </div>
        </div>

        <div
          class="col-span-12 flex flex-col items-start max-sm:pt-6 md:col-span-5 md:col-start-8"
        >
          <div class="col-span-12 grid grid-cols-6 sm:col-span-5">
            <div
              class="col-span-6 rounded-xl border bg-r50 p-8 lg:col-span-5 lg:col-start-2"
            >
              <div class="flex items-start justify-between">
                <p class="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                  PRO
                </p>
                <div class="">
                  <div class="">
                    <img
                      src="/assets/images/review_img.png"
                      alt=""
                      class="w-[75px]"
                    />
                  </div>
                  <div class="flex gap-2 pt-2">
                    <p
                      class="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300"
                    >
                      <i class="ph-fill ph-star"></i> 4.7
                    </p>
                    <div class="text-sm text-n300">
                      <p class="">(81)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center py-6">
                <div class="relative max-md:overflow-hidden">
                  <div
                    class="hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]"
                  >
                    <div class="absolute -top-11 left-[5px]">
                      <div
                        class="hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]"
                      >
                        <div class="absolute -top-[42px] left-[5px] z-20">
                          <div
                            class="hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]"
                          >
                            <div
                              class="r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden"
                            >
                              <div class="r-hex-inner3">
                                <div
                                  class="expertImg2 r-hex-inner-3 before:h-[190px] before:bg-cover"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute bottom-5 right-1 z-30">
                    <img
                      src="/assets/images/verify-badge2.png"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
                <div class="pt-3">
                  <div class="flex flex-col items-center justify-start gap-3">
                    <h5 class="heading-5">I am an Expert</h5>
                  </div>
                  <p class="pt-2 text-center text-n500 sm:px-3">
                    I'm a Skilled Professional, Ready to Assist with Expertise
                    and Dedication in Your Task.
                  </p>
                </div>
              </div>
              <div
                class="flex items-center justify-between border-b border-n40 pb-6"
              >
                <div class="flex items-center justify-start gap-2">
                  <i class="ph ph-clock text-2xl !leading-none"></i>
                  <p>Full-Time</p>
                </div>
                <div class="flex items-center justify-start gap-2">
                  <i class="ph ph-chart-line text-2xl !leading-none"></i>
                  <p>10+ Years</p>
                </div>
              </div>

              <div class="flex w-full items-center justify-center pt-8">
                <a
                  href="/find-workers"
                  class="group relative flex items-center justify-start pr-12 font-semibold"
                  ><span
                    class="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12"
                    >Explore Now</span
                  >
                  <i
                    class="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[152px] group-hover:rotate-45"
                  ></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Find work and hiring section end -->

    <!-- Get Help Section Start -->
    <GetHelpTodaySection />
    <!-- Get Help Section End -->

    <!-- Footer section start -->
    <section class="stp-15 overflow-hidden bg-n900">
      <div class="4xl:large-container text-white max-4xl:mx-4">
        <div
          class="sbp-15 flex items-center justify-between border-b border-n500 max-xl:flex-col max-xl:gap-6"
        >
          <div
            class="flex w-full items-center justify-start gap-4 max-xl:justify-center"
          >
            <img
              src="/assets/images/big_arrow.png"
              alt=""
              class="max-xxl:w-[80px] max-md:w-[60px]"
            />
            <p
              class="text-xl font-medium sm:text-3xl md:text-5xl 3xl:text-[72px]"
            >
              Let’s work together
            </p>
          </div>

          <div class="flex items-center justify-between gap-6 max-sm:flex-col">
            <div class="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
              <p
                class="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10"
              >
                Looking to hire an Service?
              </p>
              <div class="flex items-center justify-center font-bold text-n900">
                <a
                  href="/contact"
                  class="group relative flex items-center justify-start pr-12"
                  ><span
                    class="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12"
                    >LETS'S TALK</span
                  >
                  <i
                    class="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[148px] group-hover:rotate-45"
                  ></i
                ></a>
              </div>
            </div>
            <div class="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
              <p
                class="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10"
              >
                Looking to hire an Service?
              </p>
              <div class="flex items-center justify-center font-bold text-n900">
                <a
                  href="/sign-up-step-1"
                  class="group relative flex items-center justify-start pr-12"
                  ><span
                    class="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12"
                    >JOIN US</span
                  >
                  <i
                    class="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[115px] group-hover:rotate-45"
                  ></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="stp-15 flex items-center justify-between gap-6 max-md:flex-col max-[450px]:items-start"
        >
          <div
            class="flex items-center justify-start gap-6 font-medium max-sm:items-start max-[450px]:flex-col"
          >
            <p class="max-w-[200px] text-start lg:max-w-[250px]">
              Valentin, Street Road 27, New York. USA - 752252
            </p>
            <div class="lg:pl-15">
              <p class="font-semibold">(629) 555-0129</p>
              <p>example@mail.com</p>
            </div>
          </div>

          <div class="flex items-center justify-center gap-3 text-2xl">
            <a class="group relative" href="javascript:void(0)">
              <i
                class="ph ph-facebook-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"
              ></i>

              <div
                class="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>
              <div
                class="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>

              <div
                class="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>

              <div
                class="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>
            </a>
            <a class="group relative" href="javascript:void(0)">
              <i
                class="ph ph-twitch-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"
              ></i>

              <div
                class="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>
              <div
                class="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>

              <div
                class="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>

              <div
                class="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>
            </a>
            <a class="group relative" href="javascript:void(0)">
              <i
                class="ph ph-instagram-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"
              ></i>

              <div
                class="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>
              <div
                class="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>

              <div
                class="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>

              <div
                class="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>
            </a>
            <a class="group relative" href="javascript:void(0)">
              <i
                class="ph ph-linkedin-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"
              ></i>

              <div
                class="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>
              <div
                class="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>

              <div
                class="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"
              ></div>

              <div
                class="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
              ></div>
            </a>
          </div>
        </div>

        <h1
          class="text-center text-[430px] font-bold leading-none max-4xl:text-[400px] max-3xl:text-[350px] max-xxl:text-[300px] max-xl:text-[230px] max-lg:text-[180px] max-md:text-[130px] max-sm:text-[70px]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          Servibe
        </h1>

        <div class="border-t border-n500">
          <div
            class="container flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col"
          >
            <div class="flex items-center justify-start gap-1">
              <p>Designed By</p>
              <a href="" class="text-g200 underline">Pixelaxis</a>
            </div>

            <p>Copyright @ 2024 Servibe</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer section end -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
