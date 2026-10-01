import styled from 'styled-components';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';

export const HeroStage = styled.div`
  position: relative;
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 48px;

  > section {
    position: relative;
    z-index: 1;
  }

  > div:last-child {
    position: absolute;
    top: -3rem;
    right: 0;
    z-index: 0;
    width: min(52vw, 560px);
    opacity: 0.9;
    pointer-events: none;
  }

  > div:last-child svg {
    display: block;
    width: 100%;
    height: auto;

    g[opacity] {
      opacity: 0.3;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    > div:last-child svg {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  flex: 1 1 0;
  min-width: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const HeroTitle = styled(SectionTitle)`
  width: 100%;
  font-size: 5.2rem;
  line-height: 1.1;
  padding: 2.8rem 0 1.2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4.8rem;
    line-height: 1.12;
    padding: 2.4rem 0 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3.2rem;
    line-height: 1.15;
    padding: 1.6rem 0 0.8rem;
  }
`;

export const HeroDescription = styled(SectionText)`
  max-width: 56ch;
  font-size: 1.8rem;
  line-height: 1.6;
  padding-bottom: 2.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 1.55;
    padding-bottom: 1.6rem;
  }
`;

export const VisualSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1 1 0;
  min-width: 0;
  padding: 3rem 0 0;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2rem 0 0;
  }
`;

export const HeroImageWrap = styled.div`
  width: min(100%, 360px);
  aspect-ratio: 4 / 5;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(29, 42, 45, 0.12);
  border: 1px solid rgba(29, 42, 45, 0.08);
  background: #f5f5f2;
  animation: hero-float 7s ease-in-out infinite;

  @keyframes hero-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-7px); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

export const Eyebrow = styled.p`
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 5rem 0 1.6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 3rem;
    font-size: 1rem;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 2.4rem;
  margin-bottom: 3rem;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const DeliveryFocus = styled.p`
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.3rem;
  line-height: 1.5;
  margin: -1.4rem 0 2.4rem;
`;

export const ContactForm = styled.form`
  max-width: 650px;
  margin: 3.2rem 0 5rem;
  padding-top: 2.4rem;
  border-top: 1px solid rgba(29, 42, 45, 0.18);
`;

export const SectionFormTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2.4rem;
  margin-bottom: 1.8rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  grid-column: ${(props) => props.$full ? '1 / -1' : 'auto'};
  ${(props) => props.hidden && `
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `}
`;

export const FormLabel = styled.label`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.3rem;
  font-weight: 700;
`;

const formControlStyles = `
  width: 100%;
  border: 1px solid rgba(29, 42, 45, 0.2);
  border-radius: 4px;
  padding: 1rem 1.2rem;
  background: #ffffff;
  color: #1D2A2D;
  font: inherit;
  font-size: 1.4rem;

  &:focus {
    outline: 3px solid rgba(26, 135, 129, 0.25);
    border-color: #1A8781;
  }
`;

export const TextInput = styled.input`${formControlStyles}`;
export const TextArea = styled.textarea`${formControlStyles} resize: vertical; min-height: 120px;`;

export const SubmitButton = styled.button`
  margin-top: 1.8rem;
  border: 0;
  border-radius: 999px;
  padding: 1.1rem 1.8rem;
  background: ${(props) => props.theme.colors.accent1};
  color: #ffffff;
  font: inherit;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primary1};
  }

  &:focus-visible {
    outline: 3px solid #1A8781;
    outline-offset: 3px;
  }
`;

export const FormStatus = styled.p`
  margin-top: 1.4rem;
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.4rem;
  font-weight: 600;
`;

export const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.35rem;
  font-weight: 600;

  svg {
    color: ${(props) => props.theme.colors.accent1};
  }
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 650px;
  border-top: 1px solid rgba(29, 42, 45, 0.18);
  border-bottom: 1px solid rgba(29, 42, 45, 0.18);
  margin-bottom: 3.2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
  }
`;

export const HeroStat = styled.div`
  padding: 1.5rem 1.5rem 1.5rem 0;
  border-right: 1px solid rgba(29, 42, 45, 0.18);

  &:last-child {
    border-right: none;
  }
`;

export const StatValue = styled.strong`
  display: block;
  color: ${(props) => props.theme.colors.accent1};
  font-size: 2.6rem;
  line-height: 1;
`;

export const StatLabel = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.2rem;
  line-height: 1.3;
  margin-top: 0.7rem;
`;
