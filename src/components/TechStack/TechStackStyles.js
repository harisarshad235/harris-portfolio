import styled from 'styled-components';

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.4rem;
  width: 100%;
  margin: 1.6rem 0 4rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.6rem;
    margin-bottom: 3rem;
  }
`;

export const CategoryCard = styled.article`
  min-width: 0;
  padding: 2.4rem;
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 1.8rem;
  box-shadow: 0 12px 32px rgba(29, 42, 45, 0.06);
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.teal};
    box-shadow: 0 18px 44px rgba(29, 42, 45, 0.12);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const CategoryHeading = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  margin: 0 0 2rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2.2rem;
  letter-spacing: -0.025em;
  line-height: 1.25;
`;

export const CategoryLabel = styled.span`
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const SkillBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 3.8rem;
  padding: 0.8rem 1.2rem;
  color: ${(props) => props.theme.colors.primary1};
  background: ${(props) => props.theme.colors.softSurface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
  transition: border-color 180ms ease, transform 180ms ease;

  svg {
    flex: 0 0 auto;
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.teal};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;