import styled from "styled-components";
import Header from "./Header";
import backgroundImgMe from "../assets/images/나3.png";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";

const Main: React.FC = () => {
  return (
    <MainBackgroundColorContainer>
      <Header />
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
        <ContactList>
          <ContactItem>Gmail: /lexkim.dev</ContactItem>
          <ContactItem>Github: /FE-Lex-Kim</ContactItem>
        </ContactList>
      </MainWidthContainer>
    </MainBackgroundColorContainer>
  );
};
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

const MainBackgroundColorContainer = styled.div`
  background-color: #344c36;
  height: 644px;
`;

export default Main;
