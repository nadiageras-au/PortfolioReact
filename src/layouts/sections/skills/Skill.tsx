import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";


type SkillPropsType = {
    name: string
    height?:string
    width?:string

}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillHeader>
                <Icon iconId={props.name} height={props.height}/>
                <SkillTitle>{props.name}</SkillTitle>
            </SkillHeader>
                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
        </StyledSkill>
    );
};

const StyledSkill= styled.div`
  min-width: 370px;
  width: 33%;
  border: 1px solid yellow;
  border-radius: 2px;
`
const SkillHeader = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
 gap: 20px;
  border-bottom:1px solid yellow ;
  


`
const SkillTitle= styled.h3`
 color: orangered;
  font-size: 26px;
  text-transform: capitalize;
  padding: 0;
  margin: 0;
 
 
  
`

