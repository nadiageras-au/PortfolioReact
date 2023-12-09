import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {myTheme} from "../../styles/Theme.styled";


type SectionTagPropsType = {
    idIcon:string
    sectionName: string
}




export const SectionTag = (props:SectionTagPropsType) => {
    return (
        <StyledTag>
            <Icon iconId={props.idIcon} width="14" height="14"/>
            <span>{props.sectionName}</span>

        </StyledTag>
    );
};

const StyledTag = styled.span`
  font-size: 12px;
  font-family: ${myTheme.fonts.TiltNeon};
  line-height: 1;
  text-transform: uppercase;
  border: 1px solid ${myTheme.colors.accentGray};
  padding: 10px 20px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  
  span {
    padding-left: 8px;
  }
`

