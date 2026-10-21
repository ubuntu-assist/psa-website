import { contactSchema } from '$lib/psa/schemas.js';
import { config, contactEmails, lang, fail, ok } from '$lib/server/email.js';

export const prerender = false;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url }) {
  const body = await request.json().catch(() => null);
  if (!body) return fail(400, 'bad_request');
  if (body.website) return ok(); // honeypot: bots fill every field

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return fail(422, 'invalid');
  const d = parsed.data;
  const l = lang(body.lang);

  const { client, from, to, site } = config();
  if (!client) return fail(503, 'email_not_configured');
  const { internal, ack } = contactEmails(d, l, site || url.origin);

  // 1. notification to PSA — « Répondre » goes straight to the visitor
  const sent = await client.emails.send({
    from,
    to,
    replyTo: d.email,
    ...internal,
    tags: [{ name: 'form', value: 'contact' }]
  });
  if (sent.error) {
    console.error('[resend] contact', sent.error);
    return fail(502, 'send_failed');
  }

  // 2. acknowledgement to the visitor (best effort)
  const res = await client.emails.send({ from, to: d.email, replyTo: to[0], ...ack });
  if (res.error) console.warn('[resend] contact ack', res.error);

  return ok();
}
