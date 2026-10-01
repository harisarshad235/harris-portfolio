import React from 'react';
import { FiAward, FiBarChart2, FiDownload, FiMapPin } from 'react-icons/fi';

import { Section } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ActionRow, DeliveryFocus, Eyebrow, HeroDescription, HeroImage, HeroImageWrap, HeroStat, HeroStats, HeroTitle, LeftSection, MetaItem, MetaRow, StatLabel, StatValue, VisualSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
        <Eyebrow>Technology delivery · PMO · Agile coordination</Eyebrow>
        <HeroTitle main center>
          Haris Arshad <br/>
          makes complex delivery clearer.
        </HeroTitle>
        <HeroDescription>
          PMP® project manager leading technology delivery across developers, QA, infrastructure, and business teams. I turn complex requirements into clear plans, remove blockers, and guide programs from planning through release.
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
        <DeliveryFocus>PMO governance · Agile coordination · Vendor and stakeholder alignment</DeliveryFocus>
        <ActionRow>
          <Button aria-label="Download Haris Arshad's CV" onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}> <FiDownload aria-hidden="true" /> Download CV</Button>
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
