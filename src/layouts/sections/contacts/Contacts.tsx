import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {ContactForm} from "../../../components/form/ContactForm";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>
                Let's be in Touch
            </SectionTitle>
            <StyledParagraph>
                Please, don’t hesitate and feel free to contact if you wanna collaborate with me, or simply have a
                conversation.
            </StyledParagraph>
            <ContactForm/>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: rgba(250, 182, 140, 0.81);
`
