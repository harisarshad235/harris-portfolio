import React from 'react';
import { FiAward, FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';

import { Section } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ActionLink, ActionRow, AvailabilityBadge, DeliveryFocus, Eyebrow, HeroDescription, HeroImage, HeroImageWrap, HeroStat, HeroStats, HeroTitle, LeftSection, MetaItem, MetaRow, StatLabel, StatValue, VisualSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
        <Eyebrow>Technology delivery · PMO · Agile coordination</Eyebrow>
        <HeroTitle as="h1" main center>
          Haris Arshad, PMP® Project Manager
        </HeroTitle>
        <HeroDescription>
          PMP®-certified Project Manager in Islamabad, Pakistan, with a Master&apos;s in Project Management. I lead technology delivery across software, infrastructure, QA, and business teams, applying project planning and control, PMO governance, Agile delivery, risk management, and stakeholder coordination to move initiatives from planning through release.
        </HeroDescription>
        <MetaRow>
          <MetaItem><FiMapPin /> Islamabad, Pakistan</MetaItem>
          <MetaItem><FiAward /> PMP® certified</MetaItem>
          <AvailabilityBadge><span aria-hidden="true" /> Open to PM/PMO roles &amp; select consulting</AvailabilityBadge>
        </MetaRow>
        <HeroStats>
          <HeroStat><StatValue>PKR 103M+</StatValue><StatLabel>savings on track-and-trace delivery</StatLabel></HeroStat>
          <HeroStat><StatValue>22.5%</StatValue><StatLabel>under budget on that program</StatLabel></HeroStat>
          <HeroStat><StatValue>150+</StatValue><StatLabel>sites coordinated across a PKR 700M+ portfolio</StatLabel></HeroStat>
        </HeroStats>
        <DeliveryFocus>Selected outcomes from public-sector and multi-site delivery; see case studies for context.</DeliveryFocus>
        <ActionRow>
          <Button aria-label="Download Haris Arshad's CV" onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}> <FiDownload aria-hidden="true" /> Download CV</Button>
          <ActionLink href="#contact">Discuss a project <FiArrowRight aria-hidden="true" /></ActionLink>
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
