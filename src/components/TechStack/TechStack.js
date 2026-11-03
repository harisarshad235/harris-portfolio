import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from '../../constants/techStack';
import { Section } from '../ui/Section';

const categoryDescription = {
  delivery:
    'Schedule baselines, Earned Value Management (EVM), PMO controls, and Agile sprint governance to steer initiatives from planning through release.',
  platforms:
    'Edge infrastructure, distributed cloud databases, telemetry networks, and automated CI/CD release management.',
  software:
    'Modern reactive frontend applications, enterprise backend services, and cross-platform mobile ecosystems coordinated with engineering squads.',
};

const tabLabel = {
  delivery: 'Delivery & PMO',
  platforms: 'Cloud & systems',
  software: 'Software',
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('all');

  const visibleCategories =
    activeTab === 'all'
      ? techStack
      : techStack.filter((cat) => cat.id === activeTab);

  const totalSkillsCount = techStack.reduce((acc, cat) => acc + cat.technologies.length, 0);

  return (
    <Section
      id="skills"
      title="Technology & Delivery Stack"
      intro="Project delivery governance and control frameworks, alongside the cloud, backend, and frontend technologies I coordinate across cross-functional teams."
      surface="tinted"
    >
      <div data-reveal className="mb-8">
        <div
          className="flex flex-wrap items-center border-b border-rule/15"
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
            <span>All capabilities</span>
            <span className="tab-count">{totalSkillsCount}</span>
          </button>
          {techStack.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeTab === category.id}
              onClick={() => setActiveTab(category.id)}
              className="tab"
            >
              <span>{tabLabel[category.id] || category.name}</span>
              <span className="tab-count">{category.technologies.length}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="py-8 first:pt-0 border-b border-rule/12 last:border-b-0"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-display text-2xl sm:text-[1.75rem]">{category.name}</h3>
                <span className="meta shrink-0">{category.technologies.length} skills</span>
              </div>
              <p className="text-[0.9375rem] text-ink-2 leading-relaxed max-w-[62ch] mb-5">
                {categoryDescription[category.id]}
              </p>
              <ul className="flex flex-wrap gap-2">
                {category.technologies.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface text-ink border border-rule/12 text-sm font-medium"
                  >
                    <Icon aria-hidden="true" className="w-4 h-4 shrink-0" style={{ color }} />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default TechStack;
