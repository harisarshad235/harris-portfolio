import React, { useState } from 'react';

import { Section } from '../../styles/GlobalComponents';
import { ContactForm, FormField, FormGrid, FormLabel, FormStatus, SectionFormTitle, SubmitButton, TextArea, TextInput } from '../Hero/HeroStyles';

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) throw new Error('Contact form submission failed');

      form.reset();
      setFormState('sent');
    } catch {
      setFormState('error');
    }
  };

  return (
    <Section id="contact" data-reveal>
      <ContactForm name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <FormField hidden>
          <FormLabel htmlFor="contact-bot">Do not fill this field</FormLabel>
          <TextInput id="contact-bot" name="bot-field" tabIndex="-1" autoComplete="off" />
        </FormField>
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
        <SubmitButton type="submit" disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending...' : 'Send message'}</SubmitButton>
        {formState === 'sent' && <FormStatus role="status">Message sent. Thank you, I will get back to you soon.</FormStatus>}
        {formState === 'error' && <FormStatus $error role="alert">Your message could not be sent. Please try again.</FormStatus>}
      </ContactForm>
    </Section>
  );
};

export default Contact;
