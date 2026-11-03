import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const linkClass =
  'text-close-ink/80 underline decoration-transparent underline-offset-4 hover:text-close-ink hover:decoration-close-accent transition-colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-close text-close-ink border-t border-close-ink/15 pt-14 pb-10">
      <div className="frame">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-close-ink/15">
          <div>
            <h2 className="font-display text-lg text-close-ink mb-4">Navigate</h2>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className={linkClass}>About &amp; career</a></li>
              <li><a href="#products" className={linkClass}>Original SaaS products</a></li>
              <li><a href="#client-projects" className={linkClass}>Client case studies</a></li>
              <li><a href="#skills" className={linkClass}>Technology &amp; PMO stack</a></li>
              <li><a href="#credentials" className={linkClass}>Credentials &amp; PMP®</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-close-ink mb-4">Products</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://hubito.harisarshad.site/tour" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Hubito — Task Command Center ↗
                </a>
              </li>
              <li>
                <a href="https://pacio.harisarshad.site/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Pacio — Agile Sprint Engine ↗
                </a>
              </li>
              <li>
                <a href="https://pacio.harisarshad.site/dashboard" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Pacio Live Workspace ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-close-ink mb-4">Get in touch</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:harisarshad235@gmail.com" className={linkClass}>
                  harisarshad235@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923095597954" className={`${linkClass} tabular`}>
                  +92 309 5597954
                </a>
              </li>
              <li>
                <a href="https://calendly.com/harisarshad235/30min" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Book 30-min consultation ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-close-ink mb-4">Resources</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/resume/haris-arshad-cv.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  View / download CV (PDF) ↗
                </a>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  llms.txt (AI agent context)
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  XML sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-close-ink">
              <strong className="font-display text-base font-medium">Engr. Haris Arshad, PMP®</strong>
              <span className="text-close-ink/75"> — Technical Project Manager, PMO Lead &amp; Product Architect · Islamabad, PK</span>
            </p>
            <p className="text-xs text-close-ink/60 mt-1">
              © {currentYear} Haris Arshad. Engineered for clarity, governance, and high-velocity delivery.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/harisarshad235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Haris Arshad on GitHub"
              className="w-10 h-10 rounded-md text-close-ink hover:bg-close-ink/10 inline-flex items-center justify-center transition-colors"
            >
              <AiFillGithub className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://pk.linkedin.com/in/haris-arshad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Haris Arshad on LinkedIn"
              className="w-10 h-10 rounded-md text-close-ink hover:bg-close-ink/10 inline-flex items-center justify-center transition-colors"
            >
              <AiFillLinkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
