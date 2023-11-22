import React from 'react';
import styled from "styled-components";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";

export const Main = () => {
    return (
        <StyledMain>
            <SectionTitle>
             About
            </SectionTitle>
            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
            </StyledParagraph>

            <h3>
                Education
            </h3>

            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
            </StyledParagraph>

            <StyledParagraph>
                I create inclusive, accessible digital products, with experience working with startups and enterprise
                products. I believe in using product design as a tool to elevate human interaction with technology that
                scale.
            </StyledParagraph>
            <h3>
                Work Experience
            </h3>

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
  heigth: (100vh-50px);

  background-color: #ffb4dd;
`
