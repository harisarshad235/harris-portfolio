import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckSquare, FiLayers, FiCode, FiGrid, FiSliders } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { techStack } from '../../constants/techStack';
import { ScrollReveal } from '../ui/MotionReveal';

const categoryMeta = {
  delivery: {
    icon: FiCheckSquare,
    badgeColor: 'text-teal-700 dark:text-teal-300 bg-teal-500/10 border-teal-500/25',
    accentColor: '#1A8781',
    description:
      'Schedule baselines, Earned Value Management (EVM), PMO controls, and Agile sprint governance to steer initiatives from planning through release.',
  },
  platforms: {
    icon: FiLayers,
    badgeColor: 'text-blue-700 dark:text-blue-300 bg-blue-500/10 border-blue-500/25',
    accentColor: '#2684FF',
    description:
      'Edge infrastructure, distributed cloud databases, telemetry networks, and automated CI/CD release management.',
  },
  software: {
    icon: FiCode,
    badgeColor: 'text-rose-700 dark:text-rose-300 bg-rose-500/10 border-rose-500/25',
    accentColor: '#E5674F',
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
    <Section id="skills">
      <ScrollReveal>
        <SectionTitle>Technology &amp; delivery stack</SectionTitle>
        <SectionText>
          Project delivery governance and control frameworks, alongside the cloud, backend, and frontend technologies I coordinate across cross-functional teams.
        </SectionText>
      </ScrollReveal>

      {/* Interactive Category Filter Bar */}
      <ScrollReveal delay={0.1} className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Filter technologies by category">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'all'}
          onClick={() => setActiveTab('all')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-primary text-primary-foreground shadow-sm scale-[1.02]'
              : 'bg-card border border-border text-foreground hover:bg-secondary'
          }`}
        >
          <FiGrid className="w-4 h-4" />
          <span>All Capabilities</span>
          <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-primary-foreground/20 text-inherit font-mono">
            {totalSkillsCount}
          </span>
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
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-sm scale-[1.02]'
                  : 'bg-card border border-border text-foreground hover:bg-secondary'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{category.name.split('&')[0].trim()}</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-mono">
                {category.technologies.length}
              </span>
            </button>
          );
        })}
      </ScrollReveal>

      {/* Responsive Grid of Category Cards */}
      <div className={`grid gap-6 sm:gap-8 ${activeTab === 'all' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 max-w-3xl mx-auto'}`}>
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category, index) => {
            const meta = categoryMeta[category.id] || {};
            const CategoryIcon = meta.icon || FiSliders;

            return (
              <motion.article
                key={category.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-border bg-card/90 backdrop-blur-md p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        meta.badgeColor || 'bg-secondary text-foreground'
                      }`}
                    >
                      <CategoryIcon className="w-3.5 h-3.5" />
                      {category.label}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground font-mono">
                      {category.technologies.length} skills
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-2">
                    {category.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                {/* Skills Badges Grid */}
                <div>
                  <div className="pt-4 border-t border-border flex flex-wrap gap-2">
                    {category.technologies.map(({ name, icon: Icon, color }) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/70 hover:bg-secondary border border-border hover:border-primary/30 text-xs sm:text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 shadow-2xs"
                      >
                        <Icon
                          aria-hidden="true"
                          className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"
                          style={{ color }}
                        />
                        <span>{name}</span>
                      </span>
                    ))}
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

export default TechStack;