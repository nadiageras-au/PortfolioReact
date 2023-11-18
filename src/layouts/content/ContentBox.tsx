import React from 'react';
import styled from "styled-components";
import {Main} from "../sections/main/Main";
import {Skills} from "../sections/skills/Skills";
import {StyledSectionTitle} from "../../components/headings/SectionTitle.styled";
import {Projects} from "../sections/projects/Projects";
import {Contacts} from "../sections/contacts/Contacts";


export const ContentBox = () => {
    return (
        <StyledBox>
            <StyledContentTitle>
                About me
            </StyledContentTitle>
            <Main/>

            <StyledContentTitle>
                My Skills & Tech Stack
            </StyledContentTitle>

            <Skills/>

            <StyledContentTitle>
                Portfolio
            </StyledContentTitle>
            <Projects/>

            <StyledContentTitle>
               Contacts
            </StyledContentTitle>
            <Contacts/>

        </StyledBox>
    );
};

const StyledBox = styled.div`
  background-color: beige;
  padding: 10rem 0 8rem 300px;
  height: 100%;
`

const StyledContentTitle = styled.h1`
  font-size: 46px;
  color: blue;
`