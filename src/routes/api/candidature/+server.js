import { internshipSchema, CV_MAX_MB, CV_TYPES } from '$lib/psa/schemas.js';
import { config, internshipEmails, ref, lang, fail, ok } from '$lib/server/email.js';

export const prerender = false;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url }) {
  const form = await request.formData().catch(() => null);
  if (!form) return fail(400, 'bad_request');
  if (form.get('website')) return ok(); // honeypot

  /** @type {Record<string, string>} */
  const fields = {};
  for (const [k, v] of form.entries()) if (typeof v === 'string') fields[k] = v;

  const parsed = internshipSchema.safeParse(fields);
  if (!parsed.success) return fail(422, 'invalid');
  const d = parsed.data;
  const l = lang(fields.lang);

  // optional CV file
  const file = form.get('cvFile');
  /** @type {{ filename: string, content: Buffer }[]} */
  const attachments = [];
  if (file instanceof File && file.size > 0) {
    if (file.size > CV_MAX_MB * 1024 * 1024) return fail(413, 'file_too_large');
    if (!CV_TYPES.includes(file.type) && !/\.(pdf|docx?)$/i.test(file.name)) return fail(415, 'bad_file_type');
    const safeName = file.name.replace(/[^\w.\- ]+/g, '_').slice(0, 120) || 'cv.pdf';
    attachments.push({ filename: safeName, content: Buffer.from(await file.arrayBuffer()) });
  }

  const { client, from, to, site } = config();
  if (!client) return fail(503, 'email_not_configured');
  const reference = ref('CAND');
  const { internal, ack } = internshipEmails(d, l, site || url.origin, {
    reference,
    cvName: attachments[0]?.filename
  });

  const sent = await client.emails.send({
    from,
    to,
    replyTo: d.email,
    ...internal,
    attachments,
    tags: [{ name: 'form', value: 'candidature' }]
  });
  if (sent.error) {
    console.error('[resend] candidature', sent.error);
    return fail(502, 'send_failed');
  }

  const res = await client.emails.send({ from, to: d.email, replyTo: to[0], ...ack });
  if (res.error) console.warn('[resend] candidature ack', res.error);

  return ok();
}
