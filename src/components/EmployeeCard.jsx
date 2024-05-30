import styled from "styled-components";
import { useState } from "react";

export const EmployeeCard = ({name, experience, specialization, info, avatar}) => {
    const [isHover, setIsHover] = useState(false);
    const nameArr = name.split(' ');
    return (
        <EmployeeSlideContainer onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <CardWrapper>
                <SlideContainer>
                    <SlideFront isHover={isHover}>
                        <CardHeader>{nameArr[0]} {nameArr[1]} <br/> {nameArr[2]}</CardHeader>
                        <CardAvatar avatar={avatar}></CardAvatar>
                    </SlideFront>
                    <SlideUnder isHover={isHover}>
                        <p>Cтаж работы: <b>{experience}</b></p>
                        <p>Специализации: <b>{specialization}</b> </p>
                        <p>{info}</p>
                    </SlideUnder>
                </SlideContainer>
            </CardWrapper>
        </EmployeeSlideContainer>
    )
};

const EmployeeSlideContainer = styled.div`
    position: sticky;
    width: 16vw;
    height: 300px;
    /* border: 1px solid black; */
    background-color: white;
    z-index: 500;
    transition: ease 0.4s;
    /* border-radius: 4px; */
    &:hover{
        /* box-shadow: #00000077 0px 0px 20px; */
    }
`;

const CardWrapper = styled.div`
    /* z-index: 40;  */
`;



const SlideContainer = styled.div`
    /* z-index: 400;  */
    position: relative;
    
`;

const SlideFront = styled.div`
    background-color: white;
    position: sticky;
    z-index: 40; 
    /* box-shadow: #00000077 0px 0px 20px; */
    box-shadow: ${(props)=>(props.isHover ? '#00000077 0px 0px 20px' : 'none')};
    transition: ease 0.4s;    
`;

const CardHeader = styled.div`
    background-color: #c9c4f9;
    padding: 5px 0px;
    margin-bottom: 2px;
    font-size: 1.2rem;
`;

const CardAvatar = styled.div`
    width: 100%;
    height: 250px;
    /* background-image:  */
    background-image: url(${(props)=>(props.avatar)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    /* mix-blend-mode:darken; */
    /* background-attachment: fixed; */
`;

const SlideUnder = styled.div`
    box-sizing: border-box;
    position: absolute;
    /* top: 0; */
    top: ${(props)=>(props.isHover ? '100%' : '0')};
    max-width: 16vw;
    min-width: 16vw;
    background-color: white;
    transition: ease 1s;
    z-index: 2;
    padding: 3px;
    font-size: 1.15rem;
`;


