
// import { useState } from "react";
import styled from "styled-components"

export const Header = () => {
    // const [isActive, setIsActive] = useState(false);

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLeft href="#Main">
                    <svg xmlns="http://www.w3.org/2000/svg" height="9vh" viewBox="0 -960 960 960" width="9vh" fill="#e8eaed"><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"/></svg>
                    <h1>Правовой компас</h1>
                </HeaderLeft>
                <HeaderRight>
                    <ul>
                        <li><a href="#Services">Услуги</a></li>
                        <li><a href="#Employees">Сотрудники</a></li>
                        <li><a href="#Contacts">Контакты</a></li>
                    </ul>
                </HeaderRight>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vh;
    backdrop-filter: blur(9px);
    background-color: #46444488;
    box-shadow: 0 10px 10px -3px #00000055;
    z-index: 10000;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 7vw;
`;

const HeaderLeft = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15vw;
    max-width: 20vw;
    text-decoration: none;
    color: black;
    h1{
        margin: 0;
        font-size: 1.4rem;
        width: 9vw;
        max-width: 11vw;
    }
`;

const HeaderRight = styled.div`
    width: 40vw;
    ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        font-size: 1.4rem;
        a{
            color: #000000;
            text-decoration: none;
            &:hover{
                border-bottom: 0.5px solid black ;
            }
        }
    }
`;
