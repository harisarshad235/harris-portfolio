import React, { useState } from 'react';
import { FiClock, FiMail, FiPhone } from 'react-icons/fi';

import Services from '../Services/Services';
import { useThemeMode } from '../../styles/theme';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BookingNote, BookingWidget, BookingWidgetHeading, CalendlyFrame, ContactAgenda, ContactAgendaItem, ContactCopy, ContactForm, ContactGrid, ContactHeading, ContactIntro, ContactOverline, ContactQuickLink, ContactQuickLinks, FormField, FormGrid, FormLabel, FormSelect, FormStatus, SectionFormTitle, SubmitButton, TextArea, TextInput } from '../Hero/HeroStyles';

const configuredCalendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/harisarshad235/30min';

const getCalendlyUrl = (mode) => {
  if (!configuredCalendlyUrl.startsWith('https://calendly.com/')) return '';
  const colors = mode === 'dark'
    ? 'background_color=151d1f&text_color=f1f5f4&primary_color=f18a75'
    : 'background_color=f4f0ea&text_color=1d2a2d&primary_color=e5674f';
  const separator = configuredCalendlyUrl.includes('?') ? '&' : '?';
  return `${configuredCalendlyUrl}${separator}hide_gdpr_banner=1&${colors}`;
};

const Contact = () => {
  const { mode } = useThemeMode();
  const [formState, setFormState] = useState('idle');
  const [selectedService, setSelectedService] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const calendlyUrl = getCalendlyUrl(mode);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const requestedService = formData.get('service');
    const requestDetails = [
      requestedService && `Service requested: ${requestedService}`,
      formData.get('preferred-date') && `Preferred date: ${formData.get('preferred-date')}`,
      formData.get('preferred-time') && `Preferred time and timezone: ${formData.get('preferred-time')}`,
    ].filter(Boolean);

    if (requestDetails.length) {
      const message = String(formData.get('message') || '').trim();
      formData.set('message', `${message}\n\nRequest details:\n${requestDetails.join('\n')}`);
    }
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
      setSelectedService('');
      setSuccessMessage(requestedService === '30-minute project consultation'
        ? 'Consultation request sent. I’ll follow up by email.'
        : 'Message sent. Thank you, I will get back to you soon.');
      setFormState('sent');
    } catch {
      setFormState('error');
    }
  };

  return (
    <>
    <Services onSelectService={setSelectedService} />
    <Section id="contact" data-reveal>
      <SectionDivider colorAlt />
      <SectionTitle>Start with a clear conversation</SectionTitle>
      <ContactGrid>
      <ContactIntro>
        <ContactOverline><FiClock aria-hidden="true" /> 30-minute project consultation</ContactOverline>
        <ContactHeading>Bring the delivery challenge. Leave with a clearer next step.</ContactHeading>
        <ContactCopy>Use a first conversation to outline the goal, the current blockers, and what a useful outcome would look like.</ContactCopy>
        <ContactAgenda>
          <ContactAgendaItem>Project goals and current constraints</ContactAgendaItem>
          <ContactAgendaItem>Milestones, dependencies, and delivery risks</ContactAgendaItem>
          <ContactAgendaItem>Practical next steps and a suitable support model</ContactAgendaItem>
        </ContactAgenda>
        <ContactQuickLinks>
          <ContactQuickLink href="mailto:harisarshad235@gmail.com"><FiMail aria-hidden="true" /> Email</ContactQuickLink>
          <ContactQuickLink href="tel:+923095597954"><FiPhone aria-hidden="true" /> Call</ContactQuickLink>
        </ContactQuickLinks>
      </ContactIntro>
      {calendlyUrl && (
        <BookingWidget>
          <BookingWidgetHeading>Book a 30-minute meeting</BookingWidgetHeading>
          <CalendlyFrame src={calendlyUrl} title="Choose a project consultation time" loading="lazy" />
        </BookingWidget>
      )}
      <ContactForm id="contact-form" $wide={Boolean(calendlyUrl)} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <FormField hidden>
          <FormLabel htmlFor="contact-bot">Do not fill this field</FormLabel>
          <TextInput id="contact-bot" name="bot-field" tabIndex="-1" autoComplete="off" />
        </FormField>
        <SectionFormTitle>Contact me</SectionFormTitle>
        <BookingNote>{calendlyUrl ? 'Booked a time above? Use this form to share project context. For inquiries without a booking, I’ll follow up by email.' : 'Choose a service and share a preferred date and time. I’ll confirm availability by email; requests are not booked until confirmed.'}</BookingNote>
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
            <FormLabel htmlFor="contact-service">Service or inquiry</FormLabel>
            <FormSelect id="contact-service" name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required>
              <option value="">Select a service</option>
              <option value="30-minute project consultation">30-minute project consultation</option>
              <option value="Delivery health check">Delivery health check</option>
              <option value="PMO and portfolio controls">PMO and portfolio controls</option>
              <option value="Agile delivery coordination">Agile delivery coordination</option>
              <option value="General inquiry">General inquiry</option>
            </FormSelect>
          </FormField>
          <FormField>
            <FormLabel htmlFor="contact-date">Preferred date (optional)</FormLabel>
            <TextInput id="contact-date" name="preferred-date" type="date" min={new Date().toISOString().slice(0, 10)} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="contact-time">Preferred time and timezone (optional)</FormLabel>
            <TextInput id="contact-time" name="preferred-time" type="text" placeholder="e.g. morning, PKT" />
          </FormField>
          <FormField $full>
            <FormLabel htmlFor="contact-message">Message</FormLabel>
            <TextArea id="contact-message" name="message" rows="5" placeholder="Briefly describe your project or what you need help with." required />
          </FormField>
        </FormGrid>
        <SubmitButton type="submit" disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending...' : 'Send message'}</SubmitButton>
        {formState === 'sent' && <FormStatus role="status">{successMessage}</FormStatus>}
        {formState === 'error' && <FormStatus $error role="alert">Your message could not be sent. Please try again.</FormStatus>}
      </ContactForm>
      </ContactGrid>
    </Section>
    </>
  );
};

export default Contact;
