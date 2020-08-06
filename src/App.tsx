import React from 'react';
import styled from 'styled-components';

import SideBar from './components/SideBar/SideBar';
import MainLayout from './components/MainLayout/MainLayout';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const App = () => {

  return (
    <Wrapper>
      <SideBar />
      <MainLayout />
    </Wrapper>
  );
}

export default App;
