<script>
  import FixedPriceServiceSection from '$lib/partials/FixedPriceServiceSection.svelte';
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import GetHelpTodaySection from '$lib/partials/GetHelpTodaySection.svelte';
  import GetWorkersGigs from '$lib/partials/GetWorkersGigs.svelte';
  import Header from '$lib/partials/Header.svelte';
  import HowItWorksSection from '$lib/partials/HowItWorksSection.svelte';
  import NewsLetterSection from '$lib/partials/NewsLetterSection.svelte';
  import RecentPostsSection from '$lib/partials/RecentPostsSection.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
  import SearchBox from '$lib/partials/SearchBox.svelte';
  import SecureGuardSection from '$lib/partials/SecureGuardSection.svelte';
  import TestimonialThree from '$lib/partials/TestimonialThree.svelte';
  import { onMount } from 'svelte';
  import { loadPageScripts } from '$lib/pageScripts.js';

  onMount(() => loadPageScripts(["/assets/js/plugins/matter.min.js","/assets/js/plugins/matterjs-custom.js"]));
</script>

<svelte:head>
  <title>Servibe Home Page Three</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- headerbg -->
    <div class="absolute left-0 right-0 top-0 h-[105px] bg-r50"></div>
    <!-- Header Section End -->

    <!-- Hero Section Start -->
    <section class="relative bg-r50/30">
      <img
        src="/assets/images/home3_hero_shape.png"
        alt=""
        class="absolute bottom-0 right-0 max-sm:hidden"
      />
      <div
        class="4xl:large-container sbp-30 relative overflow-hidden pt-[180px] max-4xl:container md:pt-[225px]"
      >
        <div
          class="flex items-start justify-between max-md:flex-col max-md:gap-12 xxl:items-center"
        >
          <div class="w-full md:w-[45%] lg:w-[40%]">
            <div class="">
              <h5
                class="heading-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="0"
              >
                Your Solution Hub
              </h5>
              <h1
                class="display-3 pt-3 !font-extrabold"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="0"
              >
                Find the Right <span class="text-b300">Talent</span> for Any
                Task
              </h1>
              <p
                class="sbp-15 pt-6 text-lg text-n300"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="0"
              >
                Access assistance from a vast network of reliable local experts,
                spanning home repairs to beauty services.
              </p>

              <div
                class="relative z-20 w-full rounded-3xl bg-white text-start md:w-[650px] lg:w-[800px] xl:w-[963px]"
              >
                <SearchBox />
              </div>

              <ul
                class="flex items-center justify-start gap-2 pt-8 font-medium max-md:flex-wrap max-sm:text-sm sm:gap-3"
              >
                <li class="heading-5">Popular:</li>
                <li class="rounded-lg bg-b50 px-2 py-2 sm:px-4">Handyman</li>
                <li class="rounded-lg bg-bg2 px-2 py-2 sm:px-4">Babysitting</li>
                <li class="rounded-lg bg-eb50 px-2 py-2 sm:px-4">
                  Photography
                </li>
                <li class="rounded-lg bg-bg1 px-2 py-2 sm:px-4">Renovation</li>
              </ul>

              <div class="stp-15 flex items-center justify-start gap-6">
                <p class="display-4 font-[800] text-n900">4.7</p>
                <div class="">
                  <p class="font-medium text-n900">
                    Based on 10,000+ review on
                  </p>
                  <div class="text-xl text-y600">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star-half"></i>
                  </div>
                </div>
              </div>

              <div
                class="flex items-center justify-start gap-4 pt-6 max-sm:flex-wrap"
              >
                <img src="/assets/images/brand_logo_1.png" alt="" />
                <img src="/assets/images/brand_logo_2.png" alt="" />
                <img src="/assets/images/brand_logo_3.png" alt="" />
                <img src="/assets/images/brand_logo_4.png" alt="" />
              </div>
            </div>
          </div>
          <div
            class="h-full w-full md:w-[50%]"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <img
              src="/assets/images/home_three_hero_img.png"
              alt=""
              class="self-stretch"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- How It Works Section Start -->
    <HowItWorksSection />
    <!-- How It Works Section End -->

    <!-- Explore by category section start -->
    <section class="stp-30 sbp-30 bg-n20">
      <div class="container">
        <div class="flex items-center justify-between gap-4">
          <div class="flex flex-col">
            <h2 class="max-sm:heading-4 sm:heading-2 font-bold text-n900">
              Explore by <span class="text-b300 underline">Category</span>
            </h2>
          </div>
          <div class="">
            <a
              href="/services"
              class="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
              >Show All Services
              <i class="ph-bold ph-arrow-right text-2xl !leading-none"></i
            ></a>
          </div>
        </div>

        <div class="stp-15 grid grid-cols-12 gap-6">
          <div
            class="col-span-12 flex flex-col items-center justify-center rounded-xl bg-r50 p-4 sm:col-span-6 lg:col-span-4 xl:p-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <div class="rounded-full bg-bg5 p-5">
              <img src="/assets/images/category_icon_1.png" class="" alt="" />
            </div>
            <h4 class="heading-3 pb-3 pt-5">Handyman</h4>
            <p class="pb-6 text-center font-medium text-n500 xl:pb-8">
              Versatile handyman, tackling repairs and tasks with precision and
              care.
            </p>
            <div class="flex w-full items-center justify-between">
              <p
                class="font-semibold max-[350px]:max-w-[100px] sm:max-md:max-w-[100px]"
              >
                45 Services Available
              </p>
              <a
                href="/services"
                class="group relative cursor-pointer text-5xl !leading-none text-n900"
              >
                <div
                  class="absolute right-7 top-[23px] z-10 h-0.5 w-16 bg-n900 duration-700 group-hover:w-0"
                ></div>
                <div
                  class="absolute right-7 top-[18px] h-3 w-16 bg-r50 duration-700 group-hover:w-0"
                ></div>
                <i class="ph-thin ph-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-center rounded-xl bg-bg6 p-4 sm:col-span-6 lg:col-span-4 xl:p-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="rounded-full bg-[#FEE6B2] p-5">
              <img src="/assets/images/category_icon_1.png" class="" alt="" />
            </div>
            <h4 class="heading-3 pb-3 pt-5">Photography</h4>
            <p class="pb-6 text-center font-medium text-n500 xl:pb-8">
              Capture moments beautifully with our expert photography services.
            </p>
            <div class="flex w-full items-center justify-between">
              <p
                class="font-semibold max-[350px]:max-w-[100px] sm:max-md:max-w-[100px]"
              >
                45 Services Available
              </p>
              <a
                href="/services"
                class="group relative cursor-pointer text-5xl !leading-none text-n900"
              >
                <div
                  class="absolute right-7 top-[23px] z-10 h-0.5 w-16 bg-n900 duration-700 group-hover:w-0"
                ></div>
                <div
                  class="absolute right-7 top-[18px] h-3 w-16 bg-bg6 duration-700 group-hover:w-0"
                ></div>
                <i class="ph-thin ph-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-center rounded-xl bg-[#E9E7F7] p-4 sm:col-span-6 lg:col-span-4 xl:p-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div class="rounded-full bg-[#B9AFFF] p-5">
              <img src="/assets/images/category_icon_1.png" class="" alt="" />
            </div>
            <h4 class="heading-3 pb-3 pt-5">Babysitting</h4>
            <p class="pb-6 text-center font-medium text-n500 xl:pb-8">
              Trustworthy babysitters for your peace of mind always.
            </p>
            <div class="flex w-full items-center justify-between">
              <p
                class="font-semibold max-[350px]:max-w-[100px] sm:max-md:max-w-[100px]"
              >
                45 Services Available
              </p>
              <a
                href="/services"
                class="group relative cursor-pointer text-5xl !leading-none text-n900"
              >
                <div
                  class="absolute right-7 top-[23px] z-10 h-0.5 w-16 bg-n900 duration-700 group-hover:w-0"
                ></div>
                <div
                  class="absolute right-7 top-[18px] h-3 w-16 bg-[#E9E7F7] duration-700 group-hover:w-0"
                ></div>
                <i class="ph-thin ph-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-center rounded-xl bg-bg4 p-4 sm:col-span-6 lg:col-span-4 xl:p-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <div class="rounded-full bg-[#D4EDB3] p-5">
              <img src="/assets/images/category_icon_1.png" class="" alt="" />
            </div>
            <h4 class="heading-3 pb-3 pt-5">Renovation</h4>
            <p class="pb-6 text-center font-medium text-n500 xl:pb-8">
              Transform spaces with our expert renovation services today!
            </p>
            <div class="flex w-full items-center justify-between">
              <p
                class="font-semibold max-[350px]:max-w-[100px] sm:max-md:max-w-[100px]"
              >
                45 Services Available
              </p>
              <a
                href="/services"
                class="group relative cursor-pointer text-5xl !leading-none text-n900"
              >
                <div
                  class="absolute right-7 top-[23px] z-10 h-0.5 w-16 bg-n900 duration-700 group-hover:w-0"
                ></div>
                <div
                  class="absolute right-7 top-[18px] h-3 w-16 bg-bg4 duration-700 group-hover:w-0"
                ></div>
                <i class="ph-thin ph-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-center rounded-xl bg-eb50 p-4 sm:col-span-6 lg:col-span-4 xl:p-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div class="rounded-full bg-[#9DC4FC] p-5">
              <img src="/assets/images/category_icon_1.png" class="" alt="" />
            </div>
            <h4 class="heading-3 pb-3 pt-5">Gardening</h4>
            <p class="pb-6 text-center font-medium text-n500 xl:pb-8">
              Cultivate your green haven with expert gardening services.
            </p>
            <div class="flex w-full items-center justify-between">
              <p
                class="font-semibold max-[350px]:max-w-[100px] sm:max-md:max-w-[100px]"
              >
                45 Services Available
              </p>
              <a
                href="/services"
                class="group relative cursor-pointer text-5xl !leading-none text-n900"
              >
                <div
                  class="absolute right-7 top-[23px] z-10 h-0.5 w-16 bg-n900 duration-700 group-hover:w-0"
                ></div>
                <div
                  class="absolute right-7 top-[18px] h-3 w-16 bg-eb50 duration-700 group-hover:w-0"
                ></div>
                <i class="ph-thin ph-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-center rounded-xl bg-bg2 p-4 sm:col-span-6 lg:col-span-4 xl:p-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div class="rounded-full bg-[#8CEDF6] p-5">
              <img src="/assets/images/category_icon_1.png" class="" alt="" />
            </div>
            <h4 class="heading-3 pb-3 pt-5">Cleaning</h4>
            <p class="pb-6 text-center font-medium text-n500 xl:pb-8">
              Efficient cleaning solutions for a spotless, refreshed living
              space.
            </p>
            <div class="flex w-full items-center justify-between">
              <p
                class="font-semibold max-[350px]:max-w-[100px] sm:max-md:max-w-[100px]"
              >
                45 Services Available
              </p>
              <a
                href="/services"
                class="group relative cursor-pointer text-5xl !leading-none text-n900"
              >
                <div
                  class="absolute right-7 top-[23px] z-10 h-0.5 w-16 bg-n900 duration-700 group-hover:w-0"
                ></div>
                <div
                  class="absolute right-7 top-[18px] h-3 w-16 bg-bg2 duration-700 group-hover:w-0"
                ></div>
                <i class="ph-thin ph-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Explore by category section end -->

    <!-- Secure Guard Start -->
    <section class="stp-30 sbp-30">
      <SecureGuardSection />
    </section>
    <!-- Secure Guard End -->

    <!-- Top Experts Section Start -->
    <section class="stp-30 sbp-30 bg-n30">
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

        <div class="stp-15">
          <div
            class="swiper expert2-slider-carousel professionalService activeTab pb-8"
            id="photography"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="rounded-xl border bg-white p-8">
                  <div class="flex items-start justify-between">
                    <p
                      class="rounded-full bg-y300 px-2 py-1 text-sm font-medium"
                    >
                      PRO
                    </p>
                    <div class="">
                      <div class="">
                        <img src="/assets/images/review_img.png" alt="" />
                      </div>
                      <div class="flex gap-2 pt-2">
                        <p
                          class="flex items-center justify-start gap-2 text-xl font-bold !leading-none text-o300"
                        >
                          <i class="ph-fill ph-star"></i> 4.4
                        </p>

                        <p class="text-n300">(45)</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col items-center justify-center py-6">
                    <div class="relative max-md:overflow-hidden">
                      <div
                        class="hexagon-styles my-[calc(134px*0.5/2)] h-[calc(134px*0.57736720554273)] w-[134px] rounded-[calc(134px/36.75)] bg-b50 before:rounded-[calc(134px/18.75)] after:rounded-[calc(134px/18.75)]"
                      >
                        <div class="absolute -top-[27px] left-[5px]">
                          <div
                            class="hexagon-styles z-10 my-[calc(124px*0.5/2)] h-[calc(124px*0.57736720554273)] w-[124px] rounded-[calc(124px/50)] bg-b300 before:rounded-[calc(124px/50)] after:rounded-[calc(124px/50)]"
                          >
                            <div class="absolute -top-[26px] left-[4px] z-20">
                              <div
                                class="hexagon-styles z-10 my-[calc(116px*0.5/2)] h-[calc(116px*0.57736720554273)] w-[116px] rounded-[calc(116px/50)] bg-b50 before:rounded-[calc(116px/50)] after:rounded-[calc(116px/50)]"
                              >
                                <div
                                  class="r-hex3 absolute -left-0.5 -top-[26px] z-30 inline-block w-[120px] overflow-hidden"
                                >
                                  <div class="r-hex-inner3">
                                    <div
                                      class="expertImg5 r-hex-inner-3 before:h-[120px] before:bg-cover"
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
                          src="/assets/images/verify-badge.png"
                          alt=""
                          class=""
                        />
                      </div>
                    </div>
                    <div class="pt-3">
                      <div
                        class="flex flex-col items-center justify-start gap-3"
                      >
                        <a href="/worker-profile" class="heading-5"
                          >Mabel Barnett</a
                        >
                      </div>
                      <p class="pt-2 text-n300">Brooklyn, NY, USA</p>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between border-b border-b50 pb-6 text-n300"
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

                  <div class="flex items-center justify-between pt-6">
                    <p class="heading-6">
                      <span class="text-n300">Per Hr:</span> $45
                    </p>
                    <div class="flex items-end justify-end gap-3">
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-chats"></i>
                      </div>
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-heart-straight"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="rounded-xl border bg-white p-8">
                  <div class="flex items-start justify-between">
                    <p
                      class="rounded-full bg-y300 px-2 py-1 text-sm font-medium"
                    >
                      PRO
                    </p>
                    <div class="">
                      <div class="">
                        <img src="/assets/images/review_img.png" alt="" />
                      </div>
                      <div class="flex gap-2 pt-2">
                        <p
                          class="flex items-center justify-start gap-2 text-xl font-bold !leading-none text-o300"
                        >
                          <i class="ph-fill ph-star"></i> 4.4
                        </p>
                        <p class="text-n300">(45)</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col items-center justify-center py-6">
                    <div class="relative max-md:overflow-hidden">
                      <div
                        class="hexagon-styles my-[calc(134px*0.5/2)] h-[calc(134px*0.57736720554273)] w-[134px] rounded-[calc(134px/36.75)] bg-b50 before:rounded-[calc(134px/18.75)] after:rounded-[calc(134px/18.75)]"
                      >
                        <div class="absolute -top-[27px] left-[5px]">
                          <div
                            class="hexagon-styles z-10 my-[calc(124px*0.5/2)] h-[calc(124px*0.57736720554273)] w-[124px] rounded-[calc(124px/50)] bg-b300 before:rounded-[calc(124px/50)] after:rounded-[calc(124px/50)]"
                          >
                            <div class="absolute -top-[26px] left-[4px] z-20">
                              <div
                                class="hexagon-styles z-10 my-[calc(116px*0.5/2)] h-[calc(116px*0.57736720554273)] w-[116px] rounded-[calc(116px/50)] bg-b50 before:rounded-[calc(116px/50)] after:rounded-[calc(116px/50)]"
                              >
                                <div
                                  class="r-hex3 absolute -left-0.5 -top-[26px] z-30 inline-block w-[120px] overflow-hidden"
                                >
                                  <div class="r-hex-inner3">
                                    <div
                                      class="expertImg4 r-hex-inner-3 before:h-[120px] before:bg-cover"
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
                          src="/assets/images/verify-badge.png"
                          alt=""
                          class=""
                        />
                      </div>
                    </div>
                    <div class="pt-3">
                      <div
                        class="flex flex-col items-center justify-start gap-3"
                      >
                        <a href="/worker-profile" class="heading-5"
                          >Tillie Caldwell</a
                        >
                      </div>
                      <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between border-b border-b50 pb-6 text-n300"
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

                  <div class="flex items-center justify-between pt-6">
                    <p class="heading-6">
                      <span class="text-n300">Per Hr:</span> $79
                    </p>
                    <div class="flex items-end justify-end gap-3">
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-chats"></i>
                      </div>
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-heart-straight"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="rounded-xl border bg-white p-8">
                  <div class="flex items-start justify-between">
                    <p
                      class="rounded-full bg-y300 px-2 py-1 text-sm font-medium"
                    >
                      PRO
                    </p>
                    <div class="">
                      <div class="">
                        <img src="/assets/images/review_img.png" alt="" />
                      </div>
                      <div class="flex gap-2 pt-2">
                        <p
                          class="flex items-center justify-start gap-2 text-xl font-bold !leading-none text-o300"
                        >
                          <i class="ph-fill ph-star"></i> 4.4
                        </p>
                        <p class="text-n300">(45)</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col items-center justify-center py-6">
                    <div class="relative max-md:overflow-hidden">
                      <div
                        class="hexagon-styles my-[calc(134px*0.5/2)] h-[calc(134px*0.57736720554273)] w-[134px] rounded-[calc(134px/36.75)] bg-b50 before:rounded-[calc(134px/18.75)] after:rounded-[calc(134px/18.75)]"
                      >
                        <div class="absolute -top-[27px] left-[5px]">
                          <div
                            class="hexagon-styles z-10 my-[calc(124px*0.5/2)] h-[calc(124px*0.57736720554273)] w-[124px] rounded-[calc(124px/50)] bg-b300 before:rounded-[calc(124px/50)] after:rounded-[calc(124px/50)]"
                          >
                            <div class="absolute -top-[26px] left-[4px] z-20">
                              <div
                                class="hexagon-styles z-10 my-[calc(116px*0.5/2)] h-[calc(116px*0.57736720554273)] w-[116px] rounded-[calc(116px/50)] bg-b50 before:rounded-[calc(116px/50)] after:rounded-[calc(116px/50)]"
                              >
                                <div
                                  class="r-hex3 absolute -left-0.5 -top-[26px] z-30 inline-block w-[120px] overflow-hidden"
                                >
                                  <div class="r-hex-inner3">
                                    <div
                                      class="expertImg3 r-hex-inner-3 before:h-[120px] before:bg-cover"
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
                          src="/assets/images/verify-badge.png"
                          alt=""
                          class=""
                        />
                      </div>
                    </div>
                    <div class="pt-3">
                      <div
                        class="flex flex-col items-center justify-start gap-3"
                      >
                        <a href="/worker-profile" class="heading-5"
                          >Marie Murphy</a
                        >
                      </div>
                      <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between border-b border-b50 pb-6 text-n300"
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

                  <div class="flex items-center justify-between pt-6">
                    <p class="heading-6">
                      <span class="text-n300">Per Hr:</span> $26
                    </p>
                    <div class="flex items-end justify-end gap-3">
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-chats"></i>
                      </div>
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-heart-straight"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="rounded-xl border bg-white p-8">
                  <div class="flex items-start justify-between">
                    <p
                      class="rounded-full bg-y300 px-2 py-1 text-sm font-medium"
                    >
                      PRO
                    </p>
                    <div class="">
                      <div class="">
                        <img src="/assets/images/review_img.png" alt="" />
                      </div>
                      <div class="flex gap-2 pt-2">
                        <p
                          class="flex items-center justify-start gap-2 text-xl font-bold !leading-none text-o300"
                        >
                          <i class="ph-fill ph-star"></i> 4.4
                        </p>
                        <p class="text-n300">(45)</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col items-center justify-center py-6">
                    <div class="relative max-md:overflow-hidden">
                      <div
                        class="hexagon-styles my-[calc(134px*0.5/2)] h-[calc(134px*0.57736720554273)] w-[134px] rounded-[calc(134px/36.75)] bg-b50 before:rounded-[calc(134px/18.75)] after:rounded-[calc(134px/18.75)]"
                      >
                        <div class="absolute -top-[27px] left-[5px]">
                          <div
                            class="hexagon-styles z-10 my-[calc(124px*0.5/2)] h-[calc(124px*0.57736720554273)] w-[124px] rounded-[calc(124px/50)] bg-b300 before:rounded-[calc(124px/50)] after:rounded-[calc(124px/50)]"
                          >
                            <div class="absolute -top-[26px] left-[4px] z-20">
                              <div
                                class="hexagon-styles z-10 my-[calc(116px*0.5/2)] h-[calc(116px*0.57736720554273)] w-[116px] rounded-[calc(116px/50)] bg-b50 before:rounded-[calc(116px/50)] after:rounded-[calc(116px/50)]"
                              >
                                <div
                                  class="r-hex3 absolute -left-0.5 -top-[26px] z-30 inline-block w-[120px] overflow-hidden"
                                >
                                  <div class="r-hex-inner3">
                                    <div
                                      class="expertImg2 r-hex-inner-3 before:h-[120px] before:bg-cover"
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
                          src="/assets/images/verify-badge.png"
                          alt=""
                          class=""
                        />
                      </div>
                    </div>
                    <div class="pt-3">
                      <div
                        class="flex flex-col items-center justify-start gap-3"
                      >
                        <a href="/worker-profile" class="heading-5"
                          >Miguel Johnston</a
                        >
                      </div>
                      <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between border-b border-b50 pb-6 text-n300"
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

                  <div class="flex items-center justify-between pt-6">
                    <p class="heading-6">
                      <span class="text-n300">Per Hr:</span> $61
                    </p>
                    <div class="flex items-end justify-end gap-3">
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-chats"></i>
                      </div>
                      <div
                        class="flex items-center justify-center rounded-full border border-n900 p-3 text-xl !leading-none"
                      >
                        <i class="ph ph-heart-straight"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Top Experts Section End -->

    <!-- Fixed Price Servise Section Start -->
    <section class="stp-30 sbp-30">
      <FixedPriceServiceSection />
    </section>
    <!-- Fixed Price Servise Section End -->

    <!-- Newsletter Section Start -->
    <NewsLetterSection />
    <!-- Newsletter Section End -->

    <!-- Testimonial Section Start -->
    <TestimonialThree />
    <!-- Testimonial Section End -->

    <!-- Recent Post Section Start -->
    <section class="stp-30 sbp-30">
      <RecentPostsSection />
    </section>
    <!-- Recent Post Section End -->

    <!-- Get Worker & Gig Section Start -->
    <GetWorkersGigs />
    <!-- Get Worker & Gig Section End -->

    <!-- Get Help Section Start -->
    <GetHelpTodaySection />
    <!-- Get Help Section End -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
