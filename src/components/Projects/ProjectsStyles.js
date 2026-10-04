import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 22rem;
  overflow: hidden;
  background: ${(props) => props.theme.colors.softSurface};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem;
`;

export const Img = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 8px;
  filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.09));
  transition: transform 300ms ease, filter 300ms ease;
`;

export const ProjectArtwork = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: radial-gradient(ellipse at 72% 26%, rgba(26, 135, 129, 0.22), transparent 45%),
    linear-gradient(135deg, ${(props) => props.theme.colors.softSurface}, ${(props) => props.theme.colors.background1} 74%);
  color: ${(props) => props.theme.colors.teal};

  svg {
    position: absolute;
    width: min(80%, 46rem);
    height: 100%;
    right: 1.5rem;
    bottom: 0;
    opacity: 0.75;
  }

  span {
    position: absolute;
    left: 2.4rem;
    bottom: 2rem;
    color: ${(props) => props.theme.colors.muted};
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.18em;
  }
`;

export const ProjectCategory = styled.span`
  position: absolute;
  z-index: 1;
  top: 1.4rem;
  left: 1.4rem;
  padding: 0.5rem 1.1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 999px;
  background: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.15rem;
  font-weight: 600;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const ProjectClient = styled.p`
  margin: 0 0 0.6rem;
  color: ${(props) => props.theme.colors.teal};
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
  column-gap: 2.4rem;
  row-gap: 3.2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 1.6rem 0;
  }
`;

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
  padding: 0.8rem 1.4rem;
  border: 1px solid ${(props) => props['aria-pressed'] ? props.theme.colors.teal : props.theme.colors.border};
  border-radius: 999px;
  background: ${(props) => props['aria-pressed'] ? props.theme.colors.teal : props.theme.colors.background2};
  color: ${(props) => props['aria-pressed'] ? '#ffffff' : props.theme.colors.primary1};
  font: inherit;
  font-size: 1.35rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 180ms ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.teal};
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 2px;
  }
`;

export const FilterCount = styled.span`
  color: inherit;
  font-size: 1.15rem;
  opacity: 0.85;
`;

export const FilterStatus = styled.p`
  min-height: 1.8rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.35rem;
`;

export const BlogCard = styled.article`
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 2rem;
  box-shadow: 0 12px 32px rgba(29, 42, 45, 0.06);
  text-align: left;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.teal};
    box-shadow: 0 20px 48px rgba(29, 42, 45, 0.12);

    img {
      transform: scale(1.03);
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

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${(props) => props.theme.colors.primary1};
  padding: 0;
  margin: 0 0 1rem;
  font-size: ${(props) => props.$large ? '2.2rem' : '1.9rem'};
  line-height: 1.25;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.45rem;
  line-height: 1.6;
  text-align: left;
  margin: 0 0 1.4rem;
`;

export const ProjectMetaBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.4rem;
  width: 100%;
`;

export const ProjectMethodologyBadge = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.softSurface};
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.15rem;
  font-weight: 600;
`;

export const ProjectKpiBadge = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  background: rgba(229, 103, 79, 0.1);
  border: 1px solid rgba(229, 103, 79, 0.25);
  color: ${(props) => props.theme.colors.accent1};
  font-size: 1.15rem;
  font-weight: 700;
`;

export const ProjectImpact = styled.p`
  width: 100%;
  padding: 1rem 1.2rem;
  margin: 0 0 1.8rem;
  background: ${(props) => props.theme.colors.softSurface};
  border-radius: 8px;
  border-left: 3px solid ${(props) => props.theme.colors.teal};
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: left;

  strong {
    color: ${(props) => props.theme.colors.teal};
    margin-right: 0.4rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
  justify-content: space-between;
  margin: auto 0 0;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 180ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.teal};
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }
`;

export const CardLink = styled.a`
  color: ${(props) => props.theme.colors.accent1};
  font-size: 1.45rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 180ms ease;

  span {
    display: inline-block;
    margin-left: 0.4rem;
    transition: transform 180ms ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary1};

    span {
      transform: translateX(0.4rem);
    }
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }
`;