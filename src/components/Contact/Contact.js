import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Copy,
  Check,
  Send,
  Calendar,
  ArrowUpRight,
  MessageSquare,
  Building2,
  User,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../ui/Section';

const SERVICES = [
  '30-min Consultation',
  'Technology Delivery',
  'PMO & Agile Governance',
  'Full-Stack / Software',
  'Project Health Check',
  'General Inquiry',
];

export const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [selectedService, setSelectedService] = useState('30-min Consultation');
  const [formState, setFormState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'N/A',
        subject: formData.subject || `${selectedService} - Portfolio Inquiry`,
        service: selectedService,
        message: formData.message,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || 'Unable to send message.');
      }

      setFormState('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Failed to send message. Please reach out via email directly.'
      );
      setFormState('error');
    }
  };

  const channelRow = 'flex items-center justify-between gap-3 py-4 border-b border-close-ink/15';
  const copyButton =
    'px-3 py-1.5 rounded-md text-xs font-semibold text-close-ink/90 hover:bg-close-ink/10 active:scale-[0.96] transition-[transform,background-color] duration-150 flex items-center gap-1.5 shrink-0 cursor-pointer';
  const labelClass = 'block text-[0.8125rem] font-semibold text-close-ink/90 mb-1.5';

  const renderCopy = (type) =>
    copiedItem === type ? (
      <>
        <Check className="w-3.5 h-3.5 text-close-accent" aria-hidden="true" />
        <span className="text-close-accent">Copied</span>
      </>
    ) : (
      <>
        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Copy</span>
      </>
    );

  const iconField = (Icon) => (
    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-close-ink/55">
      <Icon className="w-4 h-4" aria-hidden="true" />
    </div>
  );

  return (
    <Section
      id="contact"
      title="Start with a Clear Conversation"
      intro="Have a technology delivery challenge, PMO governance need, or full-stack software initiative? Reach out directly or send a message below."
      surface="close"
      split={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Direct channels */}
        <div data-reveal className="lg:col-span-5">
          <div className="flex items-center gap-4 pb-6 border-b border-close-ink/15">
            <img
              src="/images/haris-arshad-profile.webp"
              alt="Engr. Haris Arshad"
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
              className="w-16 h-16 rounded-lg object-cover object-top"
            />
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-close-ink">Engr. Haris Arshad</h3>
              <p className="text-sm text-close-accent font-medium mt-0.5">
                PMP® · Project Manager &amp; Tech Delivery
              </p>
            </div>
          </div>

          <ul>
            <li className="flex items-center gap-3 py-4 border-b border-close-ink/15 text-sm text-close-ink">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-close-accent shrink-0" />
              <span>Open for PM/PMO roles &amp; engineering delivery</span>
            </li>
            <li className="flex items-center gap-3 py-4 border-b border-close-ink/15 text-sm text-close-ink/80">
              <Clock className="w-4 h-4 shrink-0 text-close-accent" aria-hidden="true" />
              <span>Typical response time: under 24 hours</span>
            </li>

            <li className={channelRow}>
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="w-4 h-4 shrink-0 text-close-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="text-xs text-close-ink/65">Email</div>
                  <a
                    href="mailto:harisarshad235@gmail.com"
                    className="text-sm font-medium text-close-ink break-all underline decoration-close-ink/30 underline-offset-4 hover:decoration-close-accent transition-colors"
                  >
                    harisarshad235@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('harisarshad235@gmail.com', 'email')}
                className={copyButton}
                title="Copy email"
              >
                {renderCopy('email')}
              </button>
            </li>

            <li className={channelRow}>
              <div className="flex items-center gap-3 min-w-0">
                <Phone className="w-4 h-4 shrink-0 text-close-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="text-xs text-close-ink/65">Phone &amp; WhatsApp</div>
                  <a
                    href="tel:+923095597954"
                    className="text-sm font-medium text-close-ink tabular underline decoration-close-ink/30 underline-offset-4 hover:decoration-close-accent transition-colors"
                  >
                    +92 309 5597954
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('+923095597954', 'phone')}
                className={copyButton}
                title="Copy phone"
              >
                {renderCopy('phone')}
              </button>
            </li>

            <li className="flex items-center gap-3 py-4 border-b border-close-ink/15">
              <MapPin className="w-4 h-4 shrink-0 text-close-accent" aria-hidden="true" />
              <div>
                <div className="text-xs text-close-ink/65">Location &amp; timezone</div>
                <div className="text-sm font-medium text-close-ink">Islamabad, Pakistan · PKT (UTC+5)</div>
              </div>
            </li>
          </ul>

          <a
            href="https://calendly.com/harisarshad235/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light w-full mt-8 group"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>Schedule a 30-min call</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

          <div className="flex items-center gap-3 mt-6 text-sm text-close-ink/70">
            <span>Connect on</span>
            <a
              href="https://pk.linkedin.com/in/haris-arshad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-close-ink/10 transition-colors text-close-ink"
              aria-label="LinkedIn Profile"
            >
              <AiFillLinkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/harisarshad235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-close-ink/10 transition-colors text-close-ink"
              aria-label="GitHub Profile"
            >
              <AiFillGithub className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Message form */}
        <div data-reveal style={{ '--d': '80ms' }} className="lg:col-span-7">
          <h3 className="font-display text-2xl sm:text-3xl text-close-ink mb-2">Send a direct message</h3>
          <p className="text-sm text-close-ink/75 mb-7">
            Select what you need, provide your details, and I will get back to you promptly.
          </p>

          <fieldset className="mb-7">
            <legend className={labelClass}>Select interest or scope</legend>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((service) => {
                const isSelected = selectedService === service;
                return (
                  <button
                    key={service}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedService(service)}
                    className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.97] cursor-pointer ${
                      isSelected
                        ? 'bg-close-ink text-close'
                        : 'text-close-ink shadow-[inset_0_0_0_1px_rgb(var(--on-close-rgb)/0.35)] hover:shadow-[inset_0_0_0_1px_rgb(var(--on-close-rgb))]'
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-10 px-6 flex flex-col items-start rounded-lg border border-close-accent/50"
              >
                <CheckCircle2 className="w-8 h-8 text-close-accent mb-4" aria-hidden="true" />
                <h4 className="font-display text-2xl text-close-ink mb-2">Message sent</h4>
                <p className="text-sm text-close-ink/80 max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out. Your inquiry regarding{' '}
                  <span className="font-semibold text-close-accent">{selectedService}</span> has been
                  received. I will follow up with you within 24 hours.
                </p>
                <button type="button" onClick={() => setFormState('idle')} className="btn btn-light">
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="space-y-4">
                {formState === 'error' && (
                  <div
                    role="alert"
                    className="p-4 rounded-md border border-[#FF9C8A]/60 text-[#FFB4A6] flex items-start gap-3 text-sm font-medium"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>{errorMessage}</div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className={labelClass}>
                      Your name <span className="text-close-accent">*</span>
                    </label>
                    <div className="relative">
                      {iconField(User)}
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="field-close"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="form-email" className={labelClass}>
                      Email address <span className="text-close-accent">*</span>
                    </label>
                    <div className="relative">
                      {iconField(Mail)}
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="field-close"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-company" className={labelClass}>
                      Organization / company
                    </label>
                    <div className="relative">
                      {iconField(Building2)}
                      <input
                        id="form-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or team name"
                        className="field-close"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="form-subject" className={labelClass}>
                      Subject / project scope <span className="text-close-accent">*</span>
                    </label>
                    <div className="relative">
                      {iconField(MessageSquare)}
                      <input
                        id="form-subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. ERP migration delivery"
                        className="field-close"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="form-message" className={labelClass}>
                    Project details &amp; message <span className="text-close-accent">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project goals, milestones, or current delivery hurdles..."
                    className="field-close resize-y min-h-[130px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="btn btn-light w-full sm:w-auto sm:min-w-[14rem]"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send project inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
