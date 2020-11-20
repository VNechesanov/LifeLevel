import styled, { css } from "styled-components";
import { fadeInAnimation, fadeOutAnimation, colors, px } from "src/utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${colors.codGray};
`;

export const Form = styled.div<{ isAnimationNeed: boolean }>`
  background: ${colors.mercury};
  border-radius: ${px(5)};
  height: auto;
  width: ${px(450)};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 ${px(7)} ${px(21)} ${px(4)} rgba(212, 212, 212);
  padding-bottom: ${px(20)};

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

export const Input = styled.input<{ color: string }>`
  background: transparent;
  border: none;
  border-bottom: ${px(3)} solid ${(props) => props.color};
  border-radius: ${px(3)};
  width: ${px(400)};
  height: ${px(20)};
  outline: none;
  margin-top: ${px(50)};
  margin-bottom: ${px(10)};
`;

export const LogIn = styled.div`
  background: ${colors.ebony};
  border-radius: ${px(3)};
  height: ${px(30)};
  width: ${px(100)};
  color: ${colors.swansDown};
  cursor: pointer;
  text-align: center;
  line-height: ${px(30)};
`;

export const Choice = styled.div`
  cursor: pointer;
  padding: 0 ${px(5)};
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${px(10)};
  color: ${colors.codGray};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${px(30)};
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;
