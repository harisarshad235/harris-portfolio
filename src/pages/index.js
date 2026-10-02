import Head from 'next/head';

import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import TechStack from '../components/TechStack/TechStack';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { HeroStage } from '../components/Hero/HeroStyles';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || '').replace(/\/$/, '');
const pageTitle = 'Haris Arshad | PMP Project Manager in Pakistan';
const pageDescription = 'PMP-certified Project Manager in Islamabad, Pakistan, leading technology delivery, PMO governance and Agile projects. Managed a PKR 700M+ portfolio across 150+ sites.';
const profileImage = `${siteUrl}/images/haris-arshad-profile.jpeg`;
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
      </Head>
      <HeroStage data-reveal>
        <Hero />
        <BgAnimation />
      </HeroStage>
      <Timeline />
      <TechStack />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
