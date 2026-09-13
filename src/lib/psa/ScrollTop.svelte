<script>
  import { onMount } from 'svelte';

  let show = $state(false);

  onMount(() => {
    const onScroll = () => (show = window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<button
  class="jumping1 fixed right-6 z-40 rounded-full border bg-g400 p-2 text-xl !leading-[0] text-white duration-500 hover:bg-y300 hover:text-n900 sm:p-3 sm:text-2xl md:right-10 {show
    ? 'bottom-12 opacity-100'
    : 'pointer-events-none -bottom-20 opacity-0'}"
  aria-label="Remonter en haut"
  onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <span class="block"><i class="ph ph-arrow-up"></i></span>
</button>
