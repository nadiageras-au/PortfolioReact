import React from 'react';
import styled from "styled-components";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {myTheme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

type ServiceItemPropsType = {
    title:string
    bgColor:string
    gridArea:string
}

type StyledServiceItemPropsType = {
    bg:string
    grid:string
}
export const ServiceItem = (props:ServiceItemPropsType) => {
    return (
        <StyledServiceItem bg={props.bgColor} grid={props.gridArea}>
            <FlexWrapper>
                <Icon iconId={"design"}/>
                <ServiceTitle>{props.title}</ServiceTitle>
            </FlexWrapper>

            <StyledParagraph>
                consectetur adipiscing elit duis tristique sollicitudin
            </StyledParagraph>


        </StyledServiceItem>
    );
};



const StyledServiceItem = styled.div<StyledServiceItemPropsType>`
  padding: 15px ;

  max-width: 360px;
  border: 1px solid rgba(255, 255, 255, 0.43);
  border-radius: 2px;
  background-color: ${props => props.bg};
  
  grid-area:${props =>props.grid};
`

const ServiceTitle = styled.h3`
  font-size: 24px;
  color: ${myTheme.colors.colorText};
  text-shadow: 0px 0px 8px #A2A2A2;
  font-family: ${myTheme.fonts.FiraCode};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// const ServiceText = styled.p`
//   font-size: 16px;
//   color: #a9a900;
// `
