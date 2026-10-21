// Server-only email system (Resend). Never imported by browser code.
// Configuration lives in environment variables — see .env.example.
//
// Design rules (email-client reality, not web reality):
// - single 600px column, table layout, inline styles → Gmail / Outlook / Apple Mail
// - live text everywhere, web-safe fallbacks (Georgia for display, Helvetica/Arial for body)
// - one primary button per email, bulletproof (table cell + VML for Outlook desktop)
// - hidden preheader for the inbox preview line
// - explicit dark-mode palette (prefers-color-scheme + Outlook [data-ogsc]) and a logo
//   that sits on its own light disc so it survives any background
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { TEL_1, TEL_2, EMAIL as PSA_EMAIL, NIU, RC, LINKS } from '$lib/psa/data.js';

const DEFAULT_TO = 'contact@psa.com';

/** Resolved configuration; `null` client when no API key is set. */
export function config() {
  return {
    client: env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null,
    // psa.com must be verified in Resend (Domains) for this sender to work
    from: env.RESEND_FROM || "Pépinière Semences d'Avenir <contact@psa.com>",
    to: (env.RESEND_TO || DEFAULT_TO)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    segmentId: env.RESEND_SEGMENT_ID || '',
    // public site URL, used for the logo and links inside emails
    site: (env.SITE_URL || '').replace(/\/$/, '')
  };
}

/* ───────────────────────── helpers ───────────────────────── */

/** @param {unknown} v */
export const esc = (v) =>
  String(v ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] || c
  );
/** free text: escaped, line breaks kept */
const para = (/** @type {unknown} */ v) => esc(v).replace(/\n/g, '<br>');

/** @param {unknown} l */
export const lang = (l) => (l === 'en' ? 'en' : 'fr');

/** short human reference, e.g. CAND-7K2Q9 */
export const ref = (/** @type {string} */ prefix) =>
  `${prefix}-${Date.now().toString(36).slice(-5).toUpperCase()}`;

/** @param {'fr'|'en'} l */
const stamp = (l) =>
  new Intl.DateTimeFormat(l === 'en' ? 'en-GB' : 'fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Africa/Douala'
  }).format(new Date());

/** wa.me link for a phone number in any format */
const waLink = (/** @type {string} */ phone, /** @type {string} */ text = '') =>
  `https://wa.me/${String(phone).replace(/\D/g, '')}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// palette (mirrors the site's « Terroir » tokens)
const C = {
  forest: '#0F2E1F',
  moss: '#1B8A3D',
  sun: '#FDC500',
  cream: '#F4EDE2',
  paper: '#FBF8F2',
  ink: '#0A2412',
  muted: '#5B6B60',
  line: '#E6DFD2',
  sage: '#DDE7D3'
};
const SERIF = "Fraunces, Georgia, 'Times New Roman', serif";
const SANS = "Manrope, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace";

/* ───────────────────────── building blocks ───────────────────────── */

/** small uppercase label */
const label = (/** @type {string} */ t, color = C.moss) =>
  `<p class="t-label" style="margin:0 0 10px;font-family:${MONO};font-size:11px;line-height:16px;letter-spacing:1.6px;text-transform:uppercase;color:${color}">${esc(t)}</p>`;

/**
 * Bulletproof button (VML for Outlook desktop, table cell elsewhere).
 * @param {{ href: string, text: string, variant?: 'primary'|'ghost' }} b
 */
export function button({ href, text, variant = 'primary' }) {
  const primary = variant === 'primary';
  const bg = primary ? C.forest : C.paper;
  const fg = primary ? C.paper : C.forest;
  const w = Math.max(160, Math.round(text.length * 8.2 + 56));
  return `<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${esc(href)}" style="height:48px;v-text-anchor:middle;width:${w}px" arcsize="50%" ${primary ? 'stroke="f"' : `strokecolor="${C.forest}"`} fillcolor="${bg}"><w:anchorlock/><center style="color:${fg};font-family:Arial,sans-serif;font-size:15px;font-weight:bold">${esc(text)}</center></v:roundrect><![endif]--><!--[if !mso]><!-- --><table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-table;margin:0 8px 8px 0"><tr><td class="${primary ? 'btn-primary' : 'btn-ghost'}" style="border-radius:999px;background:${bg}"><a href="${esc(href)}" style="display:inline-block;padding:${primary ? '14px 26px' : '12.5px 24.5px'};${primary ? '' : `border:1.5px solid ${C.forest};`}font-family:${SANS};font-size:15px;font-weight:700;line-height:20px;color:${fg};text-decoration:none;border-radius:999px">${esc(text)}&nbsp;&nbsp;→</a></td></tr></table><!--<![endif]-->`;
}

/** key/value details card. @param {[string, unknown][]} rows */
export function details(rows) {
  const tr = rows
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
    .map(
      ([k, v], i) =>
        `<tr><td class="t-muted" style="padding:12px 0;${i ? `border-top:1px solid ${C.line};` : ''}width:38%;vertical-align:top;font-family:${MONO};font-size:11px;line-height:18px;letter-spacing:1px;text-transform:uppercase;color:${C.muted}">${esc(k)}</td><td class="t-ink" style="padding:12px 0;${i ? `border-top:1px solid ${C.line};` : ''}vertical-align:top;font-family:${SANS};font-size:15px;line-height:22px;color:${C.ink};word-break:break-word">${para(v)}</td></tr>`
    )
    .join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="card" style="border-collapse:separate;background:${C.paper};border:1px solid ${C.line};border-radius:18px"><tr><td style="padding:8px 24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tr}</table></td></tr></table>`;
}

