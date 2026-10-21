// Dev-only preview of the email templates: /api/email-preview?t=contact&who=ack&lang=fr
// t = contact | stage | news ; who = ack | internal. Returns 404 in production.
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { contactEmails, internshipEmails, welcomeEmail, lang } from '$lib/server/email.js';

export const prerender = false;

const contact = {
  nom: 'Jean Talla',
  email: 'jean.talla@example.com',
  tel: '+237690810873',
  message:
    "Bonjour,\nje souhaite commander 200 plants de tomate et des semences de maïs pour la prochaine saison. Pouvez-vous me faire un devis ?\nMerci !"
};
const stage = {
  nom: 'Aïcha Djeukam',
  email: 'aicha@example.com',
  tel: '+237650053798',
  ville: 'Dschang',
  niveau: 'Licence 2 en agronomie',
  etablissement: 'Université de Dschang',
  domaine: 'Pépinière & production de plants',
  langues: 'Français, Anglais',
  periode: 'Juillet–Septembre 2026, 2 mois',
  source: 'Réseaux sociaux',
  cv: '',
  competences: 'Excel, prise de notes de terrain, compostage.',
  experience: 'Stage de 1 mois dans une ferme maraîchère à Foréké.',
  motivation:
    "Je veux apprendre la production de plants greffés et comprendre la gestion d'une activité semencière certifiée.",
  question: ''
};

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  if (!dev) error(404);
  const t = url.searchParams.get('t') || 'contact';
  const who = url.searchParams.get('who') === 'internal' ? 'internal' : 'ack';
  const l = lang(url.searchParams.get('lang'));
  const site = url.origin;
  const mail =
    t === 'news'
      ? welcomeEmail(l, site)
      : t === 'stage'
        ? internshipEmails(stage, l, site, { reference: 'CAND-7K2Q9', cvName: 'CV_Aicha_Djeukam.pdf' })[who]
        : contactEmails(contact, l, site)[who];
  return new Response(mail.html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
}
