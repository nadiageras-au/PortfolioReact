import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {myTheme} from "../../../styles/Theme.styled";


type SkillPropsType = {
    iconId?: string,
    heightIcon?:string,
    widthIcon?:string,
    name: string,
    desc?: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillHeader>

                <SkillTitle> <Icon iconId={props.iconId} height={props.heightIcon || "32px"} width={props.widthIcon}/> {props.name}</SkillTitle>
            </SkillHeader>
                {/*<p>{props.desc}</p>*/}
        </StyledSkill>
    );
};


const StyledSkill= styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const SkillHeader = styled.li`
  padding: 8px;
`
const SkillTitle= styled.h3`
 display: flex;
  color: ${myTheme.colors.accentGray};
  font-size: 26px;
  text-transform: capitalize;
  padding: 5px;
  margin: 0;
  
  border: 2px solid ${myTheme.colors.accentGray};
  border-radius: 2px;
  opacity: 0.2;
  transition: opacity .2s linear;
  
  &:hover {
    opacity: 1;
  }
`


