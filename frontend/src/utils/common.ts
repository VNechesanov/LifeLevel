import { keyframes } from "styled-components";

const REM_RATIO: number = 0.0625;
export const DELTA = 360;

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

export const px = (pixels: number) => `${pixels * REM_RATIO}rem`;

export const makeid = () => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
