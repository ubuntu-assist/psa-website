// GitHub OAuth for the CMS — step 2: exchange the code for a token, hand it to /admin.
import { env } from '$env/dynamic/private';
import { popup } from '$lib/server/oauth.js';

export const prerender = false;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, cookies }) {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const expected = cookies.get('psa_oauth_state');
  cookies.delete('psa_oauth_state', { path: '/api/auth' });

  if (!code || !state) return popup({ error: 'Missing code or state.', errorCode: 'AUTH_CODE_REQUEST_FAILED' });
  if (!expected || state !== expected) return popup({ error: 'Potential CSRF attack detected.', errorCode: 'CSRF_DETECTED' });

  try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        client_id: env.GITHUB_OAUTH_ID,
        client_secret: env.GITHUB_OAUTH_SECRET,
        code,
        redirect_uri: `${url.origin}/api/auth/callback`
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      // e.g. 404 when GITHUB_OAUTH_ID doesn't match an OAuth App
      return popup({ error: `GitHub refused the OAuth app (HTTP ${res.status}).`, errorCode: 'MISCONFIGURED_CLIENT' });
    }
    const { access_token: token, error, error_description } = data;
    if (!token) return popup({ error: error_description || error || 'No token returned.', errorCode: 'TOKEN_REQUEST_FAILED' });
    return popup({ token, origin: url.origin });
  } catch {
    return popup({ error: 'Could not reach GitHub.', errorCode: 'TOKEN_REQUEST_FAILED' });
  }
}
