import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 8.8rem;
  }

  @media (max-width: 768px) {
    html {
      scroll-padding-top: 14rem;
    }
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    min-width: 320px;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  ::selection {
    color: #fff;
    background: ${props => props.theme.colors.accent1};
  }
  li{
    list-style: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .motion-ready [data-reveal] {
      opacity: 0;
      transform: translate3d(0, 22px, 0);
      transition: opacity 650ms ease, transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1);
      transition-delay: var(--reveal-delay, 0ms);
    }

    .motion-ready [data-reveal].is-visible {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

`;

export default GlobalStyles;