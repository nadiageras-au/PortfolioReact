import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type HashListPropsType = {
    hashList: Array<string>
}
export const HashtagsList = (props: HashListPropsType ) => {
    return (
        <StyledHashtagsList>
            {props.hashList.map((item, index) => {
                return <Hashtag key={index}>
                    {item}
                </Hashtag>
            })}
        </StyledHashtagsList>

    );
};

const StyledHashtagsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 25px;
`

const Hashtag = styled.li`
  display: block;
  box-sizing: border-box;
  padding: 5px 10px;
  font-weight: 600;

  line-height: 1;
  font-size: 12px;
  background-color: ${myTheme.colors.accentGray};
  color: darkgreen;
`