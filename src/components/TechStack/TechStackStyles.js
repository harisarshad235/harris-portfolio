import styled from 'styled-components';

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 1rem 0 4rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.4rem;
    margin-bottom: 3rem;
  }
`;

export const CategoryCard = styled.article`
  min-width: 0;
  padding: 2.4rem;
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid rgba(29, 42, 45, 0.12);
  border-top: 3px solid ${(props) => props.theme.colors.teal};
  border-radius: 4px;
  box-shadow: 0 10px 28px rgba(29, 42, 45, 0.06);
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 34px rgba(29, 42, 45, 0.12);
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
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.8rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2rem;
  line-height: 1.3;
`;

export const CategoryLabel = styled.span`
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
`;

export const SkillBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 3.8rem;
  padding: 0.8rem 1rem;
  color: ${(props) => props.theme.colors.primary1};
  background: ${(props) => props.theme.colors.background1};
  border: 1px solid rgba(29, 42, 45, 0.1);
  border-radius: 3px;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
  transition: border-color 180ms ease, transform 180ms ease;

  svg {
    flex: 0 0 auto;
    width: 1.7rem;
    height: 1.7rem;
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