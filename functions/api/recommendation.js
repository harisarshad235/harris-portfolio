import { hashToken, jsonResponse } from '../_utils/recommendations.js';

const MAX_BODY_BYTES = 5000;
const APPROVAL_TTL_DAYS = 90;
const SITE_URL = 'https://harisarshad.site';
const FIELD_LIMITS = {
  feedback: 3000,
  name: 120,
  designation: 120,
  organization: 160,
  website: 200,
};

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character]));

const randomToken = () => {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

const databaseUnavailable = (env) => {
  if (!env?.RECOMMENDATIONS_DB) {
    console.error('Recommendation delivery is missing the RECOMMENDATIONS_DB D1 binding.');
    return jsonResponse({ error: 'Recommendation publishing is not configured yet.' }, 503);
  }
  return null;
};

const removePendingRecommendation = async (database, id) => {
  try {
    await database.prepare(
      "DELETE FROM recommendations WHERE id = ? AND status = 'pending'",
    ).bind(id).run();
  } catch (error) {
    console.error('Undelivered recommendation could not be removed from D1.', error);
  }
};

export async function onRequestPost({ request, env }) {
  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'The feedback is too long.' }, 413);
  }

  let body;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return jsonResponse({ error: 'The feedback is too long.' }, 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: 'The submitted feedback is invalid.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse({ error: 'The submitted feedback is invalid.' }, 400);
  }

  const fields = {};
  for (const [name, limit] of Object.entries(FIELD_LIMITS)) {
    const value = body[name] === undefined ? '' : body[name];
    if (typeof value !== 'string' || value.length > limit) {
      return jsonResponse({ error: 'Please check the feedback fields and try again.' }, 400);
    }
    fields[name] = value.trim();
  }

  if (fields.website) {
    return jsonResponse({ success: true });
  }

  if (!fields.feedback) {
    return jsonResponse({ error: 'Please add your feedback before sending.' }, 400);
  }
  if (body.permission !== true) {
    return jsonResponse({ error: 'Please confirm the feedback permission before sending.' }, 400);
  }

  const unavailable = databaseUnavailable(env);
  if (unavailable) return unavailable;

  const missingSettings = ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL']
    .filter((name) => !env?.[name]);
  if (missingSettings.length) {
    console.error('Recommendation delivery is missing runtime settings:', missingSettings.join(', '));
    return jsonResponse({
      error: `Feedback delivery is missing these runtime settings: ${missingSettings.join(', ')}.`,
    }, 503);
  }

  const metadata = [
    fields.name && `Name: ${fields.name}`,
    fields.designation && `Job title: ${fields.designation}`,
    fields.organization && `Worked with Haris at: ${fields.organization}`,
  ].filter(Boolean);
  const text = [
    'A new recommendation was submitted from harisarshad.site.',
    '',
    ...metadata,
    'Permission to publish feedback and any submitted attribution if approved: Yes',
    '',
    'Feedback:',
    fields.feedback,
    '',
    'This submission is for review only and has not been published.',
  ].join('\n');
  const metadataRows = [
    fields.name && ['Name', fields.name],
    fields.designation && ['Job title', fields.designation],
    fields.organization && ['Worked with Haris at', fields.organization],
  ].filter(Boolean).map(([label, value]) => `
    <tr>
      <td style="padding:11px 14px;border-bottom:1px solid #eee8e2;color:#687372;font-size:13px;vertical-align:top;width:38%;">${label}</td>
      <td style="padding:11px 14px;border-bottom:1px solid #eee8e2;color:#1d2a2d;font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`).join('');
  const feedbackHtml = escapeHtml(fields.feedback).replace(/\n/g, '<br>');
  const id = crypto.randomUUID();
  const token = randomToken();
  const tokenHash = await hashToken(token);
  const approvalUrl = `${SITE_URL}/recommendation-approval?id=${encodeURIComponent(id)}#${token}`;
  const createdAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + APPROVAL_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();

  try {
    await env.RECOMMENDATIONS_DB.prepare(
      "DELETE FROM recommendations WHERE status = 'pending' AND expires_at <= ?",
    ).bind(new Date().toISOString()).run();
    await env.RECOMMENDATIONS_DB.prepare(`
      INSERT INTO recommendations (
        id, status, feedback, name, designation, organization, token_hash, created_at, expires_at
      ) VALUES (?, 'pending', ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      fields.feedback,
      fields.name,
      fields.designation,
      fields.organization,
      tokenHash,
      createdAt,
      expiresAt,
    ).run();
  } catch (error) {
    console.error('Recommendation could not be saved for approval.', error);
    return jsonResponse({ error: 'Your feedback could not be saved. Please try again later.' }, 503);
  }

  const html = `
    <div style="margin:0;padding:32px 12px;background:#f4f0ea;font-family:Arial,Helvetica,sans-serif;color:#1d2a2d;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e9e2da;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:26px 30px;background:#1d2a2d;">
            <p style="margin:0 0 8px;color:#f18a75;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Portfolio recommendation</p>
            <h1 style="margin:0;color:#ffffff;font-size:23px;line-height:1.3;">New feedback for review</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 30px 12px;">
            ${metadataRows ? `
              <h2 style="margin:0 0 12px;color:#1d2a2d;font-size:16px;">About the reviewer</h2>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #eee8e2;border-radius:8px;border-spacing:0;">${metadataRows}</table>
            ` : '<p style="margin:0;color:#687372;font-size:14px;">The reviewer chose not to include their name or work details.</p>'}
          </td>
        </tr>
        <tr>
          <td style="padding:18px 30px 28px;">
            <h2 style="margin:0 0 12px;color:#1d2a2d;font-size:16px;">Their feedback</h2>
            <div style="padding:18px;background:#f8f6f3;border-left:3px solid #e5674f;border-radius:4px;color:#344144;font-size:15px;line-height:1.7;overflow-wrap:anywhere;">${feedbackHtml}</div>
            <p style="margin:16px 0 0;color:#687372;font-size:13px;line-height:1.5;">Permission to publish feedback and submitted attribution if approved: <strong>Yes</strong>. This feedback is private until you approve it.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 30px 30px;">
            <a href="${approvalUrl}" style="display:inline-block;padding:13px 22px;border-radius:999px;background:#e5674f;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">Review and approve</a>
            <p style="margin:12px 0 0;color:#687372;font-size:12px;line-height:1.5;">The link opens a private review page. Feedback is published only after you confirm approval.</p>
          </td>
        </tr>
      </table>
    </div>`;

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        subject: 'New portfolio feedback for review',
        text: `${text}\n\nReview and approve: ${approvalUrl}\nThe link opens a private review page; feedback is published only after you confirm approval.`,
        html,
      }),
    });
  } catch (error) {
    console.error('Recommendation form could not reach Resend.', error);
    await removePendingRecommendation(env.RECOMMENDATIONS_DB, id);
    return jsonResponse({ error: 'The feedback could not be delivered. Please try again later.' }, 502);
  }

  if (!resendResponse.ok) {
    console.error(`Resend rejected a recommendation submission with status ${resendResponse.status}.`);
    await removePendingRecommendation(env.RECOMMENDATIONS_DB, id);
    return jsonResponse({ error: 'The feedback could not be delivered. Please try again later.' }, 502);
  }

  return jsonResponse({ success: true });
}
