import styled from "styled-components";
import background from '../assets/img/background_employee_2.jpg'
import { EmployeeCard } from "./EmployeeCard";
import { EmployeesData } from "../dats";

export const Employees = () => {
    return (
        <EmployeesContainer>
            <EmployeesWrapper>
                <EmployeesHeader>Наши сотрудники</EmployeesHeader>
                <EmployeesList>
                    {EmployeesData.map((item)=>(
                        <ListItem>
                            <EmployeeCard name={item.name} 
                                experience={item.experience} 
                                info={item.info} 
                                avatar={item.avatar} 
                                specialization={item.specialization} />
                        </ListItem>
                    ))}
                    {/* <EmployeeCard/> */}
                </EmployeesList>
            </EmployeesWrapper>
        </EmployeesContainer>
    )
}

const EmployeesContainer = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
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
    /* filter: brightness(40%); */
`;

const EmployeesWrapper = styled.div`
    padding: 5px 5vw;
`;

const EmployeesHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    width: 100%;
    height: 5%;
    font-size: 4rem;
`;

const EmployeesList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* gap: 1.5vw; */
    /* gap: 23px; */
`;

const ListItem = styled.li`
  
`;
