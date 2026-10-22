// Non-translatable configuration for the Pépinière Semences d'Avenir site.
// All user-facing text lives in src/lib/i18n/messages/{fr,en}.js and is merged
// with these config arrays by index (or by slug for blog posts).

export const TEL_1 = '+237 690 81 08 73';
export const TEL_2 = '+237 650 05 37 98';
export const TEL_1_HREF = 'tel:+237690810873';
export const TEL_2_HREF = 'tel:+237650053798';
export const EMAIL = 'contact@psa.com';
export const NIU = 'PO39612653286J';
export const RC = 'RC/BFM/A/486';

// Public site URL (canonical links, sitemap, share images). From the evaluation document.
export const SITE_URL = 'https://www.psa.com';

// Business facts for Google (LocalBusiness structured data).
// TODO: confirm the opening hours with PSA — the site only says « du lundi au samedi ».
export const BUSINESS = {
  name: "Pépinière Semences d'Avenir",
  alternateName: 'PSA',
  foundingDate: '2014',
  street: 'Carrefour des semences',
  city: 'Dschang',
  region: 'Ouest',
  country: 'CM',
  openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' }
};

const WA = '237690810873';
/** @param {string} msg */
export const wa = (msg) => 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);

// Official links (document « Évaluation de la première version du site », sept. 2026)
export const LINKS = {
  email: 'mailto:' + EMAIL,
  boutique: 'https://wa.me/c/' + WA,
  graines: 'https://maps.app.goo.gl/iaiKH9rf7qhnxSok6',
  plantes: 'https://maps.app.goo.gl/Q5s9BGjLQ8tZ6M287',
  facebook: 'https://www.facebook.com/profile.php?id=100085953844540',
  youtube: 'https://youtube.com/@pepinieresemencesdavenir',
  tiktok: 'https://www.tiktok.com/@ppinire.semences',
  x: 'https://x.com/semencesavenir',
  linkedin: 'https://www.linkedin.com/in/p%C3%A9pini%C3%A8re-semences-d-avenir-638548391',
  telegram: 'https://t.me/+' + WA,
  whatsapp: 'https://wa.me/message/UYZKURR5AZC3K1'
};

// The WhatsApp Business catalogue (« Boutique en ligne ») holds both ranges.
export const waAgri = LINKS.boutique;
export const waSante = LINKS.boutique;
export const waContact = wa(
  'Bonjour, je vous contacte depuis le site de Pépinière Semences d’Avenir.'
);

// « Scanner pour nous retrouver » — one QR code per channel, generated into
// static/assets/images/psa/qr/{key}.svg by `npm run qr`. Label: i18n `channels.{key}`.
export const channels = [
  { key: 'email', icon: 'ph-envelope-simple', color: 'bg-[#EA4335]', handle: EMAIL },
  { key: 'boutique', icon: 'ph-storefront', color: 'bg-[#25D366]', handle: 'wa.me/c/' + WA },
  { key: 'graines', icon: 'ph-map-pin', color: 'bg-g400', handle: 'Google Maps' },
  { key: 'plantes', icon: 'ph-map-pin', color: 'bg-g400', handle: 'Google Maps' },
  {
    key: 'facebook',
    icon: 'ph-facebook-logo',
    color: 'bg-[#1877F2]',
    handle: "Pépinière Semences d'Avenir"
  },
  {
    key: 'youtube',
    icon: 'ph-youtube-logo',
    color: 'bg-[#FF0000]',
    handle: '@pepinieresemencesdavenir'
  },
  { key: 'tiktok', icon: 'ph-tiktok-logo', color: 'bg-n900', handle: '@ppinire.semences' },
  { key: 'x', icon: 'ph-x-logo', color: 'bg-n900', handle: '@semencesavenir' },
  {
    key: 'linkedin',
    icon: 'ph-linkedin-logo',
    color: 'bg-[#0A66C2]',
    handle: "Pépinière Semences d'Avenir"
  },
  { key: 'telegram', icon: 'ph-telegram-logo', color: 'bg-[#229ED9]', handle: TEL_1 },
  { key: 'whatsapp', icon: 'ph-whatsapp-logo', color: 'bg-[#25D366]', handle: TEL_1 }
].map((c) => ({ ...c, href: LINKS[/** @type {keyof typeof LINKS} */ (c.key)] }));

// footer social icons
export const socials = channels.filter((c) =>
  ['facebook', 'youtube', 'tiktok', 'x', 'linkedin', 'telegram', 'whatsapp'].includes(c.key)
);

