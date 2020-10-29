import React, { useEffect, useState } from "react";

import SideBar from "./components/SideBar/SideBar";
import MainLayout from "./components/MainLayout/MainLayout";
import SignIn from "./components/SignIn/SignIn";
import {
  getAuthTokenfromLocalStorage,
  removeAuthTokenFromLocalStorage,
} from "./store";
import { Wrapper } from "./styled";
import { scrollContainerMovementDown } from "./utils/common";

const App = () => {
  const [isRegistrationNeed, setRegistration] = useState(true);
  const [isScrollDown, setScrollDown] = useState(false);
  const [isScrollUp, setScrollUp] = useState(false);

  const onLogInClick = () => {
    const token = getAuthTokenfromLocalStorage();

    if (token !== "") {
      setRegistration(false);
      setScrollUp(true);
      setScrollDown(false);
    } else {
      setRegistration(true);
    }
  };

  const onSignOutClick = () => {
    setScrollDown(true);
    setScrollUp(false);
    removeAuthTokenFromLocalStorage();
  };

  const onAnimationEndHandler = (e: React.AnimationEvent<HTMLDivElement>) => {
    e.persist();
    if (e.animationName === scrollContainerMovementDown.getName()) {
      setRegistration(true);
    }
  };

  useEffect(() => {
    const token = getAuthTokenfromLocalStorage();
    if (token) {
      setRegistration(false);
    } else {
      setRegistration(true);
    }
  }, []);

  return (
    <>
      {isRegistrationNeed && <SignIn onLogInClick={onLogInClick} />}
      {!isRegistrationNeed && (
        <Wrapper
          scrollUp={isScrollUp}
          scrollDown={isScrollDown}
          onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) =>
            onAnimationEndHandler(e)
          }
        >
          <SideBar onSignOutClick={onSignOutClick} />
          <MainLayout />
        </Wrapper>
      )}
    </>
  );
};

export default App;
