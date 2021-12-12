import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../assets/images/Cappadocia-mehmet-turgut-kirkgoz.jpg";
import Device from "./Screens.styles";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Catamaran',sans-serif;
  } 

   html, body {
    margin: 0;  
   }

  body{
    background: url(${BackgroundImage}) no-repeat center center/100% 100% fixed;
    
    height: 100vh;
    width: 100vw;
    
    justify-content: center;
    align-items: center;
    overflow: hidden;
    }
    
    @media ${Device.laptop} {
      body{
        background-size: cover;
      }
    }
`;

export default GlobalStyle;
