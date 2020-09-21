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
