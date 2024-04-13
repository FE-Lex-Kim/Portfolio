import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import Resume from "./components/Education";
import TIL from "./components/Resume";

type Props = {
  children?: JSX.Element;
};

const App: React.FC<Props> = () => {
  return (
    <>
      <Main />
      <AboutMe />
      <TIL />
      {/* <Resume /> */}
    </>
  );
};

export default App;
