import { keyframes } from "styled-components";

export const fadeOutAnimation = keyframes`
  from {
  opacity: 1;
  }

  to {
  opacity: 0;
  }
`;

export const fadeInAnimation = keyframes`
  from {
  opacity: 0;  
  }

  to {
  opacity: 1;
  }
`;

export const scrollContainerMovementUp = keyframes`
  from {transform: translateY( ${window.innerHeight}px )};
  to {transform: translateY(0)};
`;

export const scrollContainerMovementDown = keyframes`
  from {transform: translateY(0)};
  to {transform: translateY( ${window.innerHeight}px )}
`;
