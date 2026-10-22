import { error } from '@sveltejs/kit';
import { postSlugs } from '$lib/content.js';

export const prerender = true;

export function entries() {
  return postSlugs().map(({ slug }) => ({ slug }));
}

/** @param {{ params: { slug: string } }} event */
export function load({ params }) {
  if (!postSlugs().some((p) => p.slug === params.slug)) throw error(404, 'Not found');
  return { slug: params.slug };
}
