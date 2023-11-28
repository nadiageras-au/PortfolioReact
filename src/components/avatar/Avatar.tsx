import React from 'react';
import imgsrc from "../../assets/img/icons/sprite.svg";
import styled from "styled-components";
import {Icon} from "../icon/Icon";
// import nadia from "../../assets/img/icons/avatar.svg"
import avatar from "../../assets/img/sidebar-avatar.jpg"
import {myTheme} from "../../styles/Theme.styled";

// Icon Programming Girl
export const Avatar = () => {
    return (
        <StyledDiv>
            <StyledImg src={avatar}/>

            {/*<svg width="100%" height="180">*/}
            {/*    <use xlinkHref={`${imgsrc}#programmer`}/>*/}
            {/*</svg>*/}
        </StyledDiv>
    );
}

// Photo of me
export const Avatar_ = () => {
    return (
        <StyledDiv>
            <StyledNeonCircle>
                {/*<img src={nadia}/>*/}
            </StyledNeonCircle>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
  //margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  margin-bottom: 50px;


  //& svg {
  //  transition: filter 0.2s linear;
  //  cursor: pointer;
  //  filter: drop-shadow(0px 0px 3px rgba(239, 135, 255, 0.5)) drop-shadow(0px 0px 5px rgba(239, 135, 255, 0.5)) drop-shadow(0px 0px 7px rgba(251, 135, 255, 0.25));
  //}
`

const StyledImg = styled.img`
  height: 100%;
  display: block;
  width: auto;
  border-top: 2px solid ${myTheme.colors.accentOne};
  border-left: 2px solid ${myTheme.colors.accentOne};
`

const StyledNeonCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 3px solid #ffd6eb;
  z-index: 500;
  filter: drop-shadow(0px 5px 10px rgba(254, 37, 155, 0.10)) drop-shadow(0px 0px 0px rgba(254, 37, 155, 0.10)) drop-shadow(0px 0px 3px rgba(254, 37, 155, 0.25));

  transition: box-shadow .3s ease-in-out, filter .3s ease-in-out;

  img {
    display: block;
    height: auto;
    max-height: 161%;
    opacity: .72;
    z-index: 499;
    cursor: pointer;
  }

  &:hover {
    border-color: #fad6e5;
    box-shadow: 0px 0px 5px 15px (rgba 254, 37, 155, 0.45)inset, 0 px 0 px 5 px 10 px(rgba 254, 37, 155, 0.45)inset, 0 px 0 px 5 px 0 px(rgba 254, 37, 155, 0.45)inset;
    box-shadow: 0px 0px 5px 0px #FE259B inset, 0px 4px 10px 0px #FE259B, 0px 0px 25px 10px rgba(254, 37, 155, 0.61), 0px 0px 45px 0px #FE259B inset, 0px 0px 70px 0px #FE259B, 0px 0px 80px 0px #FE259B inset;
    filter: drop-shadow(0px 0px 20px rgba(254, 37, 155, 0.10)) drop-shadow(0px 0px 5px rgba(254, 37, 155, 0.10)) drop-shadow(0px 0px 6px rgba(254, 37, 155, 0.25));

  }
`