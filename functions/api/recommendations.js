import { jsonResponse } from '../_utils/recommendations.js';

export async function onRequestGet({ env }) {
  if (!env?.RECOMMENDATIONS_DB) {
    console.error('Public recommendations are missing the RECOMMENDATIONS_DB D1 binding.');
    return jsonResponse({ error: 'Recommendations are temporarily unavailable.' }, 503);
  }

  try {
    const { results } = await env.RECOMMENDATIONS_DB.prepare(`
      SELECT id, feedback AS quote, name, designation, organization
      FROM recommendations
      WHERE status = 'approved'
      ORDER BY approved_at DESC
    `).all();
    return jsonResponse({ recommendations: results }, 200);
  } catch (error) {
    console.error('Approved recommendations could not be loaded from D1.', error);
    return jsonResponse({ error: 'Recommendations are temporarily unavailable.' }, 503);
  }
}
