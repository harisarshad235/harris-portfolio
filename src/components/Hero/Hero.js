import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Eye, Download, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon } from '@/components/ui/hero-block-shadcnui';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-14 md:py-20 px-4 w-full">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Spring animated avatar with Haris photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="relative mx-auto h-28 w-28 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary shadow-xl overflow-hidden p-0.5">
              <img
                src="/images/haris-arshad-profile.jpeg"
                alt="Engr. Haris Arshad PMP®"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase bg-secondary text-foreground/80 border border-border">
              Technology delivery · PMO · Agile coordination
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-2 text-4xl font-extrabold text-foreground md:text-6xl tracking-tight"
          >
            Haris Arshad, PMP®
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mb-6 text-2xl font-bold text-primary md:text-3xl"
          >
            Project Manager
          </motion.h2>

          {/* Bio Description from red-boxed section */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-6 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed"
          >
            PMP®-certified Project Manager in Islamabad, Pakistan, with a Master&apos;s in Project Management. I lead technology delivery across software, infrastructure, QA, and business teams, applying project planning and control, PMO governance, Agile delivery, risk management, and stakeholder coordination to move initiatives from planning through release.
          </motion.p>

          {/* Location & Certification Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mb-8 flex flex-wrap justify-center items-center gap-3 text-sm font-medium"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Islamabad, Pakistan
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-foreground">
              <Award className="h-4 w-4 text-primary" /> PMP® certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 text-foreground border border-primary/30">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Open to PM/PMO roles &amp; select consulting
            </span>
          </motion.div>

          {/* Metrics Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 rounded-xl bg-card border border-border shadow-sm text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-primary">PKR 103M+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">savings on track-and-trace delivery</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 rounded-xl bg-card border border-border shadow-sm text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-primary">22.5%</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">under budget on that program</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 rounded-xl bg-card border border-border shadow-sm text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-primary">150+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">sites coordinated across PKR 700M+ portfolio</div>
            </motion.div>
          </motion.div>

          {/* Action Buttons using shadcn Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-10 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2 text-base font-semibold px-6 shadow-md"
              onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}
            >
              <Eye className="h-4 w-4" />
              View CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base font-semibold px-6 border-border"
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
              variant="outline"
              className="gap-2 text-base font-semibold px-6 border-border"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discuss a project
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Floating circular social icons from shadcn hero component */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: GithubIcon, href: 'https://github.com/harisarshad235', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://pk.linkedin.com/in/haris-arshad', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contact@harisarshad.site', label: 'Email' },
            ].map((social, index) => {
              const IconComp = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground border border-border"
                >
                  <IconComp className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.2, duration: 1.5, repeat: Infinity },
        }}
        className="mt-12"
      >
        <button
          onClick={() => {
            const nextEl = document.getElementById('about') || document.querySelector('section');
            nextEl?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
          className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  );
}
