import React from 'react';
import { FiArrowRight, FiBarChart2, FiCheckCircle, FiUsers, FiTrendingUp } from 'react-icons/fi';

import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import { ServiceDetails, ServiceGrid, ServiceIcon, ServiceItem, ServiceLink, ServiceSummary, ServiceTitle } from './ServicesStyles';

const services = [
  {
    title: 'Project recovery & health checks',
    description: 'A focused review of scope, schedule, budget, dependencies, and RAID, ending with prioritized actions and a practical recovery plan.',
    engagement: 'Fixed-scope diagnostic',
    tools: 'RAID review · milestone and variance analysis',
    icon: FiCheckCircle,
  },
  {
    title: 'PMO setup & portfolio controls',
    description: 'Build a proportionate governance rhythm with integrated plans, ownership, decision points, and concise portfolio reporting.',
    engagement: 'Setup, templates & handover',
    tools: 'Power BI · Jira · Azure DevOps',
    icon: FiBarChart2,
  },
  {
    title: 'Schedule & cost control',
    description: 'Make progress, forecast changes, and cost variances visible so teams can respond before milestones or budgets drift.',
    engagement: 'Recurring planning and controls',
    tools: 'Primavera P6 · Microsoft Project · Power BI',
    icon: FiTrendingUp,
  },
  {
    title: 'Fractional PM for digital teams',
    description: 'Part-time delivery leadership for software teams that need clearer priorities, stakeholder updates, dependency management, and release readiness.',
    engagement: 'Ongoing, part-time support',
    tools: 'Jira · Trello · Azure DevOps',
    icon: FiUsers,
  },
];

const Services = ({ onSelectService }) => (
  <Section id="services" data-reveal>
    <SectionDivider />
    <SectionTitle>Project management services</SectionTitle>
    <SectionSubText>Outcome-focused support for organizations seeking project delivery or PMO consulting, and teams needing part-time project leadership.</SectionSubText>
    <ServiceGrid>
      {services.map(({ title, description, engagement, tools, icon: Icon }) => (
        <ServiceItem key={title}>
          <ServiceIcon><Icon aria-hidden="true" /></ServiceIcon>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceSummary>{description}</ServiceSummary>
          <ServiceDetails>
            <span>{engagement}</span>
            <span>{tools}</span>
          </ServiceDetails>
          <ServiceLink href="#contact" onClick={() => onSelectService(title)}>
            Discuss this service <FiArrowRight aria-hidden="true" />
          </ServiceLink>
        </ServiceItem>
      ))}
    </ServiceGrid>
  </Section>
);

export default Services;