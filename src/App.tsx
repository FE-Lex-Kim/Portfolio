import AboutMe from "./components/AboutMe";
import Main from "./components/Main";

type Props = {
  children?: JSX.Element;
};

const App: React.FC<Props> = () => {
  return (
    <>
      <Main />
      <AboutMe />
    </>
  );
};

export default App;
