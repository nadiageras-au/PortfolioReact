import React from 'react';
import styled from "styled-components";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {SectionTitle} from "../../../components/titles/SectionTitle.styled";
import {SectionSubTitle} from "../../../components/titles/SectionSubTitle.styled";
import {Container} from "../../../components/container/Container";
import {Wrapper} from "../../../components/helpers/Wrapper";
// import bgThreeFigs from "../../../assets/img/icons/bg_About.svg";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <SectionTitle>
                    About
                </SectionTitle>
                <Wrapper>
                    <StyledParagraph>
                        I create inclusive, accessible digital products, with experience working with startups and
                        enterprise
                        products. I believe in using product design as a tool to elevate human interaction with
                        technology that
                        scale.
                    </StyledParagraph>
                </Wrapper>

                <SectionSubTitle>
                    Work Experience
                </SectionSubTitle>

                <SectionSubTitle>
                    Education
                </SectionSubTitle>

            </Container>
        </StyledMain>
    )
        ;
};

const StyledMain = styled.section`
  height: (100vh-50px);
  // background: url(}) repeat top right;
`





