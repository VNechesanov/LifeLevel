import React, { useState } from "react";

import UserInfo from "../UserInfo/UserInfo";
import Plans from "./Plans/Plans";
import { ButtonItem, Container, ControlWrapper, Separator } from "./styled";

enum Menu {
  Goals = "GOALS",
  Plans = "PLANS",
}

const MyPage = () => {
  const [activeMenuSection, setActivMenuSection] = useState(Menu.Goals);

  const onClick = (val: Menu) => {
    setActivMenuSection(val === Menu.Goals ? Menu.Goals : Menu.Plans);
  };

  const content = () => {
    switch (activeMenuSection) {
      case Menu.Goals:
        return <>Goals</>;
      case Menu.Plans:
      default:
        return <Plans />;
    }
  };

  return (
    <Container>
      <UserInfo userName={"Name Surname"} userScore={4.7} />
      <ControlWrapper>
        <ButtonItem type="primary" onClick={() => onClick(Menu.Goals)}>
          Goals
        </ButtonItem>
        <ButtonItem type="primary" onClick={() => onClick(Menu.Plans)}>
          Plans
        </ButtonItem>
      </ControlWrapper>
      <Separator />
      {content()}
    </Container>
  );
};

export default MyPage;
