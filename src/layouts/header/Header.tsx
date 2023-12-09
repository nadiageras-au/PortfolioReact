import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {SectionTag} from "../../components/tag/SectionTag";
import {Container} from "../../components/container/Container";
import {StyledParagraph} from "../../components/paragraph/Paragraph.styled";



export const Header :React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <SectionTag sectionName={"Introduce"} idIcon={"home"}/>
                {/*<div className={"burgerMenu"}><span>_</span></div>*/}
                <MainTitle>Say Hi from <span>Nadia</span>, Front End Developer</MainTitle>
                <StyledParagraph>I design and code beautifully simple things and I love what I do. Just simple like that!</StyledParagraph>
                <HeaderMenu/>
                <LinkCircle hrefLang={"#"}><span>My Projects</span></LinkCircle>
                {/*<ResultsList>*/}
                {/*    <ResultItem><span>6+</span>years of experience</ResultItem>*/}
                {/*    <ResultItem><span>40+</span>projects completed</ResultItem>*/}
                {/*</ResultsList>*/}
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
`

const MainTitle = styled.h1`
  font-family: ${myTheme.fonts.FiraCode};
  font-weight: 500;
  font-size: 56px;
  max-width: 700px;
  margin: 60px 0;
  z-index: -1;

  span {
    color: ${myTheme.colors.accentBright}
  }
`

const LinkCircle = styled.a`
  margin-top: 60px;
  margin-left: 500px;
  margin-right: 0px;
  display: inline-block;
  text-align: center;
  width: 190px;
  max-height: 50px;
  padding: 15px;
  border-radius: 30px;
  border: 2px solid ${myTheme.colors.accentGray};
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  transition: color .2s linear, border .2s linear;

  &:hover {
    color: ${myTheme.colors.accentBright};
    border-color: #6b6b6b;
  }
`
