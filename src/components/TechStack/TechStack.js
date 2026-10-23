import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckSquare, FiLayers, FiCode, FiGrid, FiSliders } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { techStack } from '../../constants/techStack';
import { ScrollReveal } from '../ui/MotionReveal';

const categoryMeta = {
  delivery: {
    icon: FiCheckSquare,
    badgeColor: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25',
    accentColor: '#059669',
    description:
      'Schedule baselines, Earned Value Management (EVM), PMO controls, and Agile sprint governance to steer initiatives from planning through release.',
  },
  platforms: {
    icon: FiLayers,
    badgeColor: 'text-teal-700 dark:text-teal-300 bg-teal-500/10 border-teal-500/25',
    accentColor: '#0D9488',
    description:
      'Edge infrastructure, distributed cloud databases, telemetry networks, and automated CI/CD release management.',
  },
  software: {
    icon: FiCode,
    badgeColor: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/25',
    accentColor: '#D97706',
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
        <motion.button
          type="button"
          role="tab"
          whileTap={{ scale: 0.97 }}
          aria-selected={activeTab === 'all'}
          onClick={() => setActiveTab('all')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-[transform,background-color,border-color,color] duration-150 cursor-pointer ${
            activeTab === 'all'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-card border border-border text-foreground hover:bg-secondary'
          }`}
        >
          <FiGrid className="w-4 h-4" />
          <span>All Capabilities</span>
          <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-primary-foreground/20 text-inherit font-mono font-medium">
            {totalSkillsCount}
          </span>
        </motion.button>

        {techStack.map((category) => {
          const isSelected = activeTab === category.id;
          const meta = categoryMeta[category.id] || {};
          const Icon = meta.icon || FiSliders;

          return (
            <motion.button
              key={category.id}
              type="button"
              role="tab"
              whileTap={{ scale: 0.97 }}
              aria-selected={isSelected}
              onClick={() => setActiveTab(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-[transform,background-color,border-color,color] duration-150 cursor-pointer ${
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border border-border text-foreground hover:bg-secondary'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{category.name.split('&')[0].trim()}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono font-medium ${
                  isSelected
                    ? 'bg-primary-foreground/20 text-inherit'
                    : 'bg-secondary text-foreground'
                }`}
              >
                {category.technologies.length}
              </span>
            </motion.button>
          );
        })}
      </ScrollReveal>

      {/* Asymmetric Bento Grid of Category Cards */}
      <div className={`grid gap-6 ${activeTab === 'all' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1 max-w-4xl mx-auto'}`}>
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category, index) => {
            const meta = categoryMeta[category.id] || {};
            const CategoryIcon = meta.icon || FiSliders;
            const isDelivery = category.id === 'delivery';
            const isPlatforms = category.id === 'platforms';
            const isSoftware = category.id === 'software';

            // Asymmetric Bento sizing: Delivery takes 7 cols, Platforms takes 5 cols, Software spans 12 cols
            const colSpanClass = activeTab === 'all'
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
                transition={{ duration: 0.35, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-primary/40 transition-[transform,border-color,box-shadow] duration-200 flex flex-col justify-between ${colSpanClass}`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${
                        meta.badgeColor || 'bg-secondary text-foreground'
                      }`}
                    >
                      <CategoryIcon className="w-3.5 h-3.5" />
                      {category.label}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground font-mono">
                      {category.technologies.length} competencies
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-2">
                    {category.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {meta.description}
                  </p>
                </div>

                {/* Skills Badges Grid */}
                <div>
                  <div className="pt-4 border-t border-border flex flex-wrap gap-2">
                    {category.technologies.map(({ name, icon: Icon, color }) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/80 hover:bg-secondary border border-border/80 hover:border-primary/30 text-xs sm:text-sm font-semibold text-foreground transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 shadow-2xs"
                      >
                        <Icon
                          aria-hidden="true"
                          className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:scale-105"
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