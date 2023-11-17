import React from 'react';
import styled from "styled-components";
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import {StyledSectionSubTitle} from "../../components/headings/SectionSubTitle.styled";
import {Projects} from "../projects/Projects";
import {Contacts} from "../contacts/Contacts";


export const ContentBox = () => {
    return (
        <StyledBox>
            <StyledContentTitle>
                About me
            </StyledContentTitle>
            <Main/>

            <StyledContentTitle>
                Skills
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