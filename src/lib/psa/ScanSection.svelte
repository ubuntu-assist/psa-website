<script>
  import { _ } from 'svelte-i18n';
  import { channels, TEL_1, TEL_2, TEL_1_HREF, TEL_2_HREF } from './data.js';
  import { reveal } from './reveal.js';

  const boutique = channels.find((c) => c.key === 'boutique');
  const others = channels.filter((c) => c.key !== 'boutique');
</script>

<!-- « Scanner pour nous retrouver » — catalogue + one clickable QR card per channel -->
<section id="nous-retrouver" class="s-pad pat-dots scroll-mt-24 bg-cream">
  <div class="container">
    <div class="grid grid-cols-12 items-end gap-y-8 lg:gap-x-8">
      <div class="col-span-12 lg:col-span-7" use:reveal>
        <h2 class="t-h2">{$_('scan.title')}</h2>
      </div>
      <p class="t-lead col-span-12 lg:col-span-4 lg:col-start-9" use:reveal>{$_('scan.para')}</p>
    </div>

    <!-- catalogue, featured -->
    {#if boutique}
      <a
        href={boutique.href}
        target="_blank"
        rel="noopener"
        use:reveal
        class="grain group mt-14 grid items-center gap-8 overflow-hidden rounded-[32px] bg-forest p-8 text-paper md:grid-cols-[1fr_auto] lg:p-12"
      >
        <div class="relative z-10">
          <span class="inline-flex items-center gap-2 rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            <i class="ph-fill ph-storefront"></i>{$_('channels.boutique')}
          </span>
          <h3 class="t-h2 pt-6">{$_('scan.catalogTitle')}</h3>
          <p class="t-lead max-w-[520px] pt-4 !text-paper/70">{$_('scan.catalogText')}</p>
          <span class="btn-sun mt-8">
            {$_('scan.catalogCta')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span>
          </span>
        </div>
        <div class="relative z-10 flex flex-col items-center gap-3">
          <img
            src="/assets/images/psa/qr/boutique.svg"
            alt="QR code — {$_('channels.boutique')}"
            class="size-44 rounded-[24px] bg-white p-3 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105 md:size-52"
          />
          <span class="text-[11px] font-bold uppercase tracking-widest text-sun">{$_('scan.scanMe')}</span>
        </div>
      </a>
    {/if}

    <ul class="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-4">
      {#each others as c, i}
        <li use:reveal={{ delay: (i % 6) * 50 }}>
          <a
            href={c.href}
            target="_blank"
            rel="noopener"
            class="group flex h-full flex-col rounded-[22px] border border-ink/10 bg-paper p-4 transition-all duration-300 hover:-translate-y-1 hover:border-moss hover:shadow-[0_20px_40px_-24px_rgba(10,36,18,0.35)]"
          >
            <span class="flex items-center gap-2">
              <span class="flex size-8 shrink-0 items-center justify-center rounded-full {c.color} text-base text-white">
                <i class="ph-fill {c.icon}"></i>
              </span>
              <span class="min-w-0">
                <span class="block truncate text-sm font-bold leading-tight">{$_('channels.' + c.key)}</span>
                <span class="block truncate text-[11px] text-ink/50">{c.handle}</span>
              </span>
            </span>
            <img
              src="/assets/images/psa/qr/{c.key}.svg"
              alt="QR code — {$_('channels.' + c.key)}"
              loading="lazy"
              class="mx-auto mt-4 aspect-square w-full max-w-[130px] mix-blend-multiply"
            />
            <span class="flex items-center justify-between pt-3 text-[11px] font-bold uppercase tracking-widest text-moss">
              {$_('scan.scanMe')}<i class="ph-bold ph-arrow-up-right transition-transform group-hover:rotate-45"></i>
            </span>
          </a>
        </li>
      {/each}
      <li class="col-span-2 flex flex-col justify-center rounded-[22px] bg-sun p-5 text-ink sm:col-span-1 lg:col-span-2 xl:col-span-2" use:reveal>
        <p class="text-[11px] font-bold uppercase tracking-widest">{$_('scan.directTitle')}</p>
        <a href={TEL_1_HREF} class="whitespace-nowrap pt-3 font-display text-2xl leading-tight hover:underline">{TEL_1}</a>
        <a href={TEL_2_HREF} class="whitespace-nowrap font-display text-2xl leading-tight hover:underline">{TEL_2}</a>
        <p class="pt-3 text-xs text-ink/70">{$_('scan.directPlace')}</p>
      </li>
    </ul>
  </div>
</section>
