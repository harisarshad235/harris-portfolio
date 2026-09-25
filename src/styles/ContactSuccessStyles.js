import styled from 'styled-components';

export const ContactSuccess = styled.div`
  max-width: 720px;
  padding: 8rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 4rem 0;
  }
`;

export const SuccessLink = styled.a`
  display: inline-block;
  padding: 1.1rem 1.8rem;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.accent1};
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;

  &:hover {
    background: ${(props) => props.theme.colors.primary1};
  }

  &:focus-visible {
    outline: 3px solid #1A8781;
    outline-offset: 3px;
  }
`;
