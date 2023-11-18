import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/headings/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";

export const Projects = () => {
    return (
        <StyledProjects>
            <StyledSectionTitle>
                My Projects
            </StyledSectionTitle>
            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
            </StyledParagraph>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  background-color: #a5f1fa;
`

