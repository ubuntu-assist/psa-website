<!-- generated from legacy/src/partials/search-box.html -->
<div
  class="relative z-20 w-full rounded-3xl border border-n20 bg-white p-4 sm:p-8"
>
  <form
    class="flex items-center justify-between text-lg font-medium max-sm:text-sm"
  >
    <div class="flex items-center justify-start gap-4 sm:gap-10">
      <div class="relative border-r pr-4 sm:pr-10" id="locationModalOpenButton">
        <div class="flex cursor-pointer items-center justify-between gap-2">
          <i class="ph ph-map-pin"></i>
          <span class="locationText"
            ><span class="max-[400px]:hidden">Select</span> Location</span
          >
        </div>

        <div
          id="locationModal"
          class="modalClose absolute left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-base duration-700 max-sm:text-sm sm:-left-8 sm:w-[220px] sm:py-5"
        >
          <input
            type="text"
            class="mx-2 w-[90%] rounded-xl border border-n30 px-2 py-2 outline-none placeholder:text-n800 sm:mx-3 sm:px-3"
            placeholder="Search"
          />
          <p
            class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
          >
            Alaska
          </p>
          <p
            class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
          >
            New York
          </p>
          <p
            class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
          >
            California
          </p>
          <p
            class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white"
          >
            Washington
          </p>
        </div>
      </div>
      <div
        class="relative flex cursor-pointer items-center justify-between gap-2"
        id="servicesModalOpenButton"
      >
        <span class="serviceText"
          ><span class="max-[400px]:hidden">Select your</span> service</span
        >
        <i class="ph ph-caret-down"></i>

        <div
          id="servicesModal"
          class="modalClose absolute right-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-sm duration-700 sm:-left-8 sm:w-[220px] sm:py-5 sm:text-base"
        >
          <p
            class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
          >
            Handyman
          </p>
          <p
            class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
          >
            Cleaning
          </p>
          <p
            class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
          >
            Renovation
          </p>
          <p
            class="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6"
          >
            Photography
          </p>
        </div>
      </div>
    </div>
    <button
      class="relative ml-2 flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:!leading-none max-md:size-11 md:px-8 md:py-3"
    >
      <i
        class="ph ph-magnifying-glass text-base !leading-none sm:text-xl md:hidden"
      ></i>
      <span class="relative z-10 max-md:hidden">Search</span>
    </button>
  </form>
</div>
