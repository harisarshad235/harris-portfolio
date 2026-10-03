import React, { useState } from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';

import { credentials } from '../../constants/credentials';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { FilterBar, FilterButton, FilterCount, FilterStatus } from '../Projects/ProjectsStyles';
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

const filters = ['All', ...new Set(credentials.map(({ category }) => category))];

const Credentials = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleCredentials = activeFilter === 'All'
    ? credentials
    : credentials.filter(({ category }) => category === activeFilter);

  return (
    <Section id="credentials" data-reveal>
      <SectionDivider />
      <SectionTitle>Credentials &amp; certifications</SectionTitle>
      <SectionText>
        Verified professional credentials and continuing education supporting my project delivery work.
      </SectionText>
      <FilterBar role="group" aria-label="Filter credentials by category">
        {filters.map((filter) => {
          const count = filter === 'All'
            ? credentials.length
            : credentials.filter(({ category }) => category === filter).length;

          return (
            <FilterButton
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}<FilterCount>{count}</FilterCount>
            </FilterButton>
          );
        })}
      </FilterBar>
      <FilterStatus aria-live="polite">
        Showing {visibleCredentials.length} of {credentials.length} credentials
      </FilterStatus>
      <CredentialsGrid>
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
            verificationLabel,
            certificateFile,
            certificateFileLabel,
          } = credential;

          return (
            <CredentialCard
              key={id}
              data-reveal
              style={{ '--reveal-delay': `${(index % 3) * 70}ms` }}
            >
              {certificateImage ? (
                <CertificatePreview
                  href={certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${title} certificate in a new tab`}
                >
                  <img src={certificateImage} alt={`${title} certificate issued by ${issuer}`} />
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
                {certificateImage && (
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
            </CredentialCard>
          );
        })}
      </CredentialsGrid>
    </Section>
  );
};

export default Credentials;
