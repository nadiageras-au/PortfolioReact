import React from 'react';
import styled from "styled-components";
import {Main} from "../sections/main/Main";
import {Skills} from "../sections/skills/Skills";
import {Projects} from "../sections/projects/Projects";
import {Contacts} from "../sections/contacts/Contacts";
import {Services} from "../sections/services/Services";


export const ContentBox = () => {
    return (
        <StyledBox>
            <Main/>
            <Skills/>
            <Services/>
            <Projects/>
            <Contacts/>
        </StyledBox>
    );
};

const StyledBox = styled.div`
  background-color: beige;
  padding: 10rem 0 8rem 300px;
  height: 100%;
`
