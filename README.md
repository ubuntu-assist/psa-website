# Pépinière Semences d'Avenir — SvelteKit

The Servibe HTML/Tailwind template converted to **SvelteKit** (Svelte 5).

## The PSA site — `src/routes/(psa)/`

A **multi-page** French institutional vitrine, built by reusing the template's section
designs (hero, feature cards, category grid, step tabs, "secure guard" checklist, split
CTA, testimonials, contact) with PSA content and the green/yellow charte. Template
images are kept as placeholders for now.

Menu : **Produits & Services · À propos · Alimentation & Santé · Blog · Contact**

| Route | Page |
| --- | --- |
| `/` | Accueil — hero, 4 offres, aperçu produits, « Pourquoi PSA », **Démarche** (`#demarche`), CTA stage, aperçu certifications, aperçu Alimentation & Santé, **FAQ**, témoignages, **ruban Partenaires** (`#partenaires`), **Actualités**, bande CTA |
| `/produits` | Produits & Services (grille de catégories + bloc services à cartes flottantes) |
| `/a-propos` | À propos & garanties (collage image + certifications) |
| `/alimentation-sante` | Alimentation & Santé (Plan Santé Assurée + 2 catalogues) |
| `/blog` | Blog — liste d'articles (fil d'ariane sombre + cartes) |
| `/blog/[slug]` | Article — prérendu depuis `posts` dans `data.js` (4 articles) |
| `/stage` | Stages & formation — présentation + **formulaire de candidature** (validé) |
| `/contact` | Contact (coordonnées + carte + formulaire) |

Le formulaire de candidature (`InternshipForm.svelte`) reprend la même stack de
validation que le contact (`sveltekit-superforms` SPA + `zod`, messages i18n, indicatif
pays avec drapeau flagcdn) et ajoute : niveau d'études, domaine souhaité (liste), période,
lien CV (URL validée), motivation. Une bande CTA `StageCta` (`/stage`) est placée sur
**l'accueil** (après la section Démarche) et sur la page **À propos** ; la carte « Formations »
de l'accueil et un lien du footer pointent aussi vers `/stage`.

*Démarche* et *Partenaires* sont des **sections de la page d'accueil** (ancres `#demarche`,
`#partenaires`) — plus de lien dédié dans le menu ; le footer y renvoie via `/#…`.

Designs de sections repris du template legacy (toutes pages confondues) : hero « big text »
(index2), cartes d'offres (index2), grille de catégories (index3), bande sombre 3 colonnes
« Pourquoi » (about-us), **cartes empilées numérotées « Comment ça marche »** (index1),
checklist certifications + badges flottants (secure-guard), **collage image + compteur**
(about-us), bloc image + cartes flottantes de notification (fixed-price-service),
bande deux catalogues (get-workers-gigs), accordéon FAQ (faq-section), cartes témoignages
(index2), **cartes de blog + pagination + fil d'ariane sombre** (blog / recent-posts),
**bande CTA à cercles animés + pile d'avatars** (news-letter), **bandeau de chiffres-clés**
+ footer (footer-one).

La section **Partenaires** est un **ruban en X** (`PartnersRibbon.svelte`) : deux bandes
blanches à bordure noire, tournées ±7° et `scale-110`, chacune un marquée CSS infini
(`@keyframes`, sens opposés, pause au survol, respect de `prefers-reduced-motion`) de
« icône Phosphor + NOM en capitales ». Les partenaires (`partnersRibbon` dans `data.js`)
sont des **placeholders** (MINADER, IRAD, ANAFOR, PNDP, Univ. Dschang…) à remplacer par
les vrais logos/noms.

La section **Témoignages** est un **carrousel de cartes crantées en éventail**
(`Testimonials.svelte`) : cartes `290×300` à coins entaillés (`clip-path` polygone),
bordure noire, disposées en arc autour du centre avec rotation ±2.5° et décalage
vertical alternés ; la carte centrale est mise en avant (fond `g400`, relevée, ombre
portée décalée). Défilement auto (5 s, pause au survol, coupé si
`prefers-reduced-motion`), flèches précédent/suivant, et clic sur une carte pour la
recentrer. Les 8 témoignages sont dans l'i18n ; les portraits cyclent sur
`temoignageHeads` (`data.js`).

- `src/routes/(psa)/+layout.svelte` wraps every PSA page with `Navbar` + `Footer` + `ScrollTop`.
- `src/lib/psa/` holds the shared pieces: `data.js` (**non-text config only** — WhatsApp
  links, icon/colour/image config, post slugs, phone country list), `Navbar`, `Footer`,
  `LangSwitch`, `PageHeader`, `BlogHero`, `HowItWorks`, `Faq`, `CtaBand`, `PostCard`,
  `ScrollTop`, `ContactSection`.

### Internationalisation (FR / EN)

- **`svelte-i18n`** — all copy lives in `src/lib/i18n/messages/{fr,en}.js` (nested objects
  and arrays); components read strings with `$_('key')` and lists with `$json('key')`,
  merging them with the config arrays in `data.js` by index / slug.
- `src/lib/i18n/index.js` registers both dictionaries **synchronously** so SSR / prerender
  output is fully translated; `src/routes/+layout.js` `await waitLocale()` before render.
- **French is the default.** The `LangSwitch` (flag buttons, flags from
  **flagcdn.com**) in the navbar sets the locale, persists it to `localStorage`
  (`psa-lang`) and updates `<html lang>`. English is opt-in and then remembered.
