import React, { useState } from "react";

import { Control, Container, ControlWrapper, Stub } from "./styled";
import ModalWindow from "../../../common/ModalWindow/ModalWindow";

const Plans = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  return (
    <Container>
      <ControlWrapper>
        <Control type="primary" onClick={showModal}>
          add task
        </Control>
      </ControlWrapper>
      <ModalWindow visible={visible} onClose={() => setVisible(false)} />
      <Stub>You hav no tasks for now</Stub>
    </Container>
  );
};

export default Plans;
