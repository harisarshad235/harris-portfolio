const CANONICAL_HOST = 'harisarshad.site';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === CANONICAL_HOST || !url.hostname.endsWith('.pages.dev')) {
    return next();
  }

  url.protocol = 'https:';
  url.hostname = CANONICAL_HOST;
  url.port = '';
  return Response.redirect(url.toString(), 308);
}
