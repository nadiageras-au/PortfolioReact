import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/titles/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {ContactForm} from "../../../components/form/ContactForm";
import {Container} from "../../../components/container/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>
                    Let's be in Touch
                </SectionTitle>
                <StyledParagraph>
                    Please, don’t hesitate and feel free to contact if you wanna collaborate with me, or simply have a
                    conversation.
                </StyledParagraph>
                <ContactForm/>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  
`
