import styled from "styled-components";

import { colors, px } from "src/utils";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 100vh;
  background: ${colors.ebony};
  overflow: hidden;
`;

export const SignOut = styled.div`
  display: flex;
  color: ${colors.swansDown};
  font-weight: 200;
  font-size: ${px(17)};
  justify-content: center;
  margin-bottom: ${px(20)};
  cursor: pointer;
`;

export const Logo = styled.div``;
