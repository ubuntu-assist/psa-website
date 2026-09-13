import { error } from '@sveltejs/kit';
import { posts } from '$lib/psa/data.js';

export const prerender = true;

export function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}

/** @param {{ params: { slug: string } }} event */
export function load({ params }) {
  const cfg = posts.find((p) => p.slug === params.slug);
  if (!cfg) throw error(404, 'Not found');
  const others = posts.filter((p) => p.slug !== params.slug).slice(0, 3);
  return { slug: cfg.slug, image: cfg.image, otherSlugs: others.map((o) => o.slug) };
}
