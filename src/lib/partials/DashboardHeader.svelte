<!-- generated from legacy/src/partials/dashboard-header.html -->
<header class="header headerAbsolute left-0 right-0 top-0 z-50 bg-white">
  <div class="4xl:large-container max-4xl:container">
    <div class="text-s1 flex items-center justify-between py-6">
      <div class="flex items-center justify-start gap-3 pb-1">
        <button class="mobileMenuOpenButton text-3xl lg:hidden">
          <i class="ph ph-list"></i>
        </button>
        <a href="/dashboard">
          <img
            src="/assets/images/logo.png"
            alt="Servibe logo"
            class="max-w-[110px] min-[400px]:max-sm:max-w-[150px] sm:max-w-[170px]"
          />
        </a>
      </div>
      <!-- Desktop dashboardMenu Start -->
      <nav class="max-lg:hidden">
        <ul
          class="flex items-center justify-center gap-2 font-medium xxl:gap-6"
        >
          <li class="">
            <a
              href="/dashboard"
              class="dashboardMenu rounded-full px-4 py-3 duration-500 hover:bg-b300 hover:text-white"
              >Dashboard</a
            >
          </li>

          <li class="">
            <a
              href="/dashboard/services"
              class="dashboardMenu rounded-full px-4 py-3 duration-700 hover:bg-b300 hover:text-white"
              >Services</a
            >
          </li>
          <li class="">
            <a
              href="/dashboard/payment-details"
              class="dashboardMenu rounded-full px-4 py-3 duration-700 hover:bg-b300 hover:text-white"
              >Payout History</a
            >
          </li>
          <li class="">
            <a
              href="/dashboard/wishlist"
              class="dashboardMenu rounded-full px-4 py-3 duration-700 hover:bg-b300 hover:text-white"
              >Wishlist</a
            >
          </li>
          <li class="">
            <a
              href="/dashboard/reviews"
              class="dashboardMenu rounded-full px-4 py-3 duration-700 hover:bg-b300 hover:text-white"
              >Review</a
            >
          </li>
        </ul>
      </nav>
      <!-- Desktop dashboardMenu End -->

      <div class="flex items-center justify-end gap-2 sm:gap-6">
        <div
          class="relative flex cursor-pointer items-center justify-center rounded-full bg-n30 p-3 text-n300"
          id="notification"
        >
          <i class="ph ph-bell text-2xl !leading-none"></i>
          <span class="absolute right-3 top-3 rounded-full bg-n50 p-px"
            ><span class="block size-2.5 rounded-full bg-r300"></span
          ></span>

          <div
            class="modalClose absolute right-0 top-12 w-[230px] origin-top-right rounded-2xl border border-n30 bg-white py-4 duration-500"
            id="notificationModal"
          >
            <p class="px-4 pb-3 text-lg font-semibold">Notification</p>
            <div
              class="flex w-full flex-col items-start justify-start gap-4 border-y border-n30 p-3"
            >
              <div class="flex items-start justify-start gap-2">
                <i
                  class="ph ph-bell flex items-center justify-center rounded-full bg-b300 p-2 text-white"
                ></i>
                <div class="">
                  <p class="text-n900">Notification one</p>
                  <p class="text-sm text-n300">7 hours ago</p>
                </div>
              </div>
              <div class="flex items-start justify-start gap-2">
                <i
                  class="ph ph-bell flex items-center justify-center rounded-full bg-b300 p-2 text-white"
                ></i>
                <div class="">
                  <p class="text-n900">Notification one</p>
                  <p class="text-sm text-n300">7 hours ago</p>
                </div>
              </div>
              <div class="flex items-start justify-start gap-2">
                <i
                  class="ph ph-bell flex items-center justify-center rounded-full bg-b300 p-2 text-white"
                ></i>
                <div class="">
                  <p class="text-n900">Notification one</p>
                  <p class="text-sm text-n300">7 hours ago</p>
                </div>
              </div>
              <div class="flex items-start justify-start gap-2">
                <i
                  class="ph ph-bell flex items-center justify-center rounded-full bg-b300 p-2 text-white"
                ></i>
                <div class="">
                  <p class="text-n900">Notification one</p>
                  <p class="text-sm text-n300">7 hours ago</p>
                </div>
              </div>
            </div>
            <p class="px-4 pt-3 text-lg font-semibold">See All Notification</p>
          </div>
        </div>

        <div
          class="relative cursor-pointer rounded-full bg-n30 p-px"
          id="profileIcon"
        >
          <img
            src="/assets/images/review_people_1.png"
            class="size-11 rounded-full"
            alt=""
          />
          <div
            class="modalClose absolute right-0 top-12 w-[200px] origin-top-right rounded-2xl border border-n30 bg-white py-4 duration-500"
            id="profileModal"
          >
            <ul class="flex flex-col gap-3 pl-4">
              <li class="font-medium duration-500 hover:text-r300">
                <a href="/dashboard/profile">Profile</a>
              </li>
              <li class="font-medium duration-500 hover:text-r300">
                <a href="/dashboard/edit-profile">Edit Profile</a>
              </li>
              <li class="font-medium duration-500 hover:text-r300">
                <a href="/dashboard/settings">Settings</a>
              </li>
              <li class="font-medium duration-500 hover:text-r300">
                <a href="/sign-in">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  Mobile dashboardMenu Start -->
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
        <a href="/dashboard">
          <img
            src="/assets/images/logo_white.png"
            alt="logo"
            class="w-[150px]"
          />
        </a>
        <i class="ri-close-line mobileMenuCloseButton cursor-pointer !text-3xl">
          <i class="ph ph-x"></i>
        </i>
      </div>

      <ul
        class="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10"
      >
        <li>
          <a href="/dashboard" class="dashboardMobileMenu"> Dashboard </a>
        </li>
        <li>
          <a href="/dashboard/services" class="dashboardMobileMenu"> Services </a>
        </li>
        <li>
          <a href="/dashboard/payment-details" class="dashboardMobileMenu">
            Payout History
          </a>
        </li>
        <li>
          <a href="/dashboard/wishlist" class="dashboardMobileMenu"> Wishlist </a>
        </li>
        <li>
          <a href="/dashboard/reviews" class="dashboardMobileMenu"> Reviews </a>
        </li>
      </ul>
    </div>
  </nav>
  <!--  Mobile dashboardMenu End -->
</header>
