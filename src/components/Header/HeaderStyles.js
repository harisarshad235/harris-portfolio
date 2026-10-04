import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas: "brand navigation controls";
  gap: 1.6rem;
  padding: 1.2rem 2.4rem;
  align-items: center;
  background: ${(props) => props.theme.mode === 'dark'
    ? 'rgba(21, 29, 31, 0.92)'
    : 'rgba(244, 240, 234, 0.92)'};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      "brand controls"
      "navigation navigation";
    row-gap: 0.8rem;
    padding: 1.2rem 1.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8rem 1.2rem 1.2rem;
  }
`;

export const ThemeToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.primary1};
  background: transparent;
  cursor: pointer;
  transition: color 180ms ease, background 180ms ease, border-color 180ms ease;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.accent1};
    background: ${(props) => props.theme.colors.softSurface};
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem clamp(1.2rem, 2vw, 2.8rem);
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: space-between;
    column-gap: 0.8rem;
  }
`;
export const Div3 = styled.div`
  grid-area: controls;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.6rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: controls;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  position: relative;
  min-height: 4rem;
  font-size: 1.55rem;
  font-weight: ${(props) => props.$active ? 700 : 500};
  line-height: 1.3;
  white-space: nowrap;
  color: ${(props) => props.$active ? props.theme.colors.primary1 : props.theme.colors.muted};
  transition: color 0.25s ease, font-weight 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.7rem;
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
    font-size: 1.45rem;
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