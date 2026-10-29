import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../../constants/constants';
import { RouteSection } from '../ui/RouteSection';

const filters = ['All', 'Telecom', 'E-commerce', 'Public sector', 'Digital platforms'];

const SECTOR_LINE = {
  All: { dot: 'bg-line-sunflower', pill: 'bg-line-sunflower text-on-sunflower', bar: 'bg-line-sunflower' },
  Telecom: { dot: 'bg-line-cobalt', pill: 'bg-line-cobalt text-on-cobalt', bar: 'bg-line-cobalt' },
  'E-commerce': { dot: 'bg-line-magenta', pill: 'bg-line-magenta text-on-magenta', bar: 'bg-line-magenta' },
  'Public sector': { dot: 'bg-line-green', pill: 'bg-line-green text-on-green', bar: 'bg-line-green' },
  'Digital platforms': { dot: 'bg-line-violet', pill: 'bg-line-violet text-on-violet', bar: 'bg-line-violet' },
};

const filterProjects = (filter) =>
  filter === 'All' ? projects : projects.filter(({ sector }) => sector === filter);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = filterProjects(activeFilter);

  return (
    <RouteSection
      id="client-projects"
      line="sunflower"
      code="L3"
      surface="default"
      className="border-b-[1.5px] border-rule/15"
    >
      <div data-reveal className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-3xl sm:text-5xl text-ink">
            Client Projects &amp; Case Studies
          </h2>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-line-sunflower text-on-sunflower text-xs font-extrabold font-wide">
            <span className="w-2 h-2 rounded-full bg-ink" />
            SUNFLOWER INTERCHANGE · 8 ENTERPRISE DELIVERIES
          </span>
        </div>

        <p className="text-ink-2 text-base sm:text-lg leading-relaxed max-w-[66ch] mb-7">
          Selected telecom, public-sector, e-commerce, and digital platform initiatives delivered across national infrastructure and global retail portfolios.
        </p>

        {/* Platform Filter Bar */}
        <div
          role="group"
          aria-label="Filter projects by industry"
          className="flex flex-wrap items-center gap-2"
        >
          {filters.map((filter) => {
            const count = filterProjects(filter).length;
            const tokens = SECTOR_LINE[filter] || SECTOR_LINE.All;
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
                  className={`w-2.5 h-2.5 rounded-full ${tokens.dot} ${
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
          Showing {visibleProjects.length} of {projects.length} stations
          {activeFilter !== 'All' ? ` on ${activeFilter} line` : ''}
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map(
            (
              {
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
              },
              index
            ) => {
              const lineStyle = SECTOR_LINE[sector] || SECTOR_LINE.All;
              const stationNum = String(index + 1).padStart(2, '0');

              return (
                <motion.article
                  key={id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  data-project-types={projectTypes.join(',')}
                  className="card card-lift overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Line Colour Bar */}
                    <div className={`h-2 w-full ${lineStyle.bar}`} aria-hidden="true" />

                    {/* Station Header Strip */}
                    <div className="px-5 py-3 flex items-center justify-between gap-2 border-b border-rule/12 bg-surface-2/60">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="station !w-3 !h-3" aria-hidden="true" />
                        <span className="font-wide font-extrabold text-xs text-ink truncate">
                          {client || category}
                        </span>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold font-wide shrink-0 ${lineStyle.pill}`}
                      >
                        ST-{stationNum} · {sector || category}
                      </span>
                    </div>

                    {/* Media Frame */}
                    <div className="relative w-full aspect-[16/9] bg-surface-2 overflow-hidden border-b border-rule/12">
                      {image ? (
                        <img
                          src={image}
                          alt={`${client || title} project delivery`}
                          loading="lazy"
                          width={560}
                          height={315}
                          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="w-full h-full flex flex-col items-center justify-center p-6 text-ink"
                        >
                          <svg viewBox="0 0 480 240" className="w-full h-full" focusable="false">
                            <path
                              d="M238 216 278 42l42 174M252 154h56M260 119h40M268 82h25M248 176l61-41M307 176l-53-41M242 216h84"
                              fill="none"
                              stroke="rgb(var(--cobalt-rgb))"
                              strokeWidth="4"
                            />
                            <path
                              d="M278 55c-25-21-25-44 0-64M292 55c25-21 25-44 0-64M267 42c-38-31-38-65 0-96M303 42c38-31 38-65 0-96"
                              fill="none"
                              stroke="rgb(var(--vermilion-rgb))"
                              strokeWidth="3"
                            />
                            <path d="M50 214h380" stroke="currentColor" strokeWidth="2" opacity=".25" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-display text-xl sm:text-2xl text-ink mb-3">
                        {title}
                      </h3>

                      {(methodology || metricsHighlight) && (
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {metricsHighlight && (
                            <span className="board px-2.5 py-1 rounded-md text-xs">
                              {metricsHighlight}
                            </span>
                          )}
                          {methodology && (
                            <span className="px-2.5 py-1 rounded-md bg-surface-2 text-ink text-xs font-bold font-wide shadow-[inset_0_0_0_1px_rgb(var(--rule-rgb)/0.16)]">
                              {methodology}
                            </span>
                          )}
                        </div>
                      )}

                      <p className="text-sm text-ink-2 leading-relaxed mb-4">
                        {description}
                      </p>

                      <div className="p-3 rounded-xl bg-surface-2 text-xs sm:text-sm text-ink">
                        <strong className="font-extrabold font-wide">Outcome: </strong>
                        <span className="text-ink-2 font-medium">{impact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-rule/12 flex flex-wrap items-center gap-2.5">
                    {caseStudy && (
                      <a
                        href={caseStudy}
                        aria-label={`Read the ${title} case study`}
                        className="btn btn-ink btn-sm"
                      >
                        <span>View case study</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit the ${client || title} website`}
                        className="btn btn-outline btn-sm"
                      >
                        <span>Project site</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            }
          )}
        </AnimatePresence>
      </div>
    </RouteSection>
  );
};

export default Projects;
