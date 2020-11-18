import styled from "styled-components";
import Button from "antd/lib/button";

import { colors, px } from "src/utils";

export const Stub = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${colors.mercury};
  font-size: ${px(37)};
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Control = styled(Button)`
  margin-left: ${px(15)};
  background: ${colors.riverBed};
  color: ${colors.mercury};
  border: none;
  border-radius: ${px(2)};
  outline: none;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${px(15)};
`;
