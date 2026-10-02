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
    `Company: ${fields.company || 'Not provided'}`,
    `Service or inquiry: ${fields.service}`,
    `Preferred date: ${fields['preferred-date'] || 'Not provided'}`,
    `Preferred time and timezone: ${fields['preferred-time'] || 'Not provided'}`,
    '',
    'Message:',
    fields.message,
  ];

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
