import styled from 'styled-components';

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 1rem 0 4rem;

  > :last-child:nth-child(3n + 1) {
    grid-column: 2;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > :last-child:nth-child(3n + 1) {
      grid-column: auto;
    }
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
  background: #12141d;
  border: 1px solid #242735;
  border-radius: 1.6rem;
  box-shadow: 0 16px 40px rgba(6, 10, 20, 0.2);
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #5079c9;
    box-shadow: 0 22px 50px rgba(6, 10, 20, 0.32);
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
  margin: 0 0 1.8rem;
  color: #f6f7fb;
  font-size: 2.35rem;
  letter-spacing: -0.025em;
  line-height: 1.25;
`;

export const CategoryLabel = styled.span`
  color: #78a4ff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.11em;
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
  color: #dce1ed;
  background: #191c27;
  border: 1px solid #2c3040;
  border-radius: 0.8rem;
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
    border-color: #5079c9;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;