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
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Building2,
  User,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ScrollReveal } from '../ui/MotionReveal';

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
  const [formState, setFormState] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
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
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-teal-500/10 via-primary/10 to-transparent blur-3xl pointer-events-none rounded-full"
      />

      {/* Section Header */}
      <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-border bg-card text-foreground mb-4 shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Let&apos;s Build Together · Available for Engagements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Start with a Clear Conversation
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Have a technology delivery challenge, PMO governance need, or full-stack software initiative? Reach out directly or send a message below.
        </p>
      </ScrollReveal>

      {/* 2-Column Responsive Grid: Contact Card + Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: 21st.dev-Inspired Executive Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border/80 bg-card/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          {/* Card Accent Top Glow */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-primary to-emerald-400" />

          <div>
            {/* Profile Avatar & Status Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="/images/haris-arshad-profile.jpeg"
                  alt="Haris Arshad"
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-border shadow-md"
                />
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-card"
                  title="Available for projects"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Engr. Haris Arshad
                </h3>
                <p className="text-xs sm:text-sm text-primary font-semibold">
                  PMP® · Project Manager &amp; Tech Delivery
                </p>
              </div>
            </div>

            {/* Availability & Response SLA Pill */}
            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-secondary/80 border border-border text-xs sm:text-sm font-medium text-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for PM/PMO roles &amp; engineering delivery</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-secondary/50 border border-border/60 text-xs sm:text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Typical response time: under 24 hours</span>
              </div>
            </div>

            {/* Direct Contact Channels with 1-Click Copy */}
            <div className="space-y-3 mb-8">
              {/* Email channel */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/60 border border-border hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Email
                    </div>
                    <a
                      href="mailto:harisarshad235@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-foreground break-all hover:text-primary transition-colors block"
                    >
                      harisarshad235@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('harisarshad235@gmail.com', 'email')}
                  className="px-2.5 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground hover:bg-secondary transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy email"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone channel */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/60 border border-border hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Phone &amp; WhatsApp
                    </div>
                    <a
                      href="tel:+923095597954"
                      className="text-xs sm:text-sm font-semibold text-foreground truncate hover:text-primary transition-colors block"
                    >
                      +92 309 5597954
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('+923095597954', 'phone')}
                  className="px-2.5 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground hover:bg-secondary transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy phone"
                >
                  {copiedItem === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location channel */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-secondary/60 border border-border">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Location &amp; Timezone
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground">
                    Islamabad, Pakistan · PKT (UTC+5)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Quick Consultation Booking Banner */}
            <a
              href="https://calendly.com/harisarshad235/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-teal-500/15 via-primary/10 to-teal-500/5 border border-primary/25 hover:border-primary transition-all group mb-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground flex items-center gap-1.5">
                    Schedule 30-min Call
                    <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Pick a direct slot via Calendly
                  </div>
                </div>
              </div>
            </a>

            {/* Social Footnote */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground font-medium">Connect on:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://pk.linkedin.com/in/haris-arshad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  aria-label="LinkedIn Profile"
                >
                  <AiFillLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/harisarshad235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Modern Interactive Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 rounded-3xl border border-border/80 bg-card/80 backdrop-blur-xl p-6 sm:p-10 shadow-xl relative"
        >
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Select what you need, provide your details, and I will get back to you promptly.
            </p>
          </div>

          {/* Interactive Service Selector Pills */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2.5">
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
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-primary text-primary-foreground shadow-sm scale-[1.02]'
                        : 'bg-secondary text-foreground/80 hover:bg-secondary/80 border border-border'
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 px-6 text-center flex flex-col items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out. Your inquiry regarding{' '}
                  <span className="font-semibold text-foreground">{selectedService}</span> has been
                  received. I will follow up with you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormState('idle')}
                  className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="space-y-4">
                {formState === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-3 text-red-600 dark:text-red-400 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>{errorMessage}</div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5"
                    >
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5"
                    >
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company field */}
                  <div>
                    <label
                      htmlFor="form-company"
                      className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5"
                    >
                      Organization / Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        id="form-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or Team name"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label
                      htmlFor="form-subject"
                      className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5"
                    >
                      Subject / Project Scope <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <input
                        id="form-subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. ERP Migration delivery"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1.5"
                  >
                    Project Details &amp; Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project goals, milestones, or current delivery hurdles..."
                    className="w-full p-4 rounded-xl bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y min-h-[110px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm sm:text-base hover:bg-primary/90 active:scale-[0.99] transition-all shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
