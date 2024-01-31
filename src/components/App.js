
import AppHeader from './AppHeader';
import styled from "styled-components";
import AssetList from './AssetList';

function App() {
  return (
    <AppContainer>
      <AppHeader />
      <AssetList />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
  background-color: #282c34;
  height: 100vh;
`;

export default App;
