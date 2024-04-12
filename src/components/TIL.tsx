import styled from "styled-components";
import Header from "./Header";
import TilContent from "../assets/images/TIL목차.png";
import starCounting from "../assets/images/star개수.png";
import visitorGraph from "../assets/images/graph.png";

import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";

const TIL = () => {
  return (
    <TILBackgroundColorContainer>
      <Header fontColor="white" currentPage="Resume" />
      <TILWidthContainer>
        <TILTableOfContentImg src={TilContent} />
        <TILDescriptionContainer>
          <TILDescriptionTitle>Experience</TILDescriptionTitle>
          <TILDescription>
            저는 공부한 내용이 모두 다 기억된다고 생각하지 않습니다. <br />
            오래걸리지만 공부한 내용을 매번 적었고 정리했습니다. <br />
            제가 기억나지 않는 부분이 있다면, 어디서 정리 했는지 알 수 있어
            <br /> 바로 다시 학습할 수 있습니다. <br />
            그렇게 제가 공부한 모든 내용을 정리하고 쌓이다보니
            <br /> Github TIL에서는 410개 이상의 스타를 받았습니다.
            <br /> 매일 최대 300명, 최소 100명의 방문자가 있습니다.
            <br />
            이렇게 정리한 내용을 바탕으로 실제 프로젝트에 참여할때 <br />
            수월하게 프로젝트에 적용하고 있습니다.
          </TILDescription>
          <TILStarContainer>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarLine />
            <StarLine />
          </TILStarContainer>
        </TILDescriptionContainer>
        {/* <TILStarGraphContainer>
          <TILStarImg src={starCounting} />
          <TIlGraphImg src={visitorGraph} />
        </TILStarGraphContainer> */}
      </TILWidthContainer>
    </TILBackgroundColorContainer>
  );
};
const StarLine = styled.span`
  position: absolute;

  width: 0.5px;
  height: 70px;
  opacity: 0.8;

  background-color: #fff;
`;

const StarIcon = styled(Star)`
  width: 40px;
  height: 40px;
  fill: #fff;
`;

const TILStarContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 260px;

  & > span:nth-of-type(1) {
    top: 38px;
    left: 20px;
  }
  & > span:nth-of-type(2) {
    top: 150px;
    left: 20px;
  }
`;

const TILDescriptionTitle = styled.h3`
  font-size: 60px;
  color: #000;
  font-family: "behance";

  padding-left: 30px;
  margin: 0;
`;
const TILDescriptionContainer = styled.div`
  position: absolute;
  top: 400px;
  right: 180px;
  width: 530px;

  padding: 40px 40px 40px 60px;

  background-color: #faad1a;
`;
const TILStarImg = styled.img`
  width: 200px;
  margin-bottom: 30px;
`;

const TIlGraphImg = styled.img`
  width: 600px;
`;

const TILStarGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 70px;
  bottom: -80px;

  width: 800px;
  height: 500px;
`;

const TILDescription = styled.p`
  color: #000;
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 30px;

  padding-left: 40px;
`;

const TILTableOfContentImg = styled.img`
  width: 500px;
`;

const TILWidthContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 700px;

  margin: 0 auto;
`;

const TILBackgroundColorContainer = styled.div`
  background-color: #344c36;
`;

export default TIL;
