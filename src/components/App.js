// import "../App.css";
import AppHeader from './AppHeader';
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <AppHeader />

    </AppContainer>
  );
}

const AppContainer = styled.div`
  border: 1px solid green;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



export default App;
