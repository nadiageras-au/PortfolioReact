import React from 'react';
import imgsrc from "../../assets/img/icons/sprite.svg";
import styled from "styled-components";
import {Icon} from "../icon/Icon";

// Icon Programming Girl
export const Avatar = () => {
    return (
        <StyledDiv>
            {/*Screens svg-icon работает правильно*/}
            {/*<svg width="100%" height="150">*/}
            {/*    <use xlinkHref={`${imgsrc}#screens`}/>*/}
            {/*</svg>*/}

            {/*=======================*/}




            <svg width="100%" height="180">
                <use xlinkHref={`${imgsrc}#programmer`}/>
            </svg>

            {/*<svg width="112" height="121">*/}
            {/*    <use xlinkHref={`${imgsrc}#figmabw`}/>*/}
            {/*</svg>*/}

            {/*<svg width="400" height="600">*/}
            {/*    <use xlinkHref={`${imgsrc}#discord`}/>*/}
            {/*</svg>*/}

            {/*<svg width="112" height="121">*/}
            {/*    <use xlinkHref={`${imgsrc}#git-hub`}/>*/}
            {/*</svg>*/}

            {/*<svg width="112" height="121">*/}
            {/*    <use xlinkHref={`${imgsrc}#css`}/>*/}
            {/*</svg>*/}

            {/*<Icon iconId={'programmer'} width={"224"} height={"242"}/>*/}
        </StyledDiv>
    );
}

// Photo of me
// export const Avatar_ = () => {
//     return (
//         <StyledNeonCircle>
//             <img src={avatar}/>
//         </StyledNeonCircle>
//     );
// };

const StyledDiv = styled.div`
  margin-bottom: 20px;
  & svg {
    transition: filter 0.2s linear;
    cursor: pointer;
    filter: drop-shadow(0px 0px 3px rgba(239, 135, 255, 0.5)) drop-shadow(0px 0px 5px rgba(251, 233, 253, 0.5));
  }

  & svg:hover {
    filter: drop-shadow(0px 0px 3px rgba(239, 135, 255, 0.5)) drop-shadow(0px 0px 5px rgba(239, 135, 255, 0.5)) drop-shadow(0px 0px 7px rgba(251, 135, 255, 0.25));
  }
`

// const StyledNeonCircle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//
//   width: 180px;
//   height: 180px;
//   border-radius: 50%;
//   border: 4px solid #ffd6eb;
//   z-index: 500;
//
//   //box-shadow: 0px 0px 20px 3px #FE259B inset, 0px 0px 25px 0px #FE259B inset, 0px 0px 10px 0px #FE259B inset;
//   //filter: drop-shadow(0px 4px 10px #FE259B) drop-shadow(0px 0px 25px rgba(254, 37, 155, 0.61)) drop-shadow(0px 0px 50px #FE259B);
//
//   transition: border .1s ease-in-out, filter .1s ease-in-out;
//
//   img {
//     display: block;
//     height: auto;
//     opacity: .82;
//     z-index: 499;
//   }
//
//   &:hover {
//     border-color:#fcf7f9;
//     box-shadow:0px 0px 20px 5px (rgba 254,37,155, 0.05) inset, 0px 0px 10px 0px (rgba 254,37,155, 0.05) inset, 0px 0px 5px 0px (rgba 254,37,155, 0.05) inset;
//
//             //0px 0px 20px 5px #FE259B inset, 0px 0px 40px 0px #FE259B inset, 0px 0px 20px 0px #FE259B inset;
//             //
//             //
//     filter: drop-shadow(0px 5px 10px rgba(254,37,155, 0.05)) drop-shadow(0px 0px 0px rgba(254,37,155,0.04)) drop-shadow(0px 0px 3px rgba(254,37,155, 0.05));
//
//             //drop-shadow(0px 5px 10px #FE259B) drop-shadow(0px 0px 8px rgba(254, 37, 155, 0.80)) drop-shadow(0px 0px 3px #FE259B);
//   }
// `