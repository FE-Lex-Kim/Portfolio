import Main from "./components/Main";

type Props = {
  children?: JSX.Element;
};

const App: React.FC<Props> = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
