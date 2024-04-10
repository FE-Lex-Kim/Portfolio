import styled from "styled-components";
import PersonInfo from "./personInfo/PersonInfo";
type Props = {
  children?: JSX.Element;
};

const App: React.FC<Props> = () => {
  return (
    <AppContainer>
      <PersonInfo />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  margin: 0 auto;
`;

export default App;
