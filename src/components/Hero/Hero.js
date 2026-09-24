import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My personal Portfolio

      </SectionTitle>
      <SectionText>
        Project Manager (PMP®) with experience coordinating technology delivery across cross-functional teams of developers, QA, and infrastructure stakeholders. Skilled in managing Agile and Kanban delivery boards, translating business requirements into actionable work items, and driving projects from planning through release. Proven track record improving delivery efficiency by up to 80% and reporting visibility by up to 90% through structured scheduling and realtime dashboards. Experienced managing multiple concurrent workstreams and large-scale, multi-disciplinary teams in fastmoving, high-stakes environments..<br/>
        i have skills in <br/>
        -Project Management<br/>
        -SDLC lifecycle Management<br/>
        -Risk Management
      </SectionText>
      <Button onclick={() => window.location= "https://google.com"}> Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;