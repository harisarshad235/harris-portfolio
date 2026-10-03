import { hashToken, jsonResponse } from '../../_utils/recommendations.js';

const MAX_BODY_BYTES = 1000;
const ID_PATTERN = /^[0-9a-f-]{36}$/i;
const TOKEN_PATTERN = /^[0-9a-f]{64}$/;

export async function onRequestPost({ request, env }) {
  if (!env?.RECOMMENDATIONS_DB) {
    console.error('Recommendation approval is missing the RECOMMENDATIONS_DB D1 binding.');
    return jsonResponse({ error: 'Recommendation approval is not configured yet.' }, 503);
  }

  const id = new URL(request.url).searchParams.get('id') || '';
  if (!ID_PATTERN.test(id)) {
    return jsonResponse({ error: 'This approval link is invalid or expired.' }, 400);
  }

  let body;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return jsonResponse({ error: 'This approval request is invalid.' }, 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: 'This approval request is invalid.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)
    || typeof body.token !== 'string' || !TOKEN_PATTERN.test(body.token)
    || !['preview', 'approve', 'discard'].includes(body.action)) {
    return jsonResponse({ error: 'This approval request is invalid.' }, 400);
  }

  const tokenHash = await hashToken(body.token);
  let record;
  try {
    record = await env.RECOMMENDATIONS_DB.prepare(
      'SELECT id, status, feedback, name, designation, organization, token_hash, expires_at FROM recommendations WHERE id = ?',
    ).bind(id).first();
  } catch (error) {
    console.error('Recommendation approval could not read from D1.', error);
    return jsonResponse({ error: 'The approval service is temporarily unavailable.' }, 503);
  }

  if (!record || !record.token_hash || record.token_hash !== tokenHash) {
    return jsonResponse({ error: 'This approval link is invalid or expired.' }, 404);
  }

  if (record.status === 'pending' && new Date(record.expires_at).getTime() <= Date.now()) {
    try {
      await env.RECOMMENDATIONS_DB.prepare(
        "DELETE FROM recommendations WHERE id = ? AND status = 'pending'",
      ).bind(id).run();
    } catch (error) {
      console.error('Expired recommendation could not be removed from D1.', error);
      return jsonResponse({ error: 'The approval service is temporarily unavailable.' }, 503);
    }
    return jsonResponse({ error: 'This approval link has expired.' }, 410);
  }

  if (body.action === 'preview') {
    if (record.status !== 'pending') {
      return jsonResponse({ error: 'This recommendation is no longer awaiting review.' }, 409);
    }
    return jsonResponse({
      success: true,
      recommendation: {
        feedback: record.feedback,
        name: record.name,
        designation: record.designation,
        organization: record.organization,
      },
    }, 200);
  }

  if (body.action === 'discard') {
    try {
      await env.RECOMMENDATIONS_DB.prepare(
        "DELETE FROM recommendations WHERE id = ? AND status = 'pending' AND token_hash = ?",
      ).bind(id, tokenHash).run();
    } catch (error) {
      console.error('Recommendation could not be discarded.', error);
      return jsonResponse({ error: 'The recommendation could not be discarded. Please try again.' }, 503);
    }
    return jsonResponse({ success: true, discarded: true }, 200);
  }

  if (record.status === 'approved') {
    return jsonResponse({ success: true, alreadyApproved: true }, 200);
  }
  if (record.status !== 'pending') {
    return jsonResponse({ error: 'This recommendation is no longer awaiting review.' }, 409);
  }

  try {
    const result = await env.RECOMMENDATIONS_DB.prepare(`
      UPDATE recommendations
      SET status = 'approved', approved_at = ?
      WHERE id = ? AND status = 'pending' AND token_hash = ?
    `).bind(new Date().toISOString(), id, tokenHash).run();
    if (result.meta.changes !== 1) {
      return jsonResponse({ error: 'This recommendation has already been processed.' }, 409);
    }
  } catch (error) {
    console.error('Recommendation could not be published.', error);
    return jsonResponse({ error: 'The recommendation could not be published. Please try again.' }, 503);
  }

  return jsonResponse({ success: true, published: true }, 200);
}
