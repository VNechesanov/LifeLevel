import React, { useCallback, useEffect, useState } from "react";
import _isEmpty from "lodash/isEmpty";

import {
  Control,
  Container,
  ControlWrapper,
  Stub,
  TaskWrapper,
} from "./styled";
import AddTaskModalWindow from "src/common/AddTaskModalWindow/AddTaskModalWindow";
import Task from "./Task/Task";
import { Data, TaskItem } from "src/utils";

const DELTA = 360;

const Plans = () => {
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const updateSize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);

    return function cleanup() {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const onOk = (obj: Data, id: string) => {
    setTasks(tasks.concat({ taskInfo: obj, id }));
  };

  const renderTasks = useCallback(
    () =>
      tasks.map((task) => (
        <Task
          taskInfo={task.taskInfo}
          id={task.id}
          onClose={(id: string) => setTasks(tasks.filter((t) => t.id !== id))}
        />
      )),
    [tasks]
  );

  return (
    <Container>
      <ControlWrapper>
        <Control type="primary" onClick={showModal}>
          add task
        </Control>
      </ControlWrapper>
      <AddTaskModalWindow
        visible={visible}
        onClose={() => setVisible(false)}
        onOk={onOk}
      />
      {!visible && _isEmpty(tasks) && <Stub>You hav no tasks for now</Stub>}
      <TaskWrapper height={height - DELTA}>{renderTasks()}</TaskWrapper>
    </Container>
  );
};

export default Plans;
