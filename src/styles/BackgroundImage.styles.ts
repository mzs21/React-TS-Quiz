import styled from "styled-components";
import BackgroundImage from "../assets/images/Cappadocia-mehmet-turgut-kirkgoz.jpg";
import Device from "./Screens";

export const BackgroundImageStyles = styled.div`
  background: url(${BackgroundImage}) no-repeat center center/100% 100% fixed;

  height: 100vh;
  width: 100vw;

  z-index: -1;
  grid-column: 1/-1;
  grid-row: 1/-1;

  justify-self: center;
  align-self: center;
  overflow: hidden;

  @media ${Device.laptop} {
    background-size: cover;
  }
`;

export default BackgroundImageStyles;
