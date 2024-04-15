import styled from "styled-components";
import portfolioSite from "../assets/images/portfolioSite.png";
import Header from "./Header";

const Portfolio = () => {
  return (
    <PortfolioBackgroundColor>
      <Header fontColor="white" currentPage="Portfolio" />
      <PortfolioWidthContainer></PortfolioWidthContainer>
    </PortfolioBackgroundColor>
  );
};
const PortfolioWidthContainer = styled.div`
  width: 1300px;
  height: 650px;
  margin: 0 auto;

  background-color: #f6f1e3;
`;
const PortfolioBackgroundColor = styled.div`
  height: 830px;

  background-color: #000;
`;

export default Portfolio;
