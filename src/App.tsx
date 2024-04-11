import Header from "./components/Header";

type Props = {
  children?: JSX.Element;
};

const App: React.FC<Props> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
