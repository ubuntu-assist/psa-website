// @ts-nocheck
/**
 * Loads a page's extra vendor scripts (Matter.js tag-cloud, ApexCharts
 * dashboard charts, EmailJS contact form) in order, after the route markup
 * is in the DOM. The original template's `*-custom.js` files are not wrapped
 * in a DOMContentLoaded listener, so they run as soon as they load.
 */
export function loadPageScripts(list) {
  if (typeof document === 'undefined') return Promise.resolve();

  return list.reduce(
    (chain, src) =>
      chain.then(
        () =>
          new Promise((resolve) => {
            // Matter's init throws if its container is absent on this page.
            if (src.includes('matterjs-custom') && !document.querySelector('.tags-container')) {
              return resolve();
            }
            if (document.querySelector(`script[data-page-src="${src}"]`)) return resolve();
            const s = document.createElement('script');
            s.src = src;
            s.dataset.pageSrc = src;
            s.onload = () => resolve();
            s.onerror = () => resolve();
            document.body.appendChild(s);
          })
      ),
    Promise.resolve()
  );
}