/** quoted free text (message, motivation…) */
export function quote(/** @type {string} */ title, /** @type {unknown} */ text) {
  if (!text || !String(text).trim()) return '';
  return `<div style="height:28px;line-height:28px">&nbsp;</div>${label(title)}<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td class="quote" style="border-left:3px solid ${C.sun};background:${C.cream};border-radius:0 14px 14px 0;padding:18px 22px;font-family:${SERIF};font-size:17px;line-height:27px;color:${C.ink}">${para(text)}</td></tr></table>`;
}

/** numbered « next steps » list (items may contain trusted HTML). @param {string} title @param {string[]} list */
export function steps(title, list) {
  const rows = list
    .map(
      (s, i) =>
        `<tr><td style="width:44px;vertical-align:top;padding:0 0 18px"><div class="step" style="width:32px;height:32px;line-height:32px;border-radius:16px;background:${i === 0 ? C.sun : C.sage};text-align:center;font-family:${SERIF};font-size:15px;color:${C.ink}">${i + 1}</div></td><td class="t-ink" style="vertical-align:top;padding:5px 0 18px;font-family:${SANS};font-size:15px;line-height:22px;color:${C.ink}">${s}</td></tr>`
    )
    .join('');
  return `<div style="height:32px;line-height:32px">&nbsp;</div>${label(title)}<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px">${rows}</table>`;
}

/* ───────────────────────── layout ───────────────────────── */

const t = {
  fr: {
    tagline: "Pensons et semons l'avenir.",
    address: 'Carrefour des semences, Dschang — Ouest-Cameroun',
    follow: 'Suivez-nous'
  },
  en: {
    tagline: "Let's think and sow the future.",
    address: 'Carrefour des semences, Dschang — West Cameroon',
    follow: 'Follow us'
  }
};

/**
 * Full email document.
 * @param {{
 *   lang: 'fr'|'en', site: string, preheader: string, kicker: string,
 *   title: string, titleEm?: string, intro?: string, body: string,
 *   reason: string
 * }} p
 */
