import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, ProjectImpact, Tag, TagList, TitleContent, UtilityList, Img, ImageWrapper } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main> Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,impact,tags,website}) =>(
        <BlogCard key={id}>
          <ImageWrapper>
            <Img src={image} alt={title} />
          </ImageWrapper>
          <TitleContent>
            <HeaderThree $large> {title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <ProjectImpact><strong>Impact:</strong> {impact}</ProjectImpact>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              )
              )}
            </TagList>
          </div>
          <UtilityList>
            {website && <ExternalLinks href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${title} website`}>Visit website</ExternalLinks>}
          </UtilityList>

        </BlogCard>
      )
      )}
    </GridContainer>

  </Section>
);

export default Projects;