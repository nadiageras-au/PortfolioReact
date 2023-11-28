import React from 'react';
import styled from "styled-components";
import {Main} from "../sections/main/Main";
import {Skills} from "../sections/skills/Skills";
import {Projects} from "../sections/projects/Projects";
import {Contacts} from "../sections/contacts/Contacts";
import {Services} from "../sections/services/Services";
import {myTheme} from "../../styles/Theme.styled";


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

const StyledBox = styled.main`
  background-color:${myTheme.colors.contentBg};
  padding: 100px 0 100px 300px;

`
