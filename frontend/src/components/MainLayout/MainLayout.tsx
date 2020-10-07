import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/theme';
import UserInfo from '../UserInfo/UserInfo';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100vh;
    background: ${colors.codGray};
    overflow: hidden;
    padding: 15px;
`;

const Separator = styled.div`
    border: 2px solid ${colors.riverBed};
    width: 100%;
    border-radius: 5px;
    margin-top: 65px;
`;

const MainLayout = () => {
    return (
        <Container>
            <UserInfo userName={'Name Surname'} userScore={4.7} />
            <Separator/>
        </Container>
    );
}

export default MainLayout;