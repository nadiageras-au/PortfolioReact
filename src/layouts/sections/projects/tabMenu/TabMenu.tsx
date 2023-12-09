import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>

                })}

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    
    color: white;
    margin-bottom: 60px;
  }
`

const ListItem=styled.li`
  list-style: none;
`

const Link = styled.a`
  display: inline-block;
  padding: 5px 10px;

  font-family: ${myTheme.fonts.TiltNeon};
  font-size: 18px;
  line-height: 1.2;
  border: 2px solid transparent; 
  border-radius: 2px;
  color: ${myTheme.colors.colorText};
  text-decoration: none;
  position: relative;
  transition: border .3s linear;
  

  //&::after {
  //  content: "";
  //  display: block;
  //  position: absolute;
  //  width: 100%;
  //  height: 2px;
  //  bottom: 0;
  //  left: 0;
  //  fill: #D9D9D9;
  //  background-color: rgba(233, 228, 181, 0.70);
  //
  //  filter: drop-shadow(0px 0px 5px #FFF16D) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  //  opacity: 1;
  //
  //  
  //}

  &:hover {
    color: ${myTheme.colors.accentGray}
    text-shadow: 0px 0px 15px #FFF16D;
    border-color: rgba(233, 228, 181, 0.70);
    filter: drop-shadow(0px 0px 5px #FFF16D) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }


`

