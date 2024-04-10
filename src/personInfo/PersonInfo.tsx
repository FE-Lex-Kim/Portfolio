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
            </PersonInfoItem>
          ))}
        </PersonInfoList>
        <PersonInfoImg src={personImg} alt="내 얼굴" />
      </PersonInfoWidthContainer>
    </PersonInfoBackgroundContainer>
  );
};
const PersonInfoBackgroundContainer = styled.div`
  background-color: #fad0c9;
  color: #6e6e6d;
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
  li:nth-child(1) {
    left: 1.875rem;
    bottom: 1.875rem;
  }
  li:nth-child(2) {
    left: 150px;
    bottom: 250px;
  }
  li:nth-child(3) {
    left: 200px;
    top: 50px;
  }
  li:nth-child(4) {
    right: 240px;
    top: 50px;
  }
  li:nth-child(5) {
    right: 100px;
    bottom: 210px;
  }
  li:nth-child(6) {
    right: 1.875rem;
    bottom: 1.875rem;
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
  left: 50%;
  transform: translateX(-50%);
  bottom: 0; /* 맨 아래에 위치 */
`;

export default PersonInfo;
