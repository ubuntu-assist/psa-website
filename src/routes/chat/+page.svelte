<script>
  import FooterOne from '$lib/partials/FooterOne.svelte';
  import Header from '$lib/partials/Header.svelte';
  import ScrollTopButton from '$lib/partials/ScrollTopButton.svelte';
</script>

<svelte:head>
  <title>Chat - Servibe HTML Template</title>
</svelte:head>

<!-- Header Section Start -->
    <Header />
    <!-- Header Section End -->

    <!-- Chat section start -->

    <section class="sbp-30 mt-[100px]">
      <div
        class="container grid grid-cols-12 rounded-xl border shadow-[0px_4px_26px_0px_rgba(222,222,222,0.25)] sm:mt-28 lg:rounded-2xl"
      >
        <div
          id="chatSidebar"
          class="chatSidebarClose border-r bg-white py-8 duration-500 max-lg:absolute lg:col-span-3"
        >
          <div class="flex items-center justify-between px-6 pb-5">
            <div class="flex items-center justify-start gap-3">
              <img
                src="/assets/images/chat1.png"
                alt=" user avatar"
                class="h-12 w-12 rounded-xl shadow-[0px_4px_9px_0px_rgba(100,218,255,0.39)]"
              />

              <h5 class="heading-5">Chat</h5>
            </div>
            <div class="flex items-center justify-end gap-2">
              <i
                class="ph-fill ph-dots-three-outline block cursor-pointer rounded-xl bg-slate-100 px-2 text-2xl"
              ></i
              ><i
                id="chatSidebarClose"
                class="ph ph-x-circle block cursor-pointer text-2xl lg:hidden"
              ></i>
            </div>
          </div>
          <div
            class="mx-6 flex items-center justify-start gap-2 rounded-xl bg-slate-100 px-5 py-3"
          >
            <i class="ph ph-magnifying-glass block text-xl text-slate-400"></i
            ><input
              placeholder="Search"
              class="w-full bg-transparent outline-none"
            />
          </div>
          <div class="flex max-h-[460px] flex-col overflow-auto pt-5">
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Piter Maio"
                src="/assets/images/chat2.png"
                class="h-12 w-12 rounded-xl"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Piter Maio</p>
                  <p
                    class="rounded-full bg-r300 px-1.5 py-1 text-sm font-medium !leading-none text-white"
                  >
                    3
                  </p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p>I am a ga..</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >15min</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Leslie Alexander"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat3.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Leslie Alexander</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">Why...</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >12min</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Sa Kib"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat4.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Sa Kib</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">Hello...</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >25min</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Brooklyn Simmons"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat5.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Brooklyn Simmons</p>
                  <p
                    class="rounded-full bg-r300 px-1.5 py-1 text-sm font-medium !leading-none text-white"
                  >
                    3
                  </p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p>Duis tincid</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >18min</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Leslie Alexander"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat6.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Leslie Alexander</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">I am...</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >20mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Piter Maio"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat1.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Piter Maio</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">How are...</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >19mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Cody Fisher"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat2.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Cody Fisher</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">Video</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >13mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Bessie Cooper"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat3.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Bessie Cooper</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">Photo</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >23mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Brooklyn Simmons"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat4.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Brooklyn Simmons</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">How...</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >14mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Theresa Webb"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat5.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Theresa Webb</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">Friend...</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >45mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Piter Maio"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat6.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Piter Maio</p>
                  <p
                    class="rounded-full bg-r300 px-1.5 py-1 text-sm font-medium !leading-none text-white"
                  >
                    3
                  </p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p>Hello</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >14mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center justify-start gap-3 px-2 py-5 pl-6 hover:bg-n30"
            >
              <img
                alt="Leslie Alexander"
                class="h-12 w-12 rounded-xl"
                src="/assets/images/chat2.png"
              />
              <div class="">
                <div class="flex items-center justify-start gap-2 pb-1">
                  <p>Leslie Alexander</p>
                </div>
                <div class="flex items-center justify-start text-sm">
                  <p class="text-slate-400">I'm...</p>
                  <p class="flex items-center justify-start pl-2">
                    <span class="block h-2 w-2 rounded-full bg-slate-300"></span
                    ><span class="text-t88 block pl-1 !leading-none"
                      >1hour</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-9">
          <div
            class="flex items-center justify-between border-b bg-slate-100 px-4 py-5 sm:px-6"
          >
            <div class="flex items-center justify-start gap-2">
              <i
                id="chatSidebarOpen"
                class="ph ph-list cursor-pointer text-2xl lg:hidden"
              ></i
              ><img
                alt="user avatar"
                class="h-12 w-12 rounded-xl shadow-[0px_4px_9px_0px_rgba(100,218,255,0.39)]"
                src="/assets/images/chat1.png"
              />
              <div>
                <p class="xl-body">Piter Maio</p>
                <p class="text-sm text-[#1ED400]">online</p>
              </div>
            </div>
            <div class="">
              <i class="ph ph-phone cursor-pointer pr-3 text-xl"></i
              ><i class="ph ph-video-camera cursor-pointer text-xl"></i>
            </div>
          </div>
          <div class="flex flex-col items-center justify-between gap-7 p-6">
            <div class="flex w-full items-start justify-start gap-2">
              <img
                alt="user avatar"
                class="h-10 w-10 rounded-xl"
                src="/assets/images/chat2.png"
              />
              <div class="rounded-b-xl rounded-tr-xl bg-slate-200 px-5 py-3">
                <p class="text-base text-slate-700">
                  Hello! Have you seen my backpack anywhere in office?
                </p>
                <p class="text-sm text-slate-400">15:42</p>
              </div>
            </div>
            <div
              class="flex w-full flex-row-reverse items-end justify-start gap-2"
            >
              <img
                alt="user avatar"
                class="h-10 w-10 rounded-xl"
                src="/assets/images/chat1.png"
              />
              <div
                class="rounded-b-xl rounded-tr-xl bg-b300 px-5 py-3 text-white"
              >
                <p class="text-base">Thank you for work, see you!</p>
                <p class="text-sm text-white/50">
                  <i class="ri-check-double-line pr-1"></i>15:42
                </p>
              </div>
            </div>
            <div class="flex w-full items-start justify-start gap-2">
              <img
                alt="user avatar"
                class="h-10 w-10 rounded-xl"
                src="/assets/images/chat2.png"
              />
              <div class="rounded-b-xl rounded-tr-xl bg-slate-200 px-5 py-3">
                <p class="max-w-[500px] text-base text-slate-700">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <p class="text-sm text-slate-400">15:42</p>
              </div>
            </div>
            <div
              class="flex w-full flex-row-reverse items-end justify-start gap-2"
            >
              <img
                alt="user avatar"
                class="h-10 w-10 rounded-xl"
                src="/assets/images/chat2.png"
              />
              <div
                class="rounded-b-xl rounded-tr-xl bg-b300 px-5 py-3 text-white"
              >
                <p class="text-base">A page when looking at its layout.</p>
                <p class="text-sm text-white/50">
                  <i class="ri-check-double-line pr-1"></i>15:42
                </p>
              </div>
            </div>
          </div>
          <div
            class="mx-6 mb-7 rounded-xl px-4 pb-5 max-lg:md:pt-3 lg:rounded-2xl"
          >
            <div
              class="flex items-center justify-between gap-4 pt-2 max-md:flex-col lg:pt-6"
            >
              <div class="">
                <img
                  alt="user pic"
                  class="max-w-[60px] rounded-xl object-cover max-md:hidden"
                  src="/assets/images/chat1.png"
                />
              </div>
              <div
                class="flex w-full items-center justify-between gap-4 rounded-xl bg-[#F6F5F8] p-4 max-md:flex-col lg:rounded-2xl"
              >
                <input
                  class="w-full bg-transparent outline-none"
                  placeholder="Write a comment...."
                />
                <div
                  class="text-t88 flex items-center justify-between gap-1 text-2xl max-md:hidden xl:gap-3"
                >
                  <div class="cursor-pointer">
                    <label for="chat-file-file"
                      ><i class="ph ph-image cursor-pointer"></i></label
                    ><input class="hidden" id="chat-file-file" type="file" />
                  </div>
                  <button class="ph ph-gif"></button
                  ><button class="ph ph-smiley"></button>
                </div>
              </div>
              <div class="flex items-center justify-end gap-4 max-md:w-full">
                <div
                  class="text-t88 flex items-center justify-between gap-3 text-2xl md:hidden"
                >
                  <div class="cursor-pointer">
                    <label for="chat-file"
                      ><i class="ph ph-image cursor-pointer"></i></label
                    ><input class="hidden" id="chat-file" type="file" />
                  </div>
                  <button class="ph ph-gif"></button
                  ><button class="ph ph-smiley"></button>
                </div>
                <button
                  class="l-body rounded-xl bg-n900 px-6 py-2 text-2xl !leading-none text-white duration-500 hover:bg-r300 md:px-8 md:py-4"
                >
                  <i class="ph-bold ph-paper-plane-tilt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Chat section end -->

    <!-- Footer Section Start -->
    <FooterOne />
    <!-- Footer Section End -->

    <!-- Scroll To top Button Start -->
    <ScrollTopButton />
    <!-- Scroll To top Button End -->

    <!-- ==== js dependencies start ==== -->
