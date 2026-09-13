// Non-translatable configuration for the Pépinière Semences d'Avenir site.
// All user-facing text lives in src/lib/i18n/messages/{fr,en}.js and is merged
// with these config arrays by index (or by slug for blog posts).

export const TEL_1 = '+237 690 81 08 73';
export const TEL_2 = '+237 650 05 37 98';
export const TEL_1_HREF = 'tel:+237690810873';
export const TEL_2_HREF = 'tel:+237650053798';
export const EMAIL = 'semences.avenir@gmail.com';
export const NIU = 'PO39612653286J';
export const RC = 'RC/BFM/A/486';

const WA = '237690810873';
/** @param {string} msg */
export const wa = (msg) => 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
// TODO: replace with the real WhatsApp catalogue links
export const waAgri = wa(
  'Bonjour, je souhaite consulter le catalogue Agriculture (plants, semences, fertilisants).'
);
export const waSante = wa(
  'Bonjour, je souhaite consulter le catalogue Alimentation & Santé (Plan Santé Assurée).'
);
export const waContact = wa('Bonjour, je vous contacte depuis le site de Pépinière Semences d’Avenir.');

// key = i18n key under `nav`; href = route
export const NAV = [
  { key: 'accueil', href: '/' },
  { key: 'produits', href: '/produits' },
  { key: 'apropos', href: '/a-propos' },
  { key: 'sante', href: '/alimentation-sante' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' }
];

export const offres = [
  { bg: 'bg-bg2', arrow: 'border-g400 text-g400', tint: 'text-g400/25', icon: 'ph-plant', href: '/produits' },
  { bg: 'bg-bg3', arrow: 'border-y600 text-y600', tint: 'text-y600/25', icon: 'ph-leaf', href: '/a-propos' },
  { bg: 'bg-bg4', arrow: 'border-g400 text-g400', tint: 'text-g400/25', icon: 'ph-tractor', href: '/produits' },
  { bg: 'bg-r50', arrow: 'border-r300 text-r300', tint: 'text-r100/30', icon: 'ph-graduation-cap', href: '/stage' }
];

export const categories = [
  { bg: 'bg-bg4', pill: 'bg-[#D4EDB3]', icon: 'category_icon_1.png' },
  { bg: 'bg-bg3', pill: 'bg-[#FEE6B2]', icon: 'category_icon_2.png' },
  { bg: 'bg-bg4', pill: 'bg-[#D4EDB3]', icon: 'category_icon_3.png' },
  { bg: 'bg-bg6', pill: 'bg-[#FEE6B2]', icon: 'category_icon_4.png' },
  { bg: 'bg-bg2', pill: 'bg-[#8CEDF6]', icon: 'category_icon_5.png' },
  { bg: 'bg-r50', pill: 'bg-bg5', icon: 'category_icon_6.png' }
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

export const statsValues = ['50+', '10+', '100%'];

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

export const partenaires = ['brand_logo_1.png', 'brand_logo_2.png', 'brand_logo_3.png', 'brand_logo_4.png'];

// Ribbon of partner marks — icon + label. Replace with real partners once provided.
export const partnersRibbon = [
  { icon: 'ph-bank', label: 'MINADER' },
  { icon: 'ph-plant', label: 'IRAD' },
  { icon: 'ph-tree', label: 'ANAFOR' },
  { icon: 'ph-handshake', label: 'PNDP' },
  { icon: 'ph-users-three', label: 'GIC Menoua' },
  { icon: 'ph-graduation-cap', label: 'Univ. Dschang' },
  { icon: 'ph-buildings', label: 'Mairie de Dschang' },
  { icon: 'ph-globe-hemisphere-west', label: 'ONG partenaires' },
  { icon: 'ph-seal-check', label: 'SPG ETSO MBONG' },
  { icon: 'ph-leaf', label: 'Coopératives bio' }
];

// team photos, in the same order as team.members in the i18n message files
export const teamPhotos = [
  'team_37148308.jpg',
  'team_29852852.jpg',
  'team_30004323.jpg',
  'team_30004325.jpg',
  'team_12311572.jpg',
  'team_29852895.jpg',
  'team_38197025.jpg',
  'team_32844866.jpg',
  'team_31409070.jpg',
  'team_31869537.jpg',
  'team_30450838.jpg'
];

// slug must match the `slug` field in both i18n message files
export const posts = [
  { slug: 'preparer-sa-pepiniere-avant-la-saison-des-pluies', image: 'blog-post-image-1.jpg' },
  { slug: 'choisir-des-semences-adaptees-a-votre-parcelle', image: 'blog-post-image-2.jpg' },
  { slug: 'fertilisation-organique-redonner-vie-aux-sols', image: 'blog-post-image-3.jpg' },
  { slug: 'charbon-vegetal-actif-charvas-usages-et-bienfaits', image: 'blog-post-image-4.jpg' }
];
