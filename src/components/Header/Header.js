import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useThemeMode } from '../../styles/theme';
import { BrandImage, Container, Div1, Div2, Div3, NavAction, NavLink, SocialIcons, Span, ThemeToggleButton } from './HeaderStyles';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();
  const nextMode = mode === 'dark' ? 'light' : 'dark';

  return (
    <ThemeToggleButton
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextMode} mode`}
      aria-pressed={mode === 'dark'}
      title={`Switch to ${nextMode} mode`}
    >
      {mode === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </ThemeToggleButton>
  );
};

const Header = () => {
  const { mode } = useThemeMode();
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const nav = document.querySelector('[aria-label="Primary navigation"]');
        const headerHeight = nav?.parentElement?.getBoundingClientRect().height || 88;
        const offset = headerHeight + 12;
        const sections = NAV_ITEMS
          .map(({ href }) => ({ href, element: document.getElementById(href.slice(1)) }))
          .filter(({ element }) => element)
          .sort((first, second) => first.element.getBoundingClientRect().top - second.element.getBoundingClientRect().top);
        const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
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
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:"flex",alignItems:"center"}}>
          <BrandImage
            src={mode === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
            alt="Haris Arshad logo"
          />
          <Span>Haris Arshad</Span>
        </a>
      </Link>
    </Div1>
    <Div2 as="nav" aria-label="Primary navigation">
      {NAV_ITEMS.map(({ href, label }) => (
        <Link href={href} passHref key={href}>
          <NavLink $active={activeHref === href} aria-current={activeHref === href ? 'location' : undefined}>
            {label}
          </NavLink>
        </Link>
      ))}
    </Div2>
    <Div3>
      <ThemeToggle />
        <SocialIcons href='https://github.com/harisarshad235' target='_blank' rel='noopener noreferrer' aria-label='Visit Haris Arshad on GitHub'>
        <AiFillGithub size="3rem" aria-hidden="true"/>
      </SocialIcons>
      <SocialIcons href='https://pk.linkedin.com/in/haris-arshad' target='_blank' rel='noopener noreferrer' aria-label='Visit Haris Arshad on LinkedIn'>
        <AiFillLinkedin size="3rem" aria-hidden="true"/>
      </SocialIcons>
      <NavAction href="/resume/haris-arshad-cv.pdf" download="haris-arshad-cv.pdf" aria-label="Download Haris Arshad's resume" $secondary>
        Resume
      </NavAction>
      <NavAction href="#contact">
        Work with me
      </NavAction>
    </Div3>

  </Container>
  );
};

export default Header;
