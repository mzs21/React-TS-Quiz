import styled from "styled-components";
import { ButtonWrapperProps } from "../Interface";
import Linear from "./Linears";
import Device from "./Screens";

export const QuestionCardStyle = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085e3;
  padding: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  align-self: center;
  justify-self: center;
  margin-top: 0px;

  grid-column: 2/-2;
  grid-row: 3/-1;

  p {
    font-size: 1rem;
  }

  @media ${Device.tablet} {
    font-size: 25px;
    grid-row: 2/-1;
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3 ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8 rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? Linear.green
        : !correct && userClicked
        ? Linear.red
        : Linear.blue};

    border: 2px solid white;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: black;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
