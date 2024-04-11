import styled, { keyframes } from "styled-components";
import personImg from "../assets/images/나.png";

type InfoTitle =
  | "Contact"
  | "Name"
  | "Date of Birth"
  | "Address"
  | "Education"
  | "Email";
type InfoContent = string | string[];
type InfosItem = { title: InfoTitle; content: InfoContent };

const PersonInfo: React.FC = () => {
  const infosArr: InfosItem[] = [
    { title: "Contact", content: "010-2354-6607" },
    { title: "Name", content: "김어진" },
    { title: "Date of Birth", content: "1995.11.17" },
    { title: "Address", content: "경기도 부천시" },
    {
      title: "Education",
      content: ["동양미래대학교", "프론트엔드 패스트캠퍼스 스쿨 17기"],
    },
    { title: "Email", content: "lexkim.dev@gmail.com" },
  ];
  return (
    <PersonInfoBackgroundContainer>
      <PersonInfoWidthContainer>
        <PersonInfoH2>Personal</PersonInfoH2>
        <PersonInfoList>
          {infosArr.map(({ title, content }: InfosItem) => (
            <PersonInfoItem>
              <PersonInfoH3>{title}</PersonInfoH3>
              {Array.isArray(content) ? (
                content.map((item) => (
                  <PersonInfoParagraph>{item}</PersonInfoParagraph>
                ))
              ) : (
                <PersonInfoParagraph>{content}</PersonInfoParagraph>
              )}
              <span />
              <span />
              <span />
              <span />
              <span />
            </PersonInfoItem>
          ))}
        </PersonInfoList>
        <PersonInfoImg src={personImg} alt="내 얼굴" />
        <PersonInfoBodyLineBox />
      </PersonInfoWidthContainer>
    </PersonInfoBackgroundContainer>
  );
};

const appearCircle = keyframes`
100% {
  opacity: 1;
}
`;

const moveHorizontalityLine = (width: number) => keyframes`
0%{
  opacity: 1;
  width: 0;
}

100%{
  width: ${width}px;
  opacity: 1;
}
`;

const moveVerticalLine = (height: number) => keyframes`
0%{
  opacity: 1;
  height: 0;
}

100%{
  opacity: 1;
  height: ${height}px;
}
`;

const PersonInfoBodyLineBox = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;

  width: 270px;
  height: 500px;
  border: 3px solid #a4193d;
  border-bottom: transparent;
  opacity: 0;

  animation: ${appearCircle} 0.5s linear 0s forwards;
`;

const PersonInfoBackgroundContainer = styled.div`
  background-color: #fad0c9;
  color: #6e6e6d;
  border-bottom: 3px solid #a4193d;
`;

const PersonInfoWidthContainer = styled.div`
  position: relative;
  height: 37.5rem;
  width: 75rem;
  margin: 0 auto;
`;

const PersonInfoH2 = styled.h2`
  visibility: hidden;

  margin: 0;
  width: 0;
  height: 0;
