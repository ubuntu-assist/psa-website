// Generates one QR code per contact channel into static/assets/images/psa/qr/{key}.svg
// from the links in src/lib/psa/data.js. Re-run after changing a link: `npm run qr`.
import { mkdir, writeFile } from 'node:fs/promises';
import QRCode from 'qrcode';
import { channels } from '../src/lib/psa/data.js';

const out = new URL('../static/assets/images/psa/qr/', import.meta.url);
await mkdir(out, { recursive: true });

for (const c of channels) {
  const svg = await QRCode.toString(c.href, {
    type: 'svg',
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark: '#0A2412', light: '#ffffff' }
  });
  await writeFile(new URL(c.key + '.svg', out), svg);
  console.log(c.key.padEnd(10), c.href);
}
