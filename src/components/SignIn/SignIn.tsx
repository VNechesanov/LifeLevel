import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { fadeInAnimation, fadeOutAnimation } from '../../utils/common';
import { LOG_IN_DEFAULT_VALUE, PASSWORD_DEFAULT_VALUE } from '../../utils/ServiceVariables';

import { colors } from '../../utils/theme';

enum SignInMarker {
    logIn = 'LogIn',
    password = 'Password',
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: ${colors.codGray};
`;

const Form = styled.div<{ isAnimationNeed: boolean }>`
    background: ${colors.swansDown};
    border-radius: 5px;
    height: 250px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 7px 21px 4px rgba(176,207,203);

    ${(props) =>
        props.isAnimationNeed &&
        css`
            animation: 0.8s linear ${fadeOutAnimation};
    `}

    ${(props) =>
        !props.isAnimationNeed &&
        css`
            animation: 0.8s linear ${fadeInAnimation};
    `}
`;

const Input = styled.input<{color: string}>`
    background: transparent;
    border: none;
    border-bottom: 3px solid ${(props) => props.color};
    border-radius: 3px;
    width: 400px;
    height: 20px;
    outline:none;
    margin-top: 50px;
    margin-bottom: 10px;
`;

const LogIn = styled.div`
    background: ${colors.ebony};
    border-radius: 3px;
    height: 30px;
    width: 100px;
    margin-top: 30px;
    color: ${colors.swansDown};
    cursor: pointer;
    text-align: center;
    line-height: 30px;
`;

type Props = {
    onLogInClick: () => void;
}

const SignIn = (props: Props) => {
    const { onLogInClick } = props;
    const [logIn, setLogIn] = useState('');
    const [password, setPassword] = useState('');
    const [isWrong, setWrong] = useState(false);
    const [isFadeOut, setFadeOut] = useState(false);

    const logInClicked = () => {
        if (logIn === LOG_IN_DEFAULT_VALUE && password === PASSWORD_DEFAULT_VALUE) {
            setWrong(false);
            setFadeOut(true);
        }
        if (logIn !== LOG_IN_DEFAULT_VALUE || password !== PASSWORD_DEFAULT_VALUE){
            setWrong(true);
        }
    }

    const handleChange = (e: any, marker: SignInMarker) => {
        if (marker === SignInMarker.logIn) {
            setLogIn(e.target.value);
        }
        if (marker === SignInMarker.password) {
            setPassword(e.target.value);
        }
    }

    const onAnimationEndHandler = (e: React.AnimationEvent<HTMLDivElement>) => {
        e.persist();
        if (e.animationName === fadeOutAnimation.getName() && logIn === LOG_IN_DEFAULT_VALUE && password === PASSWORD_DEFAULT_VALUE) {
            onLogInClick();
        }
    };


    return (
        <Container>
            <Form
                isAnimationNeed={isFadeOut}
                onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) => onAnimationEndHandler(e)}>
                <Input
                    placeholder="Log In"
                    value={logIn}
                    onChange={(e) => handleChange(e, SignInMarker.logIn)}
                    color={isWrong ? colors.milanoRed : colors.riverBed} />
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handleChange(e, SignInMarker.password)}
                    color={isWrong ? colors.milanoRed : colors.riverBed} />
                <LogIn onClick={() => logInClicked()} >
                    Log In
                </LogIn>
            </Form>
        </Container>
    )

}

export default SignIn;