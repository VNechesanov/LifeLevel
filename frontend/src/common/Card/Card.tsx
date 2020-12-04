import React from "react";

import { colors, KeyValueObj, Priority } from "src/utils";
import {
  CloseButton,
  Container,
  ContentWrapper,
  Header,
  PriorityMarker,
  Time,
  Title,
  Wrapper,
} from "./styled";

type Props<T> = {
  info: T;
  id: string;
  onClose: (id: string) => void;
};

const Card = <T extends KeyValueObj>(props: Props<T>) => {
  const { info, id, onClose } = props;

  const getPriorityColor = (val: Priority) => {
    switch (val) {
      case Priority.low:
        return colors.swansDown;
      case Priority.lowPlus:
        return colors.blueSmoke;
      case Priority.medium:
        return colors.riverBed;
      case Priority.mediumPlus:
        return colors.ebony;
      case Priority.high:
        return colors.black;
      default:
        return "";
    }
  };

  return (
    <Container>
      <PriorityMarker color={getPriorityColor(info.priority)} />
      <ContentWrapper>
        <Header>
          <Wrapper>
            <Title>{info.name}</Title>
            <Time>{`${info.date}, ${info.time || ""}`}</Time>
          </Wrapper>
          <CloseButton onClick={() => onClose(id)} />
        </Header>
      </ContentWrapper>
    </Container>
  );
};

export default Card;
