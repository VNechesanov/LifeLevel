import React, { useState } from "react";
import "antd/dist/antd.css";
import DatePicker from "antd/lib/date-picker";
import Input from "antd/lib/input";

import {
  DescriptionWrapper,
  PickerWrapper,
  Wrapper,
  Title,
  CheckboxWrapper,
  ModalWrapper,
  DateWrapper,
  CheckMarker,
  BoxWrapper,
} from "./styled";
import { Priority, colors, makeid } from "src/utils";
import useAddTaskModalWindow from "src/hooks/useAddTaskModalWindow";
import { useTasks } from "src/GlobalState/TaskState";

type Props = {
  visible: boolean;
  onClose: () => void;
};

interface CheckBoxesModel {
  color: string;
  priority: Priority;
}

const { TextArea } = Input;

const checkBoxes: CheckBoxesModel[] = [
  {
    color: colors.swansDown,
    priority: Priority.low,
  },
  {
    color: colors.blueSmoke,
    priority: Priority.lowPlus,
  },
  {
    color: colors.riverBed,
    priority: Priority.medium,
  },
  {
    color: colors.ebony,
    priority: Priority.mediumPlus,
  },
  {
    color: colors.black,
    priority: Priority.high,
  },
];

const AddTaskModalWindow = (props: Props) => {
  const { visible, onClose } = props;
  const [isCheckMark, setCheckMark] = useState(false);
  const [tasks, setTasks] = useTasks();
  const [
    { date, time, name, description, priority },
    setDate,
    setTime,
    setName,
    setDescription,
    setPriority,
  ] = useAddTaskModalWindow();

  const clearState = () => {
    setDate("");
    setTime("");
    setName("");
    setDescription("");
    setPriority(Priority.none);
  };

  const onCancelClick = () => {
    setCheckMark(false);
    clearState();
    onClose();
  };

  const onOkClick = () => {
    setTasks(
      (tasks || []).concat({
        info: { date, time, name, description, priority },
        id: makeid(),
      })
    );
    setCheckMark(false);
    clearState();
    onClose();
  };

  const checkBoxClicked = (priorityVal: Priority) => {
    setPriority(priorityVal);
    setCheckMark(true);
  };

  const renderCheckboxes = () =>
    checkBoxes.map((checkBox) => (
      <CheckboxWrapper
        color={checkBox.color}
        onClick={() => checkBoxClicked(checkBox.priority)}
      >
        {isCheckMark && priority === checkBox.priority && <CheckMarker />}
      </CheckboxWrapper>
    ));

  return (
    <ModalWrapper
      title="Add new task"
      visible={visible}
      destroyOnClose
      forceRender
      onCancel={onCancelClick}
      // onOk={() => date && time && name && description && priority && onOkClick()}
      onOk={onOkClick}
    >
      <DateWrapper>
        <PickerWrapper>
          <DatePicker
            onChange={(_, dateString: string) => setDate(dateString)}
          />
          <DatePicker
            picker={"time"}
            onChange={(_, timeString: string) => setTime(timeString)}
          />
        </PickerWrapper>
      </DateWrapper>
      <Wrapper>
        <Title>Name:</Title>
        <Input
          placeholder="input task name"
          allowClear
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Wrapper>
      <DescriptionWrapper>
        <Title>Description:</Title>
        <TextArea
          showCount
          placeholder="input task description"
          maxLength={1000}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DescriptionWrapper>
      <Wrapper>
        <Title>Priority:</Title>
        <BoxWrapper>{renderCheckboxes()}</BoxWrapper>
      </Wrapper>
    </ModalWrapper>
  );
};

export default AddTaskModalWindow;
