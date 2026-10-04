import styled from 'styled-components';

const actionStyles = (props) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 4rem;
  padding: 0.9rem 1.4rem;
  border: 1px solid ${props.theme.colors.primary1};
  border-radius: 999px;
  background: ${props.theme.colors.primary1};
  color: ${props.theme.colors.background1};
  font: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
  text-decoration: none;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease;

  &:hover:not(:disabled) {
    border-color: ${props.theme.colors.teal};
    background: ${props.theme.colors.teal};
  }

  &:focus-visible {
    outline: 3px solid ${props.theme.colors.accent1};
    outline-offset: 3px;
  }
`;

export const RecommendationCard = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
  padding: 2.4rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 4px solid ${(props) => props.theme.colors.accent1};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.background2};
  box-shadow: 0 12px 32px rgba(29, 42, 45, 0.06);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: auto minmax(0, 1fr);
    gap: 1.4rem;
    padding: 1.8rem;
  }
`;

export const RecommendationList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.6rem;
  margin: 0 0 2rem;

  ${RecommendationCard} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    min-width: 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const RecommendationQuote = styled.blockquote`
  width: 100%;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.55rem;
  line-height: 1.7;
  overflow-wrap: anywhere;

  &::before {
    display: block;
    margin-bottom: 0.6rem;
    color: ${(props) => props.theme.colors.accent1};
    content: '“';
    font-family: Georgia, serif;
    font-size: 4.2rem;
    font-weight: 700;
    line-height: 0.8;
  }
`;

export const RecommendationAttribution = styled.div`
  display: grid;
  gap: 0.3rem;
  margin-top: auto;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.3rem;
  line-height: 1.5;

  strong {
    color: ${(props) => props.theme.colors.primary1};
    font-size: 1.4rem;
  }
`;

export const RecommendationEmptyState = styled.p`
  margin: 0 0 2rem;
  padding: 1.8rem 2rem;
  border: 1px dashed ${(props) => props.theme.colors.border};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.4rem;
  line-height: 1.6;
`;

export const RecommendationMark = styled.div`
  display: grid;
  width: 4.8rem;
  height: 4.8rem;
  place-items: center;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.softSurface};
  color: ${(props) => props.theme.colors.teal};

  svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const RecommendationTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.8rem;
  line-height: 1.4;
`;

export const RecommendationCopy = styled.p`
  margin-top: 0.4rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const RecommendationActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.8rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }
`;

export const RecommendationLink = styled.a`
  ${(props) => actionStyles(props)}
`;

export const RecommendationButton = styled.button`
  ${(props) => actionStyles(props)}

  &:disabled {
    opacity: 0.65;
    cursor: wait;
  }
`;

export const RecommendationDialog = styled.dialog`
  width: min(100% - 3.2rem, 58rem);
  max-width: 58rem;
  max-height: min(90vh, 76rem);
  margin: auto;
  padding: 0;
  overflow: auto;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 14px;
  background: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.primary1};
  box-shadow: 0 28px 90px rgba(16, 25, 27, 0.28);

  &::backdrop {
    background: rgba(13, 22, 24, 0.66);
    backdrop-filter: blur(3px);
  }
`;

export const RecommendationForm = styled.form`
  padding: 2.8rem;

  .dialog-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.6rem;
    padding-bottom: 1.8rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  .eyebrow {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.teal};
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h3 {
    color: ${(props) => props.theme.colors.primary1};
    font-size: 2.6rem;
    line-height: 1.2;
  }

  .close-button {
    display: grid;
    width: 3.8rem;
    height: 3.8rem;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 50%;
    background: transparent;
    color: ${(props) => props.theme.colors.primary1};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.softSurface};
    }

    &:focus-visible {
      outline: 3px solid ${(props) => props.theme.colors.teal};
      outline-offset: 2px;
    }
  }

  .intro {
    margin: 1.6rem 0;
    color: ${(props) => props.theme.colors.muted};
    font-size: 1.4rem;
    line-height: 1.5;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.4rem;
  }

  .honeypot {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .consent {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1.8rem;
    color: ${(props) => props.theme.colors.muted};
    font-size: 1.3rem;
    line-height: 1.5;
    cursor: pointer;

    input {
      width: 1.7rem;
      height: 1.7rem;
      flex: 0 0 auto;
      margin-top: 0.1rem;
      accent-color: ${(props) => props.theme.colors.teal};
    }

    input:focus-visible {
      outline: 3px solid ${(props) => props.theme.colors.teal};
      outline-offset: 2px;
    }
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }

  .cancel-button {
    padding: 0.9rem 1.4rem;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 999px;
    background: transparent;
    color: ${(props) => props.theme.colors.primary1};
    font: inherit;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.softSurface};
    }

    &:focus-visible {
      outline: 3px solid ${(props) => props.theme.colors.teal};
      outline-offset: 2px;
    }
  }

  .success-panel {
    display: grid;
    justify-items: start;
    gap: 2rem;
    padding-top: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;

    h3 {
      font-size: 2.2rem;
    }

    .details-grid {
      grid-template-columns: 1fr;
      gap: 1.4rem;
    }
  }
`;

export const RecommendationField = styled.div`
  display: grid;
  gap: 0.6rem;
  margin-top: 1.4rem;
`;

export const RecommendationLabel = styled.label`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.3rem;
  font-weight: 700;
`;

const controlStyles = (props) => `
  width: 100%;
  border: 1px solid ${props.theme.colors.border};
  border-radius: 6px;
  padding: 1rem 1.2rem;
  background: ${props.theme.colors.controlBackground};
  color: ${props.theme.colors.primary1};
  font: inherit;
  font-size: 1.4rem;

  &::placeholder {
    color: ${props.theme.colors.muted};
    opacity: 0.85;
  }

  &:focus {
    outline: 3px solid ${props.theme.colors.teal}40;
    border-color: ${props.theme.colors.teal};
  }
`;

export const RecommendationInput = styled.input`${(props) => controlStyles(props)}`;
export const RecommendationTextArea = styled.textarea`
  ${(props) => controlStyles(props)}
  min-height: 13rem;
  resize: vertical;
  line-height: 1.5;
`;

export const RecommendationStatus = styled.p`
  margin-top: 1.4rem;
  color: ${(props) => props.$error ? props.theme.colors.accent1 : props.theme.colors.teal};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const RecommendationApprovalPanel = styled.section`
  display: grid;
  gap: 1.8rem;
  width: min(100%, 72rem);
  margin: 0 auto;
  padding: 2.8rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 4px solid ${(props) => props.theme.colors.accent1};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.background2};
  box-shadow: 0 12px 32px rgba(29, 42, 45, 0.06);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const RecommendationApprovalQuote = styled.blockquote`
  padding: 1.8rem 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.softSurface};
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.6rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
`;

export const RecommendationApprovalAttribution = styled.p`
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.4rem;
  line-height: 1.6;

  strong {
    color: ${(props) => props.theme.colors.primary1};
  }
`;

export const RecommendationApprovalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const RecommendationDiscardButton = styled.button`
  min-height: 4rem;
  padding: 0.9rem 1.4rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 999px;
  background: transparent;
  color: ${(props) => props.theme.colors.primary1};
  font: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.softSurface};
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.65;
    cursor: wait;
  }
`;
