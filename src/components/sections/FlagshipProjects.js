import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { flagshipProjects } from '../../data/projects';
import { RouteSection } from '../ui/RouteSection';

export const FlagshipProjects = () => {
  return (
    <RouteSection
      id="products"
      line="vermilion"
      code="L2"
      surface="drench"
      className="border-b-2 border-ink"
    >
      {/* Section Header — no kicker above h2 per craft floor */}
      <div data-reveal className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            Original Products &amp; Engineering Systems
          </h2>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1116] text-[#FFCB3D] text-xs font-extrabold font-wide tabular">
            <span className="w-2 h-2 rounded-full bg-[#FFCB3D]" />
            VERMILION EXPRESS · PROPRIETARY SAAS
          </span>
        </div>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-[68ch]">
          Conceived from real-world delivery bottlenecks, architected from scratch, and engineered into production-grade cloud software. These are my original ideas, custom blueprints, and high-velocity systems built to eliminate workflow friction.
        </p>
      </div>

      {/* 2-Column Maximalist Poster Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {flagshipProjects.map((project, index) => {
          const isHubito = project.id === 'hubito';
          const stationCode = isHubito ? 'EXP-01' : 'EXP-02';
          const lineBadgeClass = isHubito
            ? 'bg-line-green text-on-green'
            : 'bg-line-cobalt text-on-cobalt';

          return (
            <article
              key={project.id}
              data-reveal
              style={{ '--d': `${index * 100}ms` }}
              className="group rounded-2xl bg-surface text-ink border-2 border-ink overflow-hidden flex flex-col justify-between card-lift"
            >
              <div>
                {/* Departure-Board Top Strip */}
                <div className="board px-5 py-3 flex items-center justify-between gap-3 border-b-2 border-ink text-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`px-2 py-0.5 rounded-full font-extrabold ${lineBadgeClass}`}>
                      {stationCode}
                    </span>
                    <span className="truncate">{project.category}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 shrink-0 text-[#2FD283]">
                    <span className="w-2 h-2 rounded-full bg-[#2FD283]" />
                    LIVE
                  </span>
                </div>

                {/* Mockup Frame */}
                <div className="relative w-full aspect-[16/9] bg-[#0B0D12] overflow-hidden select-none border-b-[1.5px] border-rule/20">
                  <Image
                    alt={`${project.title} Interface Preview`}
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    unoptimized={true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={project.image}
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl sm:text-4xl text-ink">
                      {project.title}
                    </h3>
                    <span className="text-xs font-extrabold font-wide text-ink-2 tabular">
                      CLOUDFLARE EDGE
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-extrabold text-line-vermilion mb-3 font-wide">
                    {project.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features as a Mini Transit Line */}
                  <ul
                    className="relative space-y-3 mb-6 pl-6 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-1 before:rounded-full before:bg-line-vermilion"
                    aria-label="Key Features"
                  >
                    {project.keyFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        className="relative text-xs sm:text-sm text-ink font-semibold leading-snug"
                      >
                        <span
                          aria-hidden="true"
                          className="station !w-3 !h-3 absolute -left-[22px] top-1"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 mb-6 border-t border-rule/15">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-bold font-wide rounded-full bg-surface-2 text-ink shadow-[inset_0_0_0_1px_rgb(var(--rule-rgb)/0.18)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  className={`grid gap-3 ${
                    project.dashboardUrl ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ink w-full"
                  >
                    <span>Visit Live Solution</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>

                  {project.dashboardUrl && (
                    <a
                      href={project.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sun w-full"
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
    </RouteSection>
  );
};

export default FlagshipProjects;
