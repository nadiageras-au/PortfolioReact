import React from 'react';
import styled from "styled-components";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";
import {SectionSubTitle} from "../../../components/headings/SectionSubTitle.styled";
import {Container} from "../../../components/container/Container";
import {Wrapper} from "../../../components/helpers/Wrapper";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {myTheme} from "../../../styles/Theme.styled";
import {ArticleAboutSection} from "../../../components/articleAboutSection/ArticleAboutSection.styled";

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

                <ArticleAboutSection
                    companyName={"Business Marketing Agency"}
                    positionName={"Web Developer"}
                    periodJob={"Jun 2020 - Sept 2020"}
                    description={"I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale."}/>

                <ArticleAboutSection
                    companyName={"Freelance"}
                    positionName={"Web Designer"}
                    periodJob={"Jun 2017 - Jun 2020"}
                    description={"I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale."}/>


                <SectionSubTitle>
                    Education
                </SectionSubTitle>

                <ArticleAboutSection
                    companyName={"IT-incubator"}
                    positionName={"Front End Developer"}
                    periodJob={"Nov 2023 - current"}
                    description={"I create inclusive, accessible digital products, with experience working with startups and enterprise products. I believe in using product design as a tool to elevate human interaction with technology that scale."}/>


            </Container>
        </StyledMain>
    )
        ;
};

const StyledMain = styled.section`
  height: (100vh-50px);
`





