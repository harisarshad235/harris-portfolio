import React from 'react';
import { FiAward, FiBarChart2, FiDownload, FiMapPin } from 'react-icons/fi';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ActionRow, ContactForm, Eyebrow, FormField, FormGrid, FormLabel, HeroImage, HeroImageWrap, HeroStat, HeroStats, LeftSection, MetaItem, MetaRow, SectionFormTitle, StatLabel, StatValue, SubmitButton, TextArea, TextInput, VisualSection } from './HeroStyles';

const Hero = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = formData.get('subject');
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      '',
      formData.get('message'),
    ].join('\n');

    window.location.href = `mailto:harisarshad235@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
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
        </ActionRow>
        <ContactForm onSubmit={handleSubmit}>
          <SectionFormTitle>Contact me</SectionFormTitle>
          <FormGrid>
            <FormField>
              <FormLabel htmlFor="contact-name">Name</FormLabel>
              <TextInput id="contact-name" name="name" type="text" autoComplete="name" required />
            </FormField>
            <FormField>
              <FormLabel htmlFor="contact-email">Email</FormLabel>
              <TextInput id="contact-email" name="email" type="email" autoComplete="email" required />
            </FormField>
            <FormField>
              <FormLabel htmlFor="contact-company">Company</FormLabel>
              <TextInput id="contact-company" name="company" type="text" autoComplete="organization" />
            </FormField>
            <FormField>
              <FormLabel htmlFor="contact-subject">Subject</FormLabel>
              <TextInput id="contact-subject" name="subject" type="text" required />
            </FormField>
            <FormField $full>
              <FormLabel htmlFor="contact-message">Message</FormLabel>
              <TextArea id="contact-message" name="message" rows="5" required />
            </FormField>
          </FormGrid>
          <SubmitButton type="submit">Send message</SubmitButton>
        </ContactForm>
      </LeftSection>
      <VisualSection>
        <HeroImageWrap>
          <HeroImage src='/images/haris-arshad-profile.jpeg' alt='Engr. Haris Arshad PMP®' />
        </HeroImageWrap>
      </VisualSection>
    </Section>
  );
};

export default Hero;
