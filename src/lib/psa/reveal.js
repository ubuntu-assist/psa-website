// Svelte action: fades/slides an element in the first time it scrolls into view.
// Elements already on screen at mount are left alone (no flash after hydration).
/** @param {HTMLElement} node @param {{ delay?: number }} [opts] */
export function reveal(node, opts = {}) {
  if (typeof IntersectionObserver === 'undefined') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (node.getBoundingClientRect().top < innerHeight * 0.9) return;

  node.classList.add('reveal');
  if (opts.delay) node.style.transitionDelay = opts.delay + 'ms';
  const io = new IntersectionObserver(
    ([e]) => {
      if (!e.isIntersecting) return;
      node.classList.add('is-in');
      io.disconnect();
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  io.observe(node);
  return { destroy: () => io.disconnect() };
}
