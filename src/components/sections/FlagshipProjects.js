import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { flagshipProjects } from '../../data/projects';
import { ScrollReveal, StaggerContainer } from '../ui/MotionReveal';

export const FlagshipProjects = () => {
  return (
    <section id="products" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flagship-showcase-section">
      {/* Section Header */}
      <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto flagship-header">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-border bg-card text-foreground mb-4 shadow-sm backdrop-blur-md flagship-badge">
          <Layers className="w-4 h-4 text-primary flagship-badge-icon" />
          <span>Proprietary SaaS &amp; Custom Technology Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 flagship-title">
          Original Products &amp; Engineering Systems
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto flagship-subtitle">
          Conceived from real-world delivery bottlenecks, architected from scratch, and engineered into production-grade cloud software. These are my original ideas, custom blueprints, and high-velocity systems built to eliminate workflow friction.
        </p>
      </ScrollReveal>

      {/* Synchronized 2-Column Responsive Grid */}
      <StaggerContainer
        staggerDelay={0.15}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch flagship-grid"
      >
        {flagshipProjects.map((project) => (
          <motion.article
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 32, scale: 0.97 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 260, damping: 25 },
              },
            }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 22 } }}
            className={`group relative rounded-3xl border border-border bg-card dark:bg-[#0D121D] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl ${project.borderHoverClass || 'hover:border-primary/40'} ${project.glowClass || ''} flagship-card card-${project.id}`}
          >
            {/* Seamless Mockup Container */}
            <div className="relative w-full aspect-[16/9] bg-[#0A0F17] overflow-hidden select-none flagship-media-container border-b border-border">
              <Image
                alt={`${project.title} Interface Preview`}
                className="object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-[1.02] flagship-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                unoptimized={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={project.image}
              />

              {/* Subtle bottom vignette that preserves dark mockup contrast in both light & dark themes */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between flagship-body">
              <div>
                {/* Category Pill Badge */}
                <div className="mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs sm:text-sm font-semibold border ${project.badgeStyle} flagship-category-badge`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-1.5 flagship-item-title">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-primary mb-2.5 flagship-tagline">
                  {project.tagline}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 flagship-description font-normal">
                  {project.description}
                </p>

                {/* Key Achievements & Capabilities */}
                <ul className="space-y-2.5 mb-6 flagship-features" aria-label="Key Features">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground font-medium flagship-feature-item">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 flagship-check-icon" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 mb-6 border-t border-border flagship-tech-stack">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-secondary text-foreground border border-border flagship-tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons with Balanced Grid & Spring Micro-Interactions */}
                <div
                  className={`grid gap-3 flagship-actions ${
                    project.dashboardUrl ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm sm:text-base hover:bg-primary/90 active:scale-[0.97] transition-[transform,background-color] duration-150 shadow-sm whitespace-nowrap flagship-btn-primary"
                  >
                    <span>Visit Live Solution</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>

                  {project.dashboardUrl && (
                    <a
                      href={project.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:border-primary/40 active:scale-[0.97] font-bold text-sm sm:text-base transition-[transform,background-color,border-color,color] duration-150 whitespace-nowrap flagship-btn-secondary"
                    >
                      <span>Open Workspace</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default FlagshipProjects;
