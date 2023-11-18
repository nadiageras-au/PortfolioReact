import React from 'react';
import styled from "styled-components";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {StyledSectionTitle} from "../../../components/headings/SectionTitle.styled";
import {Projects} from "../projects/Projects";

export const Main = () => {
    return (
        <StyledMain>
            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
                </StyledParagraph>

            <StyledSectionTitle>
                Education
            </StyledSectionTitle>

            <StyledParagraph>
                    I create inclusive, accessible digital products, with experience working with startups and enterprise
                    products. I believe in using product design as a tool to elevate human interaction with technology that
                    scale.
            </StyledParagraph>
            <StyledSectionTitle>
                Work Experience
            </StyledSectionTitle>

            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
            </StyledParagraph>


        </StyledMain>
)
    ;
};

const StyledMain = styled.section`

  background-color: #ffb4dd;
`
