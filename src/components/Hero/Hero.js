import React from 'react';
import { FiAward, FiBarChart2, FiDownload, FiMapPin } from 'react-icons/fi';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ActionRow, Eyebrow, HeroImage, HeroImageWrap, HeroStat, HeroStats, LeftSection, MetaItem, MetaRow, StatLabel, StatValue, VisualSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <Eyebrow>Technology delivery · PMO · Agile coordination</Eyebrow>
      <SectionTitle main center>
        Haris Arshad <br/>
        makes complex delivery clearer.
      </SectionTitle>
      <SectionText>
        PMP® Project Manager coordinating technology delivery across developers, QA, infrastructure, and business stakeholders. I turn complex requirements into clear delivery plans, unblock teams, and drive initiatives from planning through release. Recent results include 80% fewer project delays, 90% faster reporting, and PKR 103M+ in cost savings.
      </SectionText>
      <MetaRow>
        <MetaItem><FiMapPin /> Islamabad, Pakistan</MetaItem>
        <MetaItem><FiAward /> PMP® certified</MetaItem>
        <MetaItem><FiBarChart2 /> PKR 700M+ portfolio</MetaItem>
      </MetaRow>
      <HeroStats>
        <HeroStat><StatValue>80%</StatValue><StatLabel>fewer project delays</StatLabel></HeroStat>
        <HeroStat><StatValue>90%</StatValue><StatLabel>reporting efficiency</StatLabel></HeroStat>
        <HeroStat><StatValue>150+</StatValue><StatLabel>sites coordinated</StatLabel></HeroStat>
      </HeroStats>
      <ActionRow>
          <Button aria-label="Download Haris Arshad's CV" onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}> <FiDownload aria-hidden="true" /> Download CV</Button>
          <Button aria-label="Start a conversation by email" onClick={() => { window.location.href = 'mailto:harisarshad235@gmail.com'; }}> Start a conversation</Button>
      </ActionRow>
    </LeftSection>
    <VisualSection>
      <HeroImageWrap>
        <HeroImage src='/images/haris-arshad-profile.jpeg' alt='Engr. Haris Arshad PMP®' />
      </HeroImageWrap>
    </VisualSection>
  </Section>
);

export default Hero;