- Blog `[slug]` routes are prerendered from `data.js` `posts` (slugs are language-neutral
  IDs); the article body comes from the active locale's `posts` array.

### Form validation

- The contact form (`ContactSection.svelte`) uses **`sveltekit-superforms` in SPA mode**
  with a **`zod`** schema (via the `zod4` adapter). Field errors carry i18n keys and are
  rendered through `$_()`, so validation messages are localised too.
- The phone field is a custom **`PhoneInput.svelte`** (Svelte 5) built on
  **`libphonenumber-js`**: a searchable country dropdown (all ~245 countries, names
  localised via `Intl.DisplayNames`, flags from **flagcdn.com**), an `AsYouType`
  formatter, and an **E.164** value bound back to the form. Validity is checked with
  `isValidPhoneNumber` inside the zod schema — optional-but-validated on the contact
  form, **required** on the internship form.
- On a valid submit the form opens the visitor's mail client (`mailto:`); a "WhatsApp"
  button sends the same content via `wa.me`.
- All interactivity is self-contained Svelte (`$state`) so it survives client-side navigation.
- The contact form opens the visitor's mail client (`mailto:`), with a WhatsApp fallback.
- **`TODO` in `src/lib/psa/data.js`:** the two `wa.me/237690810873` catalogue links are
  placeholders — replace with the real WhatsApp catalogue URLs.

The root `src/routes/+layout.svelte` only loads the template's Swiper/AOS bundle
(`servibe.js`) when template markup is on the page, so PSA pages ship no extra JS.

The other ~40 routes are the original Servibe template pages, generated verbatim (see below).
`index2.html`, `contact.html`, `blog.html` and `blog-details.html` are **not** generated —
the PSA site owns `/`, `/contact` and `/blog`.

## Commands

```bash
npm install
npm run dev        # dev server on http://localhost:8080
npm run build      # static build into ./build
npm run preview    # preview the production build
npm run check      # svelte-check (0 errors; a11y warnings inherited from the template markup)
npm run format     # prettier
node scripts/generate-pages.mjs   # regenerate routes + partials from legacy/src/
```

## Routes

| Route | Source |
| --- | --- |
| `/` | `index2.html` (landing) |
| `/index1` `/index3` `/index4` | `index.html` `index3.html` `index4.html` |
| `/about-us` `/services` `/service-details` `/browse-tasks` `/find-workers` `/worker-profile` `/worker-profile-jobs` `/worker-profile-recommendations` `/worker-profile-works` `/worker-portfolio` `/worker-portfolio-details` `/hire-me` `/become-tasker` `/blog` `/blog-details` `/faq` `/contact` `/chat` `/privacy-policy` `/terms-conditions` `/not-found` | same-named `*.html` |
| `/sign-in` `/sign-up-step-1..3` | `sign-in.html`, `sign-up-step-*.html` |
| `/working-processed-step-01..06` | `working-processed-step-0*.html` |
| `/dashboard`, `/dashboard/{services,edit-services,profile,edit-profile,payment-details,reviews,settings,wishlist}` | `dashboard/*.html` |

## How it was built

`scripts/generate-pages.mjs` reads `legacy/src/` and emits:

- **`src/lib/partials/*.svelte`** — the 16 `<include-…>` fragments
  (`Header`, `FooterOne`, `DashboardHeader`, `ScrollTopButton`, `FaqSection`,
  `SearchBox`, `TopExpertsSection`, `NewsLetterSection`, …) as components.
- **`src/routes/**/+page.svelte`** — one per template page: `<body>` markup with
  `<include-x />` swapped for the component, `<script src>` tags stripped,
  `./foo.html` links rewritten to clean routes, `./assets/**` → `/assets/**`,
  empty boolean attributes (`allowfullscreen=""`) normalised.

Hand-written pieces (not generated):

| Path | Purpose |
| --- | --- |
| `src/routes/+layout.svelte` / `+layout.js` | global CSS + one-time client init; whole site prerenders (`entries: ['*']`) |
| `src/lib/servibe.js` | the template's `main.js` + `plugin-custom.js` as an ES module — menu/tab/faq/modal/scroll behaviour, plus Swiper + AOS wired from npm. Runs once from `onMount`. |
| `src/lib/pageScripts.js` | lazy-loads the per-page vendor extras: Matter.js tag-cloud (`/index1` `/index3` `/index4`), ApexCharts (`/dashboard`), EmailJS (`/contact`). |
| `src/app.css` | the old `src/style.css` (Tailwind directives, component classes, keyframes, hexagon/`.expertImg*` rules; asset URLs repointed). |
| `src/app.html` | document shell; loads the Phosphor icon web font from unpkg. |
| `tailwind.config.js` | unchanged theme; `content` globs now include `.svelte`. |

## Notes

- **Adapter:** `@sveltejs/adapter-static` — everything prerenders to `./build`.
- `static/assets/` is a verbatim copy of the template's `assets/` (images, vendor CSS/JS).
- `legacy/` holds the original webpack project (`*.html`, `partials/`, `assets/`, configs, `dist/`) for reference. Safe to delete once you're happy.
- The grey `NNNxNNN` boxes are the template's own placeholder images, not a bug.
- `npm run check` reports ~200 a11y warnings (icon-only buttons/links, redundant roles)
  straight from the template's markup — no functional impact.
