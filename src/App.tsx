import React from "react";
import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

type Props = {
  children?: JSX.Element;
};

const App: React.FC<Props> = () => {
  return (
    <>
      <Main />
      <AboutMe />
      <Resume />
      <Portfolio />
    </>
  );
};

export default App;
