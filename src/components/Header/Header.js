import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useThemeMode } from '../../styles/theme';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, ThemeToggleButton } from './HeaderStyles';

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

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:"flex",alignItems:"center",marginBottom:"20"}}>
          <DiCssdeck size="3rem"/> <Span>Harris Arshad </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <ThemeToggle />
        <SocialIcons href='https://github.com/harisarshad235' target='_blank' rel='noopener noreferrer' aria-label='Visit Harris Arshad on GitHub'>
        <AiFillGithub size="3rem" aria-hidden="true"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/haris-arshad-11b757168/' target='_blank' rel='noopener noreferrer' aria-label='Visit Harris Arshad on LinkedIn'>
        <AiFillLinkedin size="3rem" aria-hidden="true"/>
      </SocialIcons>

    </Div3>

  </Container>
 
);

export default Header;
