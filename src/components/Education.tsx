import styled from "styled-components";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";

const Education: React.FC = () => {
  return (
    <>
      <EducationBackgroundContainer>
        <EducationWidthContainer>
          <EducationEducationContainer>
            <EducationEducationTitle>Education</EducationEducationTitle>
            <EducationEducationList>
              <EducationEducationItem>
                <StarIcon />
                <EducationEducationYear>2021-2022</EducationEducationYear>
                <EducationEducationInfo>
                  패스트캠퍼스 프론트엔드 스쿨 17기
                </EducationEducationInfo>
              </EducationEducationItem>
              <EducationEducationItem>
                <StarIcon />
                <EducationEducationYear>2014-2015</EducationEducationYear>
                <EducationEducationInfo>동양미래대학교</EducationEducationInfo>
              </EducationEducationItem>
            </EducationEducationList>
            <EducationEducationIconLine />
          </EducationEducationContainer>
        </EducationWidthContainer>
      </EducationBackgroundContainer>
    </>
  );
};

const EducationEducationIconLine = styled.div`
  position: absolute;
  top: 125px;
  left: 69px;

  width: 1px;
  height: 35px;

  background-color: #828c79;
`;

const EducationEducationInfo = styled.span`
  font-size: 20px;
`;

const EducationEducationYear = styled.span`
  width: 140px;

  margin-right: 20px;
  font-size: 27px;
  font-family: "behance";
  letter-spacing: 1px;
`;

const StarIcon = styled(Star)`
  width: 40px;
  height: 40px;
  fill: #f2603c;
  margin-right: 15px;
`;
const EducationEducationItem = styled.li`
  display: flex;
  align-items: center;

  margin-top: 30px;
`;
const EducationEducationList = styled.ul`
  display: flex;
  flex-direction: column;

  color: #f6f1e3;
  margin: 0;
`;

const EducationEducationTitle = styled.h3`
  font-family: "behance";
  color: #faad1a;
  font-size: 50px;
  margin-bottom: 0;
  padding-left: 50px;
`;

const EducationEducationContainer = styled.div`
  position: relative;
  width: 500px;
  padding-left: 50px;
`;

const EducationWidthContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 300px;

  margin: 0 auto;
`;

const EducationBackgroundContainer = styled.div`
  background-color: #344c36;

  display: flex;
  align-items: center;
`;

export default Education;
