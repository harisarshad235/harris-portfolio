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
  box-shadow: ${(props) => props.theme.mode === 'dark'
    ? '0 1px 3px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)'
    : '0 8px 24px rgba(15, 23, 42, 0.05)'};
  transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1), border-color 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.accent1};
    box-shadow: ${(props) => props.theme.mode === 'dark'
      ? '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 30px -10px rgba(59, 130, 246, 0.25)'
      : '0 16px 36px rgba(15, 23, 42, 0.08)'};
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
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const SkillBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 4.2rem;
  padding: 0.9rem 1.4rem;
  color: ${(props) => props.theme.colors.primary1};
  background: ${(props) => props.theme.colors.softSurface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.8rem;
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.2;
  transition: border-color 180ms ease, transform 180ms ease;

  svg {
    flex: 0 0 auto;
    width: 2rem;
    height: 2rem;
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