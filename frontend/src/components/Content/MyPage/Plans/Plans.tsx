import React, { useState } from "react";

import AddTaskModalWindow from "src/common/AddTaskModalWindow/AddTaskModalWindow";
import CommonContent from "src/common/CommonContent/CommonContent";
import { useTasks } from "src/GlobalState/TaskState";

const Plans = () => {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useTasks();

  return (
    <CommonContent
      data={tasks || []}
      visible={visible}
      stubTitle="You hav no tasks for now"
      addButtonName="add task"
      onClose={(id: string) => setTasks((tasks || []).filter((t) => t.id !== id))}
      showModal={() => setVisible(true)}
    >
      <AddTaskModalWindow
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </CommonContent>
  );
};

export default Plans;
