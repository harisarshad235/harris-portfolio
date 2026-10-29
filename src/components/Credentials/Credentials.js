import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

import { credentials } from '../../constants/credentials';
import { RouteSection } from '../ui/RouteSection';

const filters = ['All', ...new Set(credentials.map(({ category }) => category))];

const Credentials = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleCredentials =
    activeFilter === 'All'
      ? credentials
      : credentials.filter(({ category }) => category === activeFilter);

  return (
    <RouteSection
      id="credentials"
      line="violet"
      code="L5"
      surface="default"
      className="border-b-[1.5px] border-rule/15"
    >
      <div data-reveal className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-3xl sm:text-5xl text-ink">
            Credentials &amp; Certifications
          </h2>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-line-violet text-on-violet text-xs font-extrabold font-wide">
            <span className="w-2 h-2 rounded-full bg-current" />
            VIOLET LINE · VERIFIED GOVERNANCE
          </span>
        </div>

        <p className="text-ink-2 text-base sm:text-lg leading-relaxed max-w-[66ch] mb-7">
          Verified professional credentials and continuing education supporting my project delivery work.
        </p>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter credentials by category"
          className="flex flex-wrap items-center gap-2"
        >
          {filters.map((filter) => {
            const count =
              filter === 'All'
                ? credentials.length
                : credentials.filter(({ category }) => category === filter).length;
            const isSelected = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveFilter(filter)}
                className="tab"
              >
                <span
                  aria-hidden="true"
                  className={`w-2.5 h-2.5 rounded-full bg-line-violet ${
                    isSelected ? 'ring-2 ring-paper' : 'ring-1 ring-ink/40'
                  }`}
                />
                <span>{filter}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="text-xs font-bold text-ink-2 mt-3 tabular">
          Showing {visibleCredentials.length} of {credentials.length} credentials
        </p>
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
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
              <motion.article
                key={id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="card card-lift overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-2 w-full bg-line-violet" aria-hidden="true" />

                  {/* Certificate Preview */}
                  {certificateImage || certificatePreview ? (
                    <a
                      href={certificateFile || certificateImage || certificatePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${title} certificate in a new tab`}
                      className="block relative w-full aspect-[4/2.8] bg-surface-2 overflow-hidden border-b border-rule/12"
                    >
                      <img
                        src={certificatePreview || certificateImage}
                        alt={`${title} certificate issued by ${issuer}`}
                        width={400}
                        height={280}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </a>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-full aspect-[4/2.8] bg-surface-2 flex items-center justify-center border-b border-rule/12 text-line-violet"
                    >
                      <FiAward className="w-12 h-12" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-line-violet text-on-violet text-[11px] font-extrabold font-wide">
                        {category}
                      </span>
                      <span className="text-xs font-extrabold text-ink-2 tabular">
                        CR-0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl text-ink mb-1.5">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm font-bold text-line-violet mb-3 font-wide">
                      {issuer}
                    </p>

                    <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                      {description}
                    </p>

                    {date && (
                      <p className="text-xs font-bold text-ink tabular">{date}</p>
                    )}
                  </div>
                </div>

                {/* Verification Links */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-rule/12 flex flex-wrap items-center gap-2">
                  {verificationUrl && (
                    <a
                      href={verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${verificationLabel} on Credly`}
                      className="btn btn-ink btn-sm"
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
                      className="btn btn-ink btn-sm"
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
                      className="btn btn-outline btn-sm"
                    >
                      <span>{certificateFileLabel}</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </RouteSection>
  );
};

export default Credentials;
