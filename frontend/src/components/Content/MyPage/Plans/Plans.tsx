import React, { useState } from "react";

import { Control, Container, ControlWrapper, Stub } from "./styled";
import AddTaskModalWindow from "src/common/AddTaskModalWindow/AddTaskModalWindow";

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
      <AddTaskModalWindow visible={visible} onClose={() => setVisible(false)} />
      {!visible && <Stub>You hav no tasks for now</Stub>}
    </Container>
  );
};

export default Plans;
