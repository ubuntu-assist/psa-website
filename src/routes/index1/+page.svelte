<script>
  import FixedPriceServiceSection from '$lib/partials/FixedPriceServiceSection.svelte';
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import GetHelpTodaySection from '$lib/partials/GetHelpTodaySection.svelte';
  import GetWorkersGigs from '$lib/partials/GetWorkersGigs.svelte';
  import Header from '$lib/partials/Header.svelte';
  import LookingForServiceSection from '$lib/partials/LookingForServiceSection.svelte';
  import NewsLetterSection from '$lib/partials/NewsLetterSection.svelte';
  import RecentPostsSection from '$lib/partials/RecentPostsSection.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
  import SecureGuardSection from '$lib/partials/SecureGuardSection.svelte';
  import TopExpertsSection from '$lib/partials/TopExpertsSection.svelte';
  import { onMount } from 'svelte';
  import { loadPageScripts } from '$lib/pageScripts.js';

  onMount(() => loadPageScripts(["/assets/js/plugins/matter.min.js","/assets/js/plugins/matterjs-custom.js"]));
</script>

<svelte:head>
  <title>Servibe HTML Template</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- Header Section End -->

    <!-- Hero Section Start -->
    <section class="relative bg-r50 pt-30 sm:pt-40 xl:pt-52">
      <div
        class="container relative grid grid-cols-12 max-xl:overflow-x-hidden max-md:gap-6 lg:-mb-10"
      >
        <div
          class="col-span-12 flex flex-col items-start justify-center sm:col-span-10 md:col-span-6 lg:col-span-5"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h5 class="heading-5 pb-3 font-[700] text-r300">Your Solution Hub</h5>
          <div class="relative">
            <h1
              class="sm:display-3 text-[32px] font-[800] text-n600 max-sm:pr-10"
            >
              Find the Right <span class="text-r300">Talent</span> for Any Task
            </h1>
            <div
              class="absolute -bottom-2 right-2 flex items-center justify-start rounded-full border border-y600 p-1 max-[450px]:hidden sm:bottom-0 sm:right-12 md:right-32 lg:right-20 xl:bottom-2 xl:right-28 xxl:right-44"
            >
              <div
                class="overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8"
              >
                <img
                  src="/assets/images/people_small1.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div
                class="-ml-2 overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8 lg:-ml-4"
              >
                <img
                  src="/assets/images/people_small2.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div
                class="-ml-2 overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8 lg:-ml-4"
              >
                <img
                  src="/assets/images/people_small3.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div
                class="-ml-2 overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8 lg:-ml-4"
              >
                <img
                  src="/assets/images/people_small4.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div class="-ml-2 max-lg:size-8 lg:-ml-4">
                <img
                  src="/assets/images/people_plus.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 flex flex-col items-start justify-center sm:col-span-10 md:col-span-5 lg:col-span-4 lg:col-start-9"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <p class="pb-6 font-semibold text-n500">
            Access assistance from a vast network of reliable local experts.
          </p>
          <div class="">
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
          <div class="flex items-center justify-start gap-6 pt-3">
            <p class="display-4 font-[800] text-n900">4.7</p>
            <div class="">
              <p class="font-medium text-n900">Based on 10,000+ review on</p>
              <div class="text-xl text-y600">
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star-half"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-20">
        <div class="-mb-20 flex items-center justify-center max-lg:hidden">
          <div
            class="relative flex h-[160px] w-[160px] items-center justify-center rounded-full bg-white text-white"
          >
            <div
              class="logo absolute z-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-white text-5xl !leading-none"
            >
              <i class="ph ph-paper-plane-tilt"></i>
            </div>
            <div
              class="circleText circle absolute h-[95%] w-[95%] rounded-full bg-r300 font-medium"
            >
              <p>On Demand Service Available*</p>
            </div>
          </div>
        </div>
      </div>
      <div class="stp-15">
        <div class="swiper hero-service-carousel smooth">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide relative flex flex-col items-end justify-start gap-10 rounded-md bg-g300 pl-6 pt-4 md:pt-8 3xl:gap-3 3xl:px-8"
            >
              <a
                href="/find-workers"
                class="flex items-center justify-center rounded-full bg-g200 p-3 !leading-none duration-500 hover:rotate-45 hover:bg-r300 max-3xl:mr-4"
              >
                <i class="ph-bold ph-arrow-up-right"></i>
              </a>

              <div class="h-full">
                <img
                  src="/assets/images/hero_slider_img_2.png"
                  alt=""
                  class="max-h-full self-stretch"
                />
              </div>
              <div class="absolute left-4 top-4 md:top-8 lg:left-8">
                <p class="heading-2 pb-3 text-white">Handyman</p>
                <p class="max-w-[240px] font-medium text-white max-sm:text-sm">
                  Fixing, Repairing, and Improving Your Spaces.
                </p>
              </div>
            </div>
            <div
              class="swiper-slide relative flex flex-col items-end justify-start gap-10 rounded-md bg-b300 pl-6 pt-4 md:pt-8 3xl:gap-3 3xl:px-8"
            >
              <a
                href="/find-workers"
                class="flex items-center justify-center rounded-full bg-g200 p-3 !leading-none duration-500 hover:rotate-45 hover:bg-r300 max-3xl:mr-4"
              >
                <i class="ph-bold ph-arrow-up-right"></i>
              </a>

              <div class="h-full">
                <img
                  src="/assets/images/hero_slider_img_3.png"
                  alt=""
                  class="max-h-full self-stretch"
                />
              </div>
              <div class="absolute left-4 top-4 md:top-8 lg:left-8">
                <p class="heading-2 pb-3 text-white">Cleaning</p>
                <p class="max-w-[240px] font-medium text-white max-sm:text-sm">
                  Expert Cleaning Services for Sparkling Homes and Offices.
                </p>
              </div>
            </div>
            <div
              class="swiper-slide relative flex flex-col items-end justify-start gap-10 rounded-md bg-b900 pl-6 pt-4 md:pt-8 3xl:gap-3 3xl:px-8"
            >
              <a
                href="/find-workers"
                class="flex items-center justify-center rounded-full bg-g200 p-3 !leading-none duration-500 hover:rotate-45 hover:bg-r300 max-3xl:mr-4"
              >
                <i class="ph-bold ph-arrow-up-right"></i>
              </a>

              <div class="h-full">
                <img
                  src="/assets/images/hero_slider_img_1.png"
                  alt=""
                  class="max-h-full self-stretch"
                />
              </div>
              <div class="absolute left-4 top-4 md:top-8 lg:left-8">
                <p class="heading-2 pb-3 text-white">Photography</p>
                <p class="max-w-[240px] font-medium text-white max-sm:text-sm">
                  Expert Cleaning Services for Sparkling Homes and Offices.
                </p>
              </div>
            </div>
            <div
              class="swiper-slide relative flex flex-col items-end justify-start gap-10 rounded-md bg-o300 pl-6 pt-4 md:pt-8 3xl:gap-3 3xl:px-8"
            >
              <a
                href="/find-workers"
                class="flex items-center justify-center rounded-full bg-g200 p-3 !leading-none duration-500 hover:rotate-45 hover:bg-r300 max-3xl:mr-4"
              >
                <i class="ph-bold ph-arrow-up-right"></i>
              </a>

              <div class="h-full">
                <img
                  src="/assets/images/hero_slider_img_4.png"
                  alt=""
                  class="max-h-full self-stretch"
                />
              </div>
              <div class="absolute left-4 top-4 md:top-8 lg:left-8">
                <p class="heading-2 pb-3 text-white">Renovation</p>
                <p class="max-w-[240px] font-medium text-white max-sm:text-sm">
                  Expert Renovation Services Available Now.
                </p>
              </div>
            </div>
            <div
              class="swiper-slide relative flex flex-col items-end justify-start gap-10 rounded-md bg-b900 pl-6 pt-4 md:pt-8 3xl:gap-3 3xl:px-8"
            >
              <a
                href="/find-workers"
                class="flex items-center justify-center rounded-full bg-g200 p-3 !leading-none duration-500 hover:rotate-45 hover:bg-r300 max-3xl:mr-4"
              >
                <i class="ph-bold ph-arrow-up-right"></i>
              </a>

              <div class="h-full">
                <img
                  src="/assets/images/hero_slider_img_1.png"
                  alt=""
                  class="max-h-full self-stretch"
                />
              </div>
              <div class="absolute left-4 top-4 md:top-8 lg:left-8">
                <p class="heading-2 pb-3 text-white">Photography</p>
                <p class="max-w-[240px] font-medium text-white max-sm:text-sm">
                  Expert Cleaning Services for Sparkling Homes and Offices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- How It Works Section Start -->
    <section class="stp-30 sbp-30 container mb-12">
      <div class="flex w-full flex-col items-center justify-center text-center">
        <h5 class="pb-4 font-bold text-r300">Working Process</h5>
        <h2 class="heading-2 font-bold text-n900">
          How it <span class="text-b300 underline">Works</span>
        </h2>
      </div>
      <div class="stp-15 grid grid-cols-12 gap-4 sm:gap-6">
        <div
          class="relative col-span-12 sm:col-span-6 md:col-span-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            class="relative z-10 flex flex-col items-start justify-start gap-8 rounded-xl border border-r100 bg-r50 px-4 py-8 lg:gap-14 lg:px-12 lg:py-16"
          >
            <p
              class="heading-4 flex size-[72px] items-center justify-center rounded-full bg-r300 p-6 !leading-none"
            >
              01
            </p>
            <h3 class="heading-3 font-bold">Tasker Evaluation</h3>
            <p class="font-medium">
              Choose a Tasker by price, skills, and reviews.
            </p>
          </div>
          <div
            class="absolute -bottom-6 left-4 right-4 -z-10 h-[82px] rounded-xl border border-r100/60 bg-r50/30"
          ></div>
        </div>
        <div
          class="relative col-span-12 -mb-8 mt-8 sm:col-span-6 md:col-span-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div
            class="flex h-full flex-col items-start justify-start gap-8 rounded-xl border border-o300 bg-y50 px-4 py-8 lg:gap-14 lg:px-12 lg:py-16"
          >
            <p
              class="heading-4 flex size-[72px] items-center justify-center rounded-full bg-y300 !leading-none"
            >
              02
            </p>
            <h3 class="heading-3 font-bold">Book Now</h3>
            <p class="font-medium">Schedule a Tasker as early as today</p>
          </div>
          <div
            class="absolute -bottom-6 left-4 right-4 -z-10 h-[82px] rounded-xl border border-y300/60 bg-y50/30"
          ></div>
        </div>

        <div
          class="relative col-span-12 sm:col-span-6 md:col-span-4"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <div
            class="flex flex-col items-start justify-start gap-8 rounded-xl border border-eb200 bg-eb50 px-4 py-8 max-md:mt-6 max-sm:mt-16 lg:gap-14 lg:px-12 lg:py-16"
          >
            <p
              class="heading-4 flex size-[72px] items-center justify-center rounded-full bg-g200 p-6 !leading-none"
            >
              03
            </p>
            <h3 class="heading-3 font-bold">Get Extra Tip Hub</h3>
            <p class="font-medium">
              Chat, pay, tip, and review all in one place easily.
            </p>
          </div>
          <div
            class="absolute -bottom-6 left-4 right-4 -z-10 h-[82px] rounded-xl border border-eb200/60 bg-eb50/30"
          ></div>
        </div>
      </div>
    </section>
    <!-- How It Works Section End -->

    <!-- Fixed Price Servise Section Start -->
    <section class="stp-30 sbp-30 bg-n20">
      <FixedPriceServiceSection />
    </section>
    <!-- Fixed Price Servise Section End -->

    <!-- Top Expert Section Start -->
    <section class="stp-30 sbp-30">
      <TopExpertsSection />
    </section>
    <!-- Top Expert Section End -->

    <!-- Looking for service section Start -->
    <section class="stp-30 sbp-30 bg-n20">
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

    <!-- Review Section Start -->
    <section class="stp-30 sbp-30 bg-n20">
      <div class="container">
        <div
          class="flex items-center justify-between max-sm:flex-col max-sm:items-start sm:max-lg:pb-10"
        >
          <div
            class="relative flex items-center justify-start gap-4 max-sm:mb-16 lg:gap-20"
          >
            <p
              class="text-7xl font-extrabold text-b300 sm:text-[100px] lg:text-[180px]"
            >
              4.9
            </p>
            <div
              class="flex items-center justify-start text-2xl text-y600 max-lg:-mt-8 lg:pb-12"
            >
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
            </div>

            <div
              class="box-shadow-3 absolute -bottom-12 flex items-center justify-start gap-3 rounded-r-3xl rounded-bl-3xl border border-b10 bg-b50 px-8 py-3 sm:-bottom-12 sm:left-32 sm:right-0 sm:w-[250px] lg:-bottom-2 lg:left-64 lg:px-8 lg:py-5 xl:w-[300px]"
            >
              <p class="heading-3 flex items-center justify-start font-bold">
                <span class="odometer" data-odometer-final="1475">0</span>+
              </p>
              <p
                class="max-w-[50px] font-medium text-n400 sm:mt-8 sm:max-w-[82px]"
              >
                Google Reviews
              </p>
            </div>
          </div>

          <h2 class="heading-2 sm:max-w-[200px] lg:max-w-[240px]">
            Our Customers love us
          </h2>
        </div>

        <div class="stp-15 grid grid-cols-12 gap-6">
          <div
            class="col-span-12 flex flex-col gap-6 rounded-xl border border-n40 bg-r50 p-6 md:col-span-6 lg:col-span-4 xl:gap-10 xl:p-10"
          >
            <div class="flex flex-col justify-start">
              <i class="ph-fill ph-quotes w-[40px] rotate-180 text-4xl"></i>
              <div
                class="flex items-center justify-start gap-1 pt-5 text-xl text-y600"
              >
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
              </div>
            </div>
            <p class="text-lg text-n400">
              I was amazed at the efficiency of arrived promptly and completed
              the task with skill. I'm a satisfied customer and will definitely
              use this service again.
            </p>
            <div class="flex items-center justify-start gap-4">
              <div class="">
                <img
                  src="/assets/images/review_people_2.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div class="">
                <p class="heading-5">Leslie Alexander</p>
                <p class="font-medium text-n500">@iamexample</p>
              </div>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-xl border border-n40 bg-bg1 p-6 md:col-span-6 lg:col-span-4 xl:gap-10 xl:p-10"
          >
            <div class="flex flex-col justify-start">
              <i class="ph-fill ph-quotes w-[40px] rotate-180 text-4xl"></i>
              <div
                class="flex items-center justify-start gap-1 pt-5 text-xl text-y600"
              >
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
              </div>
            </div>
            <p class="text-lg text-n400">
              I was amazed at the efficiency of the platform. The handyman
              arrived promptly and completed the task with skill. I'm a
              satisfied customer again.
            </p>
            <div class="flex items-center justify-start gap-4">
              <div class="">
                <img
                  src="/assets/images/review_people_1.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div class="">
                <p class="heading-5">Ronald Richards</p>
                <p class="font-medium text-n500">@iamsedaoi&wv</p>
              </div>
            </div>
          </div>
          <div
            class="col-span-12 flex flex-col gap-6 rounded-xl border border-n40 bg-bg2 p-6 md:col-span-6 lg:col-span-4 xl:gap-10 xl:p-10"
          >
            <div class="flex flex-col justify-start">
              <i class="ph-fill ph-quotes w-[40px] rotate-180 text-4xl"></i>
              <div
                class="flex items-center justify-start gap-1 pt-5 text-xl text-y600"
              >
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
              </div>
            </div>
            <p class="text-lg text-n400">
              Incredibly impressed on-demand cleaning service. Prompt, thorough
              and left home sparkling. A game-changer for busy schedules! Uber
              the app's convenience
            </p>
            <div class="flex items-center justify-start gap-4">
              <div class="">
                <img
                  src="/assets/images/review_people_3.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div class="">
                <p class="heading-5">Leslie Alexander</p>
                <p class="font-medium text-n500">@iamexample</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Review Section End -->

    <!-- Get Worker & Gig Section Start -->
    <GetWorkersGigs />
    <!-- Get Worker & Gig Section End -->

    <!-- Recent Post Section Start -->
    <section class="stp-30 sbp-30 bg-n20">
      <RecentPostsSection />
    </section>
    <!-- Recent Post Section End -->

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
