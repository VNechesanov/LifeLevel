import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

import { colors, px } from "src/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${px(150)};
  background-color: ${colors.codGray2};
  border-radius: ${px(3)};
  box-shadow: 0 ${px(9)} ${px(12)} ${px(3)} rgba(20, 20, 20);

  &:not(:first-child) {
    margin-top: ${px(24)};
  }

  &:last-child {
    margin-bottom: ${px(15)};
  }
`;

export const PriorityMarker = styled.div<{ color: string }>`
  height: ${px(150)};
  width: ${px(20)};
  background-color: ${(props) => props.color};
  border-radius: ${px(3)} 0 0 ${px(3)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${px(15)};
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  font-size: ${px(20)};
  color: ${colors.mercury};
`;

export const Time = styled(Title)`
  margin-left: ${px(20)};
`;

export const CloseButton = styled(CloseOutlined)`
  color: ${colors.mercury};
  width: ${px(15)};
  height: ${px(15)};
`;
