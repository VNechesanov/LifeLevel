import React, { useState } from "react";
import "antd/dist/antd.css";
import DatePicker from "antd/lib/date-picker";
import Input from "antd/lib/input";
import Tag from "antd/lib/tag";
import { QuestionCircleOutlined } from "@ant-design/icons";

import {
  DescriptionWrapper,
  PickerWrapper,
  Wrapper,
  Title,
  ModalWrapper,
  DateWrapper,
  Hint,
  PopUpBox,
} from "./styled";
import { colors, makeid } from "src/utils";
import useAddGoalModalWindow from "src/hooks/useAddGoalModalWindow";
import { useGoals } from "src/GlobalState/GoalsState";
import { dateHelper, tagsHelper } from "./helper";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const { TextArea } = Input;

const AddGoalModalWindow = (props: Props) => {
  const { visible, onClose } = props;
  const [goals, setGoals] = useGoals();
  const [
    { date, name, description, tags },
    setDate,
    setName,
    setDescription,
    setTags,
  ] = useAddGoalModalWindow();
  const [tagName, setTagName] = useState("");

  const clearState = () => {
    setDate("");
    setName("");
    setDescription("");
    setTags([]);
  };

  const onCancelClick = () => {
    clearState();
    onClose();
  };

  const onOkClick = () => {
    clearState();
    setGoals(
      (goals || []).concat({
        info: { date, name, description, tags },
        id: makeid(),
      })
    );
    onClose();
  };

  const renderTags = () =>
    tags.map((tag) => (
      <Tag
        closable
        color={colors.ebony}
        onClose={() => setTags(tags.filter((t) => t.id !== tag.id))}
      >
        {tag.name}
      </Tag>
    ));

  const onTagAdded = () => {
    setTags(tags.concat({ name: tagName, id: makeid() }));
    setTagName("");
  };

  const renderHint = (hintText: JSX.Element) => (
    <Hint>
      <QuestionCircleOutlined />
      <PopUpBox>{hintText}</PopUpBox>
    </Hint>
  );

  return (
    <ModalWrapper
      title="Add new goal"
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
        </PickerWrapper>
        {renderHint(dateHelper)}
      </DateWrapper>
      <Wrapper>
        <Title>Name:</Title>
        <Input
          placeholder="input goal name"
          allowClear
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Wrapper>
      <DescriptionWrapper>
        <Title>Description:</Title>
        <TextArea
          showCount
          placeholder="input goal description"
          maxLength={1000}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DescriptionWrapper>
      <Wrapper>
        <Title>Tags:</Title>
        {renderHint(tagsHelper)}
        <Input
          placeholder="input tags"
          allowClear
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          onPressEnter={onTagAdded}
        />
      </Wrapper>
      {renderTags()}
    </ModalWrapper>
  );
};

export default AddGoalModalWindow;
