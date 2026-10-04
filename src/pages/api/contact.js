export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, email, subject, service, message } = req.body || {};

  if (!name || !email || !subject || !service || !message) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }

  // Local development mock handler
  console.log('[Local Dev API] Received contact form submission:', {
    name,
    email,
    subject,
    service,
    date: new Date().toISOString(),
  });

  return res.status(200).json({
    success: true,
    message: 'Message received (local development mode). In production, this is delivered via Cloudflare Functions & Resend.',
  });
}
