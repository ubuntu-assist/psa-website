<script>
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
</script>

<svelte:head>
  <title>Hire me - Servibe HTML Template</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- Header Section End -->

    <section class="sbp-30 mt-[140px]">
      <div class="container grid grid-cols-12 gap-6">
        <div
          class="col-span-12 rounded-2xl border border-n30 p-4 md:col-span-5 lg:p-8"
        >
          <div class="flex items-center justify-center">
            <div class="relative max-md:overflow-hidden">
              <div
                class="hexagon-styles my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/36.75)] bg-b50 before:rounded-[calc(190px/18.75)] after:rounded-[calc(190px/18.75)]"
              >
                <div class="absolute -top-[38px] left-2">
                  <div
                    class="hexagon-styles z-10 my-[calc(175px*0.5/2)] h-[calc(175px*0.57736720554273)] w-[175px] rounded-[calc(175px/50)] bg-b300 before:rounded-[calc(175px/50)] after:rounded-[calc(175px/50)]"
                  >
                    <div class="absolute -top-[35px] left-2 z-20">
                      <div
                        class="hexagon-styles z-10 my-[calc(160px*0.5/2)] h-[calc(160px*0.57736720554273)] w-[160px] rounded-[calc(160px/50)] bg-b50 before:rounded-[calc(160px/50)] after:rounded-[calc(160px/50)]"
                      >
                        <div
                          class="r-hex3 absolute -left-[2px] -top-[34px] z-30 inline-block w-[165px] overflow-hidden"
                        >
                          <div class="r-hex-inner3">
                            <div
                              class="expertImgBig r-hex-inner-3 before:h-[160px] before:bg-cover"
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
          </div>
          <div class="flex items-start justify-center gap-3 pt-6">
            <h4 class="heading-4">Albert Flores</h4>
            <p class="p rounded-full bg-y300 px-3 py-1 text-sm font-medium">
              PRO
            </p>
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
            </div>
          </div>
        </div>
        <div
          class="col-span-12 rounded-2xl border border-n30 p-4 sm:p-6 md:col-span-7 lg:p-10"
        >
          <h5 class="heading-5 w-full border-b border-n30 pb-6">Handyman</h5>

          <div class="flex flex-col gap-6 pt-6">
            <div
              class="flex items-center justify-between gap-3 rounded-3xl border border-n30 px-6 py-5"
            >
              <div class="flex items-center justify-start gap-3">
                <img
                  src="/assets/images/review_people_1.png"
                  class="w size-12 rounded-full"
                  alt=""
                />
                <div class="">
                  <p class="pb-1 font-medium">Jenny Wilson</p>
                  <p class="text-sm text-n300">life blogger</p>
                </div>
              </div>
              <p class="heading-4">$245</p>
            </div>

            <div class="rounded-2xl border border-n30 bg-n10 px-4 py-3">
              <input type="date" class="w-full bg-transparent outline-none" />
            </div>
            <div class="rounded-2xl border border-n30 bg-n10 px-4 py-3">
              <input type="time" class="w-full bg-transparent outline-none" />
            </div>
            <div class="rounded-2xl border border-n30 bg-n10 px-4 py-3">
              <textarea
                placeholder="Message"
                class="min-h-[150px] w-full bg-transparent outline-none"
              ></textarea>
            </div>
            <button
              class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
            >
              <span class="relative z-10">Hire Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
