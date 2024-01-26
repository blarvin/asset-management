import styled from 'styled-components';
import logo from '../logo.svg';
// import App from './App';


function AppHeader() {
    return (
        <HeaderContainer>

            <Logo src={logo}/>
            <TitleBlock>
                <CompanyName>Company Name</CompanyName>
                <AppTitle>Asset Management</AppTitle>
            </TitleBlock>
            
        </HeaderContainer>  
    )
}

// HeaderContainer should be a flex row with the logo on the left and the text on the right
const HeaderContainer = styled.div`
    border: 1px solid orange;
    width: 100;
    flex-direction: row;
    justify-content: fill-start;
    display: flex;
    padding: 10px;
    margin: 10px;
`;

const Logo = styled.img`
    border: 1px solid blue;
    max-width: 30%;
    max-height: 80%;
`

const TitleBlock = styled.div`
    border: 1px solid blue;
    margin: 30px;
`
const AppTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: white;

`
const CompanyName = styled.h2`
    font-size: 50px;
    font-weight: 500;
    color: white;
`

export default AppHeader;