import styled from "styled-components";
import Device from "./Screens.styles";

export const Wrapper = styled.div`
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(12, 1fr);
  justify-items: center;
  align-items: center;

  .start,
  .next {
    cursor: pointer;
    background-image: linear-gradient(
      linear-gradient(
        to right,
        rgb(198, 255, 221),
        rgb(251, 215, 134),
        rgb(247, 121, 125)
      )
    );

    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
    text-align: center;
    grid-column: 4/-4;
    grid-row: 2/3;
  }
`;

export const H1 = styled.h1`
  grid-column: 3/-3;
  grid-row: 1/2;

  justify-self: center;
  align-self: center;

  font-family: Fascinate Inline, sans-serif;
  color: blanchedalmond;
  filter: drop-shadow(2px 2px #303a52);
  font-size: 4vw;
  font-weight: 400;
  text-align: center;

  @media ${Device.tablet} {
    font-size: 5vw;
  }

  @media ${Device.mobileL} {
    grid-column: 4/-4;
    font-size: 6vw;
  }
`;

export const P = styled.p`
  grid-column: 4/-4;
  grid-row: 2/3;

  justify-self: center;
  align-self: flex-start;

  align-self: ${(props) =>
    props.className === "score" ? "flex-start" : "flex-end"};

  color: white;
  font-size: 3vw;
  margin: 0;

  @media ${Device.tablet} {
    font-size: 3.5vw;
  }

  @media ${Device.mobileL} {
    font-size: 5vw;
  }
`;
