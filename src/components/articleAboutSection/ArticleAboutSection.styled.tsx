import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {StyledParagraph} from "../paragraph/Paragraph.styled";
import {myTheme} from "../../styles/Theme.styled";

type ArticleAboutSectyionPropsType = {
    companyName?:string,
    positionName?:string,
    periodJob?: string,
    description?:string
}
export const ArticleAboutSection = (props:ArticleAboutSectyionPropsType) => {
    return (
            <StyledArticleWrapper>
                <StyledArticleSubHeading>
                    {props.positionName}
                    <span>{props.periodJob}</span>
                </StyledArticleSubHeading>
                <RightArticleContent>
                    <StyledArticleHeading>
                        {props.companyName}
                    </StyledArticleHeading>
                    <StyledParagraph>
                        {props.description}
                    </StyledParagraph>
                </RightArticleContent>

            </StyledArticleWrapper>

    );
};



const StyledArticleWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  max-width:700px;
  width: 100%;
  gap: 30px;
`
const StyledArticleHeading = styled.h4`
  border: 1px solid ${myTheme.colors.accentTwo};
  color: ${myTheme.colors.accentTwo};
  text-shadow: 0px 0px 15px rgba(255, 253, 238, 0.76);
  margin-bottom: 12px;
  padding: 2px 12px;
`
const StyledArticleSubHeading = styled.h5`

  color: rgba(255, 226, 242, 0.90);
  text-shadow: 0px 0px 5px #f52197;
  flex-grow: 1;
  width: 35%;

  span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: #FFF;
    text-shadow: 0px 0px 20px rgba(247, 255, 193, 0.4);
  }
`

const RightArticleContent=styled(FlexWrapper)`
flex-grow: 1;
  width: 65%;
`