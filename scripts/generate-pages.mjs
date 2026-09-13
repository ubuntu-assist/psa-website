/**
 * One-shot generator: converts the original static template in `legacy/src/`
 * into SvelteKit routes + partial components.
 *
 *   node scripts/generate-pages.mjs
 *
 * Safe to re-run: it overwrites the generated files under
 *   src/routes/**\/+page.svelte
 *   src/lib/partials/*.svelte
 * and leaves everything else (app.css, servibe.js, layout, …) untouched.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'legacy', 'src');
const ROUTES = join(root, 'src', 'routes');
const PARTIALS_DIR = join(root, 'src', 'lib', 'partials');

// <include-TAG /> -> [component, partial file]
const INCLUDES = {
  header: ['Header', 'header.html'],
  'dashboard-header': ['DashboardHeader', 'dashboard-header.html'],
  'footer-one': ['FooterOne', 'footer-one.html'],
  'scroll-top-button': ['ScrollTopButton', 'scroll-top-button.html'],
  'fixed-price-service-section': ['FixedPriceServiceSection', 'fixed-price-service-section.html'],
  'looking-for-service-section': ['LookingForServiceSection', 'looking-for-service-section.html'],
  'secure-guard-section': ['SecureGuardSection', 'secure-guard-section.html'],
  'news-letter-section': ['NewsLetterSection', 'news-letter-section.html'],
  'get-workers-gigs': ['GetWorkersGigs', 'get-workers-gigs.html'],
  'recent-posts-section': ['RecentPostsSection', 'recent-posts-section.html'],
  'get-help-today-section': ['GetHelpTodaySection', 'get-help-today-section.html'],
  'top-experts-section': ['TopExpertsSection', 'top-experts-section.html'],
  'faq-section': ['FaqSection', 'faq-section.html'],
  'search-box': ['SearchBox', 'search-box.html'],
  'testimonial-three': ['TestimonialThree', 'testimonial-three.html'],
  'how-it-works': ['HowItWorksSection', 'how-it-works-section.html']
};

const SPECIAL_SCRIPTS = [
  'matter.min.js',
  'matterjs-custom.js',
  'apexcharts.min.js',
  'apex-custom.js',
  'emailjs.min.js',
  'emailjs-custom.js'
];

// Pages owned by the hand-built PSA site (src/routes/(psa)/…) — never (re)generate these.
const PSA_OWNED = new Set(['index2.html', 'contact.html', 'blog.html', 'blog-details.html']);

// html file (relative to legacy/src) -> route dir (relative to src/routes), or null to skip
function routeFor(rel) {
  if (PSA_OWNED.has(rel)) return null;
  const noExt = rel.replace(/\.html$/, '');
  if (noExt === 'index') return 'index1';
  if (noExt === 'dashboard/index') return 'dashboard';
  return noExt;
}

function listHtml() {
  const out = readdirSync(SRC).filter((f) => f.endsWith('.html'));
  const dash = join(SRC, 'dashboard');
  if (existsSync(dash)) {
    for (const f of readdirSync(dash)) if (f.endsWith('.html')) out.push('dashboard/' + f);
  }
  return out;
}

// resolve a relative path against a base directory ('' = site root)
function resolvePath(baseDir, rel) {
  const segs = baseDir ? baseDir.split('/') : [];
  for (const s of rel.split('/')) {
    if (s === '' || s === '.') continue;
    if (s === '..') segs.pop();
    else segs.push(s);
  }
  return segs.join('/');
}

function rewriteUrl(kind, value, baseDir = '') {
  if (!value) return value;
  const v = value.trim();
  if (/^(#|\/|https?:|mailto:|tel:|javascript:|data:)/i.test(v)) return value;

  // assets always resolve to /assets/...
  const stripped = v.replace(/^(\.\.?\/)+/, '');
  if (stripped.startsWith('assets/')) return '/' + stripped;

  if (kind === 'href' && /\.html($|[?#])/i.test(v)) {
    let p = resolvePath(baseDir, v).replace(/\.html$/i, '');
    if (p === 'index') return '/index1';
    if (p === 'index2') return '/';
    if (p === 'dashboard/index') return '/dashboard';
    return '/' + p;
  }
  return value;
}

const BOOL_ATTRS =
  /\s(allowfullscreen|autoplay|controls|loop|muted|playsinline|disabled|readonly|required|checked|selected|multiple|hidden|open|novalidate|autofocus)=""/gi;

function processHtml(html, baseDir = '') {
  html = html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  html = html.replace(BOOL_ATTRS, ' $1'); // `foo=""` -> `foo` (Svelte types these as boolean)
  html = html.replace(
    /\b(href|src)\s*=\s*"([^"]*)"/gi,
    (m, attr, val) => `${attr}="${rewriteUrl(attr.toLowerCase(), val, baseDir)}"`
  );
  html = html.replace(/\bsrcset\s*=\s*"([^"]*)"/gi, (m, val) => {
    const parts = val
      .split(',')
      .map((part) => {
        const [u, d] = part.trim().split(/\s+/, 2);
        return rewriteUrl('src', u, baseDir) + (d ? ' ' + d : '');
      })
      .join(', ');
    return `srcset="${parts}"`;
  });
  return html;
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const usedComponents = new Set();
function replaceIncludes(html) {
  return html.replace(/<include-([a-z-]+)\s*\/?\s*>/gi, (m, tag) => {
    const entry = INCLUDES[tag];
    if (!entry) {
      console.warn('  ! unknown include:', tag);
      return '';
    }
    usedComponents.add(tag);
    return `<${entry[0]} />`;
  });
}

/* 1. partials ------------------------------------------------------- */
rmSync(PARTIALS_DIR, { recursive: true, force: true });
mkdirSync(PARTIALS_DIR, { recursive: true });
for (const [, [comp, file]] of Object.entries(INCLUDES)) {
  const raw = readFileSync(join(SRC, 'partials', file), 'utf8');
  // dashboard-header's links are relative to /dashboard/, everything else to site root
  const baseDir = file === 'dashboard-header.html' ? 'dashboard' : '';
  writeFileSync(
    join(PARTIALS_DIR, comp + '.svelte'),
    `<!-- generated from legacy/src/partials/${file} -->\n` + processHtml(raw, baseDir).trim() + '\n'
  );
}
console.log(`partials: ${Object.keys(INCLUDES).length} components`);

