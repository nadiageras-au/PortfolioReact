import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>

                })}

            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  display: block;
  max-width: 500px;
  width: 100%;

  ul {
    display: flex;
  }
`


const Link = styled.a`
  display: block;
  padding: 20px 30px;
  color: ${myTheme.colors.fontColor};
  font-family: ${myTheme.fonts.FiraCode};
  font-size: 12px;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.44px;
  transition: background-color .2s linear;
  cursor: pointer;
`

const ListItem = styled.li`
  &:hover ${Link} {
    background-color: ${myTheme.colors.accentOne};
  }
`
