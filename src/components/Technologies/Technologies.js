import React from 'react';
import { DiDatabase, DiGit, DiGoogleDrive } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Delivery toolkit</SectionTitle>
    <SectionText>
      A practical toolkit for turning strategy into visible, controlled delivery across complex technology programs.
    </SectionText>
    <List>
      <ListItem>
        <DiGoogleDrive size="3rem"/>
        <ListContainer>
          <ListTitle>Planning & control</ListTitle>
          <ListParagraph>
            MS Project, Primavera P6 <br/>
            Integrated Master Schedules
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem"/>
        <ListContainer>
          <ListTitle>Agile delivery</ListTitle>
          <ListParagraph>
            Jira, Trello, Azure DevOps <br/>
            Scrum and Kanban
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem"/>
        <ListContainer>
          <ListTitle>Visibility & governance</ListTitle>
          <ListParagraph>
            Power BI dashboards <br/>
            RAID, budgeting, and forecasting
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
