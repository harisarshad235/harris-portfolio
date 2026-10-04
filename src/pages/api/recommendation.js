export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { feedback, name, designation, organization, permission } = req.body || {};

  if (!feedback || !permission) {
    return res.status(400).json({ error: 'Feedback and publication permission are required.' });
  }

  // Local development mock handler
  console.log('[Local Dev API] Received recommendation feedback submission:', {
    name: name || 'Anonymous',
    designation,
    organization,
    feedbackLength: feedback.length,
    date: new Date().toISOString(),
  });

  return res.status(200).json({
    success: true,
    message: 'Feedback received (local development mode). In production, this is saved to Cloudflare D1 and sent to your review inbox.',
  });
}
