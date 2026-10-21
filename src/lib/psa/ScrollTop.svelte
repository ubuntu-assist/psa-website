<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  let show = $state(false);

  onMount(() => {
    const onScroll = () => (show = window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<button
  class="fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full bg-sun text-xl text-ink shadow-[0_10px_30px_-10px_rgba(10,36,18,0.5)] transition-all duration-500 hover:-translate-y-1 md:right-10 {show
    ? 'translate-y-0 opacity-100'
    : 'pointer-events-none translate-y-6 opacity-0'}"
  aria-label={$_('footer.backTop')}
  onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <i class="ph-bold ph-arrow-up"></i>
</button>
