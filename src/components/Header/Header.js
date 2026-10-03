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
        <a style={{display:"flex",alignItems:"center"}}>
          <DiCssdeck size="3rem"/> <Span>Haris Arshad </Span>
        </a>
      </Link>
    </Div1>
    <Div2 as="nav" aria-label="Primary navigation">
      <Link href="#about" passHref>
        <NavLink>About</NavLink>
      </Link>
      <Link href="#projects" passHref>
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#recommendations" passHref>
        <NavLink>Recommendations</NavLink>
      </Link>
      <Link href="#skills" passHref>
        <NavLink>Skills</NavLink>
      </Link>
      <Link href="#credentials" passHref>
        <NavLink>Credentials</NavLink>
      </Link>
      <Link href="#contact" passHref>
        <NavLink>Contact</NavLink>
      </Link>
    </Div2>
    <Div3>
      <ThemeToggle />
        <SocialIcons href='https://github.com/harisarshad235' target='_blank' rel='noopener noreferrer' aria-label='Visit Haris Arshad on GitHub'>
        <AiFillGithub size="3rem" aria-hidden="true"/>
      </SocialIcons>
      <SocialIcons href='https://pk.linkedin.com/in/haris-arshad' target='_blank' rel='noopener noreferrer' aria-label='Visit Haris Arshad on LinkedIn'>
        <AiFillLinkedin size="3rem" aria-hidden="true"/>
      </SocialIcons>

    </Div3>

  </Container>
 
);

export default Header;
