import styled from "styled-components";
import Header from "./Header";
import portfolioSiteImg from "../assets/images/포트폴리오사이트.png";

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

type PortfolioArr = {
  mainImgSrc: string;
  projectTitle: string;
  projectDescription: JSX.Element;
  projectSkillArr: { projectSkillImgSrc: string; projectSkillText: string }[];
  projectNotionHref: string;
};

const Portfolio: React.FC = () => {
  // 메인 이미지 주소, 프로젝트 제목, 프로젝트 설명, [{프로젝트 스킬 이미지, 프로젝트 스킬 텍스트}], 프로젝트 노션 주소
  const portfolioArr: PortfolioArr[] = [
    {
      mainImgSrc: portfolioSiteImg,
      projectTitle: "Portfolio Site",
      projectDescription: (
        <>
          <b>
            제가 진행했던 프로젝트와 저에대한 소개를 담긴 포트폴리오 사이트를
            만들어 보았습니다.
          </b>
          <br />
          지금까지 공부한 <PinkColor>TypeScript</PinkColor>를 사용해서
          만들었습니다. <br />
          <PinkColor>Storybook</PinkColor>으로 각 시각화 해서 각 컴포넌트별로
          개발하기 수월했습니다. 이번에 또한
          <PinkColor> css animation</PinkColor>을 활용한 다양한 효과를 추가해
          animation에 대한 지식도 늘었던 계기가 되었습니다. <br />
          또한 <PinkColor>CI, CD</PinkColor> 구축으로 배포하는 경험을 해볼 수
          있었습니다.
        </>
      ),
      projectSkillArr: [
        { projectSkillImgSrc: ReactIcon, projectSkillText: "React" },
        { projectSkillImgSrc: TypeScriptIcon, projectSkillText: "TypeScript" },
        {
          projectSkillImgSrc: StyledComponentIcon,
          projectSkillText: "Styled Component",
        },
        { projectSkillImgSrc: StorybookIcon, projectSkillText: "Storybook" },
      ],
      projectNotionHref: "#노션주소 넣기",
    },
    {
      mainImgSrc: portfolioSiteImg,
      projectTitle: "Portfolio Site",
      projectDescription: (
        <>
          <b>
            제가 진행했던 프로젝트와 저에대한 소개를 담긴 포트폴리오 사이트를
            만들어 보았습니다.
          </b>
          <br />
          지금까지 공부한 <PinkColor>TypeScript</PinkColor>를 사용해서
          만들었습니다. <br />
          <PinkColor>Storybook</PinkColor>으로 각 시각화 해서 각 컴포넌트별로
          개발하기 수월했습니다. 이번에 또한
          <PinkColor> css animation</PinkColor>을 활용한 다양한 효과를 추가해
          animation에 대한 지식도 늘었던 계기가 되었습니다. <br />
          또한 <PinkColor>CI, CD</PinkColor> 구축으로 배포하는 경험을 해볼 수
          있었습니다.
        </>
      ),
      projectSkillArr: [
        { projectSkillImgSrc: ReactIcon, projectSkillText: "React" },
        { projectSkillImgSrc: TypeScriptIcon, projectSkillText: "TypeScript" },
        {
          projectSkillImgSrc: StyledComponentIcon,
          projectSkillText: "Styled Component",
        },
        { projectSkillImgSrc: StorybookIcon, projectSkillText: "Storybook" },
      ],
      projectNotionHref: "#노션주소 넣기",
    },
  ];

  return (
    <PortfolioBackgroundColor>
      <Header fontColor="white" currentPage="Portfolio" />
      {portfolioArr.map(
        ({
          mainImgSrc,
          projectTitle,
          projectDescription,
          projectSkillArr,
          projectNotionHref,
        }) => (
          <PortfolioWidthContainer>
            <PortfolioContainer>
              <PortfolioImg src={mainImgSrc} alt="프로젝트 메인 이미지" />
              <PortfolioDescriptionLayoutContainer>
                <PortfolioTitle>{projectTitle}</PortfolioTitle>
                <PortfolioDescription>
                  {projectDescription}
                </PortfolioDescription>
                <PortfolioSkillTitle>Skill</PortfolioSkillTitle>
                <PortfolioSkillList>
                  {projectSkillArr.map(
                    ({ projectSkillImgSrc, projectSkillText }) => (
                      <PortfolioSkillItem>
                        <PortfolioSkillImg
                          src={projectSkillImgSrc}
                          alt={projectSkillText}
                        />
                        <PortfolioSkillText>
                          {projectSkillText}
                        </PortfolioSkillText>
                      </PortfolioSkillItem>
                    )
                  )}
                </PortfolioSkillList>
                <PortfolioReadDetail href={projectNotionHref}>
                  자세히 설명 ▶ Notion
                </PortfolioReadDetail>
              </PortfolioDescriptionLayoutContainer>
            </PortfolioContainer>
          </PortfolioWidthContainer>
        )
      )}
    </PortfolioBackgroundColor>
  );
};

const PortfolioContainer = styled.div`
  display: flex;
`;

const PortfolioReadDetail = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto auto;
  padding: 13px 20px 7px 20px;

  width: 200px;
  height: 30px;

  background-color: #faad1b;
  color: #000;

  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #ed3770;
  }
`;

const PortfolioSkillText = styled.p`
  text-align: center;
  margin: 0;
`;

const PinkColor = styled.span`
  color: #ed3770;
`;
const PortfolioDescriptionLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PortfolioSkillImg = styled.img`
  width: 50px;
  height: 50px;
`;
const PortfolioSkillItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
const PortfolioSkillList = styled.ul``;
const PortfolioSkillTitle = styled.h4`
  font-size: 30px;
  margin-bottom: 0;
`;
const PortfolioDescription = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  font-family: NotoSansKR;
  font-weight: 400;
  color: #383837;
  line-height: 27px;
`;
const PortfolioTitle = styled.h3`
  margin: 0;
  font-family: "behance";
  font-size: 50px;
  color: #faad1b;
`;
const PortfolioImg = styled.img`
  width: 700px;
  margin-right: 50px;
`;

const PortfolioWidthContainer = styled.div`
  display: flex;
  width: 1300px;

  padding: 50px;
  margin: 100px auto;

  background-color: #f6f1e3;
`;
const PortfolioBackgroundColor = styled.div`
  background-color: #000;
  padding-bottom: 300px;
`;

export default Portfolio;
