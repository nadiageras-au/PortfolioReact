import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    projectName: string
    text: string
    src: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={"image"}/>
            <FlexWrapper direction={"column"}>
                <ProjectTitle>{props.projectName}</ProjectTitle>
                <Text>{props.text}</Text>
                <FlexWrapper>
                    <Hashtag>React</Hashtag>
                    <Hashtag>Front End</Hashtag>
                    <Hashtag>SPA</Hashtag>
                </FlexWrapper>

                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
            </FlexWrapper>

        </StyledProject>
    );
};


const StyledProject = styled.div`
  background: #dededc;
  width:100%;
  max-width: 980px;
  border: 2px solid deeppink;
  display: flex;
  
`
const Image = styled.img`
  width: 70%;
  height: 100%;
  max-height: 380px;
  object-fit: cover;
`
const ProjectTitle = styled.h3`
color: rebeccapurple`
const Text = styled.p`
color: blue`
const Hashtag = styled.span`
  display: block;
  box-sizing: border-box;
  height: 44px;
  padding: 15px 25px;
 
  line-height: 1;
  font-size: 12px;
  background-color: #f8d9ff;
  color: darkgreen;
`
const Link = styled.a`
text-decoration: none;`
