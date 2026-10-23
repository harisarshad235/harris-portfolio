import styled from 'styled-components';

export const AboutActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem 2rem;
  margin: -1.2rem 0 3.2rem;
`;

export const AboutLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 4.4rem;
  padding: ${(props) => props.$primary ? '0 1.8rem' : '0'};
  border: ${(props) => props.$primary ? `1px solid ${props.theme.colors.accent1}` : '1px solid transparent'};
  border-radius: ${(props) => props.$primary ? '1.2rem' : '0'};
  background: ${(props) => props.$primary ? props.theme.colors.accent1 : 'transparent'};
  color: ${(props) => props.$primary ? props.theme.colors.accentForeground : props.theme.colors.teal};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1), color 180ms ease, background 180ms ease, border-color 180ms ease;

  &:hover {
    color: ${(props) => props.$primary ? props.theme.colors.accentForeground : props.theme.colors.accent1};
    background: ${(props) => props.$primary ? props.theme.colors.accent1 : 'transparent'};
    border-color: ${(props) => props.$primary ? props.theme.colors.accent1 : 'transparent'};
    filter: ${(props) => props.$primary ? 'brightness(0.94)' : 'none'};
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }
`;

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  width: 100%;
  background: transparent;
  padding: 0.4rem 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.6rem;
  margin-left: 0;
  margin-bottom: 5.6rem;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    gap: 1.4rem;
    margin-bottom: 1.6rem;
    padding-bottom: 0.8rem;
  }
`;

export const CarouselMobileScrollNode = styled.li`
  display: flex;
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    flex: 0 0 250px;
    min-width: 250px;
  }
`;

export const CarouselItem = styled.div`
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 1.6rem;
  padding: 1.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.mode === 'dark'
    ? '0 1px 3px rgba(0, 0, 0, 0.4), 0 6px 16px rgba(0, 0, 0, 0.3)'
    : '0 1px 3px rgba(15, 23, 42, 0.03), 0 6px 16px rgba(15, 23, 42, 0.03)'};
  transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1), border-color 200ms ease, box-shadow 200ms ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-4px);
      border-color: ${(props) => props.theme.colors.accent1};
      box-shadow: ${(props) => props.theme.mode === 'dark'
        ? '0 4px 16px rgba(0, 0, 0, 0.5), 0 0 28px -8px rgba(16, 185, 129, 0.25)'
        : '0 4px 12px rgba(10, 24, 18, 0.05), 0 14px 28px rgba(10, 24, 18, 0.06)'};
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    scroll-snap-align: start;
    padding: 1.6rem;
    ${(props) => props.active === props.index ? `opacity: 1; border-color: ${props.theme.colors.accent1};` : `opacity: 0.82;`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.7rem;
    margin-bottom: 0.8rem;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-left: 1.2rem;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;
  flex: 1;

  @media ${(props) => props.theme.breakpoints.md} {
    -webkit-mask-image: none;
    margin-left: 1rem;
    overflow: visible;
  }
`;

export const CarouselItemRole = styled.div`
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.35;
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 0.3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
  }
`;

export const CarouselItemCompany = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.teal};
  margin-top: 0.2rem;
  margin-bottom: 0.8rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.2rem;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 1.38rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.muted};
  padding-right: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.35rem;
    line-height: 1.55;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    visibility: visible;
    margin-bottom: 3.6rem;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 0.8rem;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1), opacity 160ms ease;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.teal};
    outline-offset: 2px;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: ${(props) => props.theme.colors.accent1};
  border-radius: 10px;
  margin: auto;
  width: 6px;
  height: 6px;
`;
