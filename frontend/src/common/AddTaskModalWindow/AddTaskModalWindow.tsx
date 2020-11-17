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
} from "./styled";
import { colors } from "../../utils/theme";

enum Priority {
  none,
  low,
  lowPlus,
  medium,
  mediumPlus,
  high,
}

type Data = {
  date: any;
  time: string;
  name: string;
  description: string;
  priority: Priority;
};

type Props = {
  visible: boolean;
  onClose: () => void;
};

interface CheckBoxesModel {
  color: string;
  priority: Priority;
}

const { TextArea } = Input;
const INITIAL_STATE: Data = {
  date: "",
  time: "",
  name: "",
  description: "",
  priority: Priority.none,
};

const checkBoxes: CheckBoxesModel[] = [
  {
    color: colors.swansDown,
    priority: Priority.high,
  },
  {
    color: colors.blueSmoke,
    priority: Priority.mediumPlus,
  },
  {
    color: colors.riverBed,
    priority: Priority.medium,
  },
  {
    color: colors.ebony,
    priority: Priority.lowPlus,
  },
  {
    color: colors.black,
    priority: Priority.low,
  },
];

const AddTaskModalWindow = (props: Props) => {
  const { visible, onClose } = props;
  const [{ date, time, name, description, priority }, setState] = useState(INITIAL_STATE);

  const clearState = () => setState({ ...INITIAL_STATE });
  const setInfoFromControls = (name: string, value: string) => setState((prevState: any) => ({ ...prevState, [name]: value }));
  const onCancelClick = () => { clearState(); onClose(); };
  const onOkClick = () => { clearState(); onClose(); };
  const renderCheckboxes = () => checkBoxes.map((checkBox) => <CheckboxWrapper color={checkBox.color}></CheckboxWrapper>);

  return (
    <ModalWrapper
      title="Add new task"
      visible={visible}
      destroyOnClose
      forceRender
      onCancel={onCancelClick}
      onOk={onOkClick}
    >
      <DateWrapper>
        <PickerWrapper>
          <DatePicker
            onChange={(_, dateString: string) =>
              setInfoFromControls("date", dateString)
            }
          />
          <DatePicker
            picker={"time"}
            onChange={(_, timeString: string) =>
              setInfoFromControls("time", timeString)
            }
          />
        </PickerWrapper>
      </DateWrapper>
      <Wrapper>
        <Title>Name:</Title>
        <Input
          placeholder="input task name"
          allowClear
          value={name}
          onChange={(e) => setInfoFromControls("name", e.target.value)}
        />
      </Wrapper>
      <DescriptionWrapper>
        <Title>Description:</Title>
        <TextArea
          showCount
          placeholder="input task description"
          maxLength={1000}
          value={description}
          onChange={(e) => setInfoFromControls("description", e.target.value)}
        />
      </DescriptionWrapper>
      <Wrapper>
        <Title>Priority:</Title>
        {renderCheckboxes()}
      </Wrapper>
    </ModalWrapper>
  );
};

export default AddTaskModalWindow;
