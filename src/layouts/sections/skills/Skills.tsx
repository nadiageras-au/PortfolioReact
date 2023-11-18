import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/headings/SectionTitle.styled";
import {StyledParagraph} from "../../../components/paragraph/Paragraph.styled";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import webstorm from "../../../assets/img/icons/webst.svg"

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledSectionTitle>
                My Skills & Tech Stack / My Skills and experience
            </StyledSectionTitle>
            <FlexWrapper direction={"column"}>
                <StyledParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </StyledParagraph>
                <h3>Technologies</h3>
                <FlexWrapper>
                    <Icon iconId={"react"} width={"50"} height={"54"}/>
                    <Icon iconId={"typescript"} width={"50"} height={"50"}/>
                    <Icon iconId={"css"}/>
                    <Icon iconId={"styledcomponents"} />
                    <Icon iconId={"vscode"} />
                    <Icon iconId={"webstorm"} width={"50"} height={"50"}/>
                    <svg width="80" height="80">
                            <use xlinkHref={`${webstorm}#webst1`}/>
                    </svg>
                    <svg width="51" height="50" viewBox="0 0 51 50" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_761_1061)">
                            <path d="M7.34961 45.1562L0.630859 5.23438L13.1309 0.078125L21.0215 4.76562L28.3652 0.859375L43.5215 6.71875L35.0059 50L7.34961 45.1562Z"
                                  fill="url(#grad1)"/>
                            <path d="M50.6309 16.9531L44.1465 1.01562L32.5059 0L14.3809 17.3438L19.2246 39.7656L28.3652 46.0938L50.6309 32.8906L45.1621 22.6562L50.6309 16.9531Z"
                                  fill="url(#grad2)"/>
                            <path d="M40.6309 14.5313L45.1621 22.6562L50.6309 16.9531L46.6465 7.03125L40.6309 14.5313Z"
                                  fill="url(#grad3)"/>
                            <path d="M10.0059 9.375H41.2559V40.625H10.0059V9.375Z" fill="black"/>
                            <path d="M12.9746 34.7656H24.6934V36.7188H12.9746V34.7656ZM28.2871 24.5313L29.9277 22.5C31.0996 23.4375 32.2715 24.0625 33.7559 24.0625C34.9277 24.0625 35.6309 23.5938 35.6309 22.8125C35.6309 22.1094 35.1621 21.7188 33.0527 21.1719C30.4746 20.4688 28.834 19.7656 28.834 17.1875V17.1094C28.834 14.7656 30.709 13.2031 33.2871 13.2031C35.0154 13.1959 36.6952 13.7742 38.0527 14.8438L36.5684 17.0313C35.6252 16.2942 34.4817 15.8586 33.2871 15.7813C32.2715 15.7813 31.6465 16.25 31.6465 16.9531C31.6465 17.8125 32.1934 18.125 34.3809 18.6719C36.959 19.375 38.4434 20.3125 38.4434 22.5781C38.4434 25.1563 36.4902 26.6406 33.7559 26.6406C31.7488 26.5668 29.8239 25.8244 28.2871 24.5313ZM25.7871 13.4375L23.834 20.9375L21.6465 13.4375H19.459L17.2715 20.9375L15.3184 13.4375H12.2715L16.0215 26.4063H18.4434L20.5527 18.9063L22.6621 26.4063H25.084L28.834 13.4375H25.7871Z"
                                  fill="white"/>
                        </g>
                        <defs>
                            <linearGradient id="grad1" x1="18.5176" y1="1.03906" x2="31.459" y2="47.6211" gradientUnits="userSpaceOnUse">
                                <stop offset="0.28" stop-color="#00CDD7"/>
                                <stop offset="0.94" stop-color="#2086D7"/>
                            </linearGradient>
                            <linearGradient id="grad2" x1="22.5332" y1="6.97266" x2="44.4238" y2="39.0703" gradientUnits="userSpaceOnUse">
                                <stop offset="0.14" stop-color="#FFF045"/>
                                <stop offset="0.37" stop-color="#00CDD7"/>
                            </linearGradient>
                            <linearGradient id="grad2" x1="44.2676" y1="10.9102" x2="47.1426" y2="21.0937" gradientUnits="userSpaceOnUse">
                                <stop offset="0.28" stop-color="#00CDD7"/>
                                <stop offset="0.94" stop-color="#2086D7"/>
                            </linearGradient>
                            <clipPath id="clip0_761_1061">
                                <rect width="50" height="50" fill="white" transform="translate(0.630859)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </FlexWrapper>

            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #b0f8cb;
`
