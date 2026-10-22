import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Download, Eye, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 340, damping: 26 },
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
          {/* Left Column: Executive Bio, Credentials, Asymmetric Metrics, and Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Architectural Discipline Label */}
            <motion.div variants={itemVariants} className="mb-3">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Technology Delivery &amp; PMO Governance
              </span>
            </motion.div>

            {/* Main Headline - Strict 2-line maximum with editorial tension */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-4"
            >
              Haris Arshad, PMP®
              <span className="block text-primary mt-1 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Technical Delivery &amp; PMO Lead
              </span>
            </motion.h1>

            {/* Statement Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6 font-normal"
            >
              PMP®-certified Project Manager in Islamabad with a Master&apos;s in Project Management. I steer complex technology portfolios across cloud, infrastructure, software, and QA squads — combining EVM baselines, Agile sprint cadence, RAID discipline, and stakeholder alignment to ship on schedule.
            </motion.p>

            {/* Location & Status Tag Line */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium mb-7"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border/80">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Islamabad, Pakistan
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border/80">
                <Award className="h-3.5 w-3.5 text-primary" /> PMP® certified (PMI)
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card text-foreground border border-primary/25 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to PM/PMO leadership &amp; advisory
              </span>
            </motion.div>

            {/* Asymmetric Metric Grid Tension */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 w-full max-w-2xl mb-8"
            >
              {/* Primary Anchor Metric (7 cols) */}
              <motion.div
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="sm:col-span-7 p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs flex flex-col justify-between transition-colors hover:border-primary/40 cursor-default"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">PKR 103M+</div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                    22.5% Under Budget
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium leading-relaxed">
                  Verified cost optimization on nationwide Track &amp; Trace delivery program.
                </div>
              </motion.div>

              {/* Secondary Anchor Metric (5 cols) */}
              <motion.div
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="sm:col-span-5 p-4 sm:p-5 rounded-2xl bg-secondary/80 border border-border shadow-xs flex flex-col justify-between transition-colors hover:border-primary/40 cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">150+ Sites</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium leading-relaxed">
                  Coordinated across PKR 700M+ enterprise infrastructure portfolio.
                </div>
              </motion.div>
            </motion.div>

            {/* Action Buttons & Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 w-full"
            >
              <Button
                size="lg"
                className="gap-2 px-6 font-semibold shadow-sm"
                onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}
              >
                <Eye className="h-4 w-4" />
                View CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-6 font-semibold"
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
                variant="secondary"
                className="gap-1.5 px-5 font-semibold text-foreground hover:text-primary hover:border-primary/40"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Executive Portrait with subtle halo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Refined ambient occlusion shadow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[30px] bg-gradient-to-tr from-primary/15 via-teal-500/10 to-transparent blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
              />

              {/* High-fidelity Portrait Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.15 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 350, damping: 24 } }}
                className="relative z-10 w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-border bg-card shadow-xl ring-1 ring-border/40"
              >
                <picture>
                  <source srcSet="/images/haris-arshad-profile.webp" type="image/webp" />
                  <img
                    src="/images/haris-arshad-profile.jpeg"
                    alt="Engr. Haris Arshad, PMP® Certified Project Manager"
                    width={380}
                    height={475}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
                {/* Bottom subtle gradient overlay with title */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
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
