// Generates the 1200×630 link-preview images (WhatsApp, Facebook, LinkedIn, X) into static/og/.
// Renders an HTML card per page with headless Chrome and saves it as JPEG.
//   npm run og                      (uses `google-chrome`; override with CHROME=/path/to/chrome)
// Blog posts don't need a card: they use their cover image (see src/lib/psa/Seo.svelte).
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const img = (p) => 'file://' + root + 'static/assets/images/' + p;
const OUT = root + 'static/og/';

const CARDS = [
  { key: 'default', kicker: 'Dschang · Ouest-Cameroun — depuis 2014', title: "Pépinière Semences d'Avenir", em: '(PSA)', sub: "L'assurance d'une réussite agricole et rurale, du semis à la récolte.", photo: 'psa/photos/hero-farmer-1200.jpg' },
  { key: 'home', kicker: 'Dschang · Ouest-Cameroun — depuis 2014', title: "Pépinière Semences d'Avenir", em: '(PSA)', sub: "L'assurance d'une réussite agricole et rurale, du semis à la récolte.", photo: 'psa/photos/hero-farmer-1200.jpg' },
  { key: 'produits', kicker: '7 catégories', title: 'Produits &', em: 'Services', sub: 'Plants, semences, intrants écologiques, santé au naturel, formations et prestations.', photo: 'psa/stock/secteur-agriculture.jpg' },
  { key: 'calendrier', kicker: 'Ouest-Cameroun', title: 'Calendrier', em: 'des semis', sub: 'Que semer, planter et récolter chaque mois.', photo: 'psa/stock/catalogue-agri.jpg' },
  { key: 'alimentation-sante', kicker: 'Plan Santé Assurée', title: 'Alimentation &', em: 'santé naturelle', sub: 'Tisanes, miel, CHARVAS, naturopathie et équipements.', photo: 'home_one_contact_img.jpg' },
  { key: 'a-propos', kicker: 'Depuis 2014', title: 'Une entreprise ancrée en', em: 'Afrique centrale', sub: 'Vision, mission, valeurs, certifications et équipe.', photo: 'psa/photos/equipe-psa.jpg' },
  { key: 'stage', kicker: 'Encadrement des stagiaires', title: 'Stages &', em: 'formation', sub: 'Apprenez le métier sur le terrain, aux côtés de nos équipes.', photo: 'fixed_price_service_img.jpg' },
  { key: 'contact', kicker: 'WhatsApp · Téléphone · Email', title: 'Parlons de', em: 'votre projet', sub: '+237 690 81 08 73 · contact@psa.com', photo: 'psa/photos/hero-farmer-1200.jpg' },
  { key: 'partenaires', kicker: 'Institutionnels & techniques', title: 'Nos', em: 'partenaires', sub: 'Institutions, universités, ONG et entreprises qui avancent avec nous.', photo: 'psa/stock/secteur-formation.jpg' },
  { key: 'actions-sociales', kicker: 'Engagement communautaire', title: 'Nos actions', em: 'sociales', sub: '1,2 t de semences données · 350 stagiaires encadrés gratuitement.', photo: 'psa/stock/action-dons.jpg' },
  { key: 'mediatheque', kicker: 'Documents · Photos · Vidéos', title: 'Bibliothèque &', em: 'médiathèque', sub: 'Certificats, photos et vidéos de la pépinière.', photo: 'psa/stock/secteur-rural.jpg' },
  { key: 'blog', kicker: 'Journal', title: 'Le blog de', em: 'la pépinière', sub: 'Conseils pratiques, fiches techniques et actualités.', photo: 'psa/stock/action-insertion.jpg' }
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const html = (c) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400&family=Manrope:wght@500;700&family=JetBrains+Mono:wght@500&display=block" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#F4EDE2;font-family:Manrope,sans-serif;color:#0A2412;overflow:hidden;position:relative}
  .grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(10,36,18,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(10,36,18,.07) 1px,transparent 1px);background-size:28px 28px;-webkit-mask-image:radial-gradient(ellipse 70% 80% at 0% 0%,#000 30%,transparent 80%)}
  .text{position:absolute;left:64px;top:56px;bottom:56px;width:600px;display:flex;flex-direction:column}
  .brand{display:flex;align-items:center;gap:14px;font-family:Fraunces,serif;font-size:24px}
  .brand img{width:56px;height:56px}
  .kicker{margin-top:auto;font-family:'JetBrains Mono',monospace;font-size:17px;letter-spacing:2.5px;text-transform:uppercase;color:#1B8A3D}
  h1{margin-top:18px;font-family:Fraunces,serif;font-weight:400;font-size:${'$'}{SIZE}px;line-height:1;letter-spacing:-2px;font-variation-settings:'opsz' 144}
  h1 em{color:#1B8A3D}
  p{margin-top:22px;font-size:24px;line-height:1.35;color:rgba(10,36,18,.72);max-width:540px}
  .url{margin-top:28px;display:flex;align-items:center;gap:12px;font-weight:700;font-size:20px}
  .bar{display:flex}.bar i{display:block;height:6px;border-radius:3px}
  .photo{position:absolute;right:56px;top:56px;bottom:56px;width:440px;border-radius:220px 220px 36px 36px;overflow:hidden;box-shadow:0 40px 80px -40px rgba(10,36,18,.5)}
  .photo img{width:100%;height:100%;object-fit:cover}
  .sun{position:absolute;right:420px;bottom:40px;width:120px;height:120px;border-radius:60px;background:#FDC500;display:flex;align-items:center;justify-content:center;box-shadow:0 20px 40px -20px rgba(10,36,18,.5)}
  .sun img{width:76px}
</style></head><body>
<div class="grid"></div>
<div class="text">
  <div class="brand"><img src="${'file://' + root}static/favicon.svg">Pépinière Semences d'Avenir</div>
  <div class="kicker">${esc(c.kicker)}</div>
  <h1>${esc(c.title)} <em>${esc(c.em)}</em></h1>
  <p>${esc(c.sub)}</p>
  <div class="url"><span class="bar"><i style="width:30px;background:#0F2E1F"></i><i style="width:18px;background:#1B8A3D"></i><i style="width:12px;background:#FDC500"></i></span>www.psa.com</div>
</div>
<div class="photo"><img src="${img(c.photo)}"></div>
<div class="sun"><img src="${img('logo.png')}"></div>
</body></html>`;

// title size: shrink long titles so they fit two lines
const sizeFor = (c) => ((c.title + c.em).length > 30 ? 62 : (c.title + c.em).length > 20 ? 76 : 88);

const chrome = spawn(process.env.CHROME || 'google-chrome', [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', '--allow-file-access-from-files',
  '--remote-debugging-port=9555', '--user-data-dir=' + root + 'node_modules/.cache/og-chrome', 'about:blank'
], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  await sleep(200);
  try { target = (await (await fetch('http://127.0.0.1:9555/json/list')).json()).find((t) => t.type === 'page'); } catch {}
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0; const pending = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } };
await new Promise((r) => (ws.onopen = r));
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

mkdirSync(OUT, { recursive: true });
await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
for (const c of CARDS) {
  const file = root + 'node_modules/.cache/og-' + c.key + '.html';
  writeFileSync(file, html(c).replace('${SIZE}', String(sizeFor(c))));
  await send('Page.navigate', { url: 'file://' + file });
  await sleep(1800); // fonts + images
  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 86 });
  writeFileSync(OUT + c.key + '.jpg', Buffer.from(shot.result.data, 'base64'));
  console.log('og/' + c.key + '.jpg');
}
ws.close();
chrome.kill();
