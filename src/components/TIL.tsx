import styled from "styled-components";
import Header from "./Header";

import CSSIcon from "../assets/icons/css-3.svg";
import HTMLIcon from "../assets/icons/html-5.svg";
import JavascriptIcon from "../assets/icons/javascript-js.svg";
import ReactIcon from "../assets/icons/react.svg";
import TypeScriptIcon from "../assets/icons/typescript-icon.svg";
import NextJsIcon from "../assets/icons/nextjs.svg";
import StyledComponentIcon from "../assets/icons/styled-components.svg";
import TailwindIcon from "../assets/icons/tailwind-css.svg";
import ReduxToolkitIcon from "../assets/icons/redux-original.svg";
import ReactQueryIcon from "../assets/icons/react-query-seeklogo.svg";
import StorybookIcon from "../assets/icons/storybook-icon.svg";
import CypressIcon from "../assets/icons/cypress.svg";
import WebpackIcon from "../assets/icons/webpack-original.svg";
import GitIcon from "../assets/icons/git.svg";

import { ReactComponent as Pointer } from "../assets/icons/pointer.svg";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";
import tilTableOfContentImg from "../assets/images/검정TIL목차.png";

type TilSkillList = {
  title: string;
  iconSrc: string;
};

const TIL = () => {
  const tilSkillList: TilSkillList[] = [
    { title: "CSS", iconSrc: CSSIcon },
    { title: "HTML", iconSrc: HTMLIcon },
    { title: "Javascript", iconSrc: JavascriptIcon },
    { title: "React", iconSrc: ReactIcon },
    { title: "TypeScript", iconSrc: TypeScriptIcon },
    { title: "Next.js", iconSrc: NextJsIcon },
    { title: "Styled-Component", iconSrc: StyledComponentIcon },
    { title: "Tailwind", iconSrc: TailwindIcon },
    { title: "Redux-toolkit", iconSrc: ReduxToolkitIcon },
    { title: "React-Query", iconSrc: ReactQueryIcon },
    { title: "Storybook", iconSrc: StorybookIcon },
    { title: "Cypress", iconSrc: CypressIcon },
    { title: "Webpack", iconSrc: WebpackIcon },
    { title: "Git", iconSrc: GitIcon },
  ];

  return (
    <TILBackgroundColorContainer>
      <Header fontColor="white" currentPage="Resume" />
      <TILWidthContainer>
        <TILDescriptionContainer>
          <TILDescriptionTitle>Experience</TILDescriptionTitle>
          <TILDescription>
            저는 공부한 내용이 모두 다 기억된다고 생각하지 않습니다. <br />
            오래걸리지만 공부한 내용을 매번 적었고 정리했습니다. <br />
            제가 기억나지 않는 부분이 있다면, 어디서 정리 했는지 <br />알 수
            있어 바로 다시 학습할 수 있습니다.
            <br />
            <br />
            그렇게 제가 공부한 모든 내용을 정리하고 쌓이다보니
            <br /> Github TIL에서는 410개 이상의 스타를 받았으며
            <br /> 매일 최대 200명, 최소 50명의 방문자가 왔습니다.
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
        <TILLearningJourneyContainer>
          <TILLearningJourneyTitle>My Learning Journey</TILLearningJourneyTitle>
          <TILLearningJourneyList>
            {tilSkillList.map(({ title, iconSrc }) => (
              <TILLearningJourneyItem>
                <IconComponent src={iconSrc} alt="icon" />
                <TILLearningJourneyText>{title}</TILLearningJourneyText>
              </TILLearningJourneyItem>
            ))}
          </TILLearningJourneyList>
        </TILLearningJourneyContainer>

        <TILResultContainer>
          <TILResultTitle>The Results</TILResultTitle>
          <TILResultList>
            <TILResultItem>Star 400개 이상 달성</TILResultItem>
            <TILResultItem>매일 300명 ~ 50명 방문</TILResultItem>
            <TILResultItem>프론트엔드 TIL 검색시 1등</TILResultItem>
          </TILResultList>

          <TILResultImg src={tilTableOfContentImg} alt="TIL 목차 이미지" />
          <TILResultStar />
          <TILResultStar />
          <TILResultStar />
          <TilButton target="_blank" href="https://github.com/FE-Lex-Kim/-TIL">
            <Pointer />
            TIL 구경가기!
          </TilButton>
        </TILResultContainer>

        <TodayILearnTextContainer>
          <TodayILearnText>Today I Learn</TodayILearnText>
          <TodayILearnText>Today I Learn</TodayILearnText>
          <TodayILearnText>Today I Learn</TodayILearnText>
        </TodayILearnTextContainer>
      </TILWidthContainer>
    </TILBackgroundColorContainer>
  );
};
const TilButton = styled.a`
  display: flex;
  align-items: center;

  position: absolute;
  right: 100px;
  top: 170px;
  font-size: 18px;
  padding: 10px 30px;

  border-radius: 30px;
  border: 1px solid #f1603c;

  background-color: #f1603c;

  & > svg {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    fill: #fff;
  }

  &:hover {
    color: black;

    & > svg {
      fill: black;
    }
  }
`;

