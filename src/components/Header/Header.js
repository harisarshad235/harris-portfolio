import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMoon, FiSun, FiFileText, FiArrowUpRight } from 'react-icons/fi';

import { useThemeMode } from '../../styles/theme';

const NAV_ITEMS = [
  { href: '#about', label: 'About', dot: 'bg-line-cobalt' },
  { href: '#products', label: 'Products', dot: 'bg-line-vermilion' },
  { href: '#client-projects', label: 'Client Work', dot: 'bg-line-sunflower' },
  { href: '#skills', label: 'Skills', dot: 'bg-line-green' },
  { href: '#credentials', label: 'Credentials', dot: 'bg-line-violet' },
  { href: '#recommendations', label: 'Endorsements', dot: 'bg-line-magenta' },
  { href: '#contact', label: 'Contact', dot: 'bg-line-cobalt' },
];

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();
  const nextMode = mode === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextMode} mode`}
      aria-pressed={mode === 'dark'}
      title={`Switch to ${nextMode === 'dark' ? 'Night Service' : 'Day Service'}`}
      className="inline-flex items-center gap-1.5 h-10 px-3 rounded-full bg-surface text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.22)] hover:shadow-[inset_0_0_0_1.5px_rgb(var(--ink-rgb))] active:scale-[0.97] transition-[transform,box-shadow,background-color] duration-150 cursor-pointer text-xs font-bold font-wide"
    >
      {mode === 'dark' ? (
        <>
          <FiSun className="w-4 h-4 text-line-sunflower shrink-0" aria-hidden="true" />
          <span className="hidden xl:inline">Night</span>
        </>
      ) : (
        <>
          <FiMoon className="w-4 h-4 text-line-cobalt shrink-0" aria-hidden="true" />
          <span className="hidden xl:inline">Day</span>
        </>
      )}
    </button>
  );
};

const Header = () => {
  const { mode } = useThemeMode();
  const [activeHref, setActiveHref] = useState('#about');

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const nav = document.querySelector('[aria-label="Primary navigation"]');
        const headerHeight = nav?.closest('header')?.getBoundingClientRect().height || 88;
        const offset = headerHeight + 24;
        const sections = NAV_ITEMS
          .map(({ href }) => ({ href, element: document.getElementById(href.slice(1)) }))
          .filter(({ element }) => element)
          .sort((first, second) => first.element.getBoundingClientRect().top - second.element.getBoundingClientRect().top);

        if (!sections.length) return;

        const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
        let current = (atPageBottom ? sections[sections.length - 1]?.href : sections[0]?.href) || '';

        if (!atPageBottom) {
          sections.forEach(({ href, element }) => {
            if (element.getBoundingClientRect().top - offset <= 0) current = href;
          });
        }

        setActiveHref(current);
      });
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper border-b-[1.5px] border-rule/15">
      {/* Multi-line signature strip at top of header */}
      <div aria-hidden="true" className="grid grid-cols-6 h-1.5 w-full">
        <span className="bg-line-cobalt" />
        <span className="bg-line-vermilion" />
        <span className="bg-line-sunflower" />
        <span className="bg-line-green" />
        <span className="bg-line-violet" />
        <span className="bg-line-magenta" />
      </div>

      <div className="frame-flush py-3 flex items-center justify-between gap-3">
        {/* Brand Station Nameplate */}
        <Link href="/">
          <a className="inline-flex items-center gap-2.5 shrink-0 group">
            <img
              src={mode === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
              alt="Haris Arshad logo"
              width="36"
              height="36"
              className="w-9 h-9 rounded-lg shrink-0"
            />
            <span className="font-display text-lg sm:text-xl tracking-tight text-ink">
              HARIS ARSHAD
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-line-sunflower text-on-sunflower text-xs font-extrabold font-wide">
              PMP®
            </span>
          </a>
        </Link>

        {/* Desktop Transit Route Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full bg-surface-2 shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.14)]"
        >
          {NAV_ITEMS.map(({ href, label, dot }) => {
            const isActive = activeHref === href;
            return (
              <Link href={href} passHref key={href}>
                <a
                  aria-current={isActive ? 'location' : undefined}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold font-wide transition-[background-color,color,transform] duration-150 active:scale-[0.97] whitespace-nowrap ${
                    isActive
                      ? 'bg-ink text-paper'
                      : 'text-ink hover:bg-surface'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`w-2.5 h-2.5 rounded-full ${dot} ${
                      isActive
                        ? 'ring-2 ring-paper'
                        : 'ring-1 ring-ink/40'
                    }`}
                  />
                  <span>{label}</span>
                </a>
              </Link>
            );
          })}
        </nav>

        {/* Controls & Primary Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />

          <a
            href="https://github.com/harisarshad235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Haris Arshad on GitHub"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.22)] hover:bg-ink hover:text-paper transition-colors duration-150"
          >
            <AiFillGithub className="w-5 h-5" aria-hidden="true" />
          </a>

          <a
            href="https://pk.linkedin.com/in/haris-arshad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Haris Arshad on LinkedIn"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface text-ink shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.22)] hover:bg-line-cobalt hover:text-on-cobalt transition-colors duration-150"
          >
            <AiFillLinkedin className="w-5 h-5" aria-hidden="true" />
          </a>

          <a
            href="/resume/haris-arshad-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View or download Haris Arshad's resume"
            className="btn btn-outline btn-sm hidden md:inline-flex"
          >
            <FiFileText className="w-4 h-4" aria-hidden="true" />
            <span>Resume</span>
          </a>

          <a href="#contact" className="btn btn-ink btn-sm">
            <span>Work with me</span>
            <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Mobile / Tablet horizontal station hopper */}
      <div className="lg:hidden border-t border-rule/12 bg-surface-2/70 overflow-x-auto">
        <div className="frame-flush py-2 flex items-center gap-1.5 min-w-max">
          {NAV_ITEMS.map(({ href, label, dot }) => {
            const isActive = activeHref === href;
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'location' : undefined}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-wide whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-ink text-paper'
                    : 'bg-surface text-ink shadow-[inset_0_0_0_1px_rgb(var(--rule-rgb)/0.18)]'
                }`}
              >
                <span aria-hidden="true" className={`w-2 h-2 rounded-full ${dot}`} />
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
