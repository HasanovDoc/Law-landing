import styled from "styled-components";
import BackgroundMain from '../assets/img/background_main.jpg'
import contentIcon from '../assets/img/15Icon.png'

export const Main= () => {
    return (
        <MainContainer id="Main">
            <MainWrapper>
                <MainHeader>Правовой компас</MainHeader>
                <MainContent>
                    <ContentHeader></ContentHeader>
                    Более <b>15 лет</b> оказываем юридические услуги
                </MainContent>
            </MainWrapper>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    background-image: url(${BackgroundMain});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
`;

const MainWrapper = styled.div`
    padding: 5px 5vw;
    padding-top: 10vh;
`;

const MainHeader = styled.div`
    font-size: 4rem;
    margin-top: 3vh;
    font-weight: bold;
`;

const MainContent = styled.div`
    box-sizing: border-box;
    margin-top: 4vh;
    width: 40%;
    height: 70vh;
    background-color: #00000063;
    backdrop-filter: blur(9px);
    border-radius: 4px;
    padding: 10vh 3vw;
    font-size: 3.5rem;
    box-shadow: #000000 0px 0px 10px;
`;

const ContentHeader = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${contentIcon});
    background-size: contain;
    margin: 0 auto;
    margin-bottom: 2vh;
`;