import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/theme';

const Container = styled.div`
    display: flex;
    width: 20%;
    height: 100vh;
    background: ${colors.ebony};
    overflow: hidden;
`;

const SideBar = () => {
    return (
        <Container></Container>
    );
}

export default SideBar;