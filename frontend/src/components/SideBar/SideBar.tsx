import React from "react";

import { Container, Logo, SignOut } from "./styled";

type Props = {
  onSignOutClick: () => void;
};

const SideBar = (props: Props) => {
  const { onSignOutClick } = props;

  const onLogOutClick = () => {
    onSignOutClick();
  };

  return (
    <Container>
      <Logo />
      <SignOut onClick={() => onLogOutClick()}>sign out</SignOut>
    </Container>
  );
};

export default SideBar;
