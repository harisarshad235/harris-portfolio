import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { TimeLineData } from '../../constants/constants';
import { RouteSection } from '../ui/RouteSection';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(TimeLineData.length - 1);
  const cardsRef = useRef([]);

  const handleSelectStation = (index) => {
    setActiveItem(index);
    const cardEl = cardsRef.current[index];
    if (cardEl && window.innerWidth < 1024) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <RouteSection id="about" line="cobalt" code="L1" surface="default" className="border-b-[1.5px] border-rule/15">
      <div data-reveal>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <h2 className="font-display text-3xl sm:text-5xl text-ink">
            About Haris Arshad
          </h2>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-line-cobalt text-on-cobalt text-xs font-extrabold font-wide">
            <span className="w-2 h-2 rounded-full bg-current" />
            COBALT LINE · CAREER ROUTE (2019–PRESENT)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-8">
          <p className="lg:col-span-6 text-base sm:text-lg text-ink-2 leading-relaxed">
            PMP®-certified Technical Project Manager and Registered Professional Engineer (PE) with 6+ years of technical delivery experience, including 3+ years directing cross-functional software engineering, cloud platform, and SaaS initiatives across Fixed Price (FP) and Time &amp; Materials (T&amp;M) models. Holding a Master of Science in Project Management (Bahria University) and a B.S. in Electrical Engineering (COMSATS), I specialize in bridging technical PMO governance with modern SDLC execution.
          </p>
          <p className="lg:col-span-6 text-base sm:text-lg text-ink-2 leading-relaxed">
            My track record combines large-scale infrastructure governance and agile product leadership: managing a PKR 700M+ multi-site portfolio (150+ operational sites) at AJCL, delivering PKR 103M+ in EVM cost savings (22.5% below baseline budget) on a nationwide Track &amp; Trace program, steering Agile delivery for Tier-1 clients including Telenor and FAB at SOFTOO, and currently directing concurrent SaaS engineering sprints at Sigma Digital Solutions with 0% scope creep and 100% on-time client acceptance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a href="#client-projects" className="btn btn-ink">
            <span>Explore project case studies</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-outline">
            <span>Hiring or need delivery support? Let&apos;s talk</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Interactive Cobalt Metro Line Strip */}
      <div data-reveal style={{ '--d': '80ms' }} className="mb-8">
        <div
          role="tablist"
          aria-label="Career timeline stations"
          className="relative flex items-center justify-between gap-2 p-3 sm:p-4 rounded-2xl bg-surface-2 border-[1.5px] border-rule/15 overflow-x-auto"
        >
          {/* Continuous Cobalt horizontal rail behind station buttons */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute left-8 right-8 top-1/2 -translate-y-1/2 h-2 rounded-full bg-line-cobalt/35 pointer-events-none"
          />
          {TimeLineData.map((item, index) => {
            const isActive = activeItem === index;
            return (
              <button
                key={item.year}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show ${item.year} career entry`}
                onClick={() => handleSelectStation(index)}
                className={`relative z-10 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-extrabold font-wide transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.97] cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-line-cobalt text-on-cobalt shadow-[0_0_0_3px_rgb(var(--ink-rgb))]'
                    : 'bg-surface text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.22)] hover:shadow-[inset_0_0_0_1.5px_rgb(var(--ink-rgb))]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`w-2.5 h-2.5 rounded-full ${
                    isActive ? 'bg-surface' : 'bg-line-cobalt'
                  }`}
                />
                <span className="tabular">{item.year}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5 Career Station Cards */}
      <div
        data-reveal
        style={{ '--d': '140ms' }}
        aria-label="Career timeline"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch"
      >
        {TimeLineData.map((item, index) => {
          const isActive = activeItem === index;
          return (
            <article
              key={item.year}
              ref={(el) => { cardsRef.current[index] = el; }}
              onClick={() => setActiveItem(index)}
              className={`card card-lift p-5 flex flex-col justify-between cursor-pointer transition-colors ${
                isActive
                  ? 'ring-2 ring-line-cobalt bg-surface'
                  : 'bg-surface'
              }`}
            >
              <div>
                {/* Top station bar */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-rule/12">
                  <span className="inline-flex items-center gap-2 font-display text-lg text-ink tabular">
                    <span
                      aria-hidden="true"
                      className={`station !w-3 !h-3 ${
                        isActive ? '!bg-line-cobalt' : ''
                      }`}
                    />
                    {item.year}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-2 text-ink-2 text-[11px] font-extrabold font-wide tabular">
                    STOP 0{index + 1}
                  </span>
                </div>

                {item.role && (
                  <div className="mb-2.5">
                    <h3 className="text-base font-extrabold text-ink leading-snug">
                      {item.role}
                    </h3>
                    {item.company && (
                      <div className="text-xs font-bold text-line-cobalt mt-0.5 font-wide">
                        {item.company}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-rule/10 flex items-center justify-between text-[11px] font-bold text-ink-2">
                <span>COBALT LINE</span>
                {index === TimeLineData.length - 1 ? (
                  <span className="px-2 py-0.5 rounded-full bg-line-green text-on-green font-extrabold">
                    CURRENT
                  </span>
                ) : (
                  <span aria-hidden="true">→</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </RouteSection>
  );
};

export default Timeline;
