import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import { ContactSuccess, SuccessLink } from '../styles/ContactSuccessStyles';

const ContactSuccessPage = () => (
  <Section>
    <ContactSuccess>
      <SectionTitle main>Message sent.</SectionTitle>
      <SectionText>Thank you for reaching out. Your message has been received and I will get back to you soon.</SectionText>
      <Link href="/">
        <SuccessLink>Return to portfolio</SuccessLink>
      </Link>
    </ContactSuccess>
  </Section>
);

export default ContactSuccessPage;
