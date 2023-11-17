import React from 'react';
import styled from "styled-components";
import {Avatar} from "../../components/avatar/Avatar";
import {myTheme} from "../../styles/Theme.styled";
// import Logo from "../../components/logo/Logo";


export const Sidebar = () => {
    return (
        <StyledSidebar>
            {/*<StyledSidebarHeader>*/}
            <Avatar/>


            <StyledName>
                Nadia Gerasimova
            </StyledName>

            <StyledProf>
                Front End Developer.

            </StyledProf>
            <StyledText>
                Website layout practitioner.It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using
            </StyledText>
            <StyledSidebarFooter>
                Social Icons
            </StyledSidebarFooter>
            {/*</StyledSidebarHeader>*/}
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
  min-height: 100vh;
  width: 300px;
  padding-top: 40px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: #333333;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;
  justify-content: flex-start;
`

const StyledName = styled.div`
  font-family: ${myTheme.fonts.FiraCode};
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
`

const StyledProf = styled.h1`
  font-family: ${myTheme.fonts.FiraCode};
  font-size: 14px;
  font-weight: 300;
  color: #dedede;
  text-align: center;
  max-width: 270px;
`

const StyledText = styled.p`
  font-size: 14px;
  color: #dedede;
  padding: 0 15px;
  text-align: center;
`

const StyledSidebarFooter = styled.div`
  background-color: #4dc5cc;
  padding: 10px 45px;
`
