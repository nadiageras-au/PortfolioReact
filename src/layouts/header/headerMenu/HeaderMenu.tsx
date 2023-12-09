import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";

const menuItems = [
    {id: "home", name: "Home"},
    {id: "user", name: "About"},
    {id: "briefcase", name: "Resume"},
    {id: "nut", name: "Service"},
    {id: "wrinch", name: "Skills"},
    {id: "code", name: "Projects"},
    {id: "dialog", name: "Testimonials"},
    {id: "email", name: "Contact"},
]
export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#" title={item.name}>

                            <Icon iconId={item.id} height="24" width="24"/>
                        </Link>
                    </ListItem>

                })}
            </ul>

        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  display: block;
  position: fixed;
  top: 50%;
  right: 70px;
  transform: translateY(-50%);
  border: 1px solid #565656;
  border-radius: 50px;
  padding: 20px 40px;
  width: 60px;
  z-index: 20;
  background-color: ${myTheme.colors.colorBg};


  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`


const Link = styled.a`
  display: block;
  cursor: pointer;
  padding: 15px;
  color: ${myTheme.colors.white};
  transition: color .2s linear;
  
`

const ListItem = styled.li`
  &:hover a{
   color: ${myTheme.colors.accentBright};

  }
`
