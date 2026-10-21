import { newsletterSchema } from '$lib/psa/schemas.js';
import { config, welcomeEmail, lang, fail, ok } from '$lib/server/email.js';

export const prerender = false;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url }) {
  const body = await request.json().catch(() => null);
  if (!body) return fail(400, 'bad_request');
  if (body.website) return ok(); // honeypot

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) return fail(422, 'invalid');
  const { email } = parsed.data;
  const l = lang(body.lang);

  const { client, from, to, segmentId, site } = config();
  if (!client) return fail(503, 'email_not_configured');

  // store the subscriber in Resend Contacts (optionally inside a segment, for broadcasts)
  const created = await client.contacts.create({
    email,
    unsubscribed: false,
    ...(segmentId ? { segments: [{ id: segmentId }] } : {})
  });
  if (created.error) {
    // an existing contact is not a failure for the visitor
    const dup = /exist/i.test(created.error.message);
    if (!dup) {
      console.error('[resend] newsletter contact', created.error);
      return fail(502, 'subscribe_failed');
    }
  }

  const welcome = await client.emails.send({
    from,
    to: email,
    replyTo: to[0],
    ...welcomeEmail(l, site || url.origin),
    tags: [{ name: 'form', value: 'newsletter' }]
  });
  if (welcome.error) console.warn('[resend] newsletter welcome', welcome.error);

  return ok();
}
