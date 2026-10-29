import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckSquare, FiLayers, FiCode, FiGrid, FiSliders } from 'react-icons/fi';
import { techStack } from '../../constants/techStack';
import { RouteSection } from '../ui/RouteSection';

const categoryMeta = {
  delivery: {
    icon: FiCheckSquare,
    zone: 'ZONE A · PMO',
    pill: 'bg-line-green text-on-green',
    bar: 'bg-line-green',
    dot: 'bg-line-green',
    description:
      'Schedule baselines, Earned Value Management (EVM), PMO controls, and Agile sprint governance to steer initiatives from planning through release.',
  },
  platforms: {
    icon: FiLayers,
    zone: 'ZONE B · CLOUD',
    pill: 'bg-line-cobalt text-on-cobalt',
    bar: 'bg-line-cobalt',
    dot: 'bg-line-cobalt',
    description:
      'Edge infrastructure, distributed cloud databases, telemetry networks, and automated CI/CD release management.',
  },
  software: {
    icon: FiCode,
    zone: 'ZONE C · SDLC',
    pill: 'bg-line-vermilion text-on-vermilion',
    bar: 'bg-line-vermilion',
    dot: 'bg-line-vermilion',
    description:
      'Modern reactive frontend applications, enterprise backend services, and cross-platform mobile ecosystems coordinated with engineering squads.',
  },
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('all');

  const visibleCategories =
    activeTab === 'all'
      ? techStack
      : techStack.filter((cat) => cat.id === activeTab);

  const totalSkillsCount = techStack.reduce(
    (acc, cat) => acc + cat.technologies.length,
    0
  );

  return (
    <RouteSection
      id="skills"
      line="green"
      code="L4"
      surface="tinted"
      className="border-b-[1.5px] border-rule/15"
    >
      <div data-reveal className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-3xl sm:text-5xl text-ink">
            Technology &amp; Delivery Stack
          </h2>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-line-green text-on-green text-xs font-extrabold font-wide">
            <span className="w-2 h-2 rounded-full bg-ink" />
            GREEN LINE · {totalSkillsCount} COMPETENCIES
          </span>
        </div>

        <p className="text-ink-2 text-base sm:text-lg leading-relaxed max-w-[66ch] mb-7">
          Project delivery governance and control frameworks, alongside the cloud, backend, and frontend technologies I coordinate across cross-functional teams.
        </p>

        {/* Interactive Zone Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter technologies by category"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
            className="tab"
          >
            <FiGrid className="w-4 h-4" aria-hidden="true" />
            <span>All Capabilities</span>
            <span className="tab-count">{totalSkillsCount}</span>
          </button>

          {techStack.map((category) => {
            const isSelected = activeTab === category.id;
            const meta = categoryMeta[category.id] || {};
            const Icon = meta.icon || FiSliders;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(category.id)}
                className="tab"
              >
                <span
                  aria-hidden="true"
                  className={`w-2.5 h-2.5 rounded-full ${meta.dot || 'bg-line-green'}`}
                />
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{category.name.split('&')[0].trim()}</span>
                <span className="tab-count">{category.technologies.length}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Bento Grid of System Zones */}
      <div
        className={`grid gap-6 ${
          activeTab === 'all' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1 max-w-4xl'
        }`}
      >
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category) => {
            const meta = categoryMeta[category.id] || {};
            const CategoryIcon = meta.icon || FiSliders;
            const isDelivery = category.id === 'delivery';
            const isPlatforms = category.id === 'platforms';

            const colSpanClass =
              activeTab === 'all'
                ? isDelivery
                  ? 'lg:col-span-7'
                  : isPlatforms
                  ? 'lg:col-span-5'
                  : 'lg:col-span-12'
                : 'w-full';

            return (
              <motion.article
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className={`card card-lift overflow-hidden flex flex-col justify-between ${colSpanClass}`}
              >
                <div>
                  <div className={`h-2 w-full ${meta.bar || 'bg-line-green'}`} aria-hidden="true" />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold font-wide ${
                          meta.pill || 'bg-line-green text-on-green'
                        }`}
                      >
                        <CategoryIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{meta.zone || category.label}</span>
                      </span>
                      <span className="text-xs font-extrabold text-ink-2 font-wide tabular">
                        {category.technologies.length} STOPS
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-ink mb-2">
                      {category.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-2 leading-relaxed max-w-2xl mb-6">
                      {meta.description}
                    </p>

                    {/* Station Skills Grid */}
                    <div className="pt-5 border-t border-rule/12 flex flex-wrap gap-2.5">
                      {category.technologies.map(({ name, icon: Icon, color }) => (
                        <span
                          key={name}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-2 text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.16)] text-xs sm:text-sm font-bold"
                        >
                          <Icon
                            aria-hidden="true"
                            className="w-4 h-4 shrink-0"
                            style={{ color }}
                          />
                          <span>{name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </RouteSection>
  );
};

export default TechStack;
