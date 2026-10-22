const fs = require('fs');
const path = require('path');

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://harisarshad.site').replace(/\/$/, '');
const caseStudiesDir = path.join(__dirname, '..', 'public', 'case-studies');
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  const pages = [
    {
      loc: `${SITE_URL}/`,
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: currentDate,
    },
  ];

  if (fs.existsSync(caseStudiesDir)) {
    const files = fs.readdirSync(caseStudiesDir);
    for (const file of files) {
      if (file.endsWith('.html')) {
        const filePath = path.join(caseStudiesDir, file);
        const stats = fs.statSync(filePath);
        const modDate = stats.mtime.toISOString().split('T')[0];

        const slug = file.replace(/\.html$/, '');
        pages.push({
          loc: `${SITE_URL}/case-studies/${slug}`,
          priority: '0.8',
          changefreq: 'monthly',
          lastmod: modDate,
        });
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`Generated sitemap with ${pages.length} URLs at: ${sitemapPath}`);
}

generateSitemap();
