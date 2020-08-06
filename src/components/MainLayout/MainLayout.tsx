import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/theme';

const Container = styled.div`
    display: flex;
    width: 80%;
    height: 100vh;
    background: ${colors.codGray};
    overflow-x: hidden;
    overflow-y: auto;
`;

const MainLayout = () => {
    return (
        <Container></Container>
    );
}

export default MainLayout;