
import styled from "styled-components"
import backgroundService from '../assets/img/background_service.jpg'
import { serviceData } from "../dats";
import { ServiceCard } from "./ServiceCard";

export const Main = () => {
    return(
        <MainContainer>
            <MainWrapper>
                <MainHeader>Наши услуги</MainHeader>
                {/* <div>
                    <p>Семейные споры (образец что входит в эту услугу и др. на фото )</p>
                    <p>Наследственные споры</p>
                    <p>Жилищные споры</p>
                    <p>Споры по жкх</p>
                    <p>Земельные споры</p>
                    <p>Автоюрист</p>
                    <p>Трудовые споры</p>
                </div> */}
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
    /* height: 90vh; */
    /* background-color: lightskyblue; */
    background-image: url(${backgroundService});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const MainWrapper = styled.div`
    padding: 5px 5vw;        
`;

const MainHeader = styled.div`
    /* background-color: lightblue; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    width: 100%;
    height: 5%;
    font-size: 4rem;
`;

const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    gap: 50px;
`;