// Helpers for the planting calendar (/calendrier) and its home-page teaser.
// Crop data lives in src/content/calendar.json (editable in the CMS).

/** @typedef {import('$lib/content.js').Crop} Crop */
/** @typedef {'sow' | 'nursery' | 'plant' | 'harvest'} Phase */

/** @type {Phase[]} */
export const PHASES = ['sow', 'nursery', 'plant', 'harvest'];

/** Tailwind classes per phase (bars in the year grid, dots in legends and cards). */
export const PHASE_STYLE = {
  sow: 'bg-sun',
  nursery: 'bg-sunsoft ring-1 ring-inset ring-sun',
  plant: 'bg-moss',
  harvest: 'bg-clay'
};

export const CATEGORIES = ['vivrier', 'maraicher', 'fruitier', 'rente'];

/** Indicative seasons for the West highlands, by month (1–12). */
export const SEASON_OF = /** @type {Record<number, 'dry' | 'rain1' | 'rain2'>} */ ({
  1: 'dry', 2: 'dry', 3: 'rain1', 4: 'rain1', 5: 'rain1', 6: 'rain1', 7: 'rain1',
  8: 'rain2', 9: 'rain2', 10: 'rain2', 11: 'rain2', 12: 'dry'
});
export const SEASON_STYLE = { dry: 'bg-claysoft text-ink', rain1: 'bg-sage text-forest', rain2: 'bg-moss/20 text-forest' };

/** @param {number} m 1–12 @param {string | null | undefined} locale @param {'long' | 'short'} [style] */
export function monthName(m, locale, style = 'long') {
  const s = new Intl.DateTimeFormat(String(locale || 'fr').startsWith('en') ? 'en-GB' : 'fr-FR', {
    month: style,
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(2026, m - 1, 15)));
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/\.$/, '');
}

/** Current month in Cameroon (WAT, UTC+1). */
export const currentMonth = () => new Date(Date.now() + 3600_000).getUTCMonth() + 1;

/** @param {Crop} c @param {number} m @returns {Phase[]} */
export const phasesIn = (c, m) => PHASES.filter((p) => (c[p] || []).includes(m));

/** What to start and what to harvest in a given month. @param {Crop[]} crops @param {number} m */
export function cropsForMonth(crops, m) {
  return {
    start: crops.filter((c) => ['sow', 'nursery', 'plant'].some((p) => (c[/** @type {Phase} */ (p)] || []).includes(m))),
    harvest: crops.filter((c) => (c.harvest || []).includes(m))
  };
}
