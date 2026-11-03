import React from 'react';
import { ArrowRight, Download, Eye } from 'lucide-react';

// Every figure below is already stated in the case studies and the CV.
const LEDGER = [
  {
    figure: 'PKR 700M+',
    label: 'Portfolio governed',
    detail: '150+ operational sites under one PMO at AJCL, reported through Power BI.',
  },
  {
    figure: 'PKR 103M+',
    label: 'Saved through EVM control',
    detail: '22.5% under baseline on the nationwide FBR Track & Trace deployment.',
  },
  {
    figure: '80%',
    label: 'Less schedule slippage',
    detail: 'CPM scheduling and PMO controls across the AJCL site portfolio.',
  },
  {
    figure: '0% scope creep',
    label: '100% on-time acceptance',
    detail: 'Concurrent SaaS engineering sprints at Sigma Digital Solutions.',
  },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-paper text-ink">
      <div className="frame pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1
              className="rise font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.5rem] text-ink mb-5"
              style={{ '--d': '40ms' }}
            >
              Haris Arshad<span className="text-accent">, PMP®</span>
            </h1>
            <p
              className="rise font-display text-xl sm:text-2xl lg:text-[1.75rem] text-accent mb-7 leading-snug"
              style={{ '--d': '110ms' }}
            >
              Technical Project Manager &amp; Delivery Lead
            </p>

            <p
              className="rise text-base sm:text-[1.0625rem] text-ink-2 leading-[1.7] max-w-[62ch] mb-9"
              style={{ '--d': '180ms' }}
            >
              PMP®-certified Technical Project Manager with 6+ years of technical delivery experience, including 3+ years directing cross-functional software engineering, cloud platform, and SaaS initiatives across Fixed Price and T&amp;M models. Proven track record leading distributed squads across enterprise portfolios valued up to PKR 700M+ — bridging technical PMO governance with modern SDLC execution.
            </p>

            <div
              className="rise flex flex-wrap items-center gap-x-4 gap-y-3 mb-8"
              style={{ '--d': '250ms' }}
            >
              <button
                type="button"
                className="btn btn-accent"
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
                className="group inline-flex items-center gap-1.5 min-h-[2.9rem] px-1 text-[0.9375rem] font-semibold text-accent cursor-pointer"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="underline decoration-accent/35 underline-offset-4 group-hover:decoration-accent transition-colors">
                  Discuss a project
                </span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>

            <p
              className="rise inline-flex items-center gap-2.5 text-sm text-ink-2"
              style={{ '--d': '320ms' }}
            >
              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-ok" />
              Open to PM/PMO leadership &amp; advisory · Islamabad, Pakistan
            </p>
          </div>

          <figure className="rise lg:col-span-5 w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto" style={{ '--d': '160ms' }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-2">
              <picture>
                <source srcSet="/images/haris-arshad-profile.webp" type="image/webp" />
                <img
                  src="/images/haris-arshad-profile.jpeg"
                  alt="Engr. Haris Arshad, PMP® Certified Project Manager"
                  width={420}
                  height={525}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 meta">
              <span>Engr. Haris Arshad</span>
              <span>PMP® · PE (PEC) · MS Project Management</span>
            </figcaption>
          </figure>
        </div>

        {/* Ledger of verified figures */}
        <dl
          className="mt-16 sm:mt-20 border-t border-rule/20"
          aria-label="Selected delivery results"
        >
          {LEDGER.map(({ figure, label, detail }, index) => (
            <div
              key={figure}
              data-reveal
              style={{ '--d': `${index * 60}ms` }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-1 py-5 sm:py-6 border-b border-rule/12 items-baseline"
            >
              <dt className="sm:col-span-4 font-figure text-[1.75rem] sm:text-[2.25rem] leading-none text-ink">
                {figure}
              </dt>
              <dd className="sm:col-span-3 text-[0.9375rem] font-semibold text-accent">{label}</dd>
              <dd className="sm:col-span-5 text-sm text-ink-2 leading-relaxed">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
