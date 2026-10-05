import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer,CopyRight, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
       <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:+923095597954'>+92 309 5597954</LinkItem>

       </LinkColumn>
       <LinkColumn>
       <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:harisarshad235@gmail.com'>harisarshad235@gmail.com</LinkItem>

       </LinkColumn>
       <LinkColumn>
       <LinkTitle>Resume</LinkTitle>
      <LinkItem href='/resume/haris-arshad-cv.pdf' target='_blank' rel='noopener noreferrer'>View / Download CV</LinkItem>

       </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan> Innovating one project at a time </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/harisarshad235' target='_blank' rel='noopener noreferrer' aria-label='Visit Haris Arshad on GitHub'>
        <AiFillGithub size="3rem" aria-hidden="true"/>
      </SocialIcons>
      <SocialIcons href='https://pk.linkedin.com/in/haris-arshad' target='_blank' rel='noopener noreferrer' aria-label='Visit Haris Arshad on LinkedIn'>
        <AiFillLinkedin size="3rem" aria-hidden="true"/>
      </SocialIcons>
      </SocialContainer>
      

        
      </SocialIconsContainer>
      <CopyRight>
        <Slogan> Made with ❤  by Haris </Slogan>
        </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
