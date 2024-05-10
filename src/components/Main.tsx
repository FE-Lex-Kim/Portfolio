import styled from "styled-components";
import Header from "./Header";
import backgroundImgMe from "../assets/images/나3.png";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";
import React from "react";

const Main: React.FC = () => {
  return (
    <>
      <MainGreenBackgroundColorContainer>
        <Header currentPage="Main" fontColor="white" />
        <MainWidthContainer>
          <EojinKimImageContainer>
            <FirstStarIcon />
            <SecondStarIcon />
            <ThirdStarIcon />
          </EojinKimImageContainer>
          <PortfolioList>
            <PortfolioItem>PORTFOLIO</PortfolioItem>
            <PortfolioItem>PORTFOLIO</PortfolioItem>
            <PortfolioItem>PORTFOLIO</PortfolioItem>
            <PortfolioItem>PORTFOLIO</PortfolioItem>
          </PortfolioList>
          <ShortPersonInfos>
            저는 효율성과 정확성을 중요시 여기는 개발자입니다. 프론트엔드의
            사용자와 밀접하게 개발하는 업무가 마음에 듭니다. 또한 화면에
            보여지는 프로그래밍에 흥미를 느끼고 디자이너와 백엔드 사이에서
            커뮤니케이션하는 것을 즐기고 있습니다.
          </ShortPersonInfos>
          <ContactList>
            <ContactItem>Gmail: /lexkim.dev</ContactItem>
            <ContactItem>Github: /FE-Lex-Kim</ContactItem>
          </ContactList>
        </MainWidthContainer>
      </MainGreenBackgroundColorContainer>
      <MainBlackBackgroundColorContainer></MainBlackBackgroundColorContainer>
    </>
  );
};

const ShortPersonInfos = styled.p`
  position: absolute;
  z-index: 30;
  top: 550px;
  left: -60px;

  color: #f7f1e3;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 20px;

  width: 400px;
`;

const MainBlackBackgroundColorContainer = styled.div`
  position: relative;
  background-color: #000;
  height: 244px;
  z-index: -1;
`;
const ContactItem = styled.li`
  color: #f7f1e3;
  font-size: 25px;
  margin: 10px 0;
`;

const ContactList = styled.ul`
  position: absolute;
  z-index: 20;
  right: 200px;
  top: 280px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 280px;
  height: 250px;
  border-radius: 5px;

  background-color: #344c36;
`;

const PortfolioItem = styled.li`
  font-family: "hackney";
  font-size: 200px;
  line-height: 150px;
  color: #faad1b;
`;

const PortfolioList = styled.ul`
  position: absolute;
  left: 200px;
  top: 0px;

  display: flex;
  flex-direction: column;

  letter-spacing: 20px;

  & > li:nth-of-type(1) {
    color: #dbd2c1;
    z-index: 999;
  }
`;

const FirstStarIcon = styled(Star)`
  position: absolute;
  top: 22px;
  left: -35px;

  fill: #faad1b;

  width: 100px;
  height: 100px;
`;
const SecondStarIcon = styled(Star)`
  fill: #faad1b;
  position: absolute;
  top: 95px;
  left: -40px;

  width: 60px;
  height: 60px;
`;
const ThirdStarIcon = styled(Star)`
  fill: #faad1b;
  position: absolute;
  bottom: -20px;
  right: -20px;

  width: 60px;
  height: 60px;
`;

const EojinKimImageContainer = styled.div`
  position: absolute;

  width: 491px;
  height: 561px;
  top: 96px;

  background: url(${backgroundImgMe}) -500px -50px no-repeat #92633e;
  background-size: 1500px;
  z-index: 10;
`;

const MainWidthContainer = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
`;

const MainGreenBackgroundColorContainer = styled.div`
  background-color: #344c36;
  height: 644px;
`;

export default Main;
