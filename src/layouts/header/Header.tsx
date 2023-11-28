import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Home", "Skills","Services","Projects", "Contacts"];
export const Header = () => {
    return (
        <StyledHeader>
           <HeaderMenu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  width: calc(100% - 300px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000;
  background-color:${myTheme.colors.sidebarBg};
  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.25);
  
`
