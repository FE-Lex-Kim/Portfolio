// styles/index.js
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  // You can continue writing global styles here
  ul{
    padding:0;
  }
  li{
    list-style: none;
  }
`;
