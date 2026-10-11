import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Download, Eye, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon } from '@/components/ui/hero-block-shadcnui';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Subtle modern geometric background grid with radial fade mask */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_40%,transparent_100%)]"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Executive Bio, Credentials, Metrics, and Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/25">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                Technology delivery · PMO · Agile coordination
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12] mb-3"
            >
              Haris Arshad, PMP®
              <span className="block text-primary mt-1 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Project Manager
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl mb-6 font-normal"
            >
              PMP®-certified Project Manager in Islamabad, Pakistan, with a Master&apos;s in Project Management. I lead technology delivery across software, infrastructure, QA, and business teams, applying project planning and control, PMO governance, Agile delivery, risk management, and stakeholder coordination to move initiatives from planning through release.
            </motion.p>

            {/* Location & Certification Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Islamabad, Pakistan
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-foreground">
                <Award className="h-4 w-4 text-primary" /> PMP® certified
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-foreground border border-primary/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Open to PM/PMO roles &amp; select consulting
              </span>
            </motion.div>

            {/* Delivery Impact Metric Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl mb-8"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-primary">PKR 103M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium leading-snug">
                  savings on track-and-trace delivery
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-primary">22.5%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium leading-snug">
                  under budget on that program
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-primary">150+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium leading-snug">
                  sites coordinated across PKR 700M+ portfolio
                </div>
              </motion.div>
            </motion.div>

            {/* Action Buttons & Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 w-full"
            >
              <Button
                size="lg"
                className="gap-2 px-6 font-semibold shadow-md cursor-pointer"
                onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}
              >
                <Eye className="h-4 w-4" />
                View CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-6 font-semibold border-border cursor-pointer hover:bg-secondary"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume/haris-arshad-cv.pdf';
                  link.download = 'haris-arshad-cv.pdf';
                  link.click();
                }}
              >
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="gap-1.5 px-4 font-semibold text-foreground/80 hover:text-primary cursor-pointer"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss a project
                <ArrowRight className="h-4 w-4" />
              </Button>

              {/* Social icons */}
              <div className="flex items-center gap-2 sm:ml-auto pt-2 sm:pt-0">
                {[
                  { icon: GithubIcon, href: 'https://github.com/harisarshad235', label: 'GitHub' },
                  { icon: LinkedinIcon, href: 'https://pk.linkedin.com/in/haris-arshad', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:contact@harisarshad.site', label: 'Email' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Executive Portrait with subtle halo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Subtle ambient decorative blur ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[34px] bg-gradient-to-tr from-primary/25 via-teal-500/15 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"
              />

              {/* High-fidelity Portrait Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full aspect-[4/5] rounded-[28px] overflow-hidden border border-border bg-card shadow-2xl"
              >
                <picture>
                  <source srcSet="/images/haris-arshad-profile.webp" type="image/webp" />
                  <img
                    src="/images/haris-arshad-profile.jpeg"
                    alt="Engr. Haris Arshad, PMP® Certified Project Manager"
                    width={380}
                    height={475}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                </picture>
                {/* Bottom subtle gradient overlay with title */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <div className="text-base font-bold tracking-wide">Engr. Haris Arshad</div>
                  <div className="text-xs text-white/80 font-medium">PMP® · Islamabad, PK</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
