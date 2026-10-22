<script>
  import { reveal } from './reveal.js';
  /** @type {{ partners: {logo:string, name:string, url?:string}[] }} */
  let { partners } = $props();
</script>

<ul class="grid grid-cols-2 border-l border-t border-ink/10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
  {#each partners as p, i}
    <li
      use:reveal={{ delay: (i % 5) * 50 }}
      class="group relative flex min-h-[180px] flex-col items-center justify-between gap-3 border-b border-r border-ink/10 bg-paper p-4 text-center transition-colors duration-500 hover:bg-white sm:min-h-[220px] sm:p-6"
    >
      <img
        src={p.logo}
        alt={p.name}
        loading="lazy"
        class="my-auto max-h-20 max-w-[78%] object-contain opacity-90 grayscale-[70%] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-28"
      />
      {#if p.url}
        <a href={p.url} target="_blank" rel="noopener" class="text-[11px] font-semibold leading-snug text-ink/50 underline-offset-2 transition-colors after:absolute after:inset-0 hover:underline group-hover:text-ink">
          {p.name}
        </a>
      {:else}
        <p class="text-[11px] font-semibold leading-snug text-ink/50 transition-colors group-hover:text-ink">{p.name}</p>
      {/if}
    </li>
  {/each}
</ul>
