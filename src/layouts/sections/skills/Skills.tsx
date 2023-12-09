import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/titles/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import webstorm from "../../../assets/img/icons/webst.svg"
import {IconWebstorm, IconPhotoshop} from "../../../components/icon/IconGradient";
import {Skill} from "./Skill";
import {Container} from "../../../components/container/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <Description>
                    <SectionTitle>
                        My Skills & Tech Stack
                    </SectionTitle>
                    <StyledParagraph>
                        The main area of my expertise is front end development (client side of the web).
                    </StyledParagraph>
                    <StyledParagraph>
                        HTML, CSS, JS (TypeScript), building small and medium web apps with React, custom plugins,
                        features,
                        animations, and coding interactive layouts
                    </StyledParagraph>

                    <StyledParagraph>
                        I have also full-stack developer experience with open source CMS like
                        WordPress.
                        Visit my <a href="#">LinkedIn</a> profile for more details or just <a href="#">contact</a> me
                    </StyledParagraph>
                </Description>

                <FlexWrapper justify={"space-around"}>
                    {/*<Skill name={"figma-clrd"}*/}
                    {/*       desc={"Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single "}/>*/}

                    <Skill name="Home" iconId={"home"}/>
                    <Skill name="user" iconId={"user"}/>
                    <Skill name="message" iconId={"message"}/>
                    <Skill name="Sass" iconId={"sass"}/>
                    <Skill name="Styled Components" iconId={"style"}/>
                    <Skill name="Typescript" iconId={"typescript"}/>
                    <Skill name="React" iconId={"react"}/>
                    <Skill name="VSCode" iconId={"vscode"}/>
                    <Skill name="GIT" iconId={"git"}/>
                    <Skill name="GULP" iconId={"gulp"}/>
                    <Skill name="NPM" iconId={"npm"}/>
                    <Skill name="WordPress" iconId={"wordpress"}/>
                </FlexWrapper>


            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  //height: calc(100vh - 50px);
  height: 100%;
  padding-bottom: 70px;
`
const Description = styled.div`
  margin-bottom: 50px;
`