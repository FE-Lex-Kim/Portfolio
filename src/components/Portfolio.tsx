import styled from "styled-components";
import Header from "./Header";

import portfolioSiteImg from "../assets/images/포트폴리오사이트.png";
import cherryPickImg from "../assets/images/체리픽사이트.png";
import kurlyImg from "../assets/images/마켓컬리.png";
import watflicha from "../assets/images/왓플리챠.png";

import CSSIcon from "../assets/icons/css-3.svg";
import HTMLIcon from "../assets/icons/html-5.svg";
import JavascriptIcon from "../assets/icons/javascript-js.svg";
import ReactIcon from "../assets/icons/react.svg";
import TypeScriptIcon from "../assets/icons/typescript-icon.svg";
import StyledComponentIcon from "../assets/icons/styled-components.svg";
import TailwindIcon from "../assets/icons/tailwind-css.svg";
import ReduxToolkitIcon from "../assets/icons/redux-original.svg";
import ReactQueryIcon from "../assets/icons/react-query-seeklogo.svg";
import StorybookIcon from "../assets/icons/storybook-icon.svg";
import MswIcon from "../assets/icons/msw-mock-service-worker-seeklogo.svg";

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
            제가 진행했던 프로젝트와 소개를 담긴 포트폴리오 사이트를 만들어
            보았습니다.
          </b>
          <br />
          <br />
          지금까지 공부한 <PinkColor>TypeScript</PinkColor>를 사용해서
          사용하면서 코드의 안정성과 유지보수성이 향상시킬수 있다는 것을
          체감했습니다.
          <br />
          특히 대규모 프로젝트에서 더욱 효과적이고 효율적이라고 느꼈습니다. 또
          개발 중 자동 완성과 인텔리센스 기능이 크게 개선되어 생산성이
          상승했습니다. 하지만 초기 설정과 구성이 복잡할 수 있다는 점도
          느꼈습니다.
          <br />
          <br />
          <PinkColor>Storybook</PinkColor>으로 각 시각화 해서 각 컴포넌트별로
          개발하기 수월했습니다.
          <br />
          <br />
          <PinkColor> css animation</PinkColor>을 활용한 다양한 효과를 추가해
          animation에 대한 지식도 늘었던 계기가 되었습니다.
          <br />
          <br />
          또한 <PinkColor>CI, CD</PinkColor> 구축으로 배포하는 경험을 해볼 수
          있었습니다. 그로 인해 코드의 통합과 배포 과정이 자동화되어 개발의
          효율성이 크게 향상 되었다고 체감했습니다.
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
      projectNotionHref:
        "https://third-shrine-13d.notion.site/Portfolio-Site-171a69a52c804805a5c47d15505578e4?pvs=4",
    },
    {
      mainImgSrc: cherryPickImg,
      projectTitle: "Cherry Pick Site",
      projectDescription: (
        <>
          <b>
            개발한 서비스는 다양한 온라인 교육 플랫폼의 강의를 한데 모아
            사용자가 쉽게 비교하고 평가할 수 있게 해주는 통합 플랫폼입니다. 이를
            통해 사용자는 시간을 절약하며 최적의 강의를 선택할 수 있습니다.
          </b>
          <br />
          <br />
          새롭게 배운 기술 스택인
          <PinkColor>React-Query, Storybook, MSW</PinkColor>를 프로젝트에
          도입하면서 기존에 사용하던 Redux-thunk, saga 라이브러리와
          <PinkColor>React-Query</PinkColor> 비교를 통해 몇 가지 중요한 개선점을
          경험했습니다.
          <br />
          <br />
          이들 보일러플레이트 코드의 감소, 네트워크 관리의 효율성, 렌더링 성능의
          향상, 그리고 전반적인 코드 가독성 개선에 큰 도움을 주었습니다.
          <br />
          <br />
          이러한 변화는 프로젝트의 유지 보수와 확장성을 높이는 데 기여할 수
          있다고 체감했습니다.
        </>
      ),
      projectSkillArr: [
        { projectSkillImgSrc: ReactIcon, projectSkillText: "React" },
        {
          projectSkillImgSrc: StyledComponentIcon,
          projectSkillText: "Styled Component",
        },
        { projectSkillImgSrc: ReactQueryIcon, projectSkillText: "React Query" },
        { projectSkillImgSrc: StorybookIcon, projectSkillText: "Storybook" },
        { projectSkillImgSrc: MswIcon, projectSkillText: "MSW" },
      ],
      projectNotionHref:
        "https://third-shrine-13d.notion.site/bd250dd0efa24af2a9ab2e0daed877dd?pvs=4",
    },
    {
      mainImgSrc: kurlyImg,
      projectTitle: "Market Kurly Clone",
      projectDescription: (
        <>
          <b>
            Market Kurly 사이트의 기존 기능과 더불어 개선점을 찾고 kurlabo
            프로젝트에 적용하는 것이 가장 큰 목표였습니다. 그리고 원활한
            서버통신을 통해 백엔드와의 협업과 커뮤니케이션 능력을 늘렸습니다.
          </b>
          <br />
          <br />
          <PinkColor>Storybook</PinkColor>을 활용하여 UI 컴포넌트를 독립적으로
          개발하고 테스트했습니다. 이를 통해 반복적인 테스트와 디버깅 과정을
          최소화했습니다.
          <br />
          <br />
          <PinkColor>Tailwind CSS</PinkColor>의 유틸리티-퍼스트 접근 방식을
          적용해 평소에 자주쓰던 CSS-in-JS인 Styled-Component 비해 별도의
          JavaScript 구문이나 설정 없이 CSS를 직접에 적용할 수 있어 좀더
          직관적이고 편했습니다.
          <br />
          <br />
          <PinkColor>Redux</PinkColor>를 사용하여 상태 관리를 중앙에서
          효과적으로 처리했습니다. 이 과정에서 중앙에서 관리함으로써 코드 예측과
          에러 발생을 줄이는데 도움이되어 안정성을 높이는 방법을 배웠으며
          <PinkColor>Redux Thunk</PinkColor>을 사용해 비동기 처리와 상태 관리를
          수월하게 처리했습니다.
        </>
      ),
      // react storybook tailwind redux postman
      projectSkillArr: [
        { projectSkillImgSrc: ReactIcon, projectSkillText: "React" },
        {
          projectSkillImgSrc: TailwindIcon,
          projectSkillText: "Tailwind CSS",
        },
        {
          projectSkillImgSrc: ReduxToolkitIcon,
          projectSkillText: "Redux-thunk",
        },
        { projectSkillImgSrc: StorybookIcon, projectSkillText: "Storybook" },
      ],
      projectNotionHref:
        "https://third-shrine-13d.notion.site/Kurlabo-cf4cee7c49df4d27836363720060c111?pvs=4",
    },
    {
      mainImgSrc: watflicha,
      projectTitle: "Watflicha site",
      projectDescription: (
        <>
          <b>
            그 동안 공부한 <PinkColor>CSS, HTML, Vanilla JavaScript</PinkColor>
            만을 사용하여 OTT 플랫폼을 구현하고자 했습니다.
          </b>
          <br />
          <br />
          이를 통해 캐러셀과 모달 창 등 다양한 인터페이스 구성 요소를 직접
          개발함으로써 JavaScript에 대한 깊은 이해와 함께 실질적인 코딩 자신감을
          얻을 수 있었습니다.
          <br />
          <br />
          Vanilla JavaScript를 활용하여 외부 라이브러리에 대한 의존도를
          최소화하고, 이로 인해 페이지의 로딩 시간과 전반적인 성능을 효과적으로
          최적화할 수 있었습니다.
        </>
      ),
      projectSkillArr: [
        { projectSkillImgSrc: HTMLIcon, projectSkillText: "HTML" },
        {
          projectSkillImgSrc: CSSIcon,
          projectSkillText: "CSS",
        },
        {
          projectSkillImgSrc: JavascriptIcon,
          projectSkillText: "JavaScript",
        },
      ],
      projectNotionHref:
        "https://third-shrine-13d.notion.site/WATFLICAH-e1dc7df262ce4ba8a152a539cd5d26c4?pvs=4",
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
                <PortfolioReadDetail target="_blank" href={projectNotionHref}>
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
  margin-top: 50px;
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
  font-size: 40px;
  color: #faad1b;

  margin-bottom: 0;
  margin-top: 30px;
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
  width: 800px;
  height: 800px;
  margin-right: 50px;
`;

const PortfolioWidthContainer = styled.div`
  display: flex;
  width: 1300px;

  padding: 50px;
  margin: 150px auto;

  background-color: #f6f1e3;
`;
const PortfolioBackgroundColor = styled.div`
  background-color: #000;
  padding-bottom: 100px;

  & > div:nth-of-type(6) > div > img {
    height: 600px;
  }
`;

export default Portfolio;
