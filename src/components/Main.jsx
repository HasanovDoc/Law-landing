
import styled from "styled-components"
import backgroundService from '../assets/img/background_service.jpg'
import { serviceData } from "../dats";
import { ServiceCard } from "./ServiceCard";

export const Main = () => {
    return(
        <MainContainer>
            <MainWrapper>
                <MainHeader>Наши услуги</MainHeader>
                <ServiceContainer>
                    {serviceData.map((item)=>(
                        <ServiceCard name={item.serviceName} img={item.seviceImg} content={item.serviceContent}/>
                    ))}
                </ServiceContainer>
            </MainWrapper>
        </MainContainer>
    )
};

const MainContainer = styled.div`
    margin-top: 10vh; 
    position: relative;
    /* height: 90vh; */
    /* background-color: lightskyblue; */
    background-image: url(${backgroundService});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    &::before{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color:rgb(0, 0, 0, 0.2);
    }
`;

const MainWrapper = styled.div`
    padding: 5px 5vw;        
`;

const MainHeader = styled.div`
    /* position: sticky;
    left: 0;
    background-color: lightblue; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    width: 100%;
    height: 5%;
    font-size: 4rem;
`;

const ServiceContainer = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    gap: 50px;
`;