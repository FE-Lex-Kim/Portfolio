// styles/index.js
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import behance from "../assets/font/behance-656346cc88819.otf";
import hackney from "../assets/font/HackneyPersonalUseOnly.ttf";

import titleBold from "../assets/font/Title_Bold.woff";
import titleLight from "../assets/font/Title_Light.woff";
import titleMedium from "../assets/font/Title_Medium.woff";

import robotoLight from "../assets/font/Roboto-Light.ttf";
import robotoMedium from "../assets/font/Roboto-Medium.ttf";
import robotoBold from "../assets/font/Roboto-Bold.ttf";

import NotoSansKRBold from "../assets/font/NotoSansKR-Bold.ttf";
import NotoSansKRLight from "../assets/font/NotoSansKR-Light.ttf";
import NotoSansKRMedium from "../assets/font/NotoSansKR-Medium.ttf";
import NotoSansKRRegular from "../assets/font/NotoSansKR-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: "behance"; // 이름 선언
    src: url(${behance}); // src 폴더에 저장한 경로
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }
  @font-face {
    font-family: "hackney"; // 이름 선언
    src: url(${hackney}); // src 폴더에 저장한 경로
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }


  @font-face {
    font-family: "title"; // 이름 선언
    src: url(${titleBold}); // src 폴더에 저장한 경로
    font-weight: 700;
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: "title"; // 이름 선언
    src: url(${titleLight}); // src 폴더에 저장한 경로
    font-weight: 300;
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: "title"; // 이름 선언
    src: url(${titleMedium}); // src 폴더에 저장한 경로
    font-weight: 500;
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: "roboto"; // 이름 선언
    src: url(${robotoLight}); // src 폴더에 저장한 경로
    font-weight: 300;
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }
  @font-face {
    font-family: "roboto"; // 이름 선언
    src: url(${robotoMedium}); // src 폴더에 저장한 경로
    font-weight: 500;
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }
  @font-face {
    font-family: "roboto"; // 이름 선언
    src: url(${robotoBold}); // src 폴더에 저장한 경로
    font-weight: 700;
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }

  @font-face {
    font-family: "NotoSansKR"; // 이름 선언
    src: url(${NotoSansKRBold}); // src 폴더에 저장한 경로
    font-weight: 700;
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }
  @font-face {
    font-family: "NotoSansKR"; // 이름 선언
    src: url(${NotoSansKRMedium}); // src 폴더에 저장한 경로
    font-weight: 500;
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }
  @font-face {
    font-family: "NotoSansKR"; // 이름 선언
    src: url(${NotoSansKRRegular}); // src 폴더에 저장한 경로
    font-weight: 400;
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }
  @font-face {
    font-family: "NotoSansKR"; // 이름 선언
    src: url(${NotoSansKRLight}); // src 폴더에 저장한 경로
    font-weight: 300;
    unicode-range: U+0030-0039,U+0041-005A,U+0061-007A;
  }
  
  // You can continue writing global styles here
  body{
    font-family: "NotoSansKR" ,"roboto";
    font-weight: 300;
    box-sizing: border-box;
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
