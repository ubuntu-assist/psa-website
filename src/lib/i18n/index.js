import { init, addMessages, locale } from 'svelte-i18n';
import { browser } from '$app/environment';
import fr from './messages/fr.js';
import en from './messages/en.js';

export const LOCALES = ['fr', 'en'];
export const DEFAULT_LOCALE = 'fr';
export const STORAGE_KEY = 'psa-lang';

// Synchronous dictionaries -> SSR / prerender output is fully translated.
addMessages('fr', fr);
addMessages('en', en);

init({
  fallbackLocale: DEFAULT_LOCALE,
  initialLocale: DEFAULT_LOCALE
});

/**
 * Apply the language the visitor previously chose (browser only).
 * French is the default; English is opt-in via the switcher and then remembered.
 */
export function restoreLocale() {
  if (!browser) return;
  let saved = '';
  try {
    saved = localStorage.getItem(STORAGE_KEY) || '';
  } catch {
    /* private mode */
  }
  const next = LOCALES.includes(saved) ? saved : DEFAULT_LOCALE;
  locale.set(next);
  document.documentElement.lang = next;
}

/** @param {string} code */
export function setLocale(code) {
  locale.set(code);
  if (browser) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = code;
  }
}
