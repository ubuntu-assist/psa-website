// HTML page that hands the OAuth result back to the CMS window that opened the popup,
// using the Netlify/Decap/Sveltia message protocol:
//   popup → opener : "authorizing:github"
//   opener → popup : "authorizing:github"           (confirms it is listening)
//   popup → opener : "authorization:github:success:{"token":"…","provider":"github"}"
// The token is only ever posted to this site's own origin.

/** @param {{ token?: string, error?: string, errorCode?: string, origin?: string }} r */
export function popup({ token, error, errorCode, origin = '' }) {
  const state = token ? 'success' : 'error';
  const content = token ? { token, provider: 'github' } : { provider: 'github', error, errorCode };
  const message = `authorization:github:${state}:${JSON.stringify(content)}`;
  const js = (/** @type {unknown} */ v) => JSON.stringify(v).replace(/</g, '\\u003c');
  const html = `<!doctype html><html><body><script>
(() => {
  const message = ${js(message)};
  const allowed = ${js(origin)};
  const hasToken = ${js(!!token)};
  window.addEventListener('message', ({ data, origin }) => {
    if (data !== 'authorizing:github') return;
    if (hasToken && allowed && origin !== allowed) return; // never leak a token to another site
    window.opener?.postMessage(message, origin);
  });
  window.opener?.postMessage('authorizing:github', '*');
})();
</script></body></html>`;
  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' }
  });
}
