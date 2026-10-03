import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { techStack } from '../../constants/techStack';
import { CategoryGrid, CategoryCard, CategoryHeading, CategoryLabel, SkillList, SkillBadge } from './TechStackStyles';

const TechStack = () => (
  <Section id="skills" data-reveal>
    <SectionDivider />
    <SectionTitle>Technology &amp; delivery stack</SectionTitle>
    <SectionText>
      Project delivery tools and controls, alongside the frontend, backend, and mobile technologies I coordinate across teams.
    </SectionText>
    <CategoryGrid>
      {techStack.map((category, categoryIndex) => (
        <CategoryCard key={category.id} aria-labelledby={`tech-category-${category.id}`} data-reveal style={{ '--reveal-delay': `${categoryIndex * 90}ms` }}>
          <CategoryHeading id={`tech-category-${category.id}`}>
            <CategoryLabel>{category.label}</CategoryLabel>
            {category.name}
          </CategoryHeading>
          <SkillList>
            {category.technologies.map(({ name, icon: Icon, color }) => (
              <li key={name}>
                <SkillBadge>
                  <Icon aria-hidden="true" focusable="false" style={{ color }} />
                  <span>{name}</span>
                </SkillBadge>
              </li>
            ))}
          </SkillList>
        </CategoryCard>
      ))}
    </CategoryGrid>
  </Section>
);

export default TechStack;