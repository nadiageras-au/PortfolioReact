import React from 'react';
import styled from "styled-components";
import {Main} from "../sections/main/Main";
import {Skills} from "../sections/skills/Skills";
import {Projects} from "../sections/projects/Projects";
import {Contacts} from "../sections/contacts/Contacts";
import {Services} from "../sections/services/Services";
import {myTheme} from "../../styles/Theme.styled";
import {Testimonials} from "../sections/testimonials/Testimonials";
import {Header} from "../header/Header";


export const ContentBox = () => {
    return (
        <StyledBox>
            <Header/>
            {/*<Main/>*/}
            {/*<Skills/>*/}
            {/*<Projects/>*/}
            {/*<Services/>*/}
            {/*<Testimonials/>*/}
            {/*<Contacts/>*/}
        </StyledBox>
    );
};

const StyledBox = styled.main`
  padding: 100px 0 100px 400px;

`
