import React, { useState } from "react";
import { getAuthTokenfromLocalStorage } from "src/store";

import {
  registration,
  fadeOutAnimation,
  LOG_IN_DEFAULT_VALUE,
  PASSWORD_DEFAULT_VALUE,
  colors,
} from "src/utils";
import {
  Container,
  Form,
  Input,
  LogIn,
  Choice,
  ChoiceWrapper,
  ButtonWrapper,
} from "./styled";

enum SignInMarker {
  logIn = "LogIn",
  password = "Password",
  name = "Name",
  surname = "Surname",
  email = "Email",
}

enum Status {
  LogIn = "logIn",
  Registration = "registration",
}

type Props = {
  onLogInClick: () => void;
};

const SignIn = (props: Props) => {
  const { onLogInClick } = props;

  const [logIn, setLogIn] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [isWrong, setWrong] = useState(false);
  const [isFadeOut, setFadeOut] = useState(false);

  const [screenStatus, setScreenStatus] = useState(Status.LogIn);

  const logInClicked = () => {
    switch (true) {
      case screenStatus === Status.Registration &&
        (!name || !surname || !email || !password):
        setWrong(true);
        return;
      case screenStatus === Status.LogIn:
        const token = getAuthTokenfromLocalStorage();
        if (!token) {
          setWrong(true);
          return;
        }
        break;
      case screenStatus === Status.Registration:
        registration(name, surname, email, password);
        setFadeOut(true);
        return;
      case logIn === LOG_IN_DEFAULT_VALUE &&
        password === PASSWORD_DEFAULT_VALUE:
        setWrong(false);
        setFadeOut(true);
        return;
      case logIn !== LOG_IN_DEFAULT_VALUE ||
        password !== PASSWORD_DEFAULT_VALUE:
        setWrong(true);
        return;
    }
  };

  const handleChange = (e: any, marker: SignInMarker) => {
    setWrong(false);

    switch (marker) {
      case SignInMarker.logIn:
        return setLogIn(e.target.value);
      case SignInMarker.password:
        return setPassword(e.target.value);
      case SignInMarker.name:
        return setName(e.target.value);
      case SignInMarker.surname:
        return setSurname(e.target.value);
      case SignInMarker.email:
        return setEmail(e.target.value);
    }
  };

  const onAnimationEndHandler = (e: React.AnimationEvent<HTMLDivElement>) => {
    e.persist();
    if (e.animationName === fadeOutAnimation.getName()) {
      onLogInClick();
    }
  };

  const renderForm = () => {
    if (screenStatus === Status.LogIn) {
      return (
        <>
          <Input
            placeholder="Log In"
            value={logIn}
            onChange={(e) => handleChange(e, SignInMarker.logIn)}
            color={isWrong ? colors.milanoRed : colors.riverBed}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => handleChange(e, SignInMarker.password)}
            color={isWrong ? colors.milanoRed : colors.riverBed}
          />
        </>
      );
    }

    return (
      <>
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => handleChange(e, SignInMarker.name)}
          color={isWrong ? colors.milanoRed : colors.riverBed}
        />
        <Input
          placeholder="surname"
          value={surname}
          onChange={(e) => handleChange(e, SignInMarker.surname)}
          color={isWrong ? colors.milanoRed : colors.riverBed}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => handleChange(e, SignInMarker.email)}
          color={isWrong ? colors.milanoRed : colors.riverBed}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e) => handleChange(e, SignInMarker.password)}
          color={isWrong ? colors.milanoRed : colors.riverBed}
        />
      </>
    );
  };

  return (
    <Container>
      <Form
        isAnimationNeed={isFadeOut}
        onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) =>
          onAnimationEndHandler(e)
        }
      >
        {renderForm()}
        <ButtonWrapper>
          <ChoiceWrapper>
            <Choice onClick={() => setScreenStatus(Status.LogIn)}>
              {`log in `}
            </Choice>
            {` | `}
            <Choice onClick={() => setScreenStatus(Status.Registration)}>
              {` registration`}
            </Choice>
          </ChoiceWrapper>
          <LogIn onClick={() => logInClicked()}>Continue</LogIn>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default SignIn;
