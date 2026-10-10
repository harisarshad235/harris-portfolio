import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Eye, Download, ArrowRight } from 'lucide-react';

import { Section } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {
  ActionLink,
  ActionRow,
  AvailabilityBadge,
  DeliveryFocus,
  Eyebrow,
  HeroDescription,
  HeroImage,
  HeroImageWrap,
  HeroStat,
  HeroStats,
  HeroTitle,
  LeftSection,
  MetaItem,
  MetaRow,
  StatLabel,
  StatValue,
  VisualSection,
} from './HeroStyles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Hero = () => (
  <Section row nopadding className="relative overflow-hidden">
    {/* Subtle modern background grid */}
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]"
    />

    <LeftSection as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <Eyebrow>Technology delivery · PMO · Agile coordination</Eyebrow>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroTitle as="h1" main center>
          Haris Arshad, PMP® Project Manager
        </HeroTitle>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroDescription>
          PMP®-certified Project Manager in Islamabad, Pakistan, with a Master&apos;s in Project Management. I lead technology delivery across software, infrastructure, QA, and business teams, applying project planning and control, PMO governance, Agile delivery, risk management, and stakeholder coordination to move initiatives from planning through release.
        </HeroDescription>
      </motion.div>

      <motion.div variants={itemVariants}>
        <MetaRow>
          <MetaItem>
            <MapPin className="inline-block w-4 h-4 mr-1.5 text-accent" /> Islamabad, Pakistan
          </MetaItem>
          <MetaItem>
            <Award className="inline-block w-4 h-4 mr-1.5 text-accent" /> PMP® certified
          </MetaItem>
          <AvailabilityBadge>
            <span aria-hidden="true" /> Open to PM/PMO roles &amp; select consulting
          </AvailabilityBadge>
        </MetaRow>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroStats>
          <HeroStat as={motion.div} variants={statVariants} whileHover={{ y: -4 }}>
            <StatValue>PKR 103M+</StatValue>
            <StatLabel>savings on track-and-trace delivery</StatLabel>
          </HeroStat>
          <HeroStat as={motion.div} variants={statVariants} whileHover={{ y: -4 }}>
            <StatValue>22.5%</StatValue>
            <StatLabel>under budget on that program</StatLabel>
          </HeroStat>
          <HeroStat as={motion.div} variants={statVariants} whileHover={{ y: -4 }}>
            <StatValue>150+</StatValue>
            <StatLabel>sites coordinated across a PKR 700M+ portfolio</StatLabel>
          </HeroStat>
        </HeroStats>
      </motion.div>

      <motion.div variants={itemVariants}>
        <DeliveryFocus>Selected outcomes from public-sector and multi-site delivery; see case studies for context.</DeliveryFocus>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ActionRow>
          <Button
            aria-label="View Haris Arshad's CV"
            onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}
          >
            <Eye className="inline-block w-4 h-4 mr-2" aria-hidden="true" /> View CV
          </Button>
          <ActionLink href="/resume/haris-arshad-cv.pdf" download="haris-arshad-cv.pdf" aria-label="Download Haris Arshad's CV">
            <Download className="inline-block w-4 h-4 mr-2" aria-hidden="true" /> Download CV
          </ActionLink>
          <ActionLink href="#contact">
            Discuss a project <ArrowRight className="inline-block w-4 h-4 ml-1.5" aria-hidden="true" />
          </ActionLink>
        </ActionRow>
      </motion.div>
    </LeftSection>

    <VisualSection
      as={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
    >
      <HeroImageWrap>
        <HeroImage
          src="/images/haris-arshad-profile.jpeg"
          alt="Engr. Haris Arshad PMP®"
          width="360"
          height="450"
          loading="eager"
        />
      </HeroImageWrap>
    </VisualSection>
  </Section>
);

export default Hero;
