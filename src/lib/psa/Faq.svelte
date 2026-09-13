<script>
  import { _, json } from 'svelte-i18n';

  const items = $derived(/** @type {{q:string,a:string}[]} */ ($json('faq.items')) || []);
  let open = $state(2);
  /** @param {number} i */
  const toggle = (i) => (open = open === i ? -1 : i);
</script>

<div class="container">
  <div class="max-w-[620px] pb-10 xl:pb-14">
    <p class="heading-6 text-g400">{$_('faq.kicker')}</p>
    <h2 class="heading-2 pt-3">
      {$_('faq.titlePre')}<span class="text-g400">{$_('faq.titleEm')}</span>
    </h2>
    <p class="pt-4 font-medium text-n400">{$_('faq.subtitle')}</p>
  </div>

  <div class="grid grid-cols-12 gap-6 xl:gap-10">
    <div class="col-span-12 h-fit rounded-3xl border border-n40 p-6 sm:p-8 lg:sticky lg:top-24 lg:col-span-4">
      <h3 class="heading-5">{$_('faq.boxTitle')}</h3>
      <p class="pt-3 text-n400">{$_('faq.boxText')}</p>
      <a
        href="/contact"
        class="relative mt-6 flex items-center justify-center overflow-hidden rounded-xl bg-g400 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-y300 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
      >
        <span class="relative z-10">{$_('faq.cta')}</span>
      </a>
    </div>

    <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
      {#each items as item, i}
        <div class="w-full overflow-hidden rounded-2xl border border-n40 px-4 py-3 sm:px-6 sm:py-4">
          <button
            class="flex w-full items-center justify-between gap-4 text-left"
            onclick={() => toggle(i)}
            aria-expanded={open === i}
          >
            <span class="text-base font-medium sm:text-lg">{item.q}</span>
            <span
              class="flex shrink-0 items-center justify-center rounded-full bg-g400 p-2 text-xl !leading-none text-white duration-500 sm:p-3 {open === i ? 'rotate-180' : ''}"
            >
              <i class="ph-bold ph-caret-down"></i>
            </span>
          </button>
          <div class="grid duration-500 {open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}">
            <div class="overflow-hidden">
              <p class="pr-8 pt-3 text-n400">{item.a}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
