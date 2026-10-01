import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, FilterBar, FilterButton, FilterCount, FilterStatus, GridContainer, HeaderThree, Hr, ProjectImpact, Tag, TagList, TitleContent, UtilityList, Img, ImageWrapper } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const filters = ['All', 'Public sector', 'Digital platforms', 'E-commerce'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <Section nopadding id='projects' data-reveal>
      <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <FilterBar role="group" aria-label="Filter projects by type">
        {filters.map((filter) => {
          const count = filter === 'All'
            ? projects.length
            : projects.filter((project) => project.category === filter).length;

          return (
            <FilterButton
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}<FilterCount>{count}</FilterCount>
            </FilterButton>
          );
        })}
      </FilterBar>
      <FilterStatus aria-live="polite">Showing {visibleProjects.length} of {projects.length} projects</FilterStatus>
      <GridContainer>
        {visibleProjects.map(({id,image,title,description,impact,tags,website}) =>(
          <BlogCard key={id} data-reveal style={{ '--reveal-delay': `${(id % 3) * 70}ms` }}>
            <ImageWrapper>
              <Img src={image} alt={title} />
            </ImageWrapper>
            <TitleContent>
              <HeaderThree $large>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <ProjectImpact><strong>Impact:</strong> {impact}</ProjectImpact>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag,i)=>(<Tag key={i}>{tag}</Tag>))}
              </TagList>
            </div>
            <UtilityList>
              {website && <ExternalLinks href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${title} website`}>Visit website</ExternalLinks>}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;