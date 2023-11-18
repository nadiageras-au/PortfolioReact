import React from 'react';
import imgsrc from "../../assets/img/icons/sprite.svg"
import styled from "styled-components";

type IconPropsType = {
    iconId?: string
    width?: string
    height?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <StyledBorderBox>
            <svg width={props.width || "50"} height={props.height || "50"}>
                <use xlinkHref={`${imgsrc}#${props.iconId}`}/>
            </svg>
        </StyledBorderBox>
    )
        ;
}

const StyledBorderBox = styled.div`
  border: 1px solid white;

`
