import styled, { css } from "styled-components";
import { fadeInAnimation, fadeOutAnimation, colors } from "@utils";

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
  border-radius: 5px;
  height: auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 7px 21px 4px rgba(212, 212, 212);
  padding-bottom: 20px;

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
  border-bottom: 3px solid ${(props) => props.color};
  border-radius: 3px;
  width: 400px;
  height: 20px;
  outline: none;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const LogIn = styled.div`
  background: ${colors.ebony};
  border-radius: 3px;
  height: 30px;
  width: 100px;
  color: ${colors.swansDown};
  cursor: pointer;
  text-align: center;
  line-height: 30px;
`;

export const Choice = styled.div`
  cursor: pointer;
  padding: 0 5px;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  color: ${colors.codGray};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;
