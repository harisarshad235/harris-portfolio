import styled from 'styled-components';

export const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.4rem;
  width: 100%;
  padding: 2rem 0 4rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.6rem;
    padding-bottom: 3rem;
  }
`;

export const CredentialCard = styled.article`
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 1.8rem;
  background: ${(props) => props.theme.colors.background2};
  box-shadow: 0 12px 32px rgba(29, 42, 45, 0.06);
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.teal};
    box-shadow: 0 18px 44px rgba(29, 42, 45, 0.12);

    img {
      transform: scale(1.03);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const CertificatePreview = styled.a`
  position: relative;
  display: flex;
  flex: 0 0 22rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${(props) => props.theme.colors.softSurface};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  > svg {
    width: 4.8rem;
    height: 4.8rem;
    color: ${(props) => props.theme.colors.teal};
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: -3px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 260ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`;

export const CredentialContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.2rem 2.4rem 2.4rem;
`;

export const CredentialCategory = styled.span`
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const CredentialTitle = styled.h3`
  margin: 0 0 1rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2.2rem;
  letter-spacing: -0.025em;
  line-height: 1.25;
`;

export const CredentialIssuer = styled.p`
  margin: 0 0 0.8rem;
  color: ${(props) => props.theme.colors.accent1};
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CredentialDescription = styled.p`
  width: 100%;
  margin: 0 0 1.4rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.45rem;
  line-height: 1.6;
`;

export const CredentialDate = styled.p`
  margin-top: auto;
  padding-bottom: 0.8rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 2.8rem;
  margin-top: 0.8rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 180ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent1};
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }

  svg {
    transition: transform 180ms ease;
  }

  &:hover svg {
    transform: translate(0.2rem, -0.2rem);
  }
`;
