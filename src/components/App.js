
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

  // when on mobile max width is 100%, when on desktop max width is 800px
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
  background-color: #282c34;
  
  max-width: 800px;
  margin: auto;
  padding: 20px;
  min-height: 1000px;
`;


export default App;
