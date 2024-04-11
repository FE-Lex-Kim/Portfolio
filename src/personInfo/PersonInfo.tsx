import styled from "styled-components";
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
    }
    & > span:nth-of-type(2) {
      top: -40px;
      right: -300px;

      width: 130px;
      height: 3px;
    }
    & > span:nth-of-type(3) {
      top: -40px;
      right: -170px;

      width: 3px;
      height: 56px;
    }
    & > span:nth-of-type(4) {
      width: 130px;
      height: 3px;

      top: 15px;
      right: -170px;
    }
    & > span:nth-of-type(5) {
      top: 8.5px;
      right: -45px;
    }
  }
  & > li:nth-of-type(2) {
    left: 150px;
    bottom: 250px;
    & > span:nth-of-type(1) {
      bottom: 20px;
      right: -223px;
      transform: translate(52%, 40%);
    }
    & > span:nth-of-type(2) {
      width: 90px;
      height: 3px;

      bottom: 20px;
      right: -223px;
    }
    & > span:nth-of-type(3) {
      width: 3px;
      height: 63px;

      bottom: 20px;
      right: -133px;
    }
    & > span:nth-of-type(4) {
      width: 90px;
      height: 3px;

      bottom: 83px;
      right: -133px;
    }
    & > span:nth-of-type(5) {
      bottom: 83px;
      right: -43px;
      transform: translate(40%, 40%);
    }
  }
  & > li:nth-of-type(3) {
    left: 150px;
    top: 50px;
    & > span:nth-of-type(1) {
      bottom: -45px;
      right: -115px;

      transform: translate(40%, 40%);
    }
    & > span:nth-of-type(2) {
      width: 50px;
      height: 3px;

      bottom: -45px;
      right: -115px;
    }
    & > span:nth-of-type(3) {
      width: 3px;
      height: 130px;

      bottom: -45px;
      right: -65px;
    }
    & > span:nth-of-type(4) {
      width: 50px;
      height: 3px;

      bottom: 85px;
      right: -65px;
    }
    & > span:nth-of-type(5) {
      bottom: 85px;
      right: -23px;

      transform: translateY(40%);
    }
  }
  & > li:nth-of-type(4) {
    right: 200px;
    top: 50px;
    & > span:nth-of-type(1) {
      left: -140px;
      bottom: -42px;

      transform: translate(-40%, 40%);
    }
    & > span:nth-of-type(2) {
      width: 45px;
      height: 3px;

      left: -140px;
      bottom: -42px;
    }
    & > span:nth-of-type(3) {
      width: 3px;
      height: 126px;

      left: -95px;
      bottom: -42px;
    }
    & > span:nth-of-type(4) {
      width: 45px;
      height: 3px;

      bottom: 84px;
      left: -95px;
    }
    & > span:nth-of-type(5) {
      left: -50px;
      bottom: 84px;

      transform: translate(-40%, 40%);
    }
  }
  & > li:nth-of-type(5) {
    right: 50px;
    bottom: 210px;
    & > span:nth-of-type(1) {
      top: 104px;
      left: -140px;

      transform: translate(-40%, -40%);
    }
    & > span:nth-of-type(2) {
      width: 75px;
      height: 3px;

      top: 104px;
      left: -140px;
    }
    & > span:nth-of-type(3) {
      height: 90px;
      width: 3px;

      top: 14px;
      left: -68px;
    }
    & > span:nth-of-type(4) {
      width: 75px;
      height: 3px;

      top: 14px;
      left: -68px;
    }
    & > span:nth-of-type(5) {
      top: 14px;
      left: -7px;

      transform: translate(40%, -40%);
    }
  }
  & > li:nth-of-type(6) {
    right: 4.375rem;
    bottom: 2.5rem;
    & > span:nth-of-type(1) {
      top: -30px;
      left: -198px;

      transform: translate(-40%, -40%);
    }
    & > span:nth-of-type(2) {
      width: 100px;
      height: 3px;

      top: -30px;
      left: -198px;
    }
    & > span:nth-of-type(3) {
      height: 44px;
      width: 3px;

      top: -30px;
      left: -98px;
    }
    & > span:nth-of-type(4) {
      width: 100px;
      height: 3px;

      top: 14px;
      left: -98px;
    }
    & > span:nth-of-type(5) {
      top: 14px;
      left: 2px;

      transform: translate(-40%, -40%);
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
