import styled from "styled-components";
import Device from "./Screens";

export const Container = styled.div`
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(12, 1fr);

  .start,
  .next {
    cursor: pointer;
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    grid-column: 3/-3;
    text-align: center;
    justify-self: center;
  }

  .start {
    max-width: 200px;
    grid-row: 11/-1;
    align-self: center;
  }

  .next {
    grid-row: 11/-1;
    align-self: flex-end;
  }
`;

export const H1 = styled.h1`
  font-family: Fascinate Inline, sans-serif;

  grid-column: 1/-1;
  grid-row: 1/3;

  text-align: center;
  justify-self: center;
  align-self: center;

  color: blanchedalmond;
  filter: drop-shadow(2px 2px #303a52);

  font-size: 30px;
  font-weight: 400;

  @media ${Device.tablet} {
    font-size: 25px;
    align-self: flex-start;
  }

  @media ${Device.mobileL} {
    font-size: 20px;
  }
`;

export const P = styled.p`
  grid-column: 2/-2;
  grid-row: ${(props) => (props.className === "score" ? "2/5" : "2/7")};

  justify-self: center;
  align-self: center;
  text-align: center;
  color: white;
  font-size: 30px;

  @media ${Device.tablet} {
    font-size: 25px;
    align-self: center;
    grid-row: ${(props) => (props.className === "score" ? "2/4" : "2/6")};
  }
`;
