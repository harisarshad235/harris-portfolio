import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: clip;
`;

export const ScrollProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 4px;
  background: rgb(var(--cobalt-rgb));
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
`;