const TILResultStar = styled(Star)`
  position: absolute;
  width: 80px;
  height: 80px;
`;
const TILResultImg = styled.img`
  position: absolute;
  bottom: 100px;
  left: 50px;

  width: 600px;
`;
const TILResultItem = styled.li`
  color: #000;
  font-size: 18px;
  font-weight: 300;

  margin: 5px;
`;
const TILResultList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 700px;

  width: 550px;
  height: 200px;

  background-color: #faad1a;
`;
const TILResultTitle = styled.h3`
  font-size: 70px;
  font-family: "behance";
  color: #f1603c;
  margin: 0 200px 0 0;
`;
const TILResultContainer = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 400;

  & > h3 {
    text-align: end;
  }
`;

const IconComponent = styled.img`
  width: 80px;
  height: 80px;
`;

const TILLearningJourneyText = styled.p`
  color: #dbd2c1;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  margin-top: 3px;
`;

const TILLearningJourneyItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5px;
  padding: 5px;
`;

const TILLearningJourneyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 600px;
`;

const TILLearningJourneyTitle = styled.h3`
  font-family: "behance";
  font-size: 50px;
  color: #faad1b;

  margin-bottom: 20px;
`;

const TILLearningJourneyContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 300;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;
  height: 500px;
`;

const TodayILearnText = styled.p`
  font-family: "hackney";
  font-size: 150px;
  line-height: 100px;

  color: #dbd2c1;
  margin: 0;
`;

const TodayILearnTextContainer = styled.div`
  position: absolute;
  top: 600px;
  right: 150px;

  display: flex;
  flex-direction: column;
  & > p:nth-of-type(1) {
    color: #92633e;

    z-index: 200;
  }
`;

const StarLine = styled.span`
  position: absolute;

  width: 0.5px;
  height: 90px;
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
  top: 125px;
  left: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 300px;

  & > span:nth-of-type(1) {
    top: 38px;
    left: 20px;
  }
  & > span:nth-of-type(2) {
    top: 170px;
    left: 20px;
  }
`;

const TILDescriptionTitle = styled.h3`
  font-size: 50px;
  color: #000;
  font-family: "behance";

  margin: 0;
`;
const TILDescriptionContainer = styled.div`
  position: absolute;
  top: 20px;
  z-index: 100;

  width: 425px;

  padding: 40px 30px 40px 50px;

  background-color: #faad1a;
`;

const TILDescription = styled.p`
  color: #000;
  letter-spacing: 0.5px;
  font-size: 18px;
  line-height: 30px;
`;

const TILWidthContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 1300px;

  margin: 0 auto;
`;

const TILBackgroundColorContainer = styled.div`
  background-color: #344c36;
`;

export default TIL;
