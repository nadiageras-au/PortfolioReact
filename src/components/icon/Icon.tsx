import React from 'react';
// import iconsSprite from "../../assets/img/icons/icons-sprite.svg"
import imgsrc from "../../assets/img/icons/sprite.svg"
import styled from "styled-components";

type IconPropsType = {
    iconId?: string
    width?: string
    height?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <StyledDiv>
            <svg viewBox={`0 0 ${props.width} ${props.height}`} >
                <use xlinkHref={`${imgsrc}#${props.iconId}`}/>
            </svg>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
  background-color: rgba(213, 253, 255, 0.53);
  box-shadow: 1px 2px 0 20px black;
  //& svg {
  //  transition: filter 0.2s linear;
  //  cursor: pointer;
  //  filter: drop-shadow(0px 0px 3px rgba(253, 255, 135, 0.75)) drop-shadow(0px 0px 5px rgba(253, 255, 135, 0.25));
  //
  //}
  //
  //& svg:hover {
  //  filter: drop-shadow(0px 0px 3px rgba(252, 255, 139, 0.75)) drop-shadow(0px 0px 5px rgba(253, 255, 135, 0.5)) drop-shadow(0px 0px 7px rgba(253, 255, 135, 0.25));
  //}
`
