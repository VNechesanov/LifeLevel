import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/theme';

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    width: 20%;
    height: 100vh;
    background: ${colors.ebony};
    overflow: hidden;
`;

const SignOut = styled.div`
    display: flex;
    color: ${colors.swansDown};
    font-weight: 200;
    font-size: 17px;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
`;

const Logo = styled.div``;

type Props = {
    onSignOutClick: () => void;
}

const SideBar = (props: Props) => {
    const { onSignOutClick } = props;

    const onLogOutClick = () => {
        onSignOutClick();
    }

    return (
        <Container>
            <Logo/>
            <SignOut onClick={() => onLogOutClick()} >sign out</SignOut>
        </Container>
    );
}

export default SideBar;