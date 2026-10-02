import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { techStack } from '../../constants/techStack';
import { CategoryGrid, CategoryCard, CategoryHeading, CategoryLabel, SkillList, SkillBadge } from './TechStackStyles';

const TechStack = () => (
  <Section id="skills" data-reveal>
    <SectionDivider />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>Technologies I work with across web and mobile delivery.</SectionText>
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