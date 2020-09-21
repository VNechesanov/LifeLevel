import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import SideBar from './components/SideBar/SideBar';
import MainLayout from './components/MainLayout/MainLayout';
import SignIn from './components/SignIn/SignIn';

const scrollContainerMovementUp = keyframes`
  from {transform: translateY( ${window.innerHeight}px )};
  to {transform: translateY(0)};
`;

const scrollContainerMovementDown = keyframes`
  from {transform: translateY(0)};
  to {transform: translateY( ${window.innerHeight}px )}
`;

const Wrapper = styled.div<{ scrollUp: boolean; scrollDown: boolean}>`
    display: flex;
    flex-direction: row;

    ${(props) =>
      props.scrollUp &&
      css`
        animation: 0.8s cubic-bezier(0.45, 0.05, 0, 1) ${scrollContainerMovementUp};
    `};

    ${(props) =>
      props.scrollDown &&
      css`
          animation: 0.8s cubic-bezier(0.45, 0.05, 0, 1) ${scrollContainerMovementDown};
    `};
`;

const App = () => {
  const [isLogInClicked, setLogIn] = useState(false);
  const [isScrollDown, setScrollDown] = useState(false);
  const [isScrollUp, setScrollUp] = useState(false);

  const onLogInClick = () => {
    setLogIn(true);
    setScrollUp(true);
    setScrollDown(false);
  }
  const onSignOutClick = () => {
    setScrollDown(true);
    setScrollUp(false);
  }

  const onAnimationEndHandler = (e: React.AnimationEvent<HTMLDivElement>) => {
    e.persist();
    if (e.animationName === scrollContainerMovementDown.getName()) {
      setLogIn(false);
    }
  };

  console.info('scroll up: ', isLogInClicked)
  console.info('scroll down: ', isScrollDown)

  return (
    <>
      {!isLogInClicked && <SignIn onLogInClick={onLogInClick} />}
      {isLogInClicked &&
        <Wrapper
          scrollUp={isScrollUp}
          scrollDown={isScrollDown}
          onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) => onAnimationEndHandler(e)}>
          <SideBar onSignOutClick={onSignOutClick} />
          <MainLayout />
        </Wrapper>
      }
    </>
  );
}

export default App;
