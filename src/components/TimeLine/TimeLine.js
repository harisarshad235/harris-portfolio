import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TimeLineData } from '../../constants/constants';
import { Section } from '../ui/Section';

const Timeline = () => {
  const lastIndex = TimeLineData.length - 1;

  return (
    <Section id="about" title="About Haris Arshad" intro="Career, 2019 to present.">
      <div data-reveal className="space-y-6 text-base sm:text-[1.0625rem] text-ink-2 leading-[1.75] max-w-[66ch]">
        <p>
          PMP®-certified Technical Project Manager and Registered Professional Engineer (PE) with 6+ years of technical delivery experience, including 3+ years directing cross-functional software engineering, cloud platform, and SaaS initiatives across Fixed Price (FP) and Time &amp; Materials (T&amp;M) models. Holding a Master of Science in Project Management (Bahria University) and a B.S. in Electrical Engineering (COMSATS), I specialize in bridging technical PMO governance with modern SDLC execution.
        </p>
        <p>
          My track record combines large-scale infrastructure governance and agile product leadership: managing a PKR 700M+ multi-site portfolio (150+ operational sites) at AJCL, delivering PKR 103M+ in EVM cost savings (22.5% below baseline budget) on a nationwide Track &amp; Trace program, steering Agile delivery for Tier-1 clients including Telenor and FAB at SOFTOO, and currently directing concurrent SaaS engineering sprints at Sigma Digital Solutions with 0% scope creep and 100% on-time client acceptance.
        </p>
      </div>

      <div data-reveal className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-9 mb-14">
        <a href="#client-projects" className="btn btn-accent">
          <span>Explore project case studies</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
        <a href="#contact" className="btn btn-outline">
          <span>Hiring or need delivery support? Let&apos;s talk</span>
        </a>
      </div>

      {/* Career, read top to bottom */}
      <ol aria-label="Career timeline" className="border-t border-rule/20">
        {TimeLineData.map((item, index) => {
          const isCurrent = index === lastIndex;
          return (
            <li
              key={item.year}
              data-reveal
              style={{ '--d': `${Math.min(index, 4) * 50}ms` }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-2 py-6 border-b border-rule/12"
            >
              <div className="sm:col-span-3 flex flex-col items-start gap-1">
                <span className="font-figure text-2xl text-ink whitespace-nowrap">{item.year}</span>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ok">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ok" />
                    Current
                  </span>
                )}
              </div>
              <div className="sm:col-span-9">
                {item.role && (
                  <h3 className="text-base font-semibold text-ink leading-snug">
                    {item.role}
                    {item.company && <span className="font-medium text-accent"> · {item.company}</span>}
                  </h3>
                )}
                <p className="mt-1.5 text-[0.9375rem] text-ink-2 leading-relaxed max-w-[62ch]">
                  {item.text}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};

export default Timeline;
