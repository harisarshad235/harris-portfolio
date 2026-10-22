import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '../layout/Layout';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import { ContactSuccess, SuccessLink } from '../styles/ContactSuccessStyles';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Page not found (404) | Haris Arshad</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="The requested page could not be found." />
      </Head>
      <Section>
        <ContactSuccess>
          <SectionTitle main>404: Page not found</SectionTitle>
          <SectionText>
            The link you followed may be broken, moved, or no longer available. You can return to the portfolio home or jump directly to one of the key sections below.
          </SectionText>
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginTop: '2.4rem' }}>
            <Link href="/" passHref>
              <SuccessLink>Return to home</SuccessLink>
            </Link>
            <Link href="/#client-projects" passHref>
              <SuccessLink style={{ background: 'transparent', border: '1px solid currentColor', color: 'inherit' }}>
                View projects
              </SuccessLink>
            </Link>
            <Link href="/#contact" passHref>
              <SuccessLink style={{ background: 'transparent', border: '1px solid currentColor', color: 'inherit' }}>
                Contact Haris
              </SuccessLink>
            </Link>
          </div>
        </ContactSuccess>
      </Section>
    </Layout>
  );
}
