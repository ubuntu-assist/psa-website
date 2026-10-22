// Editable content (managed in the CMS at /admin, stored in src/content/*.json).
// Files use Sveltia's `single_file` i18n structure: { fr: {...}, en: {...} }.
// `localize` deep-merges the requested locale over French, so any field left empty in
// English (or stored only in the default locale) falls back to the French value.
import { marked } from 'marked';
import team from '../content/team.json';
import partners from '../content/partners.json';
import mediatheque from '../content/mediatheque.json';
import calendar from '../content/calendar.json';

const blogFiles = /** @type {Record<string, any>} */ (
  import.meta.glob('../content/blog/*.json', { eager: true, import: 'default' })
);

/** @param {string | null | undefined} l */
export const lang = (l) => (String(l || 'fr').startsWith('en') ? 'en' : 'fr');

/** @param {any} base @param {any} over @returns {any} */
function merge(base, over) {
  if (over === undefined || over === null || over === '') return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return base;
    return base.map((b, i) => merge(b, over[i]));
  }
  if (base && typeof base === 'object') {
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = merge(base[k], over[k]);
    return out;
  }
  return over;
}

/** @param {any} data @param {string | null | undefined} locale */
export function localize(data, locale) {
  if (!data || !data.fr) return data;
  const l = lang(locale);
  return l === 'fr' ? data.fr : merge(data.fr, data[l]);
}

/* ── blog ── */

/**
 * @typedef {{ slug: string, title: string, category: string, excerpt: string, body: string,
 *   date: string, image: string }} Post
 */

/** all posts, newest first. @param {string | null | undefined} locale @returns {Post[]} */
export function getPosts(locale) {
  return Object.entries(blogFiles)
    .map(([path, file]) => ({
      slug: path.split('/').pop()?.replace(/\.json$/, '') || '',
      ...localize(file, locale)
    }))
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

/** slugs, for prerendering and the sitemap */
export const postSlugs = () => getPosts('fr').map((p) => ({ slug: p.slug, date: p.date }));

/** @param {string} md */
export const renderMarkdown = (md) => /** @type {string} */ (marked.parse(md || '', { async: false }));

/** @param {string} iso @param {string | null | undefined} locale */
export const formatDate = (iso, locale) =>
  iso
    ? new Intl.DateTimeFormat(lang(locale) === 'en' ? 'en-GB' : 'fr-FR', { dateStyle: 'long', timeZone: 'UTC' }).format(
        new Date(iso)
      )
    : '';

/* ── team / partners / médiathèque / calendar ── */

/** @param {string | null | undefined} locale @returns {{ groupPhoto: string, members: {name:string, role:string, photo:string}[] }} */
export const getTeam = (locale) => localize(team, locale);

/** @returns {{ institutional: {name:string, logo:string, url?:string}[], technical: {name:string, logo:string, url?:string}[] }} */
export const getPartners = () => partners;

/**
 * @param {string | null | undefined} locale
 * @returns {{ docs: {title:string, text:string, file:string}[], photos: {image:string, caption:string}[], videos: {title:string, url:string}[] }}
 */
export const getMediatheque = (locale) => localize(mediatheque, locale);

/**
 * @typedef {{ name: string, category: string, sow: number[], nursery: number[], plant: number[],
 *   harvest: number[], tip: string }} Crop
 */
/** @param {string | null | undefined} locale @returns {{ intro: string, crops: Crop[] }} */
export const getCalendar = (locale) => localize(calendar, locale);