// key = i18n key under `nav`; href = route. `mobileOnly` entries are hidden from the
// desktop bar (the logo already links home).
export const NAV = [
  { key: 'accueil', href: '/', mobileOnly: true },
  { key: 'produits', href: '/produits' },
  { key: 'apropos', href: '/a-propos' },
  { key: 'partenaires', href: '/partenaires' },
  { key: 'actions', href: '/actions-sociales' },
  { key: 'mediatheque', href: '/mediatheque' },
  { key: 'calendrier', href: '/calendrier' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' }
];

// « Nos secteurs d'activités » — same order as `secteurs.items` in the i18n files
// Stock photos in static/assets/images/psa/stock/ come from Unsplash (Unsplash License,
// free for commercial use). Source photo ids, for credits or replacement:
//   secteur-agriculture 4PG6wLlVag4 · secteur-rural VXwblyfqD6Y · secteur-sante Qaor6nxikUM
//   secteur-formation IJJG7mtby7Q · equipements B-JJxUzeX3M · sante-miel Asj5DFw8UAw
//   sante-tisanes xdD-x2Y2SPI · sante-charvas m26IW0YtjpQ · sante-alimentation XbyOSTB9JVA
//   action-dons x8ZStukS2PM · action-stagiaires QTp2mbvQI60 · action-insertion HzdCcbUDCbo
//   catalogue-agri vrbZVyX2k4I · catalogue-sante Rcj302Npzis · hero-farmer 1AoGjqdyDLU
// (https://unsplash.com/photos/<id>). Replace with real PSA photos when available.
const STOCK = 'psa/stock/';

export const secteurs = [
  { tone: 'bg-sage', icon: 'ph-plant', image: STOCK + 'secteur-agriculture.jpg', href: '/produits#plants-semences' },
  { tone: 'bg-sunsoft', icon: 'ph-tractor', image: STOCK + 'secteur-rural.jpg', href: '/produits#prestations' },
  { tone: 'bg-claysoft', icon: 'ph-flower-lotus', image: STOCK + 'secteur-sante.jpg', href: '/alimentation-sante' },
  { tone: 'bg-cream', icon: 'ph-graduation-cap', image: STOCK + 'secteur-formation.jpg', href: '/stage' }
];

// Products & services — same order as `categories` in the i18n files.
// `image` is optional (an icon panel is shown otherwise). `fit: 'contain'` = PSA product
// shots from the brief (white background, shown whole); 'cover' = interim stock photos.
// `cta` picks the button.
export const categories = [
  { slug: 'plants-semences', tone: 'bg-sage', icon: 'ph-plant', image: 'psa/photos/plants-semences.jpg', fit: 'contain', cta: 'order' },
  { slug: 'fertilisants', tone: 'bg-sunsoft', icon: 'ph-drop', image: 'psa/photos/fertilisants.jpg', fit: 'contain', cta: 'order' },
  { slug: 'tisanes-miel', tone: 'bg-claysoft', icon: 'ph-flower-lotus', image: 'home_one_contact_img.jpg', fit: 'cover', cta: 'order' },
  { slug: 'formations', tone: 'bg-cream', icon: 'ph-graduation-cap', image: 'fixed_price_service_img.jpg', fit: 'cover', cta: 'stage' },
  { slug: 'prestations', tone: 'bg-sage', icon: 'ph-tractor', image: 'psa/photos/prestations.jpg', fit: 'contain', cta: 'contact' },
  { slug: 'naturopathie', tone: 'bg-claysoft', icon: 'ph-heartbeat', image: 'safe_guard_section_img.jpg', fit: 'cover', cta: 'contact' },
  { slug: 'equipements', tone: 'bg-sunsoft', icon: 'ph-wrench', image: STOCK + 'equipements.jpg', fit: 'cover', cta: 'order' }
];

export const certifsIcons = [
  'ph-identification-card',
  'ph-file-text',
  'ph-certificate',
  'ph-leaf',
  'ph-seal-check'
];

export const pourquoiIcons = ['ph-seal-check', 'ph-handshake', 'ph-tag'];

export const demarcheIcons = ['ph-truck', 'ph-hand-coins', 'ph-headset'];

export const santeIcons = ['ph-drop', 'ph-flower-lotus', 'ph-fire', 'ph-basket'];
export const santeImages = ['sante-miel.jpg', 'sante-tisanes.jpg', 'sante-charvas.jpg', 'sante-alimentation.jpg'].map(
  (f) => STOCK + f
);
export const catalogueImages = { agri: STOCK + 'catalogue-agri.jpg', sante: STOCK + 'catalogue-sante.jpg' };

export const valeursIcons = [
  'ph-handshake',
  'ph-eye',
  'ph-gauge',
  'ph-users-three',
  'ph-seal-check',
  'ph-lightbulb'
];

export const actionsIcons = ['ph-plant', 'ph-student', 'ph-briefcase'];
export const actionsImages = ['action-dons.jpg', 'action-stagiaires.jpg', 'action-insertion.jpg'].map((f) => STOCK + f);

// portrait images cycled through the testimonials carousel
export const temoignageHeads = [
  'review_people_1.jpg',
  'review_people_2.jpg',
  'review_people_3.jpg',
  'comment_people_1.jpg',
  'comment_people_2.jpg',
  'comment_people_3.jpg',
  'people_small1.jpg',
  'people_small2.jpg'
];

;

;

;

// Donations (« Nos actions sociales »)
export const DON = {
  momo: TEL_2,
  om: TEL_1,
  rib: [
    { key: 'codeBanque', value: '10005' },
    { key: 'codeGuichet', value: '00003' },
    { key: 'compte', value: '00738811501' },
    { key: 'cle', value: '44' },
    { key: 'swift', value: 'CCEICMCX' },
    { key: 'iban', value: 'CM21 10005 00003 00738811501-44' }
  ]
};

;

;

;

// Blog posts, team, partners, médiathèque and the planting calendar are edited in the
// CMS (/admin) and live in src/content/*.json — see src/lib/content.js.
