import styled from "styled-components";
import Header from "./Header";
import { ReactComponent as MagnifyingGlass } from "../assets/icons/magnifying-glass-solid.svg";
import personImage from "../assets/images/나2.png";
import { ReactComponent as Envelope } from "../assets/icons/envelope-regular.svg";
import { ReactComponent as Location } from "../assets/icons/location-dot-solid.svg";
import { ReactComponent as Phone } from "../assets/icons/phone-solid.svg";

const AboutMe: React.FC = () => {
  return (
    <>
      <AboutMeBackgroundWhiteColorContainer>
        <ScrollDown>
          Scroll
          <br />
          down
        </ScrollDown>
        <Header currentPage="AboutMe" fontColor="black" />
        <AboutMeWidthContainer>
          <AboutMeIntroduceContainer>
            <AboutMeSayHello>
              Hello, <br />
              I'm Eojin!
            </AboutMeSayHello>
            <AboutMeIntroduce>
              캐나다에서 워킹홀리데이 경험과 TOEIC 810점으로 영문으로된 기술
              문서를 보이는데 수월합니다. 꾸준한 TIL 작성으로 Github에서
              400개이상의 Star를 받았습니다. 또한 프론트엔드 성능 최적화에
              관심이 많아 지속적인 스터디와 프로젝트 참여를 통해 적용하고
              성장하고 싶은 개발자 입니다.
            </AboutMeIntroduce>
            <AboutMeNotionLink
              target="_blank"
              href="https://third-shrine-13d.notion.site/b11bc5082c22459891d98cd4f4919216?pvs=4"
            >
              <MagnifyingGlass width="25px" fill="#fff" />
              notion.com/lexKim.dev
            </AboutMeNotionLink>
          </AboutMeIntroduceContainer>
          <AboutMeContactImageContainer>
            <AboutMeImageContainer>
              <AboutMeWhiteCircle />
              <AboutMePersonImage src={personImage} />
              <AboutMePersonalInfo>17 November 1995</AboutMePersonalInfo>
              <AboutMePersonalInfo>Frontend</AboutMePersonalInfo>
            </AboutMeImageContainer>
            <AboutContactContainer>
              <AboutMeContactTitle>Contact</AboutMeContactTitle>
              <AboutMeContactInfo>
                <Location /> 경기도 부천시
              </AboutMeContactInfo>
              <AboutMeContactInfo>
                <Phone /> 010-2354-6607
              </AboutMeContactInfo>
              <AboutMeContactInfo>
                <Envelope /> lexKim.dev@gmail.com
              </AboutMeContactInfo>
            </AboutContactContainer>
          </AboutMeContactImageContainer>
        </AboutMeWidthContainer>
      </AboutMeBackgroundWhiteColorContainer>
    </>
  );
};

const AboutMeContactInfo = styled.p`
  margin: 7px 0;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;

  & > svg {
    width: 16px;
    fill: #f6f1e3;
    margin-right: 18px;
  }
`;
const AboutMeContactTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;

  font-family: "behance";
  font-size: 50px;
`;
const AboutContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #000;

  color: #f6f1e3;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
`;

const AboutMePersonalInfo = styled.p`
  position: absolute;

  color: #fff;
  font-size: 20px;
  letter-spacing: 1px;

  background-color: #faad1b;

  padding: 20px 30px;
  border-radius: 50px;
  margin: 0;
`;
const AboutMePersonImage = styled.img`
  position: absolute;
  top: -73px;
  right: -30px;
  width: 450px;
`;
const AboutMeWhiteCircle = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;

  background-color: #fff;

  width: 235px;
  height: 235px;

  border-radius: 100%;
`;
const AboutMeImageContainer = styled.div`
  background-color: #344c36;
  width: 400px;
  height: 350px;

  & > p:nth-of-type(1) {
    top: 120px;
    left: -130px;
  }
  & > p:nth-of-type(2) {
    top: 200px;
    right: -50px;
  }
`;
const AboutMeContactImageContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 30px;
`;

const AboutMeNotionLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1603c;

  color: #fff;
  font-size: 22px;

  padding: 20px 0;

  border-radius: 30px;

  & > svg {
    position: absolute;
    left: 30px;
  }

  &:hover {
    color: #000;
  }
`;

const AboutMeIntroduce = styled.p`
  margin-top: 25px;
  margin-bottom: 50px;

  font-size: 18px;
  letter-spacing: 2px;
  line-height: 25px;
`;

const AboutMeSayHello = styled.h2`
  font-family: "behance";
  font-size: 100px;
  margin: 0;
`;

const AboutMeIntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 440px;
`;

const ScrollDown = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  padding: 35px;
  margin: 0 auto;

  background-color: #faad1b;
  font-size: 30px;

  border-radius: 999px;
`;

const AboutMeWidthContainer = styled.div`
  position: relative;
  width: 1100px;
  height: 680px;
  margin: 0 auto;
`;

const AboutMeBackgroundWhiteColorContainer = styled.div`
  background-color: #f6f1e3;
`;

export default AboutMe;
