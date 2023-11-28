import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {myTheme} from "../../../styles/Theme.styled";


type SkillPropsType = {
    name: string,
    heightIcon?:string,
    widthIcon?:string,
    desc: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillHeader>
                <Icon iconId={props.name} height={props.heightIcon} width={props.widthIcon}/>
                <SkillTitle>{props.name}</SkillTitle>
            </SkillHeader>
                <p>{props.desc}</p>
        </StyledSkill>
    );
};

export const Skill2 = () => {
    return (

            <StyledSkill2>
                <SkillTitle2>Figma</SkillTitle2>
                <SkillTitle2>Typescript</SkillTitle2>
                <SkillTitle2>CSS</SkillTitle2>
                <SkillTitle2>Webstorm</SkillTitle2>
                <SkillTitle2>React</SkillTitle2>
                <SkillTitle2>HTML</SkillTitle2>
            </StyledSkill2>

    );
};

const StyledSkill= styled.div`
  min-width: 370px;
  width: 33%;
  border: 1px solid ${myTheme.colors.accentTwo};
  border-radius: 2px;
  height: 100%;
  
  p {
    padding: 8px;
  }
`
const SkillHeader = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border-bottom: 1px solid ${myTheme.colors.accentTwo};
  padding: 8px;
`
const SkillTitle= styled.h3`

 color: ${myTheme.colors.accentTwo};
  font-size: 26px;
  text-transform: capitalize;
  padding: 5px;
  margin: 0;

  
  border: 2px solid ${myTheme.colors.accentTwo};
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`

const StyledSkill2 = styled.ul`
 display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  
  gap: 20px;
`

const SkillTitle2 = styled.li`
  padding: 15px;
  font-size: 36px;
  text-transform: uppercase;
  border: 2px solid ${myTheme.colors.accentTwo};
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`

