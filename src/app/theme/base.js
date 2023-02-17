import { createGlobalStyle } from "styled-components";
import { colors } from "./tokens";

export const BaseStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${colors.background};
  }
`;
