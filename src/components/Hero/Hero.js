import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Haris Arshad <br/>
        Technology Delivery Leader
      </SectionTitle>
      <SectionText>
        PMP® Project Manager coordinating technology delivery across developers, QA, infrastructure, and business stakeholders. I turn complex requirements into clear delivery plans, unblock teams, and drive initiatives from planning through release. Recent results include 80% fewer project delays, 90% faster reporting, and PKR 103M+ in cost savings.
      </SectionText>
      <Button onClick={() => { window.location.href = 'mailto:harisarshad235@gmail.com'; }}> Start a conversation</Button>
    </LeftSection>

  </Section>
);

export default Hero;