export function layout(p) {
  const L = t[p.lang];
  const logo = p.site ? `${p.site}/assets/images/psa/email/logo.png` : '';
  const home = p.site || 'https://wa.me/c/237690810873';
  const socials = [
    ['Facebook', LINKS.facebook],
    ['YouTube', LINKS.youtube],
    ['TikTok', LINKS.tiktok],
    ['LinkedIn', LINKS.linkedin],
    ['WhatsApp', LINKS.whatsapp]
  ]
    .map(([n, u]) => `<a href="${esc(u)}" style="color:${C.paper};text-decoration:underline">${n}</a>`)
    .join('&nbsp;&nbsp;·&nbsp;&nbsp;');

  return `<!doctype html>
<html lang="${p.lang}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${esc(p.title)}</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400&family=Manrope:wght@400;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  body{margin:0;padding:0;width:100%!important;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
  table{border-collapse:collapse}
  img{border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic}
  a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important}
  @media (max-width:620px){
    .px{padding-left:24px!important;padding-right:24px!important}
    .h1{font-size:34px!important;line-height:38px!important}
    .stack{display:block!important;width:100%!important}
    .hide-sm{display:none!important}
  }
  @media (prefers-color-scheme:dark){
    .bg{background:#0B1F15!important}
    .sheet,.card{background:#13291D!important;border-color:#24402F!important}
    .t-ink,.h1{color:#F4EDE2!important}
    .t-muted{color:#A7B5AA!important}
    .t-label{color:#7BD39A!important}
    .quote{background:#1A3526!important;color:#F4EDE2!important}
    .step{color:#0A2412!important}
    .btn-primary{background:#FDC500!important}
    .btn-primary a{color:#0A2412!important}
    .bar-ink{background:#F4EDE2!important}
    .btn-ghost{background:transparent!important}
    .btn-ghost a{color:#F4EDE2!important;border-color:#F4EDE2!important}
  }
  [data-ogsc] .t-ink,[data-ogsc] .h1{color:#F4EDE2!important}
  [data-ogsc] .t-muted{color:#A7B5AA!important}
</style>
</head>
<body class="bg" style="margin:0;padding:0;background:${C.cream}">
<!-- preheader (inbox preview line) -->
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${C.cream};opacity:0">${esc(p.preheader)}${'&#847;&zwnj;&nbsp;'.repeat(60)}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="bg" style="background:${C.cream}">
<tr><td align="center" style="padding:28px 12px 40px">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">

  <!-- brand bar -->
  <tr><td style="padding:0 4px 18px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="vertical-align:middle">
        <a href="${esc(home)}" style="text-decoration:none">
          ${logo ? `<img src="${logo}" width="44" height="44" alt="PSA" style="display:inline-block;vertical-align:middle;width:44px;height:44px;border-radius:22px;background:${C.paper}">` : ''}
          <span class="t-ink" style="display:inline-block;vertical-align:middle;white-space:nowrap;padding-left:${logo ? 10 : 0}px;font-family:${SERIF};font-size:17px;line-height:20px;color:${C.ink}">Pépinière Semences d'Avenir</span>
        </a>
      </td>
      <td align="right" class="t-muted hide-sm" style="vertical-align:middle;font-family:${MONO};font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:${C.muted}">Dschang · CM</td>
    </tr></table>
  </td></tr>

  <!-- sheet -->
  <tr><td class="sheet" style="background:${C.paper};border-radius:28px">

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td class="px" style="padding:40px 44px 8px">
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px"><tr>
          <td class="bar-ink" style="width:28px;height:4px;line-height:4px;font-size:0;background:${C.forest};border-radius:2px 0 0 2px">&nbsp;</td>
          <td style="width:16px;height:4px;line-height:4px;font-size:0;background:${C.moss}">&nbsp;</td>
          <td style="width:10px;height:4px;line-height:4px;font-size:0;background:${C.sun};border-radius:0 2px 2px 0">&nbsp;</td>
        </tr></table>
        ${label(p.kicker)}
        <h1 class="h1" style="margin:6px 0 0;font-family:${SERIF};font-weight:400;font-size:42px;line-height:46px;letter-spacing:-0.8px;color:${C.ink}">${esc(p.title)}${p.titleEm ? ` <em style="font-style:italic;color:${C.moss}">${esc(p.titleEm)}</em>` : ''}</h1>
        ${p.intro ? `<p class="t-ink" style="margin:20px 0 0;font-family:${SANS};font-size:16px;line-height:26px;color:${C.ink}">${p.intro}</p>` : ''}
      </td></tr>
      <tr><td class="px" style="padding:4px 44px 44px">${p.body}</td></tr>
    </table>
  </td></tr>

  <!-- footer -->
  <tr><td style="padding-top:16px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.forest};border-radius:28px">
      <tr><td class="px" style="padding:32px 44px">
        <p style="margin:0;font-family:${SERIF};font-style:italic;font-size:24px;line-height:30px;color:${C.sun}">${esc(L.tagline)}</p>
        <p style="margin:16px 0 0;font-family:${SANS};font-size:14px;line-height:22px;color:${C.paper}">
          ${esc(L.address)}<br>
          <a href="tel:${TEL_1.replace(/\s/g, '')}" style="color:${C.paper};text-decoration:none">${TEL_1}</a> · <a href="tel:${TEL_2.replace(/\s/g, '')}" style="color:${C.paper};text-decoration:none">${TEL_2}</a><br>
          <a href="mailto:${PSA_EMAIL}" style="color:${C.paper};text-decoration:none">${PSA_EMAIL}</a>
        </p>
        <p style="margin:18px 0 0;font-family:${SANS};font-size:13px;line-height:20px;color:${C.paper}">${esc(L.follow)} — ${socials}</p>
      </td></tr>
    </table>
    <p class="t-muted" style="margin:18px 8px 0;font-family:${SANS};font-size:12px;line-height:18px;color:${C.muted};text-align:center">
      ${esc(p.reason)}<br>NIU ${NIU} · ${RC}
    </p>
  </td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;
}

/* ───────────────────────── emails ───────────────────────── */

const copy = {
  fr: {
    contact: {
      subject: 'Bien reçu — merci pour votre message',
      preheader: 'Notre équipe vous répond sous 48 h. Pour aller plus vite, écrivez-nous sur WhatsApp.',
      kicker: 'Message reçu',
      title: 'Merci,',
      intro: 'Votre message est bien arrivé à la pépinière. Voici ce qui se passe maintenant :',
      steps: [
        "Un membre de l'équipe lit votre message aujourd'hui ou demain.",
        'Nous vous répondons par email ou téléphone <b>sous 48&nbsp;h</b> (du lundi au samedi).',
        'Besoin urgent ? Écrivez-nous directement sur WhatsApp.'
      ],
      stepsTitle: 'Et maintenant ?',
      yours: 'Votre message',
      cta: 'Écrire sur WhatsApp',
      cta2: 'Voir le catalogue',
      reason: "Vous recevez cet email car vous nous avez écrit via le formulaire de contact du site."
    },
    stage: {
      subject: (/** @type {string} */ r) => `Candidature reçue · ${r}`,
      preheader: 'Votre candidature de stage est entre de bonnes mains. Voici les prochaines étapes.',
      kicker: 'Candidature reçue',
      title: 'Bienvenue,',
      intro: "Merci de vouloir apprendre le métier à nos côtés. Votre candidature de stage est bien enregistrée.",
      stepsTitle: 'Les prochaines étapes',
      steps: [
        'Notre responsable formations étudie votre dossier.',
        'Nous vous contactons pour un court échange (téléphone ou WhatsApp).',
        "Si tout concorde, nous fixons ensemble les dates de votre stage au Carrefour des semences."
      ],
      summary: 'Récapitulatif',
      ref: 'Référence',
      domaine: 'Domaine souhaité',
      periode: 'Période',
      cv: 'CV',
      cta: 'Une question ? WhatsApp',
      reason: "Vous recevez cet email car vous avez candidaté à un stage via notre site."
    },
    news: {
      subject: "Bienvenue dans la communauté Semences d'Avenir",
      preheader: 'Conseils de saison, nouveautés de la pépinière et offres de formation — directement dans votre boîte.',
      kicker: 'Newsletter',
      title: 'Bienvenue dans',
      titleEm: 'la communauté.',
      intro:
        "Merci de nous rejoindre ! Quelques fois par saison, vous recevrez ce que nous avons de plus utile :",
      stepsTitle: 'Ce que vous recevrez',
      steps: [
        '<b>Conseils de saison</b> — semis, repiquage, fertilisation : les bons gestes au bon moment.',
        '<b>Nouveautés de la pépinière</b> — nouvelles variétés, plants disponibles, arrivages.',
        '<b>Formations & stages</b> — les prochaines sessions, en avant-première.'
      ],
      cta: 'Découvrir nos produits',
      reason:
        "Vous recevez cet email car vous vous êtes inscrit(e) à la newsletter. Pour vous désinscrire, répondez simplement « STOP »."
    }
  },
  en: {
    contact: {
      subject: 'Received — thank you for your message',
      preheader: 'Our team will reply within 48 hours. For a faster answer, message us on WhatsApp.',
      kicker: 'Message received',
      title: 'Thank you,',
      intro: 'Your message has reached the nursery. Here is what happens next:',
      steps: [
        'A member of the team reads your message today or tomorrow.',
        'We reply by email or phone <b>within 48&nbsp;hours</b> (Monday to Saturday).',
        'Something urgent? Message us directly on WhatsApp.'
      ],
      stepsTitle: 'What happens next',
      yours: 'Your message',
      cta: 'Message us on WhatsApp',
      cta2: 'Browse the catalogue',
      reason: 'You are receiving this email because you wrote to us through the contact form on our website.'
    },
    stage: {
      subject: (/** @type {string} */ r) => `Application received · ${r}`,
      preheader: 'Your internship application is in good hands. Here are the next steps.',
      kicker: 'Application received',
      title: 'Welcome,',
      intro: 'Thank you for wanting to learn the trade alongside us. Your internship application has been registered.',
      stepsTitle: 'Next steps',
      steps: [
        'Our training manager reviews your application.',
        'We contact you for a short conversation (phone or WhatsApp).',
        'If everything fits, we agree together on the dates of your internship at the Carrefour des semences.'
      ],
      summary: 'Summary',
      ref: 'Reference',
      domaine: 'Preferred field',
      periode: 'Period',
      cv: 'CV',
      cta: 'A question? WhatsApp',
      reason: 'You are receiving this email because you applied for an internship through our website.'
    },
    news: {
      subject: "Welcome to the Semences d'Avenir community",
      preheader: 'Seasonal advice, nursery news and training offers — straight to your inbox.',
      kicker: 'Newsletter',
      title: 'Welcome to',
      titleEm: 'the community.',
      intro: 'Thank you for joining us! A few times per season, you will receive our most useful content:',
      stepsTitle: 'What you will receive',
      steps: [
        '<b>Seasonal advice</b> — sowing, transplanting, fertilising: the right moves at the right time.',
        '<b>Nursery news</b> — new varieties, available seedlings, new arrivals.',
        '<b>Training & internships</b> — upcoming sessions, first.'
      ],
      cta: 'Explore our products',
      reason:
        'You are receiving this email because you subscribed to the newsletter. To unsubscribe, simply reply “STOP”.'
    }
  }
};

const firstName = (/** @type {string} */ n) => n.trim().split(/\s+/)[0];

/**
 * Contact form → internal notification + visitor acknowledgement.
 * @param {{ nom: string, email: string, tel?: string, message: string }} d
 * @param {'fr'|'en'} l @param {string} site
 */
export function contactEmails(d, l, site) {
  const c = copy[l].contact;
  const internal = {
    subject: `✉️ Nouveau message — ${d.nom}`,
    html: layout({
      lang: 'fr',
      site,
      preheader: d.message.slice(0, 120),
      kicker: 'Formulaire de contact · ' + stamp('fr'),
      title: d.nom,
      intro: `vous a écrit depuis le site${l === 'en' ? ' <b>(en anglais)</b>' : ''}. Répondez directement à cet email.`,
      body:
        details([
          ['Email', d.email],
          ['Téléphone', d.tel],
          ['Langue', l === 'en' ? 'Anglais' : 'Français']
        ]) +
        quote('Message', d.message) +
        `<div style="height:28px;line-height:28px">&nbsp;</div>` +
        button({ href: `mailto:${d.email}?subject=${encodeURIComponent('Re: votre message')}`, text: `Répondre à ${firstName(d.nom)}` }) +
        (d.tel ? button({ href: waLink(d.tel), text: 'WhatsApp', variant: 'ghost' }) : ''),
      reason: 'Notification interne — formulaire de contact du site.'
    })
  };
  const ack = {
    subject: c.subject,
    html: layout({
      lang: l,
      site,
      preheader: c.preheader,
      kicker: c.kicker,
      title: c.title,
      titleEm: firstName(d.nom) + '.',
      intro: c.intro,
      body:
        steps(c.stepsTitle, c.steps) +
        quote(c.yours, d.message) +
        `<div style="height:32px;line-height:32px">&nbsp;</div>` +
        button({ href: LINKS.whatsapp, text: c.cta }) +
        button({ href: LINKS.boutique, text: c.cta2, variant: 'ghost' }),
      reason: c.reason
    })
  };
  return { internal, ack };
}

/**
 * Internship application → internal notification (+ CV attached by caller) + acknowledgement.
 * @param {Record<string, string>} d @param {'fr'|'en'} l @param {string} site
 * @param {{ reference: string, cvName?: string }} meta
 */
export function internshipEmails(d, l, site, { reference, cvName }) {
  const c = copy[l].stage;
  const internal = {
    subject: `🌱 Candidature stage — ${d.nom} · ${reference}`,
    html: layout({
      lang: 'fr',
      site,
      preheader: `${d.niveau} · ${d.domaine}${d.periode ? ' · ' + d.periode : ''}`,
      kicker: `Candidature de stage · ${reference}`,
      title: d.nom,
      intro: `souhaite un stage en <b>${esc(d.domaine || '—')}</b>.${cvName ? ' Le CV est joint à cet email.' : ''}`,
      body:
        details([
          ['Email', d.email],
          ['Téléphone', d.tel],
          ['Ville', d.ville],
          ['Niveau', d.niveau],
          ['Établissement', d.etablissement],
          ['Domaine', d.domaine],
          ['Langues', d.langues],
          ['Période', d.periode],
          ['Nous a connus', d.source],
          ['CV joint', cvName],
          ['Lien CV', d.cv],
          ['Reçue le', stamp('fr')]
        ]) +
        quote('Motivation', d.motivation) +
        quote('Compétences', d.competences) +
        quote('Expériences', d.experience) +
        quote('Question / remarque', d.question) +
        `<div style="height:28px;line-height:28px">&nbsp;</div>` +
        button({ href: `mailto:${d.email}?subject=${encodeURIComponent('Votre candidature de stage — ' + reference)}`, text: `Répondre à ${firstName(d.nom)}` }) +
        button({ href: waLink(d.tel), text: 'WhatsApp', variant: 'ghost' }),
      reason: 'Notification interne — formulaire de candidature du site.'
    })
  };
  const ack = {
    subject: c.subject(reference),
    html: layout({
      lang: l,
      site,
      preheader: c.preheader,
      kicker: c.kicker + ' · ' + reference,
      title: c.title,
      titleEm: firstName(d.nom) + '.',
      intro: c.intro,
      body:
        steps(c.stepsTitle, c.steps) +
        `<div style="height:8px;line-height:8px">&nbsp;</div>` +
        label(c.summary) +
        details([
          [c.ref, reference],
          [c.domaine, d.domaine],
          [c.periode, d.periode],
          [c.cv, cvName || d.cv]
        ]) +
        `<div style="height:32px;line-height:32px">&nbsp;</div>` +
        button({ href: waLink(TEL_1, reference), text: c.cta }),
      reason: c.reason
    })
  };
  return { internal, ack };
}

/** Newsletter welcome. @param {'fr'|'en'} l @param {string} site */
export function welcomeEmail(l, site) {
  const c = copy[l].news;
  return {
    subject: c.subject,
    html: layout({
      lang: l,
      site,
      preheader: c.preheader,
      kicker: c.kicker,
      title: c.title,
      titleEm: c.titleEm,
      intro: c.intro,
      body:
        steps(c.stepsTitle, c.steps) +
        `<div style="height:16px;line-height:16px">&nbsp;</div>` +
        button({ href: site ? `${site}/produits` : LINKS.boutique, text: c.cta }),
      reason: c.reason
    })
  };
}

/* ───────────────────────── responses ───────────────────────── */

/** JSON error helper */
export const fail = (/** @type {number} */ status, /** @type {string} */ error) =>
  new Response(JSON.stringify({ ok: false, error }), {
    status,
    headers: { 'content-type': 'application/json' }
  });
export const ok = () =>
  new Response(JSON.stringify({ ok: true }), { headers: { 'content-type': 'application/json' } });
