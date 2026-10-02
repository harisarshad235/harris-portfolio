const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

const getField = (body, name, maxLength) => {
  const value = body[name];
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
};

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  if (getField(body, 'bot-field', 200)) {
    return jsonResponse({ success: true });
  }

  const name = getField(body, 'name', 200);
  const email = getField(body, 'email', 254);
  const company = getField(body, 'company', 200);
  const subject = getField(body, 'subject', 300).replace(/[\r\n]+/g, ' ');
  const service = getField(body, 'service', 150);
  const preferredDate = getField(body, 'preferred-date', 30);
  const preferredTime = getField(body, 'preferred-time', 150);
  const message = getField(body, 'message', 5000);

  if (!name || !subject || !service || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ error: 'Please provide valid contact details and a message.' }, 400);
  }

  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
    console.error('Contact form email is not configured: set RESEND_API_KEY and RESEND_FROM_EMAIL.');
    return jsonResponse({ error: 'The contact form is temporarily unavailable.' }, 503);
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    `Service or inquiry: ${service}`,
    preferredDate && `Preferred date: ${preferredDate}`,
    preferredTime && `Preferred time and timezone: ${preferredTime}`,
    '',
    message,
  ].filter(Boolean).join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: ['harisarshad235@gmail.com'],
        reply_to: email,
        subject: `Portfolio inquiry: ${subject}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error('Resend rejected a contact form submission with status', response.status);
      return jsonResponse({ error: 'The message could not be sent. Please try again.' }, 502);
    }
  } catch (error) {
    console.error('Contact form email request failed.', error);
    return jsonResponse({ error: 'The message could not be sent. Please try again.' }, 502);
  }

  return jsonResponse({ success: true });
}
