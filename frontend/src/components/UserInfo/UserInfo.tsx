import React from "react";
import { Container, Photo, Score, UserName, Wrapper } from "./styled";

type Props = {
  userName: string;
  userScore: number;
  userPhoto?: any;
};

const UserInfo = (props: Props) => {
  const { userName, userScore, userPhoto } = props;

  return (
    <Container>
      <Photo>{userPhoto}</Photo>
      <Wrapper>
        <UserName>{userName}</UserName>
        <Score>{userScore}</Score>
      </Wrapper>
    </Container>
  );
};

export default UserInfo;
