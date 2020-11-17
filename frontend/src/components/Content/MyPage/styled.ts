import styled from "styled-components";
import Button from "antd/lib/button";

import { colors } from "@utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  background: ${colors.codGray};
  overflow: hidden;
  padding: 15px;
`;

export const Separator = styled.div`
  border: 2px solid ${colors.riverBed};
  width: 100%;
  border-radius: 5px;
  margin-top: 9px;
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonItem = styled(Button)`
  margin-left: 15px;
  background: ${colors.riverBed};
  color: ${colors.mercury};
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;
