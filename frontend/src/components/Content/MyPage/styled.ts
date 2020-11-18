import styled from "styled-components";
import Button from "antd/lib/button";

import { colors, px } from "src/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  background: ${colors.codGray};
  overflow: hidden;
  padding: ${px(15)};
`;

export const Separator = styled.div`
  border: ${px(2)} solid ${colors.riverBed};
  width: 100%;
  border-radius: ${px(5)};
  margin-top: ${px(9)};
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonItem = styled(Button)`
  margin-left: ${px(15)};
  background: ${colors.riverBed};
  color: ${colors.mercury};
  border: none;
  border-radius: ${px(2)};
  outline: none;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;
