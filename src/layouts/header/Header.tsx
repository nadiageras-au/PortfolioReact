import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "Skills","Services","Projects", "Contacts"];
export const Header = () => {
    return (
        <StyledHeader>
           <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: #8f3a3a;
  width: calc(100% - 300px);
  background-color: #0d0d0d;
  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
`
