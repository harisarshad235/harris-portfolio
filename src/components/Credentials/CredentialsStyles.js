import styled from 'styled-components';

export const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 2rem 0 4rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.4rem;
    padding-bottom: 3rem;
  }
`;

export const CredentialCard = styled.article`
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-top: 3px solid ${(props) => props.theme.colors.teal};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.background2};
  box-shadow: 0 10px 28px rgba(29, 42, 45, 0.06);
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 34px rgba(29, 42, 45, 0.12);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const CertificatePreview = styled.a`
  display: block;
  height: 18rem;
  overflow: hidden;
  background: ${(props) => props.theme.colors.softSurface};
  display: flex;
  align-items: center;
  justify-content: center;

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
    transition: transform 320ms ease;
  }

  &:hover img {
    transform: scale(1.025);
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
  padding: 2rem;
`;

export const CredentialCategory = styled.span`
  margin-bottom: 0.8rem;
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const CredentialTitle = styled.h3`
  margin: 0 0 0.8rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2rem;
  line-height: 1.3;
`;

export const CredentialIssuer = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const CredentialDescription = styled.p`
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.45rem;
  line-height: 1.6;
`;

export const CredentialDate = styled.p`
  margin-top: auto;
  padding-bottom: 1.4rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.3rem;
`;

export const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 4rem;
  margin-top: auto;
  padding: 0.9rem 1.4rem;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.background1};
  font-size: 1.4rem;
  font-weight: 600;
  transition: background 180ms ease;

  &:hover {
    background: ${(props) => props.theme.colors.accent1};
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.teal};
    outline-offset: 3px;
  }
`;
