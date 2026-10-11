const fs = require('fs');
const path = require('path');

const caseStudies = {
  'track-trace.html': {
    title: 'Track & Trace System',
    shortTitle: 'Track & Trace',
    image: '/images/8.webp',
    alt: 'Pakistan nationwide Track and Trace electronic monitoring and digital traceability system interface',
  },
  'thunder-energy.html': {
    title: 'Telenor Thunder IoT Telecom Platform',
    shortTitle: 'Thunder',
    image: null, // SVG artwork
    alt: 'Telenor Pakistan Thunder IoT network telemetry and predictive maintenance dashboard',
  },
  'frequency-allocation-board.html': {
    title: 'Digital Workflow for Spectrum Allocation',
    shortTitle: 'Spectrum Allocation',
    image: '/images/9.webp',
    alt: 'Frequency Allocation Board spectrum allocation digital workflow and application portal',
  },
  'boohoo-ecommerce.html': {
    title: 'Boohoo Group Returns Platform',
    shortTitle: 'Boohoo Returns',
    image: '/images/13.webp',
    alt: 'Boohoo Group multi-brand returns portal and logistics management system',
  },
  'prettylittlething-ecommerce.html': {
    title: 'PrettyLittleThing Serverless Migration',
    shortTitle: 'PrettyLittleThing',
    image: '/images/12.webp',
    alt: 'PrettyLittleThing serverless cloud architecture modernization and e-commerce platform',
  },
  'cda-smart-parking.html': {
    title: 'CDA Smart Parking Digitization',
    shortTitle: 'Smart Parking',
    image: '/images/6.webp',
    alt: 'Capital Development Authority APNR smart parking management and digitized vehicle tracking',
  },
  'taggy-marketplace.html': {
    title: 'Taggy Fashion Resale Marketplace',
    shortTitle: 'Taggy Marketplace',
    image: '/images/10.webp',
    alt: 'Taggy fashion resale marketplace platform interface and discovery search',
  },
  'apc-admin-portal.html': {
    title: 'Aviation Professionals Club Admin Portal',
    shortTitle: 'APC Admin Portal',
    image: '/images/11.webp',
    alt: 'Aviation Professionals Club digital admin portal and member benefits management platform',
  },
};

const caseStudiesDir = path.join(__dirname, '..', 'public', 'case-studies');

for (const [filename, meta] of Object.entries(caseStudies)) {
  const filePath = path.join(caseStudiesDir, filename);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Ensure meta robots exists
  if (!html.includes('<meta name="robots"')) {
    html = html.replace(
      /<link rel="canonical"/,
      `<meta name="robots" content="index, follow" />\n    <link rel="canonical"`
    );
  }

  // 2. Add BreadcrumbList JSON-LD schema if missing
  const breadcrumbSchema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://harisarshad.site/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://harisarshad.site/#client-projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${meta.title}",
          "item": "https://harisarshad.site/case-studies/${filename}"
        }
      ]
    }
    </script>`;

  if (!html.includes('"@type": "BreadcrumbList"')) {
    html = html.replace('</head>', `${breadcrumbSchema}\n  </head>`);
  }

  // 3. Replace <div class="case-top-bar"> with semantic breadcrumb navigation
  const breadcrumbNav = `<div class="case-top-bar">
        <nav aria-label="Breadcrumb" class="case-breadcrumb">
          <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a itemprop="item" href="/"><span itemprop="name">Home</span></a>
              <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a itemprop="item" href="/#client-projects"><span itemprop="name">Projects</span></a>
              <meta itemprop="position" content="2" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span itemprop="name" aria-current="page">${meta.shortTitle}</span>
              <meta itemprop="position" content="3" />
            </li>
          </ol>
        </nav>`;

  html = html.replace(/<div class="case-top-bar">[\s\S]*?<a class="case-back" href="\/#projects">[\s\S]*?<\/a>/, breadcrumbNav);

  // 4. Update hero image to modern WebP with explicit width/height and descriptive alt attribute
  if (meta.image) {
    const heroMediaRegex = /<div class="case-hero-media" aria-hidden="true"><img src="[^"]*" alt="[^"]*" \/><\/div>/;
    const replacementHeroMedia = `<div class="case-hero-media" aria-hidden="true"><img src="${meta.image}" alt="${meta.alt}" width="1200" height="675" loading="eager" /></div>`;
    html = html.replace(heroMediaRegex, replacementHeroMedia);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Enhanced case study: ${filename}`);
}

console.log('All case studies successfully enhanced with SEO, breadcrumbs, and WebP media.');
