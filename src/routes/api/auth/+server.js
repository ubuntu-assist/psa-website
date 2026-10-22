// GitHub OAuth for the CMS (/admin) — step 1: redirect to GitHub.
// Same protocol as Sveltia CMS Authenticator (github.com/sveltia/sveltia-cms-auth),
// served from this site's Vercel functions instead of a Cloudflare Worker.
// Env: GITHUB_OAUTH_ID, GITHUB_OAUTH_SECRET (OAuth App with callback <site>/api/auth/callback).
import { env } from '$env/dynamic/private';
import { popup } from '$lib/server/oauth.js';

export const prerender = false;

/** @type {import('./$types').RequestHandler} */
export function GET({ url, cookies }) {
  const provider = url.searchParams.get('provider') || 'github';
  if (provider !== 'github') return popup({ error: 'Unsupported provider', errorCode: 'UNSUPPORTED_BACKEND' });
  if (!env.GITHUB_OAUTH_ID || !env.GITHUB_OAUTH_SECRET) {
    return popup({ error: 'OAuth app not configured on the server.', errorCode: 'MISCONFIGURED_CLIENT' });
  }

  // CSRF protection: random state, echoed back by GitHub, checked against an HttpOnly cookie
  const state = crypto.randomUUID().replaceAll('-', '');
  cookies.set('psa_oauth_state', state, { path: '/api/auth', httpOnly: true, secure: true, sameSite: 'lax', maxAge: 600 });

  // `repo` is needed to commit to the repository; narrower if the CMS asks for less
  const requested = (url.searchParams.get('scope') || '').split(/[\s,]+/).filter(Boolean);
  const allowed = ['repo', 'public_repo', 'user', 'read:user', 'user:email'];
  const scope = requested.length && requested.every((s) => allowed.includes(s)) ? requested.join(',') : 'repo,user';

  const params = new URLSearchParams({
    client_id: env.GITHUB_OAUTH_ID,
    redirect_uri: `${url.origin}/api/auth/callback`,
    scope,
    state
  });
  return new Response(null, { status: 302, headers: { location: `https://github.com/login/oauth/authorize?${params}` } });
}
