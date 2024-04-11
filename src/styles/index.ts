// styles/index.js
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import behance from "../assets/font/behance-656346cc88819.otf";
import ptSansRegular from "../assets/font/PTSans-Regular.ttf";
import ptSansBold from "../assets/font/PTSans-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: "behance"; // 이름 선언
    src: url(${behance}); // src 폴더에 저장한 경로
    font-weight: bold;
  }
  @font-face {
    font-family: "ptSansRegular"; // 이름 선언
    src: url(${ptSansRegular}); // src 폴더에 저장한 경로
    font-weight: 400;
  }
  @font-face {
    font-family: "ptSansBold"; // 이름 선언
    src: url(${ptSansBold}); // src 폴더에 저장한 경로
    font-weight: bold;
  }
  // You can continue writing global styles here
  body{
    font-family: "ptSansRegular";
  }
  a {
    color: #fff; 
    text-decoration: none; 
    outline: none
  };
  a:hover, a:active {
    text-decoration: none; 
    color:#faad1b;
  }
  ul{
    padding:0;
  }
  li{
    list-style: none;
  }
`;
