import React from 'react';
import styled from "styled-components";
import {StyledSectionSubTitle} from "../../components/headings/SectionSubTitle.styled";
import {StyledParagraph} from "../../components/paragraph/Paragraph.styled";

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledSectionSubTitle>
                My Super-Duper Skills
            </StyledSectionSubTitle>
            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
            </StyledParagraph>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #b0f8cb;
`
