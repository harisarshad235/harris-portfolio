import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 4.8rem 4rem;
  margin: 2rem auto 0;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2rem 3.2rem 3.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem 1.6rem 3.6rem;
  }
`;

export const LinkItem = styled.a`
  font-size: 1.45rem;
  line-height: 2.2rem;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 1.1rem;
  transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1), color 180ms ease;
  display: inline-flex;
  align-items: center;
  width: fit-content;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.colors.accent1};
      transform: translateX(4px);
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.teal};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.38rem;
    line-height: 2.1rem;
    margin-bottom: 0.9rem;
  }
`;

export const SocialIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.4rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  gap: 1.6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;
`;

export const CompanyContainers = CompanyContainer;

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
`;

export const Slogan = styled.p`
  color: ${(props) => props.theme.colors.muted};
  letter-spacing: 0.01em;
  font-size: 1.38rem;
  line-height: 2.2rem;
  padding: 0;

  strong {
    color: ${(props) => props.theme.colors.primary1};
    font-weight: 700;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const LinkList = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 3.2rem;
  padding: 4rem 0 2.8rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 2.2rem;
    padding: 2.8rem 0 2rem;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.teal};
  margin-bottom: 1.2rem;
`;
