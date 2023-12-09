import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";
import {HashtagsList} from "../../../../components/hashtags/HashtagsList";

type ProjectPropsType = {
    projectName: string
    text: string
    src?: string
    hashtagsList:Array<string>
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            {/*<Image src={props.src} alt={"image"}/>*/}
            <ProjectTitle>{props.projectName}</ProjectTitle>
            <ProjectDescription>
                <Text>{props.text}</Text>
                <HashtagsList hashList={props.hashtagsList}/>
                <Link href={"#"}>View project</Link>
            </ProjectDescription>
        </StyledProject>
    );
};


const StyledProject = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 300px;
  border: 2px solid ${myTheme.colors.accentGray};
  display: flex;
  cursor: pointer;

  position: relative;

  &:hover img {
    width: 40%;
  }

  &:hover h3 {
    left: 43%;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  transition: width .3s linear;
`

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: 0;
  padding-top: 60px;
  padding-left: 10px;
`
const ProjectTitle = styled.h3`
  color: ${myTheme.colors.accentGray};
  position: absolute;
  top: 10px;
  left: 15px;
  z-index: 3;
`
const Text = styled.p`
  margin-bottom: 15px;
`

const Link = styled.a`
  color: ${myTheme.colors.accentGray};
  text-decoration: none;
  margin-bottom: 30px;
  
  
`


