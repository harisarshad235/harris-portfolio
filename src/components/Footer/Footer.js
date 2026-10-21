import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  CopyRight,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Navigation</LinkTitle>
          <LinkItem href="#about">About &amp; Career</LinkItem>
          <LinkItem href="#products">Flagship SaaS Products</LinkItem>
          <LinkItem href="#client-projects">Client Case Studies</LinkItem>
          <LinkItem href="#skills">Technology &amp; PMO Stack</LinkItem>
          <LinkItem href="#credentials">Credentials &amp; PMP®</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Original SaaS Products</LinkTitle>
          <LinkItem href="https://takt.harisarshad.site/" target="_blank" rel="noopener noreferrer">
            Takt — Task Command Center ↗
          </LinkItem>
          <LinkItem href="https://kynov.harisarshad.site/" target="_blank" rel="noopener noreferrer">
            Kynov — Agile Sprint Engine ↗
          </LinkItem>
          <LinkItem href="https://kynov.harisarshad.site/dashboard" target="_blank" rel="noopener noreferrer">
            Kynov Live Workspace ↗
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Direct Contact</LinkTitle>
          <LinkItem href="mailto:harisarshad235@gmail.com">harisarshad235@gmail.com</LinkItem>
          <LinkItem href="tel:+923095597954">+92 309 5597954</LinkItem>
          <LinkItem href="https://calendly.com/harisarshad235/30min" target="_blank" rel="noopener noreferrer">
            Book 30-min Consultation ↗
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Resources &amp; AI Index</LinkTitle>
          <LinkItem href="/resume/haris-arshad-cv.pdf" target="_blank" rel="noopener noreferrer">
            View / Download CV (PDF) ↗
          </LinkItem>
          <LinkItem href="/llms.txt" target="_blank" rel="noopener noreferrer">
            llms.txt (AI Agent Context)
          </LinkItem>
          <LinkItem href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
            XML Sitemap
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <strong>Engr. Haris Arshad, PMP®</strong> — Technical Project Manager, PMO Lead &amp; Product Architect · Islamabad, PK
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/harisarshad235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Haris Arshad on GitHub"
          >
            <AiFillGithub size="2.8rem" aria-hidden="true" />
          </SocialIcons>
          <SocialIcons
            href="https://pk.linkedin.com/in/haris-arshad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Haris Arshad on LinkedIn"
          >
            <AiFillLinkedin size="2.8rem" aria-hidden="true" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

      <CopyRight>
        <Slogan>© {currentYear} Haris Arshad. Engineered for clarity, governance, and high-velocity delivery.</Slogan>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
