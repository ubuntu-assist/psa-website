<script>
  import { _, json } from 'svelte-i18n';
  import { reveal } from './reveal.js';

  const items = $derived(/** @type {{q:string,a:string}[]} */ ($json('faq.items')) || []);
  let open = $state(0);
  /** @param {number} i */
  const toggle = (i) => (open = open === i ? -1 : i);
</script>

<div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10">
  <div class="col-span-12 lg:col-span-4">
    <div class="lg:sticky lg:top-32" use:reveal>
      <h2 class="t-h2">
        {$_('faq.titlePre')}<span class="t-em text-moss">{$_('faq.titleEm')}</span>
      </h2>
      <p class="t-lead pt-6">{$_('faq.subtitle')}</p>
      <div class="mt-10 rounded-[24px] bg-forest p-6 text-paper">
        <p class="t-h4">{$_('faq.boxTitle')}</p>
        <p class="pt-2 text-sm text-paper/70">{$_('faq.boxText')}</p>
        <a href="/contact" class="btn-sun mt-5">{$_('faq.cta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></a>
      </div>
    </div>
  </div>

  <ul class="col-span-12 border-t border-ink/15 lg:col-span-7 lg:col-start-6">
    {#each items as item, i}
      <li class="border-b border-ink/15" use:reveal={{ delay: i * 40 }}>
        <button
          class="group flex w-full items-start justify-between gap-6 py-7 text-left"
          onclick={() => toggle(i)}
          aria-expanded={open === i}
          aria-controls="faq-{i}"
        >
          <span class="flex gap-5">
            <span class="pt-1.5 text-xs font-bold text-ink/40">{String(i + 1).padStart(2, '0')}</span>
            <span class="font-display text-xl tracking-tight transition-colors group-hover:text-moss md:text-2xl">{item.q}</span>
          </span>
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 {open === i
              ? 'rotate-45 border-forest bg-forest text-paper'
              : 'border-ink/20'}"
          >
            <i class="ph-bold ph-plus"></i>
          </span>
        </button>
        <div id="faq-{i}" class="grid transition-[grid-template-rows] duration-500 {open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}">
          <div class="overflow-hidden">
            <p class="max-w-[600px] pb-8 pl-10 text-ink/70">{item.a}</p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
