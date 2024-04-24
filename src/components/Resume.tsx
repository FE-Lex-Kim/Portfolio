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
import Puppeteer from "../assets/icons/puppeteer.svg";

import { ReactComponent as Pointer } from "../assets/icons/pointer.svg";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";
import tilTableOfContentImg from "../assets/images/검정TIL목차.png";
import Education from "./Education";

type ResumeSkillList = {
  title: string;
  iconSrc: string;
};

const Resume = () => {
  const resumeSkillList: ResumeSkillList[] = [
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
    { title: "Puppeteer", iconSrc: Puppeteer },
  ];

  return (
    <ResumeBackgroundColorContainer>
      <Header fontColor="white" currentPage="Resume" />
      <ResumeWidthContainer>
        <ResumeDescriptionContainer>
          <ResumeDescriptionTitle>Experience</ResumeDescriptionTitle>
          <ResumeDescription>
            저는 공부한 내용이 모두 다 기억된다고 생각하지 않습니다. <br />
            오래걸리지만 공부한 내용을 매번 적었고 정리했습니다. <br />
            제가 기억나지 않는 부분이 있다면, 어디서 정리 했는지 <br />알 수
            있어 바로 다시 학습할 수 있습니다. 이렇게 정리한 내용을 바탕으로
            제가 어떤 프로젝트에도 빠르게 적응하고, 팀에 공헌할 수 있는 준비된
            개발자임을 알려드리고 싶습니다.
          </ResumeDescription>
          <ResumeStarContainer>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarLine />
            <StarLine />
          </ResumeStarContainer>
        </ResumeDescriptionContainer>
        <ResumeLearningJourneyContainer>
          <ResumeLearningJourneyTitle>
            My Learning Journey
          </ResumeLearningJourneyTitle>
          <ResumeLearningJourneyList>
            {resumeSkillList.map(({ title, iconSrc }) => (
              <ResumeLearningJourneyItem>
                <IconComponent src={iconSrc} alt="icon" />
                <ResumeLearningJourneyText>{title}</ResumeLearningJourneyText>
              </ResumeLearningJourneyItem>
            ))}
          </ResumeLearningJourneyList>
        </ResumeLearningJourneyContainer>

        <ResumeResultContainer>
          <ResumeResultTitle>The Results</ResumeResultTitle>
          <ResumeResultList>
            <ResumeResultItem>• Star 400개 이상 달성</ResumeResultItem>
            <ResumeResultItem>• 매일 300명 ~ 50명 방문</ResumeResultItem>
            <ResumeResultItem>• 프론트엔드 TIL 검색시 1등</ResumeResultItem>
          </ResumeResultList>

          <ResumeResultImg src={tilTableOfContentImg} alt="TIL 목차 이미지" />
          <ResumeResultStar />
          <ResumeResultStar />
          <ResumeResultStar />
          <ResumeButton
            target="_blank"
            href="https://github.com/FE-Lex-Kim/-TIL"
          >
            <Pointer />
            TIL 구경가기!
          </ResumeButton>
        </ResumeResultContainer>

        <TodayILearnTextContainer>
          <TodayILearnText>Today I Learn</TodayILearnText>
          <TodayILearnText>Today I Learn</TodayILearnText>
          <TodayILearnText>Today I Learn</TodayILearnText>
        </TodayILearnTextContainer>
      </ResumeWidthContainer>
      <Education />
    </ResumeBackgroundColorContainer>
  );
};
const ResumeButton = styled.a`
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

const ResumeResultStar = styled(Star)`
  position: absolute;
  width: 80px;
  height: 80px;

  fill: #dbd2c1;
`;
const ResumeResultImg = styled.img`
  position: absolute;
  bottom: 100px;
  left: 50px;

  width: 600px;
`;
const ResumeResultItem = styled.li`
  color: #000;
  font-size: 18px;
  font-weight: 300;

  margin: 5px;
`;
const ResumeResultList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 700px;

  width: 550px;
  height: 200px;

  background-color: #faad1a;
`;
const ResumeResultTitle = styled.h3`
  font-size: 70px;
  font-family: "behance";
  color: #f1603c;
  margin: 0 200px 0 0;
`;
const ResumeResultContainer = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 400;

  & > h3 {
    text-align: end;
  }

  & > svg:nth-of-type(1) {
    top: -130px;
    left: 20px;
    width: 70px;
    height: 70px;
  }
  & > svg:nth-of-type(2) {
    width: 50px;
    height: 50px;
    left: 10px;
    top: -160px;
  }
  & > svg:nth-of-type(3) {
    width: 50px;
    height: 50px;

    left: 600px;
    top: 180px;
  }
`;

const IconComponent = styled.img`
  width: 80px;
  height: 80px;
`;

const ResumeLearningJourneyText = styled.p`
  color: #dbd2c1;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  margin-top: 3px;
`;

const ResumeLearningJourneyItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5px;
  padding: 5px;
`;

const ResumeLearningJourneyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 640px;
`;

const ResumeLearningJourneyTitle = styled.h3`
  font-family: "behance";
  font-size: 50px;
  color: #faad1b;

  margin-bottom: 20px;
`;

const ResumeLearningJourneyContainer = styled.div`
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
  height: 30px;
  opacity: 0.8;

  background-color: #fff;
`;

const StarIcon = styled(Star)`
  width: 40px;
  height: 40px;
  fill: #fff;
`;

const ResumeStarContainer = styled.div`
  position: absolute;
  top: 118px;
  left: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 180px;

  & > span:nth-of-type(1) {
    top: 38px;
    left: 20px;
  }
  & > span:nth-of-type(2) {
    top: 110px;
    left: 20px;
  }
`;

const ResumeDescriptionTitle = styled.h3`
  font-size: 50px;
  color: #000;
  font-family: "behance";

  margin: 0;
`;
const ResumeDescriptionContainer = styled.div`
  position: absolute;
  top: 100px;
  z-index: 100;

  width: 425px;

  padding: 40px 30px 40px 50px;

  background-color: #faad1a;
`;

const ResumeDescription = styled.p`
  color: #000;
  letter-spacing: 0.5px;
  font-size: 18px;
  line-height: 30px;
`;

const ResumeWidthContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 1300px;
  z-index: 300;

  margin: 0 auto;
`;

const ResumeBackgroundColorContainer = styled.div`
  background-color: #344c36;
`;

export default Resume;
