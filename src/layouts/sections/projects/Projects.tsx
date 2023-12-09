import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/titles/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {TabMenu} from "./tabMenu/TabMenu";
import {Project} from "./project/Project";
// import imgProj1 from "../../../assets/img/projects/proj1.jpeg"
// import imgProj2 from "../../../assets/img/projects/proj2.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container/Container";

const worksGroups = ["All", "React", "WordPress", "WebDesign"];
const hashtagsList = ["Web Design", "React", "Figma", "Front End"];
const hashProj1 = ["React", "Figma"];
const hashProj2 = ["React", "Figma", "Typescript"];
const hashProj3 = ["Figma", "WordPress"];
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>
                    My Projects
                </SectionTitle>
                <StyledParagraph>
                    I create inclusive, accessible digital products, with experience working with startups and enterprise
                    products. I believe in using product design as a tool to elevate human interaction with technology that
                    scale.
                </StyledParagraph>
                <TabMenu menuItems={worksGroups}/>
                <FlexWrapper justify={"space-between"}>
                    <Project
                        projectName={"My Project"}
                        text={"I believe in using product design as a tool to elevate human interaction with technology"}
                        // src={imgProj1}
                        hashtagsList={hashProj1}/>

                    <Project
                        projectName={"My Project2"}
                        text={" I create inclusive, accessible digital products, with experience working with startups and enterprise\n" +
                            "                products"}
                        // src={imgProj2}
                        hashtagsList={hashtagsList}/>
                    <Project
                        projectName={"My Project1"}
                        text={" I create inclusive, accessible digital products, with experience working with startups and enterprise\n" +
                            "                products.I create inclusive, accessible digital products,"}
                        // src={imgProj1}
                        hashtagsList={hashProj3}/>
                </FlexWrapper>



            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
`