`;

const PersonInfoList = styled.ul`
  & > li > span {
    display: block;
    position: absolute;
    background-color: #a4193d;
    opacity: 0;
  }
  & > li > span:nth-of-type(1),
  & > li > span:nth-of-type(5) {
    width: 15px;
    height: 15px;

    border-radius: 100%;
  }

  & > li:nth-of-type(1) {
    left: 1.875rem;
    bottom: 1.875rem;

    & > span:nth-of-type(1) {
      top: -40px;
      right: -300px;

      transform: translate(40%, -40%);
      animation: ${appearCircle} 0.5s linear forwards;
    }
    & > span:nth-of-type(2) {
      top: -40px;
      right: -300px;

      height: 3px;

      animation: ${moveHorizontalityLine(130)} 1s linear 0s forwards;
    }
    & > span:nth-of-type(3) {
      top: -40px;
      right: -170px;

      width: 3px;

      animation: ${moveVerticalLine(56)} 0.5s linear 1s forwards;
    }
    & > span:nth-of-type(4) {
      height: 3px;

      top: 15px;
      right: -170px;

      animation: ${moveHorizontalityLine(130)} 1s linear 1.5s forwards;
    }
    & > span:nth-of-type(5) {
      top: 8.5px;
      right: -45px;

      animation: ${appearCircle} 0.5s linear 2.5s forwards;
    }
  }
  & > li:nth-of-type(2) {
    left: 150px;
    bottom: 250px;
    & > span:nth-of-type(1) {
      bottom: 20px;
      right: -223px;
      transform: translate(52%, 40%);

      animation: ${appearCircle} 0.5s linear 0s forwards;
    }
    & > span:nth-of-type(2) {
      height: 3px;

      bottom: 20px;
      right: -223px;
      animation: ${moveHorizontalityLine(90)} 1s linear 0s forwards;
    }
    & > span:nth-of-type(3) {
      width: 3px;

      bottom: 20px;
      right: -133px;

      animation: ${moveVerticalLine(63)} 0.5s linear 1s forwards;
    }
    & > span:nth-of-type(4) {
      height: 3px;

      bottom: 83px;
      right: -133px;

      animation: ${moveHorizontalityLine(90)} 1s linear 1.5s forwards;
    }
    & > span:nth-of-type(5) {
      bottom: 83px;
      right: -43px;
      transform: translate(40%, 40%);
      animation: ${appearCircle} 0.5s linear 2.5s forwards;
    }
  }
  & > li:nth-of-type(3) {
    left: 150px;
    top: 50px;
    & > span:nth-of-type(1) {
      bottom: -45px;
      right: -115px;

      transform: translate(40%, 40%);

      animation: ${appearCircle} 0.5s linear 0s forwards;
    }
    & > span:nth-of-type(2) {
      width: 50px;
      height: 3px;

      bottom: -45px;
      right: -115px;

      animation: ${moveHorizontalityLine(50)} 0.5s linear 0s forwards;
    }
    & > span:nth-of-type(3) {
      width: 3px;

      bottom: -45px;
      right: -65px;

      animation: ${moveVerticalLine(130)} 1.5s linear 0.5s forwards;
    }
    & > span:nth-of-type(4) {
      height: 3px;

      bottom: 85px;
      right: -65px;

      animation: ${moveHorizontalityLine(50)} 0.5s linear 2s forwards;
    }
    & > span:nth-of-type(5) {
      bottom: 85px;
      right: -23px;

      transform: translateY(40%);
      animation: ${appearCircle} 0.5s linear 2.5s forwards;
    }
  }
  & > li:nth-of-type(4) {
    right: 200px;
    top: 50px;
    & > span:nth-of-type(1) {
      left: -140px;
      bottom: -42px;

      transform: translate(-40%, 40%);

      animation: ${appearCircle} 0.5s linear 0s forwards;
    }
    & > span:nth-of-type(2) {
      height: 3px;

      left: -140px;
      bottom: -42px;

      animation: ${moveHorizontalityLine(45)} 0.5s linear 0s forwards;
    }
    & > span:nth-of-type(3) {
      width: 3px;

      left: -95px;
      bottom: -42px;
      animation: ${moveVerticalLine(126)} 1.5s linear 0.5s forwards;
    }
    & > span:nth-of-type(4) {
      height: 3px;

      bottom: 84px;
      left: -95px;
      animation: ${moveHorizontalityLine(45)} 0.5s linear 2s forwards;
    }
    & > span:nth-of-type(5) {
      left: -50px;
      bottom: 84px;

      transform: translate(-40%, 40%);
      animation: ${appearCircle} 0.5s linear 2.5s forwards;
    }
  }
  & > li:nth-of-type(5) {
    right: 50px;
    bottom: 210px;
    & > span:nth-of-type(1) {
      top: 104px;
      left: -140px;

      transform: translate(-40%, -40%);

      animation: ${appearCircle} 0.5s linear 0s forwards;
    }
    & > span:nth-of-type(2) {
      height: 3px;

      top: 104px;
      left: -140px;

      animation: ${moveHorizontalityLine(75)} 0.8s linear 0s forwards;
    }
    & > span:nth-of-type(3) {
      width: 3px;

      bottom: 62px;
      left: -68px;

      animation: ${moveVerticalLine(90)} 0.9s linear 0.8s forwards;
    }
    & > span:nth-of-type(4) {
      width: 75px;
      height: 3px;

      top: 14px;
      left: -68px;

      animation: ${moveHorizontalityLine(75)} 0.8s linear 1.7s forwards;
    }
    & > span:nth-of-type(5) {
      top: 14px;
      left: -7px;

      transform: translate(40%, -40%);
      animation: ${appearCircle} 0.5s linear 2.5s forwards;
    }
  }
  & > li:nth-of-type(6) {
    right: 4.375rem;
    bottom: 2.5rem;
    & > span:nth-of-type(1) {
      top: -30px;
      left: -198px;

      transform: translate(-40%, -40%);

      animation: ${appearCircle} 0.5s linear 0s forwards;
    }
    & > span:nth-of-type(2) {
      height: 3px;

      top: -30px;
      left: -198px;

      animation: ${moveHorizontalityLine(100)} 1s linear 0s forwards;
    }
    & > span:nth-of-type(3) {
      width: 3px;

      top: -30px;
      left: -98px;

      animation: ${moveVerticalLine(44)} 0.5s linear 1s forwards;
    }
    & > span:nth-of-type(4) {
      height: 3px;

      top: 14px;
      left: -98px;

      animation: ${moveHorizontalityLine(100)} 1s linear 1.5s forwards;
    }
    & > span:nth-of-type(5) {
      top: 14px;
      left: 2px;

      transform: translate(-40%, -40%);

      animation: ${appearCircle} 0.5s linear 2.5s forwards;
    }
  }
`;
const PersonInfoItem = styled.li`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PersonInfoH3 = styled.h3`
  font-size: 2.1875rem;
  font-weight: 900;
  margin: 0;
`;
const PersonInfoParagraph = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;
const PersonInfoImg = styled.img`
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0; /* 맨 아래에 위치 */
`;

export default PersonInfo;
