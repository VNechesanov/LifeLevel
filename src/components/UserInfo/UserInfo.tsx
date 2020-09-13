import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/theme';

type UserType = {
    userScore: number,
    name: string,
    surname: string,
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Photo = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background: ${colors.swansDown};
    margin-right: 25px;
`;

const UserName = styled.div`
    font-size: 25px;
    color: ${colors.swansDown};
    font-weight: 200;
`;

const Score = styled.div`
    font-size: 120px;
    color: ${colors.swansDown};
    font-weight: 300;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type Props = {
    userName: string;
    userScore: number;
    userPhoto?: any;
}

const UserInfo = (props: Props) => {
    const { userName, userScore, userPhoto } = props;
    const [initialData, setInitialData] = useState({ userScore: 0, name: '', surname:''} as UserType)

    useEffect(() => {
        fetch('/userInfo').then(
            response => response.json()
        ).then(data => setInitialData(data))
    },[])

    return (
        <Container>
            <Photo>{userPhoto}</Photo>
            <Wrapper>
                <UserName>{initialData.name}{initialData.surname}</UserName>
                <Score>{initialData.userScore}</Score>
            </Wrapper>
        </Container>
    );
}

export default UserInfo;
