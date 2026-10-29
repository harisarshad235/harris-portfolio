import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-terminus text-terminus-ink night pt-14 pb-10">
      <div className="frame-flush">
        {/* 4-Column System Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/15">
          <div>
            <div className="inline-flex items-center gap-2 font-wide font-extrabold text-xs text-line-cobalt mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-line-cobalt" />
              <span>NAVIGATION LINES</span>
            </div>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li><a href="#about" className="hover:text-line-sunflower transition-colors">L1 · About &amp; Career Route</a></li>
              <li><a href="#products" className="hover:text-line-sunflower transition-colors">L2 · Flagship SaaS Products</a></li>
              <li><a href="#client-projects" className="hover:text-line-sunflower transition-colors">L3 · Client Case Studies</a></li>
              <li><a href="#skills" className="hover:text-line-sunflower transition-colors">L4 · Technology &amp; PMO Stack</a></li>
              <li><a href="#credentials" className="hover:text-line-sunflower transition-colors">L5 · Credentials &amp; PMP®</a></li>
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 font-wide font-extrabold text-xs text-line-vermilion mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-line-vermilion" />
              <span>ORIGINAL SAAS PRODUCTS</span>
            </div>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <a href="https://hubito.harisarshad.site/tour" target="_blank" rel="noopener noreferrer" className="hover:text-line-sunflower transition-colors">
                  Hubito — Task Command Center ↗
                </a>
              </li>
              <li>
                <a href="https://pacio.harisarshad.site/" target="_blank" rel="noopener noreferrer" className="hover:text-line-sunflower transition-colors">
                  Pacio — Agile Sprint Engine ↗
                </a>
              </li>
              <li>
                <a href="https://pacio.harisarshad.site/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-line-sunflower transition-colors">
                  Pacio Live Workspace ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 font-wide font-extrabold text-xs text-line-sunflower mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-line-sunflower" />
              <span>DIRECT DISPATCH</span>
            </div>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <a href="mailto:harisarshad235@gmail.com" className="hover:text-line-sunflower transition-colors">
                  harisarshad235@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923095597954" className="hover:text-line-sunflower transition-colors tabular">
                  +92 309 5597954
                </a>
              </li>
              <li>
                <a href="https://calendly.com/harisarshad235/30min" target="_blank" rel="noopener noreferrer" className="hover:text-line-sunflower transition-colors">
                  Book 30-min Consultation ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 font-wide font-extrabold text-xs text-line-green mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-line-green" />
              <span>RESOURCES &amp; AI INDEX</span>
            </div>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <a href="/resume/haris-arshad-cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-line-sunflower transition-colors">
                  View / Download CV (PDF) ↗
                </a>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-line-sunflower transition-colors">
                  llms.txt (AI Agent Context)
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-line-sunflower transition-colors">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Identity & Social Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-white font-semibold">
              <strong className="font-display tracking-tight">ENGR. HARIS ARSHAD, PMP®</strong> — Technical Project Manager, PMO Lead &amp; Product Architect · Islamabad, PK
            </p>
            <p className="text-xs text-white/60 mt-1">
              © {currentYear} Haris Arshad. Engineered for clarity, governance, and high-velocity delivery.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/harisarshad235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Haris Arshad on GitHub"
              className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0E1116] inline-flex items-center justify-center transition-colors"
            >
              <AiFillGithub className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://pk.linkedin.com/in/haris-arshad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Haris Arshad on LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-line-cobalt hover:text-on-cobalt inline-flex items-center justify-center transition-colors"
            >
              <AiFillLinkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Closing 6-Line Transit Bar */}
      <div aria-hidden="true" className="grid grid-cols-6 h-2 w-full mt-8">
        <span className="bg-line-cobalt" />
        <span className="bg-line-vermilion" />
        <span className="bg-line-sunflower" />
        <span className="bg-line-green" />
        <span className="bg-line-violet" />
        <span className="bg-line-magenta" />
      </div>
    </footer>
  );
};

export default Footer;
