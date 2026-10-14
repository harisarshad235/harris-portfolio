import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas: "brand navigation controls";
  gap: clamp(0.6rem, 1vw, 1.5rem);
  padding: 0.9rem clamp(1rem, 1.8vw, 2.2rem);
  align-items: center;
  background: ${(props) => props.theme.mode === 'dark'
    ? 'rgba(21, 29, 31, 0.94)'
    : 'rgba(244, 240, 234, 0.94)'};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  @media screen and (max-width: 1060px) {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      "brand controls"
      "navigation navigation";
    row-gap: 0.8rem;
    padding: 1.1rem 1.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8rem 1.2rem;
  }
`;

export const ThemeToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;
  height: 3.8rem;
  padding: 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 1.2rem;
  color: ${(props) => props.theme.colors.primary1};
  background: ${(props) => props.theme.colors.background2};
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(17, 24, 28, 0.04);
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1), color 160ms ease, background 160ms ease, border-color 160ms ease;

  svg {
    width: 1.9rem;
    height: 1.9rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.accent1};
    background: ${(props) => props.theme.colors.softSurface};
    border-color: ${(props) => props.theme.colors.accent1};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }
`;

export const Span= styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary1};
  font-weight: 700;
`;

export const BrandImage = styled.img`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 0.8rem;
  object-fit: contain;
`;

export const Div1 = styled.div`
  grid-area: brand;
  display: flex;
  flex-direction: row;

  a {
    min-width: 0;
    color: inherit;
  }
`;
export const Div2 = styled.div`
  grid-area: navigation;
  display: flex;
  align-items: center;
  justify-content: safe center;
  flex-wrap: nowrap;
  gap: clamp(0.4rem, 0.85vw, 1.4rem);
  min-width: 0;
  padding: 0 0.4rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1060px) {
    justify-content: flex-start;
    padding: 0.3rem 0;
    gap: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: flex-start;
    gap: 0.8rem;
  }
`;
export const Div3 = styled.div`
  grid-area: controls;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;

  @media screen and (max-width: 1220px) {
    > a[aria-label^="Visit"] {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.6rem;
  }
`;

export const NavAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.6rem;
  padding: 0.7rem 1.3rem;
  border: 1px solid ${(props) => props.$secondary ? props.theme.colors.border : props.theme.colors.accent1};
  border-radius: 1.2rem;
  background: ${(props) => props.$secondary ? 'transparent' : props.theme.colors.accent1};
  color: ${(props) => props.$secondary ? props.theme.colors.primary1 : props.theme.colors.accentForeground};
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(17, 24, 28, 0.04);
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1), background-color 160ms ease, color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary1};
    background: ${(props) => props.$secondary ? props.theme.colors.softSurface : props.theme.colors.primary1};
    color: ${(props) => props.$secondary ? props.theme.colors.primary1 : props.theme.colors.background1};
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 3.4rem;
    padding: 0.6rem 0.9rem;
    font-size: 1.15rem;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  position: relative;
  min-height: 3.6rem;
  font-size: clamp(1.22rem, 0.9vw, 1.45rem);
  font-weight: ${(props) => props.$active ? 700 : 500};
  line-height: 1.3;
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0 0.2rem;
  color: ${(props) => props.$active ? props.theme.colors.primary1 : props.theme.colors.muted};
  transition: color 0.25s ease, font-weight 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0.3rem;
    right: 0.3rem;
    bottom: 0.4rem;
    height: 2px;
    background: ${(props) => props.theme.colors.accent1};
    transform: scaleX(${(props) => props.$active ? 1 : 0});
    transform-origin: center;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.accent1};
    opacity: 1;
    cursor: pointer;
  }

  &:focus-visible {
    outline: 3px solid #1A8781;
    outline-offset: 4px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.35rem;
    min-height: 3.2rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: ${(props) => props.theme.colors.primary1};
border-radius: 50px;
  padding: 8px;

&:focus-visible {
  outline: 3px solid ${(props) => props.theme.colors.teal};
  outline-offset: 3px;
}

&:hover {
    background-color: ${(props) => props.theme.colors.softSurface};
    transform: scale(1.2);
    cursor: pointer;
  }
`;