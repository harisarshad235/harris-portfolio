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
import { RouteSection } from '../ui/RouteSection';

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

  return (
    <RouteSection
      id="contact"
      line="sunflower"
      code="END"
      surface="terminus"
      isLast
      className="border-b border-white/15"
    >
      {/* 6-Line Convergence Header */}
      <div data-reveal className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            Start with a Clear Conversation
          </h2>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-line-sunflower text-on-sunflower text-xs font-extrabold font-wide tabular">
            <span className="w-2 h-2 rounded-full bg-[#0E1116]" />
            CENTRAL TERMINUS · ALL LINES CONVERGE
          </span>
        </div>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-[66ch] mb-6">
          Have a technology delivery challenge, PMO governance need, or full-stack software initiative? Reach out directly or send a message below.
        </p>

        {/* 6 Coloured Metro Lines Merging Bar */}
        <div aria-hidden="true" className="grid grid-cols-6 gap-1.5 h-2.5 w-full max-w-xl rounded-full overflow-hidden">
          <span className="bg-line-cobalt rounded-full" />
          <span className="bg-line-vermilion rounded-full" />
          <span className="bg-line-sunflower rounded-full" />
          <span className="bg-line-green rounded-full" />
          <span className="bg-line-violet rounded-full" />
          <span className="bg-line-magenta rounded-full" />
        </div>
      </div>

      {/* 2-Column Terminus Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left 5/12: Executive Dispatch Card */}
        <div
          data-reveal
          className="lg:col-span-5 rounded-2xl bg-[#151922] text-white border-[1.5px] border-white/15 p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            {/* Profile Header */}
            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/12">
              <div className="relative shrink-0">
                <img
                  src="/images/haris-arshad-profile.webp"
                  alt="Engr. Haris Arshad"
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-white/25"
                />
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-line-green border-2 border-[#151922]"
                  title="Available for projects"
                />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white">
                  Engr. Haris Arshad
                </h3>
                <p className="text-xs sm:text-sm text-line-sunflower font-extrabold font-wide mt-0.5">
                  PMP® · Project Manager &amp; Tech Delivery
                </p>
              </div>
            </div>

            {/* Availability & SLA Pills */}
            <div className="space-y-2.5 mb-7">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/12 text-xs sm:text-sm font-bold text-white">
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-line-green beacon shrink-0" />
                <span>Open for PM/PMO roles &amp; engineering delivery</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/12 text-xs sm:text-sm text-white/80 font-medium">
                <Clock className="w-4 h-4 text-line-sunflower shrink-0" aria-hidden="true" />
                <span>Typical response time: under 24 hours</span>
              </div>
            </div>

            {/* Direct Channels with 1-Click Copy */}
            <div className="space-y-3 mb-7">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/12">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-9 h-9 rounded-lg bg-line-cobalt text-on-cobalt flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white/65 font-wide">
                      Email
                    </div>
                    <a
                      href="mailto:harisarshad235@gmail.com"
                      className="text-xs sm:text-sm font-bold text-white break-all hover:text-line-sunflower transition-colors block"
                    >
                      harisarshad235@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('harisarshad235@gmail.com', 'email')}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white active:scale-[0.96] transition-[transform,background-color] duration-150 flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-line-green" aria-hidden="true" />
                      <span className="text-line-green">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/12">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-9 h-9 rounded-lg bg-line-green text-on-green flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white/65 font-wide">
                      Phone &amp; WhatsApp
                    </div>
                    <a
                      href="tel:+923095597954"
                      className="text-xs sm:text-sm font-bold text-white truncate hover:text-line-sunflower transition-colors block tabular"
                    >
                      +92 309 5597954
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('+923095597954', 'phone')}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white active:scale-[0.96] transition-[transform,background-color] duration-150 flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedItem === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-line-green" aria-hidden="true" />
                      <span className="text-line-green">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/12">
                <div className="w-9 h-9 rounded-lg bg-line-vermilion text-on-vermilion flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white/65 font-wide">
                    Location &amp; Timezone
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    Islamabad, Pakistan · PKT (UTC+5)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Calendly Direct Booking Banner */}
            <a
              href="https://calendly.com/harisarshad235/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-4 rounded-xl bg-line-sunflower text-[#0E1116] hover:bg-white transition-colors group mb-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0E1116] text-[#FFCB3D] flex items-center justify-center font-bold shrink-0">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-extrabold font-wide flex items-center gap-1.5">
                    <span>Schedule 30-min Call</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-bold opacity-80">
                    Pick a direct slot via Calendly
                  </div>
                </div>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-between pt-4 border-t border-white/12">
              <span className="text-xs text-white/70 font-bold">Connect on:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://pk.linkedin.com/in/haris-arshad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-line-cobalt hover:text-on-cobalt transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <AiFillLinkedin className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/harisarshad235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0E1116] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right 7/12: Interactive Dispatch Form */}
        <div
          data-reveal
          style={{ '--d': '80ms' }}
          className="lg:col-span-7 rounded-2xl bg-[#151922] text-white border-[1.5px] border-white/15 p-6 sm:p-10"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-white/75">
              Select what you need, provide your details, and I will get back to you promptly.
            </p>
          </div>

          {/* Interactive Service Selector Pills */}
          <div className="mb-6">
            <label className="block text-xs font-extrabold font-wide text-white/80 mb-2.5">
              Select Interest or Scope
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((service) => {
                const isSelected = selectedService === service;
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-wide transition-[transform,background-color,color] duration-150 active:scale-[0.97] cursor-pointer ${
                      isSelected
                        ? 'bg-line-sunflower text-[#0E1116]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="py-12 px-6 text-center flex flex-col items-center justify-center rounded-2xl bg-white/5 border border-line-green"
              >
                <div className="w-16 h-16 rounded-full bg-line-green text-on-green flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                </div>
                <h4 className="font-display text-2xl text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-white/80 max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out. Your inquiry regarding{' '}
                  <span className="font-bold text-line-sunflower">{selectedService}</span> has been
                  received. I will follow up with you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormState('idle')}
                  className="btn btn-sun"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="space-y-4">
                {formState === 'error' && (
                  <div className="p-4 rounded-xl bg-line-vermilion text-on-vermilion flex items-start gap-3 text-xs sm:text-sm font-bold">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>{errorMessage}</div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-extrabold font-wide text-white/80 mb-1.5">
                      Your Name <span className="text-line-sunflower">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                        <User className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0D12] border border-white/20 text-white text-sm placeholder:text-white/45 focus:outline-none focus:border-line-sunflower"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-extrabold font-wide text-white/80 mb-1.5">
                      Email Address <span className="text-line-sunflower">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0D12] border border-white/20 text-white text-sm placeholder:text-white/45 focus:outline-none focus:border-line-sunflower"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label htmlFor="form-company" className="block text-xs font-extrabold font-wide text-white/80 mb-1.5">
                      Organization / Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                        <Building2 className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <input
                        id="form-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or Team name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0D12] border border-white/20 text-white text-sm placeholder:text-white/45 focus:outline-none focus:border-line-sunflower"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="form-subject" className="block text-xs font-extrabold font-wide text-white/80 mb-1.5">
                      Subject / Project Scope <span className="text-line-sunflower">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <input
                        id="form-subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. ERP Migration delivery"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0D12] border border-white/20 text-white text-sm placeholder:text-white/45 focus:outline-none focus:border-line-sunflower"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-extrabold font-wide text-white/80 mb-1.5">
                    Project Details &amp; Message <span className="text-line-sunflower">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project goals, milestones, or current delivery hurdles..."
                    className="w-full p-4 rounded-xl bg-[#0B0D12] border border-white/20 text-white text-sm placeholder:text-white/45 focus:outline-none focus:border-line-sunflower resize-y min-h-[115px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="btn btn-sun w-full"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </RouteSection>
  );
};

export default Contact;
