import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

import { credentials } from '../../constants/credentials';
import { Section } from '../ui/Section';

const filters = ['All', ...new Set(credentials.map(({ category }) => category))];

const Credentials = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleCredentials =
    activeFilter === 'All'
      ? credentials
      : credentials.filter(({ category }) => category === activeFilter);

  return (
    <Section
      id="credentials"
      title="Credentials & Certifications"
      intro="Verified professional credentials and continuing education supporting my project delivery work."
      split={false}
    >
      <div data-reveal className="mb-10">
        <div
          role="group"
          aria-label="Filter credentials by category"
          className="flex flex-wrap items-center border-b border-rule/15"
        >
          {filters.map((filter) => {
            const count =
              filter === 'All'
                ? credentials.length
                : credentials.filter(({ category }) => category === filter).length;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className="tab"
              >
                <span>{filter}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="meta mt-3">
          Showing {visibleCredentials.length} of {credentials.length} credentials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 items-stretch">
        <AnimatePresence mode="popLayout">
          {visibleCredentials.map((credential) => {
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
              <motion.article
                key={id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="group flex flex-col"
              >
                {certificateImage || certificatePreview ? (
                  <a
                    href={certificateFile || certificateImage || certificatePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${title} certificate in a new tab`}
                    className="block relative w-full aspect-[4/2.8] bg-surface-2 overflow-hidden rounded-lg border border-rule/12"
                  >
                    <img
                      src={certificatePreview || certificateImage}
                      alt={`${title} certificate issued by ${issuer}`}
                      width={400}
                      height={280}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </a>
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-full aspect-[4/2.8] bg-surface-2 flex items-center justify-center rounded-lg border border-rule/12 text-accent"
                  >
                    <FiAward className="w-10 h-10" />
                  </div>
                )}

                <div className="pt-5 flex flex-col flex-1">
                  <p className="meta mb-2">
                    {category}
                    {date && <span> · {date}</span>}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl leading-snug mb-1.5">{title}</h3>
                  <p className="text-sm font-semibold text-accent mb-3">{issuer}</p>
                  <p className="text-sm text-ink-2 leading-relaxed mb-5">{description}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
                    {verificationUrl && (
                      <a
                        href={verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${verificationLabel} on Credly`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold link"
                      >
                        <span>{verificationLabel}</span>
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                    {certificateImage && !certificateFile && (
                      <a
                        href={certificateImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold link"
                      >
                        <span>{verificationLabel}</span>
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                    {certificateFile && (
                      <a
                        href={certificateFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${certificateFileLabel} PDF in a new tab`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 hover:text-ink transition-colors"
                      >
                        <span>{certificateFileLabel}</span>
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Credentials;
