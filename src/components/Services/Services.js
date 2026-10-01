import React from 'react';
import { FiArrowRight, FiBarChart2, FiCheckCircle, FiUsers } from 'react-icons/fi';

import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import { ServiceGrid, ServiceIcon, ServiceItem, ServiceLink, ServiceSummary, ServiceTitle } from './ServicesStyles';

const services = [
  {
    title: 'Delivery health check',
    description: 'Review scope, milestones, dependencies, and RAID to identify where delivery is drifting and agree on practical next steps.',
    icon: FiCheckCircle,
  },
  {
    title: 'PMO and portfolio controls',
    description: 'Set up integrated plans, forecast and variance reviews, governance rhythms, and clear reporting for decision-makers.',
    icon: FiBarChart2,
  },
  {
    title: 'Agile delivery coordination',
    description: 'Coordinate requirements, sprint flow, cross-functional dependencies, UAT, and release readiness across delivery teams.',
    icon: FiUsers,
  },
];

const Services = ({ onSelectService }) => (
  <Section id="services" data-reveal>
    <SectionDivider />
    <SectionTitle>Project management services</SectionTitle>
    <SectionSubText>Practical support for teams that need clearer plans, stronger delivery control, or a steadier route to release.</SectionSubText>
    <ServiceGrid>
      {services.map(({ title, description, icon: Icon }) => (
        <ServiceItem key={title}>
          <ServiceIcon><Icon aria-hidden="true" /></ServiceIcon>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceSummary>{description}</ServiceSummary>
          <ServiceLink href="#contact" onClick={() => onSelectService(title)}>
            Request a consultation <FiArrowRight aria-hidden="true" />
          </ServiceLink>
        </ServiceItem>
      ))}
    </ServiceGrid>
  </Section>
);

export default Services;