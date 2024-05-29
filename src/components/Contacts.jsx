import styled from "styled-components";

export const Contacts = () => {
    return (
        <ContactsContainer>
            <ContactsWrapper>
                <ContactsHeader>Контакты</ContactsHeader>
            </ContactsWrapper>
        </ContactsContainer>
    )
};

const ContactsContainer = styled.div``;

const ContactsWrapper = styled.div`
    padding: 5px 5vw;
`;

const ContactsHeader = styled.div``;