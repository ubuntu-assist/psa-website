import '$lib/i18n';
import { waitLocale } from 'svelte-i18n';
import { restoreLocale } from '$lib/i18n';

export const prerender = true;
export const trailingSlash = 'ignore';

export const load = async () => {
  restoreLocale();
  await waitLocale();
  return {};
};
