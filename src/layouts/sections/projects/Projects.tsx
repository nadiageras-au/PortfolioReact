import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {Menu} from "../../../components/menu/Menu";
import {Project} from "./project/Project";
import imgProj1 from "../../../assets/img/projects/proj1.jpeg"
import imgProj2 from "../../../assets/img/projects/proj2.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container/Container";

const worksGruops = ["All", "React", "WordPress", "WebDesign"]
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>
                    My Projects
                </SectionTitle>
                <Menu menuItems={worksGruops}/>
                <FlexWrapper justify={"space-around"}>
                    <Project
                        projectName={"My Project"}
                        text={" I create inclusive, accessible digital products, with experience working with startups and enterprise\n" +
                            "                products. I believe in using product design as a tool to elevate human interaction with technology that\n" +
                            "                scale."}
                        src={imgProj1}/>
                    <Project
                        projectName={"My Project2"}
                        text={" I create inclusive, accessible digital products, with experience working with startups and enterprise\n" +
                            "                products."}
                        src={imgProj2}/>
                    <Project
                        projectName={"My Project1"}
                        text={" I create inclusive, accessible digital products, with experience working with startups and enterprise\n" +
                            "                products."}
                        src={imgProj1}/>
                </FlexWrapper>

                <StyledParagraph>
                    I create inclusive, accessible digital products, with experience working with startups and enterprise
                    products. I believe in using product design as a tool to elevate human interaction with technology that
                    scale.
                </StyledParagraph>

            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
`

