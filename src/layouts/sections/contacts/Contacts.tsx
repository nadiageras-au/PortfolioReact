import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/headings/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";

export const Contacts = () => {
    return (
        <StyledContacts>
            <StyledSectionTitle>
                Contact me
            </StyledSectionTitle>
            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
            </StyledParagraph>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: #fc7b21;
`
