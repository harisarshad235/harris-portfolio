import styled from 'styled-components';

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
