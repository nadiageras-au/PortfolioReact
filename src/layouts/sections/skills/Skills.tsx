import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import webstorm from "../../../assets/img/icons/webst.svg"
import {IconWebstorm, IconPhotoshop} from "../../../components/icon/IconGradient";
import {Skill, Skill2} from "./Skill";
import {Container} from "../../../components/container/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>
                    My Skills & Tech Stack
                </SectionTitle>
                <StyledParagraph>
                    The main area of my expertise is front end development (client side of the web).
                </StyledParagraph>
                <StyledParagraph>
                    HTML, CSS, JS (TypeScript), building small and medium web apps with React, custom plugins, features,
                    animations, and coding interactive layouts

                </StyledParagraph> I have also full-stack developer experience with open source CMS like
                WordPress. <StyledParagraph>
                Visit my <a href="#">LinkedIn</a> profile for more details or just <a href="#">contact</a> me

            </StyledParagraph>
                <FlexWrapper>
                    {/*<Skill name={"figma-clrd"}*/}
                    {/*       desc={"Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single "}/>*/}

                    <Skill2/>
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
