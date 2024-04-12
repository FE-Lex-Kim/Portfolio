import styled from "styled-components";
import Header from "./Header";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";

const Resume: React.FC = () => {
  return (
    <>
      <ResumeBackgroundContainer>
        <ResumeWidthContainer>
          <ResumeEducationContainer>
            <ResumeEducationTitle>Education</ResumeEducationTitle>
            <ResumeEducationList>
              <ResumeEducationItem>
                <StarIcon />
                <ResumeEducationYear>2021-2022</ResumeEducationYear>
                <ResumeEducationInfo>
                  패스트캠퍼스 프론트엔드 스쿨 17기
                </ResumeEducationInfo>
              </ResumeEducationItem>
              <ResumeEducationItem>
                <StarIcon />
                <ResumeEducationYear>2014-2015</ResumeEducationYear>
                <ResumeEducationInfo>동양미래대학교</ResumeEducationInfo>
              </ResumeEducationItem>
            </ResumeEducationList>
            <ResumeEducationIconLine />
          </ResumeEducationContainer>
        </ResumeWidthContainer>
      </ResumeBackgroundContainer>
    </>
  );
};

const ResumeEducationIconLine = styled.div`
  position: absolute;
  top: 125px;
  left: 69px;

  width: 1px;
  height: 35px;

  background-color: #828c79;
`;

const ResumeEducationInfo = styled.span`
  font-size: 20px;
`;

const ResumeEducationYear = styled.span`
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
const ResumeEducationItem = styled.li`
  display: flex;
  align-items: center;

  margin-top: 30px;
`;
const ResumeEducationList = styled.ul`
  display: flex;
  flex-direction: column;

  color: #000;
  margin: 0;
`;

const ResumeEducationTitle = styled.h3`
  font-family: "behance";
  color: #000;
  font-size: 50px;
  margin-bottom: 0;
  padding-left: 50px;
`;

const ResumeEducationContainer = styled.div`
  position: relative;
  width: 500px;
  padding-left: 50px;
`;

const ResumeWidthContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 690px;

  margin: 0 auto;
`;

const ResumeBackgroundContainer = styled.div`
  background-color: #f6f1e3;
`;

export default Resume;
