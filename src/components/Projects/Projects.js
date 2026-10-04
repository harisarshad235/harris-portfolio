import React, { useState } from 'react';

import { BlogCard, CardInfo, CardLink, ExternalLinks, FilterBar, FilterButton, FilterCount, FilterStatus, GridContainer, HeaderThree, ProjectArtwork, ProjectCategory, ProjectClient, ProjectImpact, UtilityList, Img, ImageWrapper } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const filters = ['All', 'Enterprise PM', 'Digital & Software', 'Consulting'];
const filterProjects = (filter) => filter === 'All'
  ? projects
  : projects.filter(({ projectTypes }) => projectTypes.includes(filter));

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = filterProjects(activeFilter);

  return (
    <Section nopadding id='projects' data-reveal>
      <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <FilterBar role="group" aria-label="Filter projects for">
        {filters.map((filter) => {
          const count = filterProjects(filter).length;

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
      <FilterStatus aria-live="polite">
        Showing {visibleProjects.length} of {projects.length} projects{activeFilter !== 'All' ? ` for ${activeFilter}` : ''}
      </FilterStatus>
      <GridContainer>
        {visibleProjects.map(({id,image,title,client,sector,category,description,impact,website,caseStudy,projectTypes}) =>(
          <BlogCard
            key={id}
            data-reveal
            data-project-types={projectTypes.join(',')}
            style={{ '--reveal-delay': `${(id % 3) * 70}ms` }}
          >
            <ImageWrapper>
              {image
                ? <Img src={image} alt={`${client || title} project`} />
                : (
                  <ProjectArtwork aria-hidden="true">
                    <svg viewBox="0 0 480 240" focusable="false">
                      <defs>
                        <linearGradient id="tower-glow" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0" stopColor="#5b8dff" stopOpacity=".42" />
                          <stop offset="1" stopColor="#0c1328" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <circle cx="340" cy="60" r="150" fill="url(#tower-glow)" />
                      <path d="M238 216 278 42l42 174M252 154h56M260 119h40M268 82h25M248 176l61-41M307 176l-53-41M242 216h84" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path d="M278 55c-25-21-25-44 0-64M292 55c25-21 25-44 0-64M267 42c-38-31-38-65 0-96M303 42c38-31 38-65 0-96" fill="none" stroke="currentColor" strokeWidth="3" opacity=".7" />
                      <path d="M50 214h380" stroke="currentColor" strokeWidth="2" opacity=".25" />
                    </svg>
                    <span>CONNECTED INFRASTRUCTURE</span>
                  </ProjectArtwork>
                )}
              <ProjectCategory>{sector || category}</ProjectCategory>
            </ImageWrapper>
            <div className="project-card-content">
              <ProjectClient>{client || category}</ProjectClient>
              <HeaderThree $large>{title}</HeaderThree>
            <CardInfo>{description}</CardInfo>
            <ProjectImpact><strong>Outcome</strong> {impact}</ProjectImpact>
            <UtilityList>
              {caseStudy && <CardLink href={caseStudy} aria-label={`Read the ${title} case study`}>View case study <span aria-hidden="true">→</span></CardLink>}
              {website && <ExternalLinks href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${client || title} website`}>Project site <span aria-hidden="true">↗</span></ExternalLinks>}
            </UtilityList>
            </div>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;