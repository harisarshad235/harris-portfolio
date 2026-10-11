import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

import { credentials } from '../../constants/credentials';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { FilterBar, FilterButton, FilterCount, FilterStatus } from '../Projects/ProjectsStyles';
import { ScrollReveal } from '../ui/MotionReveal';
import {
  CertificatePreview,
  CredentialCard,
  CredentialCategory,
  CredentialContent,
  CredentialDate,
  CredentialDescription,
  CredentialIssuer,
  CredentialLink,
  CredentialTitle,
  CredentialsGrid,
} from './CredentialsStyles';

const MotionCredentialCard = motion(CredentialCard);

const filters = ['All', ...new Set(credentials.map(({ category }) => category))];

const Credentials = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleCredentials = activeFilter === 'All'
    ? credentials
    : credentials.filter(({ category }) => category === activeFilter);

  return (
    <Section id="credentials">
      <ScrollReveal>
        <SectionTitle>Credentials &amp; certifications</SectionTitle>
        <SectionText>
          Verified professional credentials and continuing education supporting my project delivery work.
        </SectionText>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <FilterBar role="group" aria-label="Filter credentials by category">
          {filters.map((filter) => {
            const count = filter === 'All'
              ? credentials.length
              : credentials.filter(({ category }) => category === filter).length;

            return (
              <FilterButton
                key={filter}
                type="button"
                as={motion.button}
                whileTap={{ scale: 0.96 }}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}<FilterCount>{count}</FilterCount>
              </FilterButton>
            );
          })}
        </FilterBar>
      </ScrollReveal>
      <FilterStatus aria-live="polite">
        Showing {visibleCredentials.length} of {credentials.length} credentials
      </FilterStatus>
      <CredentialsGrid>
        <AnimatePresence mode="popLayout">
          {visibleCredentials.map((credential, index) => {
            const {
              id,
              title,
              category,
              issuer,
              description,
              date,
              verificationUrl,
              certificateImage,
              certificatePreview,
              verificationLabel,
              certificateFile,
              certificateFileLabel,
            } = credential;

            return (
              <MotionCredentialCard
                key={id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                {certificateImage || certificatePreview ? (
                  <CertificatePreview
                    href={certificateFile || certificateImage || certificatePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${title} certificate in a new tab`}
                  >
                    <img
                      src={certificatePreview || certificateImage}
                      alt={`${title} certificate issued by ${issuer}`}
                    />
                  </CertificatePreview>
                ) : (
                  <CertificatePreview as="div" aria-hidden="true">
                    <FiAward />
                  </CertificatePreview>
                )}
                <CredentialContent>
                  <CredentialCategory>{category}</CredentialCategory>
                  <CredentialTitle>{title}</CredentialTitle>
                  <CredentialIssuer>{issuer}</CredentialIssuer>
                  <CredentialDescription>{description}</CredentialDescription>
                  {date && <CredentialDate>{date}</CredentialDate>}
                  {verificationUrl && (
                    <CredentialLink
                      href={verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${verificationLabel} on Credly`}
                    >
                      {verificationLabel}<FiExternalLink aria-hidden="true" />
                    </CredentialLink>
                  )}
                  {certificateImage && !certificateFile && (
                    <CredentialLink
                      href={certificateImage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {verificationLabel}<FiExternalLink aria-hidden="true" />
                    </CredentialLink>
                  )}
                  {certificateFile && (
                    <CredentialLink
                      href={certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${certificateFileLabel} PDF in a new tab`}
                    >
                      {certificateFileLabel}<FiExternalLink aria-hidden="true" />
                    </CredentialLink>
                  )}
                </CredentialContent>
              </MotionCredentialCard>
            );
          })}
        </AnimatePresence>
      </CredentialsGrid>
    </Section>
  );
};

export default Credentials;
