import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 23rem;
  overflow: hidden;
  background: #10182c;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    z-index: 0;
    inset: 0;
    background: linear-gradient(180deg, rgba(8, 12, 23, 0.34), rgba(8, 12, 23, 0.05) 60%, rgba(8, 12, 23, 0.52));
    content: '';
    pointer-events: none;
  }
`;

export const Img = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 450ms ease;
`

export const ProjectArtwork = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: radial-gradient(ellipse at 72% 26%, rgba(57, 105, 205, 0.3), transparent 36%), linear-gradient(135deg, #111b34, #080c17 74%);
  color: #77a1ff;

  svg {
    position: absolute;
    width: min(80%, 46rem);
    height: 100%;
    right: 1.5rem;
    bottom: 0;
  }

  span {
    position: absolute;
    left: 2.4rem;
    bottom: 2rem;
    color: rgba(219, 229, 255, 0.72);
    font-size: 1.1rem;
    letter-spacing: 0.18em;
  }
`;

export const ProjectCategory = styled.span`
  position: absolute;
  z-index: 1;
  top: 1.6rem;
  left: 1.6rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(12, 16, 28, 0.78);
  color: #f5f7ff;
  font-size: 1.2rem;
  font-weight: 600;
  backdrop-filter: blur(12px);
`;

export const ProjectClient = styled.p`
  margin: 0 0 0.6rem;
  color: #78a4ff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  padding: 3rem 0;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0 0 1rem;
`;

export const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  background: ${(props) => props['aria-pressed'] ? props.theme.colors.primary1 : 'transparent'};
  color: ${(props) => props['aria-pressed'] ? props.theme.colors.background1 : props.theme.colors.primary1};
  font: inherit;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary1};
  }

  &:focus-visible {
    outline: 3px solid rgba(26, 135, 129, 0.35);
    outline-offset: 2px;
  }
`;

export const FilterCount = styled.span`
  color: inherit;
  font-size: 1.2rem;
  opacity: 0.72;
`;

export const FilterStatus = styled.p`
  min-height: 1.8rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.3rem;
`;

export const BlogCard = styled.div`
  background: #12141d;
  border: 1px solid #242735;
  border-radius: 1.6rem;
  box-shadow: 0 16px 40px rgba(6, 10, 20, 0.2);
  text-align: left;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #5079c9;
    box-shadow: 0 22px 50px rgba(6, 10, 20, 0.32);

    img {
      transform: scale(1.04);
    }
  }

  .project-card-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.2rem 2.4rem 2.4rem;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #f6f7fb;
  padding: 0;
  margin: 0 0 1rem;
  font-size: ${(props) => props.$large ? '2.35rem' : '2rem'};
  line-height: 1.25;
`;

export const Hr = styled.hr`
  width: 52px;
  height: 3px;
  margin: 1.4rem auto 1.8rem;
  border: 0;
  background: ${(props) => props.theme.colors.accent1};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.muted};
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0;
  color: #a5aab8;
  font-size: 1.45rem;
  line-height: 1.6;
  text-align: left;
  margin: 0 0 1.2rem;
`;

export const ProjectImpact = styled.p`
  width: 100%;
  padding: 0;
  margin: 0 0 1.8rem;
  color: #81c7bd;
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: left;

  strong {
    color: #f2f4fa;
    margin-right: 0.4rem;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.6rem;
  align-items: center;
  justify-content: space-between;
  margin: auto 0 0;
`;

export const ExternalLinks = styled.a`
  color: #a5aab8;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 180ms ease;

  &:hover {
    color: #8eb0ff;
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }
`;

export const CardLink = styled.a`
  color: #f3f5fb;
  font-size: 1.45rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 180ms ease;

  span {
    display: inline-block;
    margin-left: 0.5rem;
    transition: transform 180ms ease;
  }

  &:hover {
    color: #8eb0ff;

    span {
      transform: translateX(0.4rem);
    }
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem 0.9rem;
  padding: 0 1.5rem 1.2rem;
  margin: 0;
  list-style: none;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.3rem;
  line-height: 1.4;
  white-space: normal;
  text-align: center;
`