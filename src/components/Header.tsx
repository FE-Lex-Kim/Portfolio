import styled from "styled-components";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";
import React from "react";

type Props = {
  fontColor: "white" | "black";
  currentPage: "AboutMe" | "Main" | "Portfolio" | "Resume";
};

const Header: React.FC<Props> = ({ fontColor, currentPage }) => {
  return (
    <>
      <div id={currentPage} />
      <HeaderWidthContainer>
        <StarIcon />
        <Name fontColor={fontColor}>Eojin Kim</Name>
        <PageList currentPage={currentPage}>
          <PageItem>
            <Link fontColor={fontColor} href="#Main">
              Main
            </Link>
          </PageItem>
          <PageItem>
            <Link fontColor={fontColor} href="#AboutMe">
              AboutMe
            </Link>
          </PageItem>
          <PageItem>
            <Link fontColor={fontColor} href="#Resume">
              Resume
            </Link>
          </PageItem>
          <PageItem>
            <Link fontColor={fontColor} href="#Portfolio">
              Portfolio
            </Link>
          </PageItem>
          <PageItem>
            <Link href="#">Get in touch!</Link>
          </PageItem>
        </PageList>
      </HeaderWidthContainer>
    </>
  );
};

const HeaderWidthContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 1440px;
  height: 85px;

  margin: 0 auto;
  padding: 10px 2.1875rem 1.5625rem;
`;
const StarIcon = styled(Star)`
  width: 3rem;
  fill: #f2603c;
  margin-right: 0.3125rem;
`;
const Name = styled.h2<{ fontColor?: "white" | "black" }>`
  font-family: "behance";
  font-size: 1.875rem;

  color: ${({ fontColor }) => (fontColor === "white" ? "#f7f1e3" : "#000")};

  padding-top: 7px;
`;
const PageList = styled.ul<{
  currentPage?: "Main" | "AboutMe" | "Portfolio" | "Resume";
}>`
  display: flex;
  margin-left: auto;
  & > li:nth-of-type(5) > a {
    padding: 7px 20px;

    background-color: #faad1b;
    color: #000;

    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
  }

  & > li:nth-of-type(1) > a {
    font-weight: ${({ currentPage }) =>
      currentPage === "Main" ? "700" : "300"};
  }
  & > li:nth-of-type(2) > a {
    font-weight: ${({ currentPage }) =>
      currentPage === "AboutMe" ? "700" : "300"};
  }
  & > li:nth-of-type(3) > a {
    font-weight: ${({ currentPage }) =>
      currentPage === "Resume" ? "700" : "300"};
  }
  & > li:nth-of-type(4) > a {
    font-weight: ${({ currentPage }) =>
      currentPage === "Portfolio" ? "700" : "300"};
  }
`;

const PageItem = styled.li``;

const Link = styled.a<{
  fontColor?: "white" | "black";
}>`
  font-size: 20px;
  margin-left: 3.125rem;
  color: ${({ fontColor }) => (fontColor === "white" ? "#f7f1e3" : "#000")};
`;

export default Header;
