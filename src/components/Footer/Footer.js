import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
       <LinkTitle>Call</LinkTitle>
       <LinkItem href='tel: 0309-5597954'>0309-5597954</LinkItem>

       </LinkColumn>
       <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href='mailto: harisarshad235@gmail.com'>harisarshad235@gmail.com</LinkItem>

       </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan> Innovating one project at a time </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/harisarshad235'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/haris-arshad-11b757168/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>

        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;


