import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMoon, FiSun, FiFileText, FiArrowUpRight, FiMail } from 'react-icons/fi';

import { useThemeMode } from '../../styles/theme';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#client-projects', label: 'Client work' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#recommendations', label: 'Endorsements' },
  { href: '#contact', label: 'Contact' },
];

const iconButton =
  'inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-2 hover:text-ink hover:bg-ink/5 active:scale-[0.96] transition-[transform,background-color,color] duration-150';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();
  const nextMode = mode === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextMode} mode`}
      aria-pressed={mode === 'dark'}
      title={`Switch to ${nextMode} mode`}
      className={`${iconButton} cursor-pointer`}
    >
      {mode === 'dark' ? (
        <FiSun className="w-[18px] h-[18px]" aria-hidden="true" />
      ) : (
        <FiMoon className="w-[18px] h-[18px]" aria-hidden="true" />
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
        const headerHeight = nav?.closest('header')?.getBoundingClientRect().height || 72;
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
    <header className="sticky top-0 z-50 w-full bg-paper border-b border-rule/12">
      <div className="frame py-3 flex items-center justify-between gap-3">
        {/* Wordmark */}
        <Link href="/">
          <a className="inline-flex items-center gap-2.5 shrink-0">
            <img
              src={mode === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
              alt="Haris Arshad logo"
              width="32"
              height="32"
              className="w-8 h-8 rounded-md shrink-0"
            />
            <span className="font-display text-lg sm:text-xl text-ink whitespace-nowrap">
              Haris Arshad
            </span>
          </a>
        </Link>

        {/* Desktop navigation: text only, the current section is underlined */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = activeHref === href;
            return (
              <Link href={href} passHref key={href}>
                <a
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-accent after:origin-left after:transition-transform after:duration-300 after:ease-out ${
                    isActive
                      ? 'text-ink after:scale-x-100'
                      : 'text-ink-2 hover:text-ink after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {label}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <a
            href="https://github.com/harisarshad235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Haris Arshad on GitHub"
            className={`${iconButton} hidden sm:inline-flex`}
          >
            <AiFillGithub className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://pk.linkedin.com/in/haris-arshad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Haris Arshad on LinkedIn"
            className={`${iconButton} hidden sm:inline-flex`}
          >
            <AiFillLinkedin className="w-5 h-5" aria-hidden="true" />
          </a>
          <ThemeToggle />

          <a
            href="/resume/haris-arshad-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View or download Haris Arshad's resume"
            className="btn btn-outline btn-sm hidden md:inline-flex ml-2"
          >
            <FiFileText className="w-4 h-4" aria-hidden="true" />
            <span>Resume</span>
          </a>

          {/* On phones the label gives way to an envelope so everything fits in
              375px. The label stays in the accessible name. */}
          <a href="#contact" aria-label="Work with me" className="btn btn-accent btn-sm ml-1 md:ml-1.5">
            <span className="hidden sm:inline">Work with me</span>
            <FiMail className="w-4 h-4 sm:hidden" aria-hidden="true" />
            <FiArrowUpRight className="hidden sm:inline w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Mobile / tablet section links */}
      <div className="lg:hidden border-t border-rule/10 overflow-x-auto">
        <div className="frame py-2 flex items-center gap-5 min-w-max">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = activeHref === href;
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'location' : undefined}
                className={`py-1 text-sm font-medium whitespace-nowrap border-b transition-colors ${
                  isActive
                    ? 'text-ink border-accent'
                    : 'text-ink-2 border-transparent'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
