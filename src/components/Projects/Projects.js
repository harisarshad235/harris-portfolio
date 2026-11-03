import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../../constants/constants';
import { Section } from '../ui/Section';

const filters = ['All', 'Telecom', 'E-commerce', 'Public sector', 'Digital platforms'];

const filterProjects = (filter) =>
  filter === 'All' ? projects : projects.filter(({ sector }) => sector === filter);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = filterProjects(activeFilter);

  return (
    <Section
      id="client-projects"
      title="Client Projects & Case Studies"
      intro="Selected telecom, public-sector, e-commerce, and digital platform initiatives delivered across national infrastructure and global retail portfolios."
      split={false}
    >
      <div data-reveal className="mb-10">
        <div
          role="group"
          aria-label="Filter projects by industry"
          className="flex flex-wrap items-center border-b border-rule/15"
        >
          {filters.map((filter) => {
            const count = filterProjects(filter).length;
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
          Showing {visibleProjects.length} of {projects.length} projects
          {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-stretch">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map(
            ({
              id,
              image,
              title,
              client,
              sector,
              category,
              description,
              impact,
              metricsHighlight,
              methodology,
              website,
              caseStudy,
              projectTypes,
            }) => (
              <motion.article
                key={id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                data-project-types={projectTypes.join(',')}
                className="group flex flex-col"
              >
                {/* Media */}
                <div className="relative w-full aspect-[16/10] bg-surface-2 overflow-hidden rounded-lg border border-rule/12">
                  {image ? (
                    <img
                      src={image}
                      alt={`${client || title} project delivery`}
                      loading="lazy"
                      width={560}
                      height={350}
                      className="w-full h-full object-contain object-center p-3 sm:p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div aria-hidden="true" className="w-full h-full flex items-center justify-center p-6 text-ink">
                      <svg viewBox="0 0 480 240" className="w-full h-full" focusable="false">
                        <path
                          d="M238 216 278 42l42 174M252 154h56M260 119h40M268 82h25M248 176l61-41M307 176l-53-41M242 216h84"
                          fill="none"
                          stroke="rgb(var(--accent-rgb))"
                          strokeWidth="4"
                        />
                        <path
                          d="M278 55c-25-21-25-44 0-64M292 55c25-21 25-44 0-64M267 42c-38-31-38-65 0-96M303 42c38-31 38-65 0-96"
                          fill="none"
                          stroke="rgb(var(--accent-rgb))"
                          strokeWidth="3"
                          opacity=".55"
                        />
                        <path d="M50 214h380" stroke="currentColor" strokeWidth="2" opacity=".25" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="pt-5 flex flex-col flex-1">
                  <p className="meta mb-2">
                    {client || category}
                    {(sector || category) && <span> · {sector || category}</span>}
                  </p>
                  <h3 className="font-display text-2xl sm:text-[1.75rem] leading-tight mb-3">{title}</h3>

                  {(methodology || metricsHighlight) && (
                    <p className="text-sm font-semibold text-accent mb-3 tabular">
                      {[metricsHighlight, methodology].filter(Boolean).join(' · ')}
                    </p>
                  )}

                  <p className="text-[0.9375rem] text-ink-2 leading-relaxed mb-4 flex-1">{description}</p>

                  <p className="text-sm text-ink leading-relaxed pt-4 border-t border-rule/12 mb-5">
                    <span className="font-semibold">Outcome: </span>
                    <span className="text-ink-2">{impact}</span>
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
                    {caseStudy && (
                      <a
                        href={caseStudy}
                        aria-label={`Read the ${title} case study`}
                        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                      >
                        <span className="underline decoration-accent/35 underline-offset-4 group-hover/link:decoration-accent transition-colors">
                          View case study
                        </span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-200 ease-out group-hover/link:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit the ${client || title} website`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-ink-2 hover:text-ink transition-colors"
                      >
                        <span>Project site</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Projects;
