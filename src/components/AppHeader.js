import styled from 'styled-components';
import logo from '../logo.svg';
// import App from './App';


function AppHeader() {
    return (
        <StyledHeaderContainer>

            <Logo src={logo}/>
            <TitleBlock>
                <CompanyName>Company Name</CompanyName>
                <AppTitle>Asset Management</AppTitle>
            </TitleBlock>
            
        </StyledHeaderContainer>  
    )
}

const StyledHeaderContainer = styled.div`
  border: 1px solid orange;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: start;
  padding: 8px;
  width: 100%;
  margin-top: 10px;
`;

const Logo = styled.img`
  border: 1px solid blue;
  height: 100px;
  fill: #ff0000;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  border: 1px solid blue;
  margin-left: 20px;
`;

const AppTitle = styled.h1`
  margin: 0;
  border: 1px solid blue;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

const CompanyName = styled.h2`
  margin: 0;
  border: 1px solid blue;
  font-size: 30px;
  font-weight: 500;
  color: white;
`;

export default AppHeader;