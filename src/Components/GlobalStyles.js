import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {
  bodyBackground,
  bodyText,
  footerBackground,
} from "../Components/UI/variaveis";

export const Container = styled.div``;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

@media (max-width: 1000px) {
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

body {
    background: ${bodyBackground};
    color: ${bodyText};
    font: 500 1rem "Lato", sans-serif;
}

h3{
  font: 500 1.2rem "Cabin", sans-serif;
}

footer{
  margin-top: 0px;
  background-color: ${footerBackground};
  font: 600 1rem "Lato", sans-serif;
}

`;
