import React from 'react';
import { Award, ArrowRight, Download, Eye, MapPin } from 'lucide-react';

const TICKER_ITEMS = [
  { code: 'L1', color: 'bg-line-cobalt text-on-cobalt', text: 'PKR 700M+ PORTFOLIO · 150+ OPERATIONAL SITES' },
  { code: 'L2', color: 'bg-line-vermilion text-on-vermilion', text: 'PKR 103M+ EVM COST SAVINGS · 22.5% UNDER BUDGET' },
  { code: 'L3', color: 'bg-line-sunflower text-on-sunflower', text: '80% SCHEDULE SLIPPAGE CUT VIA CPM GOVERNANCE' },
  { code: 'L4', color: 'bg-line-green text-on-green', text: '60% LOWER OPEX · 6M L FUEL SAVED (TELENOR THUNDER)' },
  { code: 'L5', color: 'bg-line-violet text-on-violet', text: '600K DAILY USERS · 60% LOWER INFRA COST (PLT AWS)' },
  { code: 'L6', color: 'bg-line-magenta text-on-magenta', text: '0% SCOPE CREEP · 100% ON-TIME ACCEPTANCE (SIGMA)' },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-paper text-ink border-b-[1.5px] border-rule/15 overflow-hidden">
      <div className="frame relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Continuous Left Route Rail Origin (Central Hub -> Line 1) */}
        <div
          aria-hidden="true"
          className="rail-x absolute top-10 bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none"
        >
          {/* Interchange double-ring origin node */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-surface shadow-[0_0_0_4px_rgb(var(--ink-rgb))] flex items-center justify-center z-10">
            <span className="w-3.5 h-3.5 rounded-full bg-line-cobalt" />
          </div>
          {/* Outgoing trunk lines */}
          <div className="w-2 sm:w-2.5 flex-1 rounded-b-full bg-line-cobalt" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 7/12: Maximalist Poster Typography + Executive Bio + CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              className="rise font-display text-4xl sm:text-6xl xl:text-[4.25rem] text-ink tracking-tight mb-5"
              style={{ '--d': '40ms' }}
            >
              <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-2">
                <span>HARIS ARSHAD</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-line-cobalt text-on-cobalt text-base sm:text-xl font-extrabold tracking-tight align-middle">
                  PMP®
                </span>
              </span>
              <span className="block mt-2.5 font-sans font-wide font-extrabold text-xl sm:text-2xl lg:text-3xl text-line-vermilion leading-snug tracking-tight">
                Technical Project Manager &amp; Delivery Lead
              </span>
            </h1>

            <p
              className="rise text-base sm:text-lg text-ink-2 leading-relaxed max-w-[66ch] mb-6 font-normal"
              style={{ '--d': '120ms' }}
            >
              PMP®-certified Technical Project Manager with 6+ years of technical delivery experience, including 3+ years directing cross-functional software engineering, cloud platform, and SaaS initiatives across Fixed Price and T&amp;M models. Proven track record leading distributed squads across enterprise portfolios valued up to PKR 700M+ — bridging technical PMO governance with modern SDLC execution.
            </p>

            {/* Station & Credential Pills */}
            <div
              className="rise flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-bold mb-8"
              style={{ '--d': '180ms' }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.2)]">
                <MapPin className="h-3.5 w-3.5 text-line-cobalt shrink-0" aria-hidden="true" />
                <span>Islamabad, Pakistan</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.2)]">
                <Award className="h-3.5 w-3.5 text-line-vermilion shrink-0" aria-hidden="true" />
                <span>PMP® Certified · PE (PEC) · MS PM</span>
              </span>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.2)]">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-line-green beacon" />
                <span>Open to PM/PMO leadership &amp; advisory</span>
              </span>
            </div>

            {/* Key Route Highlights (2 Asymmetric Transit Tickets) */}
            <div
              className="rise grid grid-cols-1 sm:grid-cols-12 gap-3.5 w-full max-w-2xl mb-8"
              style={{ '--d': '240ms' }}
            >
              <div className="sm:col-span-7 card card-lift p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-line-sunflower text-on-sunflower text-xs font-extrabold font-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                    22.5% Under Budget
                  </span>
                  <span className="text-xs font-bold text-ink-2 tabular">EVM CONTROL</span>
                </div>
                <div className="font-display text-2xl sm:text-3xl text-ink tabular">
                  PKR 103M+ SAVED
                </div>
                <p className="text-xs sm:text-sm text-ink-2 mt-1.5 leading-snug">
                  Captured cost savings on nationwide FBR Track &amp; Trace deployment using Earned Value variance controls.
                </p>
              </div>

              <div className="sm:col-span-5 card card-lift p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-line-cobalt text-on-cobalt text-xs font-extrabold font-wide">
                    PKR 700M+
                  </span>
                  <span className="text-xs font-bold text-ink-2 tabular">-80% SLIP</span>
                </div>
                <div className="font-display text-2xl sm:text-3xl text-ink tabular">
                  150+ SITES
                </div>
                <p className="text-xs sm:text-sm text-ink-2 mt-1.5 leading-snug">
                  CPM scheduling &amp; PMO controls cutting schedule slippage by 80% at AJCL.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="rise flex flex-wrap items-center gap-3 w-full"
              style={{ '--d': '300ms' }}
            >
              <button
                type="button"
                className="btn btn-ink"
                onClick={() => window.open('/resume/haris-arshad-cv.pdf', '_blank', 'noopener,noreferrer')}
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                <span>View CV</span>
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume/haris-arshad-cv.pdf';
                  link.download = 'haris-arshad-cv.pdf';
                  link.click();
                }}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </button>
              <button
                type="button"
                className="btn btn-sun"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Discuss a Project</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right 5/12: Maximalist Metro Network Board + Executive Portrait Station Hub */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] card p-4 sm:p-5 bg-surface overflow-hidden">
              {/* Top Map Board Header Strip */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b-[1.5px] border-rule/15">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-paper font-display text-xs">
                    HQ
                  </span>
                  <span className="font-wide font-extrabold text-xs sm:text-sm text-ink">
                    CRITICAL PATH NETWORK · ISLAMABAD
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-line-green text-on-green text-[11px] font-extrabold font-wide tabular">
                  6 LINES ACTIVE
                </span>
              </div>

              {/* Schematic SVG Metro Lines converging behind the portrait */}
              <div className="relative w-full aspect-[4/4.6] rounded-xl bg-surface-2 overflow-hidden border-[1.5px] border-rule/15">
                <svg
                  viewBox="0 0 400 460"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Subtle coordinate schematic crosshairs */}
                  <line x1="200" y1="0" x2="200" y2="460" stroke="rgb(var(--rule-rgb) / 0.08)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="230" x2="400" y2="230" stroke="rgb(var(--rule-rgb) / 0.08)" strokeWidth="1" strokeDasharray="4 4" />

                  {/* L1 Cobalt Line: top-left to center */}
                  <path
                    d="M -10 42 L 78 42 L 145 109 L 200 190"
                    fill="none"
                    stroke="rgb(var(--cobalt-rgb))"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="map-line"
                    style={{ '--d': '80ms' }}
                  />
                  {/* L2 Vermilion Line: top-right to center */}
                  <path
                    d="M 410 56 L 320 56 L 255 121 L 200 190"
                    fill="none"
                    stroke="rgb(var(--vermilion-rgb))"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="map-line"
                    style={{ '--d': '180ms' }}
                  />
                  {/* L3 Sunflower Line: mid-left to center */}
                  <path
                    d="M -10 185 L 64 185 L 105 226 L 200 226"
                    fill="none"
                    stroke="rgb(var(--sunflower-rgb))"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="map-line"
                    style={{ '--d': '260ms' }}
                  />
                  {/* L4 Green Line: mid-right to center */}
                  <path
                    d="M 410 205 L 336 205 L 295 246 L 200 246"
                    fill="none"
                    stroke="rgb(var(--green-rgb))"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="map-line"
                    style={{ '--d': '340ms' }}
                  />
                  {/* L5 Violet Line: bottom-left to center */}
                  <path
                    d="M -10 410 L 82 410 L 142 350 L 200 280"
                    fill="none"
                    stroke="rgb(var(--violet-rgb))"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="map-line"
                    style={{ '--d': '420ms' }}
                  />
                  {/* L6 Magenta Line: bottom-right to center */}
                  <path
                    d="M 410 418 L 318 418 L 258 358 L 200 280"
                    fill="none"
                    stroke="rgb(var(--magenta-rgb))"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="map-line"
                    style={{ '--d': '500ms' }}
                  />

                  {/* Station Dots along the 6 lines */}
                  <circle cx="78" cy="42" r="7" fill="rgb(var(--surface-rgb))" stroke="rgb(var(--ink-rgb))" strokeWidth="3.5" className="map-stop" style={{ '--d': '550ms' }} />
                  <circle cx="320" cy="56" r="7" fill="rgb(var(--surface-rgb))" stroke="rgb(var(--ink-rgb))" strokeWidth="3.5" className="map-stop" style={{ '--d': '620ms' }} />
                  <circle cx="64" cy="185" r="7" fill="rgb(var(--surface-rgb))" stroke="rgb(var(--ink-rgb))" strokeWidth="3.5" className="map-stop" style={{ '--d': '690ms' }} />
                  <circle cx="336" cy="205" r="7" fill="rgb(var(--surface-rgb))" stroke="rgb(var(--ink-rgb))" strokeWidth="3.5" className="map-stop" style={{ '--d': '760ms' }} />
                  <circle cx="82" cy="410" r="7" fill="rgb(var(--surface-rgb))" stroke="rgb(var(--ink-rgb))" strokeWidth="3.5" className="map-stop" style={{ '--d': '830ms' }} />
                  <circle cx="318" cy="418" r="7" fill="rgb(var(--surface-rgb))" stroke="rgb(var(--ink-rgb))" strokeWidth="3.5" className="map-stop" style={{ '--d': '900ms' }} />
                </svg>

                {/* Top Station Callout Pills */}
                <div className="relative z-10 flex items-center justify-between gap-2 px-3 pt-3">
                  <span
                    className="map-label inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-line-cobalt text-on-cobalt text-[11px] font-extrabold font-wide shadow-sm"
                    style={{ '--d': '600ms' }}
                  >
                    <span>L1 · AJCL PMO</span>
                  </span>
                  <span
                    className="map-label inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-line-vermilion text-on-vermilion text-[11px] font-extrabold font-wide shadow-sm"
                    style={{ '--d': '680ms' }}
                  >
                    <span>L2 · HUBITO &amp; PACIO</span>
                  </span>
                </div>

                {/* Central Executive Portrait Station Hub */}
                <div className="relative z-10 mx-auto mt-3 w-[68%] aspect-[4/4.7] rounded-2xl overflow-hidden bg-surface shadow-[0_0_0_4px_rgb(var(--ink-rgb)),0_14px_30px_rgba(0,0,0,0.22)]">
                  <picture>
                    <source srcSet="/images/haris-arshad-profile.webp" type="image/webp" />
                    <img
                      src="/images/haris-arshad-profile.jpeg"
                      alt="Engr. Haris Arshad, PMP® Certified Project Manager"
                      width={320}
                      height={380}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>

                  {/* Crisp Station Nameplate Strip at bottom of portrait */}
                  <div className="absolute inset-x-0 bottom-0 bg-ink text-paper px-3.5 py-2.5 border-t-2 border-line-sunflower flex items-center justify-between gap-2">
                    <div>
                      <div className="font-display text-xs sm:text-sm tracking-tight text-white">
                        ENGR. HARIS ARSHAD
                      </div>
                      <div className="text-[11px] font-bold text-[#FFCB3D] tabular">
                        PMP® · PE (PEC) · CENTRAL HUB
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_0_3px_#FFCB3D] shrink-0"
                    />
                  </div>
                </div>

                {/* Bottom Station Callout Pills */}
                <div className="relative z-10 flex items-center justify-between gap-2 px-3 pt-3 pb-3">
                  <span
                    className="map-label inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-line-violet text-on-violet text-[11px] font-extrabold font-wide shadow-sm"
                    style={{ '--d': '820ms' }}
                  >
                    <span>L5 · SOFTOO AGILE</span>
                  </span>
                  <span
                    className="map-label inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-line-magenta text-on-magenta text-[11px] font-extrabold font-wide shadow-sm"
                    style={{ '--d': '880ms' }}
                  >
                    <span>L6 · SIGMA DIGITAL</span>
                  </span>
                </div>
              </div>

              {/* Legend strip at bottom of map card */}
              <div className="mt-3 pt-2.5 border-t border-rule/12 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-ink-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="station !w-2.5 !h-2.5" /> Interchange Station
                </span>
                <span className="tabular">6+ YRS DELIVERY · 8 CASE STUDIES</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Departure Board Ticker */}
      <div className="board ticker w-full border-t-2 border-ink overflow-hidden py-3">
        <div className="ticker-track flex items-center gap-8 w-max px-4">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`a-${idx}`} className="inline-flex items-center gap-2.5 shrink-0 text-xs sm:text-sm">
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${item.color}`}>
                {item.code}
              </span>
              <span>{item.text}</span>
              <span aria-hidden="true" className="opacity-40 ml-4">●</span>
            </div>
          ))}
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`b-${idx}`} aria-hidden="true" className="ticker-dup inline-flex items-center gap-2.5 shrink-0 text-xs sm:text-sm">
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${item.color}`}>
                {item.code}
              </span>
              <span>{item.text}</span>
              <span className="opacity-40 ml-4">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
