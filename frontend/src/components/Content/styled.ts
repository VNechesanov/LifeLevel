import styled, { css } from "styled-components";

import {
  scrollContainerMovementDown,
  scrollContainerMovementUp,
} from "src/utils";

export const Wrapper = styled.div<{ scrollUp: boolean; scrollDown: boolean }>`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.scrollUp &&
    css`
      animation: 0.8s cubic-bezier(0.45, 0.05, 0, 1)
        ${scrollContainerMovementUp};
    `};

  ${(props) =>
    props.scrollDown &&
    css`
      animation: 0.8s cubic-bezier(0.45, 0.05, 0, 1)
        ${scrollContainerMovementDown};
    `};
`;

export const Container = styled.div`
  background: #161616;
`;
