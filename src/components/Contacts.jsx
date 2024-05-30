import React, { useState } from 'react';
import styled from "styled-components";
import backgroundContacts from '../assets/img/background_contacts.jpg'

export const Contacts = () => {
    const [currentDay, setCurrentDay] = useState(new Date().getDay());
    
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return (
        <ContactsContainer id='Contacts'>
            <ContactsWrapper>
                <ContactsHeader></ContactsHeader>
                <ContactsContent>
                    <ContactsLeft>
                        <LeftHeader>Режим работы</LeftHeader>
                        <LeftContent>
                            <ul>
                                {daysOfWeek.map((day, index) => (
                                    <li key={index} style={{ color: currentDay === index + 1 ? 'red' : 'black' }}>
                                    <span>{day}</span>
                                    <span>{index >= 5 ? 'Выходной' : '09:00 – 18:00'}</span>
                                    </li>
                                ))}
                            </ul>
                        </LeftContent>
                    </ContactsLeft>
                    <ContactsRight>
                        <RightHeader>Контакты</RightHeader>
                        <RightContent>
                            <ul>
                                <li><span>Адрес:&ensp;</span><span>г. Ижевск, ул. Юристов, 100</span></li>
                                <li><span>Телефон:&ensp; </span> <a href="#" type="tel">+7(3412)10-10-10</a>,&ensp;<a href="#" type="tel">7(909)100-10-10</a></li>
                                <li><span>E-mail:&ensp;</span><a href="#" type="email">pravo-kompas@mail.ru</a></li>
                            </ul>
                        </RightContent>
                    </ContactsRight>
                </ContactsContent>
            </ContactsWrapper>
        </ContactsContainer>
    )
};

const ContactsContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundContacts});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
`;

const ContactsWrapper = styled.div`
    padding: 5px 5vw;
`;

const ContactsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    width: 100%;
    margin-top: 10vh;
    height: 5%;
    font-size: 4rem;
`;

const ContactsContent = styled.div`
  display: flex;
  justify-content: space-between;
`;


const ContactsLeft = styled.div`
  width: 46%;
  height: 100%;
  border: 1px solid white;
  border-radius: 3px;
  background-color: #ffffff45;
  backdrop-filter: blur(10px);
`;

const LeftHeader = styled.div`
    font-size: 2rem;
    background-color: #ffffff2b;
    /* height: 5vh; */
`;

const LeftContent = styled.div`
  ul{
    display: flex;
    flex-direction: column;
    /* gap: 3vh; */
    list-style: none;
    padding: 0;
    font-size: 1.3rem;
    li{
        display: flex;
        /* width: 100%; */
        height: 6vh;
        padding: 0 20px;
        align-items: center;
        justify-content: space-between;
        transition: ease 0.4s;
        &:hover{
            background-color: #ffffff5f;
        }
    }
  }
`;

const ContactsRight = styled.div`
  width: 46%;
  height: 100%;
  border: 1px solid white;
  border-radius: 3px;
  background-color: #ffffff45;
  backdrop-filter: blur(10px);
`;

const RightHeader = styled.div`
    font-size: 2rem;
    background-color: #ffffff2b;
`;

const RightContent = styled.div`
  ul{
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 3vh;
    li{
        display: flex;
    }
  }
`;