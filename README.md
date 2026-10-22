# Pépinière Semences d'Avenir — SvelteKit

The Servibe HTML/Tailwind template converted to **SvelteKit** (Svelte 5).

## The PSA site — `src/routes/(psa)/`

A **multi-page** French institutional vitrine, built by reusing the template's section
designs (hero, feature cards, category grid, step tabs, "secure guard" checklist, split
CTA, testimonials, contact) with PSA content and the green/yellow charte. Template
images are kept as placeholders for now.

Menu : **Produits & Services · À propos · Partenaires · Actions sociales · Médiathèque · Blog · Contact**
(« Alimentation & Santé » est désormais rattaché à Produits & Services — page `/alimentation-sante` conservée).

| Route | Page |
| --- | --- |
| `/` | Accueil — hero (nom complet + slogan sous la photo), **secteurs d'activités**, bandeau **« Depuis 2014 » + chiffres-clés**, 7 catégories, aperçu produits, « Pourquoi PSA », **Démarche** (`#demarche`), CTA stage, aperçu certifications, aperçu Alimentation & Santé, **FAQ**, témoignages, **ruban Partenaires** (logos réels), **Actualités**, **QR codes « Scanner pour nous retrouver »**, bande CTA |
| `/produits` | Produits & Services — bannière, présentation détaillée des 7 catégories (ancres `#plants-semences`…), lien santé, catalogue + QR |
| `/a-propos` | À propos — Vision, Mission, Valeurs, certificat MINADER (photo), équipe réelle |
| `/partenaires` | Partenaires institutionnels & techniques (logos dans `static/assets/images/psa/partners/`) |
| `/actions-sociales` | Actions sociales + dons (MoMo, OM, RIB avec boutons copier) |
| `/mediatheque` | Bibliothèque & médiathèque — onglets Documents / Photos (lightbox) / Vidéos |
| `/alimentation-sante` | Alimentation & Santé (Plan Santé Assurée + 2 catalogues) |
| `/blog` | Blog — liste d'articles (fil d'ariane sombre + cartes) |
| `/blog/[slug]` | Article — prérendu depuis `posts` dans `data.js` (4 articles) |
| `/calendrier` | Calendrier des semis (interactive, editable in the CMS) |
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

### Content editing (CMS) — `/admin`

The PSA team edits content at **https://www.psa.com/admin** with [Sveltia CMS](https://sveltiacms.app)
(a Decap-compatible CMS that runs in the browser). Every save is a commit on GitHub
(`ubuntu-assist/psa-website`, branch `master`); Vercel then rebuilds the site in 1–2 minutes.

| In the CMS | File | Shown on |
| --- | --- | --- |
| Blog (one entry per article, Markdown body, FR/EN) | `src/content/blog/*.json` | `/blog`, `/blog/[slug]`, home « Actualités », sitemap |
| Équipe | `src/content/team.json` | `/a-propos` |
| Partenaires (institutional / technical, logo + optional website) | `src/content/partners.json` | `/partenaires`, home ribbon |
| Médiathèque (documents, photos, YouTube videos) | `src/content/mediatheque.json` | `/mediatheque` |
| Calendrier des semis (crops × months) | `src/content/calendar.json` | `/calendrier`, home « Que semer ce mois-ci ? » |

- Files use Sveltia's `single_file` i18n layout (`{ "fr": {…}, "en": {…} }`); `src/lib/content.js`
  loads them and falls back to French for anything left empty in English.
- Uploads go to `static/assets/images/psa/uploads/`. Config: `static/admin/config.yml`.
- **Sign-in:** « Sign In with GitHub » uses this site's own OAuth endpoints (`/api/auth`,
  `/api/auth/callback`). Create a GitHub OAuth App (callback `https://www.psa.com/api/auth/callback`)
  and set `GITHUB_OAUTH_ID` / `GITHUB_OAUTH_SECRET` in Vercel. Each editor needs a GitHub account
  with write access to the repository. « Sign In Using Access Token » works without the OAuth App.
- UI chrome text (buttons, headings, page copy) still lives in `src/lib/i18n/messages/{fr,en}.js`.

### SEO & link previews

- `src/lib/psa/Seo.svelte` on every page: title, description (FR/EN, ≤ 160 chars), canonical URL,
  Open Graph + Twitter tags, 1200×630 share image. Blog posts use their cover image and add
  `BlogPosting` structured data.
- Site-wide `LocalBusiness` + `GardenStore` JSON-LD (address, phones, email, hours, Google Maps
  links, social profiles) in `src/routes/(psa)/+layout.svelte`; business facts in `data.js` (`BUSINESS`).
- `/sitemap.xml` (pages + blog posts) and `/robots.txt` are prerendered. The leftover Servibe
  template routes are `noindex`.
- Share images: `npm run og` regenerates `static/og/*.jpg` with headless Chrome.

### Planting calendar — `/calendrier`

Month picker + category filter, « à semer / à récolter » cards with a WhatsApp order link
pre-filled with the crop and month, and a year grid (sowing / nursery / planting / harvest per
crop, with the dry season and the two rainy cycles of the West highlands). Data: `src/content/calendar.json`.

### Emails (Resend)

Forms send real emails through [Resend](https://resend.com) via three server endpoints
(the only non-prerendered routes; deployed as Vercel functions by `@sveltejs/adapter-vercel`):

| Endpoint | Form | What it does |
| --- | --- | --- |
| `POST /api/contact` | Contact | Emails PSA (reply-to = visitor) + sends the visitor an acknowledgement (FR/EN) |
| `POST /api/candidature` | Stage | Emails the application **with the CV attached** (PDF/DOC/DOCX, 4 MB max) + acknowledgement |
| `POST /api/newsletter` | Footer | Adds the address to Resend Contacts (optional segment) + sends a welcome email |

- Shared zod schemas in `src/lib/psa/schemas.js` validate on both the browser and the server.
- Email layout and copy: `src/lib/server/email.js`. A hidden honeypot field drops bot posts.
- If sending fails, the visitor is offered email (`mailto:`) and WhatsApp fallbacks.
- **Setup:** copy `.env.example` to `.env` (local) and add the same variables in Vercel →
  Project → Settings → Environment Variables: `RESEND_API_KEY`, `RESEND_FROM` (an address on a
  domain verified in Resend), `RESEND_TO`, optionally `RESEND_SEGMENT_ID`.
  Without `RESEND_API_KEY` the endpoints answer `503 email_not_configured`.

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
- All official links (catalogue WhatsApp, Google Maps sites, réseaux sociaux) live in `LINKS`
  in `src/lib/psa/data.js`. The QR codes in `static/assets/images/psa/qr/` are generated from
  them — **run `npm run qr` after changing a link**.
- The footer newsletter posts to `/api/newsletter` (Resend Contacts).

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

- **Adapter:** `@sveltejs/adapter-vercel` — every page prerenders; only `/api/*` runs server-side.
- `static/assets/` is a verbatim copy of the template's `assets/` (images, vendor CSS/JS).
- `legacy/` holds the original webpack project (`*.html`, `partials/`, `assets/`, configs, `dist/`) for reference. Safe to delete once you're happy.
- The grey `NNNxNNN` boxes are the template's own placeholder images, not a bug.
- `npm run check` reports ~200 a11y warnings (icon-only buttons/links, redundant roles)
  straight from the template's markup — no functional impact.
