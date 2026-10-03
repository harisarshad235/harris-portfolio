const MAX_BODY_BYTES = 20_000;
const FIELD_LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  subject: 180,
  service: 120,
  'preferred-date': 40,
  'preferred-time': 120,
  message: 5000,
  'bot-field': 200,
};

const jsonResponse = (body, status) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character]));

const detailRow = (label, value) => `
  <tr>
    <td style="padding:12px 16px;border-bottom:1px solid #eee8e2;color:#697578;font-size:13px;vertical-align:top;width:38%;">${label}</td>
    <td style="padding:12px 16px;border-bottom:1px solid #eee8e2;color:#202c2e;font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
  </tr>`;

export async function onRequestPost({ request, env }) {
  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'The submitted message is too large.' }, 413);
  }

  let body;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return jsonResponse({ error: 'The submitted message is too large.' }, 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: 'The submitted message is not valid JSON.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse({ error: 'The submitted message is invalid.' }, 400);
  }

  const fields = {};
  for (const [name, limit] of Object.entries(FIELD_LIMITS)) {
    const value = body[name] === undefined ? '' : body[name];
    if (typeof value !== 'string' || value.length > limit) {
      return jsonResponse({ error: `The ${name} field is invalid.` }, 400);
    }
    fields[name] = value.trim();
  }

  if (fields['bot-field']) {
    return jsonResponse({ success: true });
  }

  if (!fields.name || !fields.subject || !fields.service || !fields.message) {
    return jsonResponse({ error: 'Please complete all required fields.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.email)) {
    return jsonResponse({ error: 'Please provide a valid email address.' }, 400);
  }
  if (/[\r\n]/.test(fields.subject)) {
    return jsonResponse({ error: 'The subject is invalid.' }, 400);
  }

  const missingSettings = ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL']
    .filter((name) => !env?.[name]);
  if (missingSettings.length) {
    console.error('Contact form runtime settings are missing:', missingSettings.join(', '));
    return jsonResponse({
      error: `Contact form delivery is missing these runtime settings: ${missingSettings.join(', ')}.`,
    }, 503);
  }
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = env;

  const messageLines = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    fields.company && `Company: ${fields.company}`,
    `Service: ${fields.service}`,
    fields['preferred-date'] && `Preferred date: ${fields['preferred-date']}`,
    fields['preferred-time'] && `Preferred time: ${fields['preferred-time']}`,
    '',
    'Message:',
    fields.message,
  ].filter(Boolean);
  const html = `
    <div style="margin:0;padding:32px 12px;background:#f4f0ea;font-family:Arial,Helvetica,sans-serif;color:#202c2e;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e9e2da;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:28px 32px;background:#202c2e;">
            <p style="margin:0 0 8px;color:#f18a75;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Portfolio contact</p>
            <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;">${escapeHtml(fields.subject)}</h1>
            <p style="margin:10px 0 0;color:#d5ddda;font-size:14px;line-height:1.5;">A new message was sent from harisarshad.site</p>
          </td>
        </tr>
        <tr>
          <td style="padding:26px 32px 12px;">
            <h2 style="margin:0 0 14px;color:#202c2e;font-size:16px;">Contact details</h2>
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #eee8e2;border-radius:8px;border-spacing:0;">
              ${detailRow('Name', fields.name)}
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #eee8e2;color:#697578;font-size:13px;vertical-align:top;width:38%;">Email</td>
                <td style="padding:12px 16px;border-bottom:1px solid #eee8e2;font-size:14px;font-weight:600;vertical-align:top;"><a href="mailto:${escapeHtml(fields.email)}" style="color:#d95f49;text-decoration:none;">${escapeHtml(fields.email)}</a></td>
              </tr>
              ${fields.company ? detailRow('Company', fields.company) : ''}
              ${detailRow('Service', fields.service)}
              ${fields['preferred-date'] ? detailRow('Date', fields['preferred-date']) : ''}
              ${fields['preferred-time'] ? detailRow('Time', fields['preferred-time']) : ''}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 32px 30px;">
            <h2 style="margin:0 0 12px;color:#202c2e;font-size:16px;">Message</h2>
            <div style="padding:18px 20px;background:#f8f6f3;border-left:3px solid #e5674f;border-radius:4px;color:#344144;font-size:15px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">${escapeHtml(fields.message)}</div>
            <p style="margin:18px 0 0;color:#697578;font-size:13px;line-height:1.5;">You can reply directly to this email to respond to ${escapeHtml(fields.name)}.</p>
          </td>
        </tr>
      </table>
      <p style="margin:18px auto 0;max-width:640px;text-align:center;color:#7b8585;font-size:12px;">Sent from the contact form at harisarshad.site</p>
    </div>`;

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: fields.email,
        subject: `Portfolio inquiry: ${fields.subject}`,
        text: messageLines.join('\n'),
        html,
      }),
    });
  } catch (error) {
    console.error('Contact form could not reach Resend.', error);
    return jsonResponse({ error: 'The message could not be delivered. Please try again later.' }, 502);
  }

  if (!resendResponse.ok) {
    console.error(`Resend rejected the contact form submission with status ${resendResponse.status}.`);
    return jsonResponse({ error: 'The message could not be delivered. Please try again later.' }, 502);
  }

  return jsonResponse({ success: true });
}
