import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import { flagshipProjects } from '../../data/projects';
import { Section } from '../ui/Section';

export const FlagshipProjects = () => {
  return (
    <Section
      id="products"
      title="Original Products & Engineering Systems"
      intro="Conceived from real-world delivery bottlenecks, architected from scratch, and engineered into production-grade cloud software. These are my original ideas, custom blueprints, and high-velocity systems built to eliminate workflow friction."
      surface="tinted"
      split={false}
    >
      <div className="space-y-16 sm:space-y-24">
        {flagshipProjects.map((project, index) => {
          const flipped = index % 2 === 1;
          return (
            <article
              key={project.id}
              data-reveal
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Interface preview */}
              <div className={`lg:col-span-7 ${flipped ? 'lg:order-2' : ''}`}>
                <div className="group relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-[#0D1514] border border-rule/15 select-none">
                  <Image
                    alt={`${project.title} Interface Preview`}
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority={index === 0}
                    unoptimized={true}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    src={project.image}
                  />
                </div>
              </div>

              {/* Copy */}
              <div className={`lg:col-span-5 ${flipped ? 'lg:order-1' : ''}`}>
                <p className="meta flex items-center gap-2 mb-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ok" />
                  {project.category} · Live
                </p>
                <h3 className="font-display text-3xl sm:text-4xl mb-2">{project.title}</h3>
                <p className="font-display text-lg sm:text-xl text-accent mb-4 leading-snug">
                  {project.tagline}
                </p>
                <p className="text-[0.9375rem] sm:text-base text-ink-2 leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2.5 mb-6" aria-label="Key features">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-ink leading-snug">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="meta mb-7">{project.techStack.join(' · ')}</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    <span>Visit Live Solution</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                  {project.dashboardUrl && (
                    <a
                      href={project.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <span>Open Workspace</span>
                      <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default FlagshipProjects;
