import styled from "styled-components";

import { colors } from "../../utils/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  background: ${colors.mercury};
  margin-right: 25px;
`;

export const UserName = styled.div`
  font-size: 25px;
  color: ${colors.mercury};
  font-weight: 200;
`;

export const Score = styled.div`
  font-size: 120px;
  color: ${colors.mercury};
  font-weight: 300;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
