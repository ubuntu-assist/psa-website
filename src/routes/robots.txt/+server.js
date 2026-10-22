// /robots.txt — prerendered.
import { SITE_URL } from '$lib/psa/data.js';

export const prerender = true;

export function GET() {
  return new Response(
    ['User-agent: *', 'Allow: /', 'Disallow: /admin/', 'Disallow: /api/', '', `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n'),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } }
  );
}
