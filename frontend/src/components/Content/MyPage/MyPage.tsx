import React, { useEffect, useRef, useState } from "react";

import UserInfo from "src/components/UserInfo/UserInfo";
import Goals from "./Goals/Goals";
import Plans from "./Plans/Plans";
import {
  ActiveMark,
  ButtonItem,
  ButtonWrapper,
  Container,
  ControlWrapper,
  Separator,
} from "./styled";

enum Menu {
  Goals = "GOALS",
  Plans = "PLANS",
}

const MyPage = () => {
  const [activeMenuSection, setActivMenuSection] = useState(Menu.Goals);
  const [width, setWidth] = useState(0);

  const codeRef = useRef<HTMLHeadingElement>(null);

  const onClick = (val: Menu) => {
    setActivMenuSection(val === Menu.Goals ? Menu.Goals : Menu.Plans);
  };

  const content = () => {
    switch (activeMenuSection) {
      case Menu.Goals:
        return <Goals />;
      case Menu.Plans:
        return <Plans />;
      default:
        return <Goals />;
    }
  };

  useEffect(() => {
    setWidth(codeRef.current ? codeRef.current?.clientWidth : 0);
  }, []);

  return (
    <Container>
      <UserInfo userName={"Name Surname"} userScore={4.7} />
      <ControlWrapper>
        <ButtonWrapper>
          <ActiveMark
            width={width}
            isVisible={activeMenuSection === Menu.Goals}
          />
          <ButtonItem
            ref={codeRef}
            type="primary"
            onClick={() => onClick(Menu.Goals)}
          >
            Goals
          </ButtonItem>
        </ButtonWrapper>
        <ButtonWrapper>
          <ActiveMark
            width={width}
            isVisible={activeMenuSection === Menu.Plans}
          />
          <ButtonItem type="primary" onClick={() => onClick(Menu.Plans)}>
            Plans
          </ButtonItem>
        </ButtonWrapper>
      </ControlWrapper>
      <Separator />
      {content()}
    </Container>
  );
};

export default MyPage;
