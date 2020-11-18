import styled from "styled-components";

import { colors, px } from "src/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.div`
  width: ${px(150)};
  height: ${px(150)};
  border-radius: ${px(100)};
  background: ${colors.mercury};
  margin-right: ${px(25)};
`;

export const UserName = styled.div`
  font-size: ${px(25)};
  color: ${colors.mercury};
  font-weight: 200;
`;

export const Score = styled.div`
  font-size: ${px(120)};
  color: ${colors.mercury};
  font-weight: 300;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
