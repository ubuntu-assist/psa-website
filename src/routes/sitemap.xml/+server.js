// /sitemap.xml — prerendered at build time from the PSA pages and the blog content.
import { SITE_URL } from '$lib/psa/data.js';
import { postSlugs } from '$lib/content.js';

export const prerender = true;

const PAGES = [
  ['/', 'weekly', '1.0'],
  ['/produits', 'monthly', '0.9'],
  ['/calendrier', 'monthly', '0.8'],
  ['/alimentation-sante', 'monthly', '0.8'],
  ['/a-propos', 'monthly', '0.7'],
  ['/stage', 'monthly', '0.7'],
  ['/contact', 'yearly', '0.7'],
  ['/partenaires', 'monthly', '0.6'],
  ['/actions-sociales', 'monthly', '0.6'],
  ['/mediatheque', 'monthly', '0.5'],
  ['/blog', 'weekly', '0.6']
];

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const url = (/** @type {string} */ loc, /** @type {string} */ lastmod, /** @type {string} */ freq, /** @type {string} */ prio) =>
    `  <url><loc>${SITE_URL}${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${freq}</changefreq><priority>${prio}</priority></url>`;
  const body = [
    ...PAGES.map(([loc, freq, prio]) => url(loc, today, freq, prio)),
    ...postSlugs().map((p) => url(`/blog/${p.slug}`, p.date || today, 'yearly', '0.5'))
  ].join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { 'content-type': 'application/xml; charset=utf-8' } }
  );
}
