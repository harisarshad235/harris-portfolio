const PUBLIC_RECOMMENDATIONS_URL = 'https://harisarshad.site/api/recommendations';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (process.env.NODE_ENV !== 'development') {
    return res.status(404).json({ error: 'Not found.' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(PUBLIC_RECOMMENDATIONS_URL, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    const result = await response.json();
    return res.status(response.status).json(result);
  } catch (error) {
    console.error('Local development could not load approved recommendations.', error);
    return res.status(502).json({ error: 'Approved recommendations could not be loaded from the live site.' });
  } finally {
    clearTimeout(timeout);
  }
}
