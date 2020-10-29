import styled from "styled-components";
import Button from "antd/lib/button";

import { colors } from "../../../utils/theme";

export const Stub = styled.div`
  color: ${colors.mercury};
  font-size: 37px;
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Control = styled(Button)`
  margin-left: 15px;
  background: ${colors.riverBed};
  color: ${colors.mercury};
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;
