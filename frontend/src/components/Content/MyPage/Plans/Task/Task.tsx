import React from "react";

import { colors, Data, Priority } from "src/utils";
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

type Props = {
  taskInfo: Data;
  id: string;
  onClose: (id: string) => void;
};

const Task = (props: Props) => {
  const { taskInfo, id, onClose } = props;
  const { date, time, name, description, priority } = taskInfo;

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
      <PriorityMarker color={getPriorityColor(priority)} />
      <ContentWrapper>
        <Header>
          <Wrapper>
            <Title>{name}</Title>
            <Time>{`${date}, ${time}`}</Time>
          </Wrapper>
          <CloseButton onClick={() => onClose(id)} />
        </Header>
      </ContentWrapper>
    </Container>
  );
};

export default Task;
