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
  border: 1px solid #242735;
  border-radius: 1.6rem;
  background: #12141d;
  box-shadow: 0 16px 40px rgba(6, 10, 20, 0.2);
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #5079c9;
    box-shadow: 0 22px 50px rgba(6, 10, 20, 0.32);

    img {
      transform: scale(1.04);
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
  flex: 0 0 23rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #10182c;

  > svg {
    width: 4.8rem;
    height: 4.8rem;
    color: #78a4ff;
  }

  &:focus-visible {
    outline: 3px solid #78a4ff;
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
  color: #78a4ff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const CredentialTitle = styled.h3`
  margin: 0 0 1rem;
  color: #f6f7fb;
  font-size: 2.35rem;
  letter-spacing: -0.025em;
  line-height: 1.25;
`;

export const CredentialIssuer = styled.p`
  margin: 0 0 0.6rem;
  color: #78a4ff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const CredentialDescription = styled.p`
  width: 100%;
  margin: 0 0 1.2rem;
  color: #a5aab8;
  font-size: 1.45rem;
  line-height: 1.6;
`;

export const CredentialDate = styled.p`
  margin-top: auto;
  padding-bottom: 0.8rem;
  color: #a5aab8;
  font-size: 1.25rem;
`;

export const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 2.8rem;
  margin-top: 0.8rem;
  color: #f3f5fb;
  font-size: 1.45rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 180ms ease;

  &:hover {
    color: #8eb0ff;
  }

  &:focus-visible {
    outline: 3px solid #78a4ff;
    outline-offset: 3px;
  }

  svg {
    transition: transform 180ms ease;
  }

  &:hover svg {
    transform: translate(0.2rem, -0.2rem);
  }
`;
