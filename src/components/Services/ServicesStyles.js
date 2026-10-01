import styled from 'styled-components';

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.8rem;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ServiceItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: 1.8rem 0 0;
  border-top: 2px solid rgba(29, 42, 45, 0.2);

  &:nth-child(3n + 1) {
    border-color: ${(props) => props.theme.colors.teal};
  }

  &:nth-child(3n + 2) {
    border-color: ${(props) => props.theme.colors.accent1};
  }
`;

export const ServiceIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  color: ${(props) => props.theme.colors.teal};
  font-size: 2.2rem;
`;

export const ServiceTitle = styled.h3`
  margin: 1.4rem 0 0.8rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2rem;
  line-height: 1.25;
`;

export const ServiceSummary = styled.p`
  flex: 1;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.5rem;
  line-height: 1.6;
`;

export const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.8rem;
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;

  svg {
    transition: transform 180ms ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 3px solid rgba(26, 135, 129, 0.35);
    outline-offset: 4px;
  }
`;