import React from 'react';
import { FiAward, FiArrowRight, FiBarChart2, FiDownload, FiMapPin } from 'react-icons/fi';

import { Section } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ActionLink, ActionRow, DeliveryFocus, Eyebrow, HeroDescription, HeroImage, HeroImageWrap, HeroStat, HeroStats, HeroTitle, LeftSection, MetaItem, MetaRow, StatLabel, StatValue, VisualSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
        <Eyebrow>Technology delivery · PMO · Agile coordination</Eyebrow>
        <HeroTitle as="h1" main center>
          Haris Arshad <br/>
          PMP® Project Manager
        </HeroTitle>
        <HeroDescription>
          PMP®-certified Project Manager in Islamabad, Pakistan, with a Master&apos;s in Project Management and an Electrical Engineering background. I lead technology delivery across software, infrastructure, QA, and business teams, applying project planning and control, PMO governance, Agile delivery, risk management, and stakeholder coordination to move initiatives from planning through release.
        </HeroDescription>
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
        <DeliveryFocus>PMO governance · Project planning and control · Agile delivery · Budget and vendor coordination</DeliveryFocus>
        <ActionRow>
          <Button aria-label="Download Haris Arshad's CV" onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}> <FiDownload aria-hidden="true" /> Download CV</Button>
          <ActionLink href="#services">Project management services <FiArrowRight aria-hidden="true" /></ActionLink>
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
