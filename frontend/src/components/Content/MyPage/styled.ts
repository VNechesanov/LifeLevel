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
  outline: none;

  &:first-child {
    margin-left: 0;
  }
`;

export const ActiveMark = styled.div<{ width: number; isVisible: boolean }>`
  width: ${(props) => px(props.width)};
  height: ${px(6)};
  background-color: ${colors.mercury};
  margin-left: ${px(15)};
  margin-bottom: ${px(5)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  border-radius: ${px(1)};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
