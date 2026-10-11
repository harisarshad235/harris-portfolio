import Head from 'next/head';

import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import FlagshipProjects from '../components/sections/FlagshipProjects';
import Projects from '../components/Projects/Projects';
import Recommendations from '../components/Recommendations/Recommendations';
import TechStack from '../components/TechStack/TechStack';
import Credentials from '../components/Credentials/Credentials';
import Timeline from '../components/TimeLine/TimeLine';
import FAQ, { FAQ_DATA } from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { HeroStage } from '../components/Hero/HeroStyles';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://harisarshad.site').replace(/\/$/, '');
const pageTitle = 'Haris Arshad, PMP® – Technical Project Manager & Delivery Lead';
const pageDescription = 'Portfolio of Haris Arshad, PMP®-certified Project Manager in Islamabad. Proven track record across PKR 700M+ portfolios, PMO governance, and high-velocity cloud delivery.';
const profileImage = `${siteUrl}/images/haris-arshad-profile.webp`;
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Haris Arshad',
  jobTitle: 'PMP-certified Project Manager',
  description: pageDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://pk.linkedin.com/in/haris-arshad',
    'https://github.com/harisarshad235',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Project Management Professional (PMP)®',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Project Management Institute (PMI)',
      },
    },
  ],
  knowsAbout: [
    'Project management',
    'Project Management Professional (PMP)',
    'Technology project management',
    'Project planning and control',
    'PMO governance',
    'Portfolio management',
    'Agile project management',
    'Scrum and Kanban',
    'Stakeholder management',
    'Risk, assumption, issue and dependency (RAID) management',
    'Budgeting and forecasting',
    'Vendor management',
    'Software delivery',
    'Power BI reporting',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: pageTitle,
  description: pageDescription,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteUrl}/`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Harris Portfolio',
  operatingSystem: 'All',
  applicationCategory: 'WebApplication',
  url: siteUrl,
  description: pageDescription,
  author: {
    '@type': 'Person',
    name: 'Haris Arshad'
  }
};

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content="Haris Arshad" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {siteUrl && (
          <>
            <link rel="canonical" href={`${siteUrl}/`} />
            <meta property="og:url" content={`${siteUrl}/`} />
            <meta property="og:image" content={profileImage} />
            <meta name="twitter:image" content={profileImage} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </Head>
      <div className="w-full">
        <Hero />
      </div>
      <Timeline />
      <TechStack />
      <Credentials />
      <FlagshipProjects />
      <Projects />
      <Recommendations />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default Home;
