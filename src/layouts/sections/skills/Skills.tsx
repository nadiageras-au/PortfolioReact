import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import webstorm from "../../../assets/img/icons/webst.svg"
import {IconWebstorm, IconPhotoshop} from "../../../components/icon/IconGradient";
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                My Skills & Tech Stack / My Skills and experience
            </SectionTitle>
            <FlexWrapper>
                <Skill name={"react"}/>
                <Skill name={"typescript"}/>
                <Skill name={"css"}/>
                <Skill name={"style"} height={"46px"}/>
                <Skill name={"figma-clrd"}/>
                <Skill name={"git"}/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #dce3df;
  height: calc(100vh - 50px);
  max-width: 1000px;
  margin: 0 auto;
`
