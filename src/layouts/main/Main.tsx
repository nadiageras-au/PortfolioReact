import React from 'react';
import styled from "styled-components";
import {StyledParagraph} from "../../components/paragraph/Paragraph.styled";
import {StyledSectionSubTitle} from "../../components/headings/SectionSubTitle.styled";
import {Projects} from "../projects/Projects";

export const Main = () => {
    return (
        <StyledMain>
            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
                </StyledParagraph>

            <StyledSectionSubTitle>
                Education
            </StyledSectionSubTitle>

            <StyledParagraph>
                    I create inclusive, accessible digital products, with experience working with startups and enterprise
                    products. I believe in using product design as a tool to elevate human interaction with technology that
                    scale.
            </StyledParagraph>
            <StyledSectionSubTitle>
                Work Experience
            </StyledSectionSubTitle>

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
