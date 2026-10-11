import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { flagshipProjects } from '../../data/projects';
import { ScrollReveal, StaggerContainer } from '../../src/components/ui/MotionReveal';

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
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className={`group relative rounded-2xl border border-neutral-800/80 bg-[#0A0F17] overflow-hidden transition-all duration-300 flex flex-col justify-between ${project.borderHoverClass} ${project.glowClass} flagship-card card-${project.id}`}
          >
            {/* Seamless 3D Mockup Container */}
            <div className="relative w-full aspect-[16/9] bg-[#0A0F17] overflow-hidden select-none flagship-media-container">
              <Image
                alt={`${project.title} Interface Preview`}
                className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03] flagship-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                unoptimized={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={project.image}
              />

              {/* Bottom Surface Blend Mask */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A0F17] via-[#0A0F17]/30 to-transparent pointer-events-none flagship-blend-mask-bottom"
                aria-hidden="true"
              />

              {/* Top Vignette Edge Softener */}
              <div
                className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0A0F17]/40 to-transparent pointer-events-none flagship-blend-mask-top"
                aria-hidden="true"
              />
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between flagship-body">
              <div>
                {/* Category Pill Badge */}
                <div className="mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${project.badgeStyle} flagship-category-badge badge-${project.id}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5 group-hover:text-neutral-100 transition-colors flagship-item-title">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-neutral-200 mb-2.5 flagship-tagline">
                  {project.tagline}
                </p>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 flagship-description font-normal">
                  {project.description}
                </p>

                {/* Key Achievements & Capabilities */}
                <ul className="space-y-2.5 mb-6 flagship-features" aria-label="Key Features">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 flagship-feature-item">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 flagship-check-icon" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 mb-6 border-t border-neutral-800/80 flagship-tech-stack">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs sm:text-sm font-mono rounded-md bg-[#0D141C] text-neutral-200 border border-neutral-800 flagship-tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 flagship-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-neutral-950 font-bold text-sm sm:text-base hover:bg-neutral-200 transition-colors shadow-sm flagship-btn-primary"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {project.dashboardUrl && (
                    <a
                      href={project.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0D141C] text-neutral-200 border border-neutral-700/80 hover:border-neutral-500 font-bold text-sm sm:text-base transition-colors flagship-btn-secondary"
                    >
                      <span>Open Dashboard</span>
                      <ExternalLink className="w-4 h-4" />
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
