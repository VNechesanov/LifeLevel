import React, { useState } from "react";

import AddGoalModalWindow from "src/common/AddGoalModalWindow/AddGoalModalWindow";
import CommonContent from "src/common/CommonContent/CommonContent";
import { useGoals } from "src/GlobalState/GoalsState";

const Goals = () => {
  const [visible, setVisible] = useState(false);
  const [goals, setGoals] = useGoals();

  return (
    <CommonContent
      data={goals || []}
      visible={visible}
      stubTitle="You hav no goals for now"
      addButtonName="add goal"
      onClose={(id: string) =>
        setGoals((goals || []).filter((t) => t.id !== id))
      }
      showModal={() => setVisible(true)}
    >
      <AddGoalModalWindow visible={visible} onClose={() => setVisible(false)} />
    </CommonContent>
  );
};

export default Goals;
