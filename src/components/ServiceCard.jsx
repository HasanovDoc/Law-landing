import styled from "styled-components";
// import familyImg from '../assets/img/family.jpg'

export const ServiceCard = ({name, img, content}) => {
    const serviceContents = content.split(',');

    return(
        <CardContainer>
            <CardHeader>{name}</CardHeader>
            <CardImg>
                <img src={img} alt={name} />
            </CardImg>
            <CardContent>
                {serviceContents.map((item) =>(
                    <ContentItem>{item}</ContentItem>
                ))}
            </CardContent>
        </CardContainer>
    )
};

const CardContainer = styled.div`
    max-width: 250px;
    width: auto;
    /* height: 45vh; */
    display: flex;
    flex-direction: column;
    cursor: pointer;
    opacity: 0.87;
    transition: ease 0.5s;
    &:hover{
        opacity: 1;
    box-shadow: #00000077 0px 0px 20px;
        /* box-shadow: none; */
        scale: 1.05;
    }
`;

const CardHeader = styled.div`
    background-color: green;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
`;
const CardImg = styled.div`
    max-width: 250px;
    max-height: 274px;
    width: 250px;
    height: 193px;
    img{
        max-width: 250px;
        max-height: 274px;
    }
`;
const CardContent = styled.ul`
    max-width: 250px;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    text-align: left;
    background-color: white;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
`;
const ContentItem = styled.li`
`;