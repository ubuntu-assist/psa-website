<script>
  import FaqSection from '$lib/partials/FaqSection.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
  import TestimonialThree from '$lib/partials/TestimonialThree.svelte';
</script>

<svelte:head>
  <title>Worker Portfolio</title>
</svelte:head>

<!-- Header Start -->
    <header class="header headerAbsolute left-0 right-0 top-0 z-50">
      <div class="max-xxl:container xxl:px-25">
        <div class="text-s1 flex items-center justify-between py-6">
          <div class="flex items-center justify-start gap-3 pb-1">
            <button class="mobileMenuOpenButton text-3xl lg:hidden">
              <i class="ph ph-list"></i>
            </button>
            <a href="javascript:void(0)">
              <h2 class="heading-2">Albert Flores</h2>
            </a>
          </div>

          <div class="flex items-center justify-between gap-6">
            <ul
              class="flex items-center justify-start gap-2 font-medium max-md:hidden xxl:gap-6"
            >
              <li class="">
                <a href="#services" class="rounded-lg px-2 py-3 duration-700"
                  >SERVICES</a
                >
              </li>
              <li class="">
                <a href="#about" class="rounded-lg px-2 py-3 duration-700"
                  >ABOUT</a
                >
              </li>
              <li class="">
                <a href="#faq" class="rounded-lg px-2 py-3 duration-700">FAQ</a>
              </li>
            </ul>
            <div class="flex items-center justify-between gap-3 font-medium">
              <a
                href="/hire-me"
                class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:size-11 max-xxl:!leading-none xxl:px-8 xxl:py-3"
              >
                <span class="relative z-10 max-xxl:hidden"> WORK WITH ME</span>
                <i class="ph-bold ph-plus text-xl xxl:hidden"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--  Mobile Menu Start -->
      <nav class="">
        <div
          class="mobileMenuBg mobileMenuBgClose fixed left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"
        ></div>

        <div
          class="mobileMenu mobileMenuClose fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-r300 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20"
        >
          <div
            class="fixed top-0 flex w-full items-center justify-between bg-r300 p-4 sm:p-8"
          >
            <a href="/index1">
              <h3 class="heading-3">Albert Flores</h3>
            </a>
            <i
              class="ri-close-line mobileMenuCloseButton cursor-pointer !text-3xl"
            >
              <i class="ph ph-x"></i>
            </i>
          </div>

          <ul
            class="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10"
          >
            <li>
              <a href="#services" class="menu-hover hover:after:border-p1">
                Services
              </a>
            </li>
            <li>
              <a href="#about" class="menu-hover hover:after:border-p1">
                About
              </a>
            </li>
            <li>
              <a href="#faq" class="menu-hover hover:after:border-p1"> FAQ </a>
            </li>
          </ul>
        </div>
      </nav>
      <!--  Mobile Menu End -->
    </header>
    <!-- Header End -->

    <!-- About Section Start -->
    <section class="stp-30 sbp-30 mt-[100px] bg-bg2">
      <div
        class="container flex items-center justify-start gap-6 max-md:flex-col md:gap-10 lg:gap-20"
        id="about"
      >
        <div class="max-md:overflow-hidden">
          <div
            class="hexagon-styles my-[calc(300px*0.5/2)] h-[calc(300px*0.57736720554273)] w-[300px] rounded-[calc(300px/36.75)] bg-b50 before:rounded-[calc(300px/18.75)] after:rounded-[calc(300px/18.75)]"
          >
            <div class="absolute -top-[60px] left-4">
              <div
                class="hexagon-styles z-10 my-[calc(270px*0.5/2)] h-[calc(270px*0.57736720554273)] w-[270px] rounded-[calc(270px/50)] bg-b300 before:rounded-[calc(270px/50)] after:rounded-[calc(270px/50)]"
              >
                <div class="absolute -top-[55px] left-2.5 z-20">
                  <div
                    class="hexagon-styles z-10 my-[calc(250px*0.5/2)] h-[calc(250px*0.57736720554273)] w-[250px] rounded-[calc(250px/50)] bg-b50 before:rounded-[calc(250px/50)] after:rounded-[calc(250px/50)]"
                  >
                    <div
                      class="r-hex3 absolute -left-1.5 -top-[56px] z-30 inline-block w-[260px] overflow-hidden"
                    >
                      <div class="r-hex-inner3">
                        <div
                          class="expertImgBig r-hex-inner-3 before:h-[260px] before:bg-cover"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-xl:overflow-hidden">
          <p
            class="heading-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            Spotless Solutions
          </p>
          <div
            class=""
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <h2 class="heading-2 pt-5">
              Albert Flores is a
              <span class="underline">Cleaning services</span>
            </h2>
            <div class="flex items-center justify-start gap-4 pt-2">
              <img src="/assets/images/big_arrow_2.png" alt="" />
              <h2 class="heading-2">based in Taiwan</h2>
            </div>
          </div>
          <p
            class="pt-6 text-base font-medium text-n300 lg:text-xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            we are committed to providing top-quality cleaning services tailored
            to meet your specific needs. With years of experience in the
            industry, our team of professional cleaners is dedicated to
            delivering exceptional results,
          </p>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- worker porfolio start -->
    <section class="stp-30 sbp-30">
      <div class="container grid grid-cols-12 gap-6" id="services">
        <div
          class="col-span-12 md:col-span-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <div class="overflow-hidden rounded-2xl">
            <img src="/assets/images/worker-portfolio-img-1.png" alt="" />
          </div>
          <div class="flex items-center justify-between">
            <a href="/worker-portfolio-details" class="heading-4"
              >Restaurant Cleaning Services</a
            >
            <a href="/worker-portfolio-details">
              <img src="/assets/images/big_arrow.png" alt="" />
            </a>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="overflow-hidden rounded-2xl">
            <img src="/assets/images/worker-portfolio-img-2.png" alt="" />
          </div>
          <div class="flex items-center justify-between">
            <a href="/worker-portfolio-details" class="heading-4"
              >Home Cleaning Services</a
            >
            <a href="/worker-portfolio-details">
              <img src="/assets/images/big_arrow.png" alt="" />
            </a>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="overflow-hidden rounded-2xl">
            <img src="/assets/images/worker-portfolio-img-3.png" alt="" />
          </div>
          <div class="flex items-center justify-between">
            <a href="/worker-portfolio-details" class="heading-4"
              >Office Cleaning Services</a
            >
            <a href="/worker-portfolio-details">
              <img src="/assets/images/big_arrow.png" alt="" />
            </a>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div class="overflow-hidden rounded-2xl">
            <img src="/assets/images/worker-portfolio-img-4.png" alt="" />
          </div>
          <div class="flex items-center justify-between">
            <a href="/worker-portfolio-details" class="heading-4"
              >School Cleaning Services</a
            >
            <a href="/worker-portfolio-details">
              <img src="/assets/images/big_arrow.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- worker porfolio end -->

    <!-- Testimonial Section Start -->
    <TestimonialThree />
    <!-- Testimonial Section End -->

    <!-- Frequent Asked Questions Start -->
    <section class="stp-30 sbp-30" id="faq">
      <FaqSection />
    </section>
    <!-- Frequent Asked Questions End -->

    <!--Footer Section Start  -->
    <section class="stp-30 sbp-30 bg-n900">
      <div
        class="container flex flex-col items-center justify-center text-white"
      >
        <h2 class="heading-2">Let's Collaborate</h2>
        <div class="flex items-center justify-between gap-3 pt-8 font-medium">
          <a
            href="/hire-me"
            class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
          >
            <span class="relative z-10"> WORK WITH ME</span>
          </a>
        </div>
        <ul class="stp-15 sbp-15 flex items-center justify-center gap-10">
          <li><a href="/worker-profile">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
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
    </section>
    <!--Footer Section End  -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
