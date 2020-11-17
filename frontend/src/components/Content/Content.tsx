import React, { useCallback, useEffect, useMemo, useState } from "react";

import SideBar from "../SideBar/SideBar";
import MyPage from "./MyPage/MyPage";
import SignIn from "../SignIn/SignIn";
import {
  getAuthTokenfromLocalStorage,
  removeAuthTokenFromLocalStorage,
} from "../../store/index";
import { Container, Wrapper } from "./styled";
import { scrollContainerMovementDown } from "@utils";

const Content = () => {
  const [isRegistrationNeed, setRegistration] = useState(true);
  const [isScrollDown, setScrollDown] = useState(false);
  const [isScrollUp, setScrollUp] = useState(false);

  const onLogInClick = useCallback(() => {
    const token = getAuthTokenfromLocalStorage();

    if (token !== "") {
      setRegistration(false);
      setScrollUp(true);
      setScrollDown(false);
    } else {
      setRegistration(true);
    }
  }, []);

  const onSignOutClick = useCallback(() => {
    setScrollDown(true);
    setScrollUp(false);
    removeAuthTokenFromLocalStorage();
  }, []);

  const onAnimationEndHandler = useCallback(
    (e: React.AnimationEvent<HTMLDivElement>) => {
      e.persist();
      if (e.animationName === scrollContainerMovementDown.getName()) {
        setRegistration(true);
      }
    },
    []
  );

  useEffect(() => {
    const token = getAuthTokenfromLocalStorage();
    if (token) {
      setRegistration(false);
    } else {
      setRegistration(true);
    }
  }, []);

  const page = useMemo(() => {
    switch (true) {
      default:
        return <MyPage />;
    }
  }, []);

  return (
    <Container>
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
          {page}
        </Wrapper>
      )}
    </Container>
  );
};

export default Content;
