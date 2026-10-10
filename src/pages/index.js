import Head from 'next/head';

import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import FlagshipProjects from '../components/sections/FlagshipProjects';
import Projects from '../components/Projects/Projects';
import Recommendations from '../components/Recommendations/Recommendations';
import TechStack from '../components/TechStack/TechStack';
import Credentials from '../components/Credentials/Credentials';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { HeroStage } from '../components/Hero/HeroStyles';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://harisarshad.site').replace(/\/$/, '');
const pageTitle = 'Haris Arshad | PMP Project Manager in Islamabad, Pakistan';
const pageDescription = 'PMP Project Manager in Islamabad, Pakistan, leading IT project management, PMO governance, Agile delivery and digital transformation for technology teams.';
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
      <Credentials />
      <FlagshipProjects />
      <Projects />
      <Recommendations />
    </Layout>
  );
};

export default Home;