/* 2. pages -------------------------------------------------------- */
function wipeGeneratedPages(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    // never touch route groups such as (psa) — those are hand-built
    if (e.isDirectory() && e.name.startsWith('(')) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      wipeGeneratedPages(full);
      if (readdirSync(full).length === 0) rmSync(full, { recursive: true, force: true });
    } else if (e.name === '+page.svelte') {
      rmSync(full);
    }
  }
}
wipeGeneratedPages(ROUTES);

let count = 0;
for (const rel of listHtml()) {
  const raw = readFileSync(join(SRC, rel), 'utf8');
  const titleM = raw.match(/<title>([\s\S]*?)<\/title>/i);
  const bodyM = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyM) {
    console.warn('  ! no <body> in', rel);
    continue;
  }
  const title = titleM ? esc(titleM[1].trim()) : 'Servibe';

  const baseDir = rel.includes('/') ? rel.slice(0, rel.lastIndexOf('/')) : '';
  usedComponents.clear();
  let body = replaceIncludes(bodyM[1]);
  body = processHtml(body, baseDir).trim();

  const scriptSrcs = [...raw.matchAll(/<script\b[^>]*\bsrc\s*=\s*"([^"]*)"[^>]*>/gi)].map((m) => m[1]);
  const extras = [];
  for (const s of scriptSrcs) {
    const base = s.split('/').pop();
    if (SPECIAL_SCRIPTS.includes(base)) extras.push('/assets/js/plugins/' + base);
  }

  const imports = [...usedComponents]
    .map((tag) => `  import ${INCLUDES[tag][0]} from '$lib/partials/${INCLUDES[tag][0]}.svelte';`)
    .sort();

  let script = '<script>\n' + imports.join('\n');
  if (extras.length) {
    script +=
      (imports.length ? '\n' : '') +
      `  import { onMount } from 'svelte';\n` +
      `  import { loadPageScripts } from '$lib/pageScripts.js';\n\n` +
      `  onMount(() => loadPageScripts(${JSON.stringify(extras)}));`;
  }
  script += '\n</script>';

  const out = `${script}\n\n<svelte:head>\n  <title>${title}</title>\n</svelte:head>\n\n${body}\n`;

  const route = routeFor(rel);
  if (route === null) continue; // owned by the PSA site
  const routeDir = join(ROUTES, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, '+page.svelte'), out);
  count++;
}
console.log(`pages: ${count} routes`);
