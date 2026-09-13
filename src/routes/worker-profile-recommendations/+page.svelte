<script>
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
</script>

<svelte:head>
  <title>Workers Profile - Servibe HTML Template</title>
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
          <li class="text-r300">Worker Profile</li>
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

    <!-- Profile Start -->
    <section class="sbp-30 stp-30">
      <div class="container grid grid-cols-12 gap-6">
        <div
          class="col-span-12 rounded-xl border border-n30 px-6 py-8 lg:col-span-4"
        >
          <div class="flex flex-col items-center justify-center">
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
                              class="expertImgBig r-hex-inner-3 before:h-[190px] before:bg-cover"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute bottom-5 right-1 z-30">
                <img src="/assets/images/verify-badge2.png" alt="" class="" />
              </div>
            </div>

            <div class="flex items-center justify-center gap-3 pt-6">
              <h4 class="heading-4">Albert Flores</h4>
              <p class="p rounded-full bg-y300 px-3 py-1 text-sm font-medium">
                PRO
              </p>
            </div>
            <p class="pt-3 text-center text-sm text-n300">Brooklyn, NY, USA</p>
            <div class="w-full pt-8 sm:px-12">
              <a
                href="/chat"
                class="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
              >
                <div
                  class="relative z-20 flex items-center justify-center gap-3"
                >
                  <i class="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                  <span>Get in touch</span>
                </div>
              </a>
            </div>

            <a
              href="/worker-portfolio"
              class="mt-5 flex w-full items-center justify-between rounded-xl border border-n30 px-5 py-3"
            >
              <p class="font-semibold">View My Portfolio</p>
              <i class="ph ph-caret-right text-xl !leading-none"></i>
            </a>

            <div
              class="mt-5 flex w-full items-center justify-between rounded-xl border border-n30 px-5 py-3"
            >
              <div class="flex items-center justify-start gap-2">
                <i class="ph-fill ph-star text-xl !leading-none"></i>
                <p class="font-medium">Recommended</p>
              </div>
              <div class="flex items-center justify-end gap-2">
                <div class="flex items-center justify-start max-xl:hidden">
                  <img
                    src="/assets/images/review_people_1.png"
                    alt=""
                    class="relative -z-10 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75"
                  />
                  <img
                    src="/assets/images/review_people_2.png"
                    alt=""
                    class="-z-9 relative -ml-2 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75"
                  />
                  <img
                    src="/assets/images/review_people_3.png"
                    alt=""
                    class="-z-8 relative -ml-2 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75"
                  />
                  <p
                    class="-z-7 relative -ml-2 flex size-7 items-center justify-center rounded-full bg-g75"
                  >
                    +8
                  </p>
                </div>
                <i class="ph ph-caret-right text-xl !leading-none"></i>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start justify-start gap-3 pt-8">
            <p class="text-sm font-medium">RATE</p>
            <p class="rounded-full bg-r50 px-3 py-1 text-[13px] text-r300">
              $75 - &100/hr
            </p>
          </div>

          <div class="flex flex-col items-start justify-start gap-3 pt-8">
            <p class="text-sm font-medium">SERVICES</p>
            <div class="flex flex-wrap gap-1 text-n400">
              <p
                class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
              >
                <span>Handyman</span>
              </p>
              <p
                class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
              >
                <span>Clening </span>
              </p>
              <p
                class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
              >
                <span>Plumber </span>
              </p>
              <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
            </div>
          </div>

          <div class="flex flex-col items-start justify-start gap-3 pt-8">
            <p class="text-sm font-medium">BADGES</p>
            <div class="flex flex-wrap gap-1 text-n400">
              <p
                class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
              >
                <img src="/assets/images/settings_icon.png" alt="" />
                <span>Cleaning Expert</span>
              </p>
              <p
                class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
              >
                <img src="/assets/images/tap_icon.png" alt="" />
                <span>Best Plumber</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col items-start justify-start gap-3 pt-8">
            <p class="text-sm font-medium">ABOUT</p>
            <p class="text-n300">
              Welcome to Servibe where convenience meets quality. Discover a
              seamless platform connecting you with trusted service providers
              effortlessly.
            </p>
          </div>

          <div class="flex flex-col items-start justify-start gap-3 pt-8">
            <p class="text-sm font-medium">LINKS</p>
            <div class="flex items-center justify-start gap-3">
              <a
                href="javascript:void(0)"
                class="flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white"
              >
                <i class="ph ph-linkedin-logo !leading-none"></i>
              </a>
              <a
                href="javascript:void(0)"
                class="flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white"
              >
                <i class="ph ph-instagram-logo !leading-none"></i>
              </a>
              <a
                href="javascript:void(0)"
                class="flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white"
              >
                <i class="ph ph-discord-logo !leading-none"></i>
              </a>
              <a
                href="javascript:void(0)"
                class="flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white"
              >
                <i class="ph ph-dribbble-logo !leading-none"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="col-span-12 rounded-xl border border-n30 p-4 sm:p-8 lg:col-span-8"
        >
          <h3 class="heading-3">
            Elevating Cleanliness Standards with Professional Cleaning Services
          </h3>
          <p class="text-bg-n300 pt-3 font-medium">
            Elevate cleanliness standards with our professional cleaning
            services. Experience spotless spaces and impeccable results every
            time you book with us.
          </p>

          <div class="flex flex-col gap-4 pt-10">
            <ul
              class="flex items-center justify-start gap-5 border-b border-n30 pb-5 text-n100 max-md:flex-wrap"
            >
              <li>
                <a
                  href="/worker-profile"
                  class="heading-5 duration-500 hover:text-n900"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="/worker-profile-works"
                  class="heading-5 duration-500 hover:text-n900"
                  >Work</a
                >
              </li>

              <li>
                <a
                  href="/worker-profile-jobs"
                  class="heading-5 duration-500 hover:text-n900"
                  >Jobs</a
                >
              </li>

              <li>
                <a
                  href="/worker-profile-recommendations"
                  class="heading-5 text-n900"
                >
                  Recommendations
                </a>
              </li>
            </ul>
            <div class="rounded-2xl border border-n30 p-10">
              <div class="flex items-center justify-start gap-3 pb-2">
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
                              class="r-hex3 absolute -left-0.5 -top-[18px] z-30 inline-block w-[86px] overflow-hidden"
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
                    <img
                      src="/assets/images/verify-badge.png"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
                <div class="">
                  <div class="flex items-center justify-start gap-3">
                    <h5 class="heading-5">Darrell Steward</h5>
                  </div>
                  <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
                </div>
              </div>
              <p
                class="flex items-center justify-start gap-3 text-sm text-n300"
              >
                <img src="/assets/images/star_icon.png" alt="" />
                Luka recommends working with Alice
              </p>
              <p class="pt-3 font-medium text-n300">
                This is our second time collaborating on a project. As always
                Alice is just amazing to work with. She is super clear with the
                deliverables, wonderful to communicate with, and a fantastic
                person to work with! Thanks, Alice!
              </p>
            </div>
            <div class="rounded-2xl border border-n30 p-10">
              <div class="flex items-center justify-start gap-3 pb-2">
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
                              class="r-hex3 absolute -left-0.5 -top-[18px] z-30 inline-block w-[86px] overflow-hidden"
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
                    <img
                      src="/assets/images/verify-badge.png"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
                <div class="">
                  <div class="flex items-center justify-start gap-3">
                    <h5 class="heading-5">David Warder</h5>
                  </div>
                  <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
                </div>
              </div>
              <p
                class="flex items-center justify-start gap-3 text-sm text-n300"
              >
                <img src="/assets/images/star_icon.png" alt="" />
                Luka recommends working with Alice
              </p>
              <p class="pt-3 font-medium text-n300">
                It was a pleasure working with Alice. She was super clear and
                detailed with the project requirements. I appreciate her
                wonderful communication, collaboration, and flexibility. Thanks,
                Alice!
              </p>
            </div>
            <div class="rounded-2xl border border-n30 p-10">
              <div class="flex items-center justify-start gap-3 pb-2">
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
                              class="r-hex3 absolute -left-0.5 -top-[18px] z-30 inline-block w-[86px] overflow-hidden"
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
                    <img
                      src="/assets/images/verify-badge.png"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
                <div class="">
                  <div class="flex items-center justify-start gap-3">
                    <h5 class="heading-5">Alan Donald</h5>
                  </div>
                  <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
                </div>
              </div>
              <p
                class="flex items-center justify-start gap-3 text-sm text-n300"
              >
                <img src="/assets/images/star_icon.png" alt="" />
                Luka recommends working with Alice
              </p>
              <p class="pt-3 font-medium text-n300">
                I loved working with Alice on our project! Alice was very
                responsive and clear with everything. I loved that I got to have
                creative freedom on this project. We enjoyed working together so
                much, we're extending to phase 2 of this project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Profile End -->

    <!-- Pertner with Section Start -->
    <section class="sbp-30">
      <div class="container">
        <div class="flex flex-col items-center justify-center">
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
                        class="r-hex3 absolute -left-0.5 -top-[18px] z-30 inline-block w-[86px] overflow-hidden"
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
          <p class="heading-4 pt-3 text-center">Partner With Albert Flores</p>
          <div class="max-w-[300px] pt-8">
            <a
              href="/services"
              class="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
            >
              <div class="relative z-20 flex items-center justify-center gap-3">
                <span>View Services</span>
              </div>
            </a>
          </div>
          <div class="relative flex w-full items-center justify-center pt-7">
            <span class="bg-white px-3 text-center text-sm font-medium">
              More Projects by Albert Flores
            </span>
            <div
              class="absolute left-0 right-0 top-[38px] -z-10 h-px w-full bg-n30"
            ></div>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-6 pt-8">
          <div
            class="col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2"
          >
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/view_services_img1.png"
                class="rounded-3xl"
                alt=""
              />
            </div>
            <p class="pt-5 text-center text-sm font-semibold">Cleaning</p>
          </div>
          <div
            class="col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2"
          >
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/view_services_img2.png"
                class="rounded-3xl"
                alt=""
              />
            </div>
            <p class="pt-5 text-center text-sm font-semibold">Babysitting</p>
          </div>
          <div
            class="col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2"
          >
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/view_services_img3.png"
                class="rounded-3xl"
                alt=""
              />
            </div>
            <p class="pt-5 text-center text-sm font-semibold">Gardening</p>
          </div>
          <div
            class="col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2"
          >
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/view_services_img4.png"
                class="rounded-3xl"
                alt=""
              />
            </div>
            <p class="pt-5 text-center text-sm font-semibold">Handyman</p>
          </div>
          <div
            class="col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2"
          >
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/view_services_img5.png"
                class="rounded-3xl"
                alt=""
              />
            </div>
            <p class="pt-5 text-center text-sm font-semibold">Plumber</p>
          </div>
          <div
            class="col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2"
          >
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/view_services_img6.png"
                class="rounded-3xl"
                alt=""
              />
            </div>
            <p class="pt-5 text-center text-sm font-semibold">Renovation</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Pertner with Section End -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
