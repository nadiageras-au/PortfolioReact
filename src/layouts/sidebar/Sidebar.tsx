import React from 'react';
import styled from "styled-components";
import {Avatar, Avatar_} from "../../components/avatar/Avatar";
import {myTheme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../../components/FlexWrapper";
import {StyledButton} from "../../components/button/Button.styled";
import {Icon} from "../../components/icon/Icon";
// import Logo from "../../components/logo/Logo";


export const Sidebar = () => {
    return (
        <StyledSidebar>

            <Avatar/>
            {/*<Avatar_/>*/}
            <FlexWrapper direction={"column"} align={"center"} gap={"20px"} flex={"1"}>
                <StyledName>
                    Nadia Gerasimova
                </StyledName>

                <StyledMainTitle>
                    Front End Developer
                </StyledMainTitle>

                <StyledText>
                    Website layout practitioner.It is a long established fact that a reader will be distracted by the
                    readable content of a page when
                    looking at its layout. The point of using
                </StyledText>

                <FlexWrapper direction={'row'} justify={"center"}>
                    <StyledButton as="a" btnType={"outlined"}>
                        My CV
                    </StyledButton>

                    <StyledButton as="a" btnType={"primary"}>
                        Contacts
                    </StyledButton>
                </FlexWrapper>
            </FlexWrapper>

            <StyledSidebarFooter>
                <SocialIconsList>
                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon iconId={"github"} width={"24"} height={"24"}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon iconId={"linkedin"} width={"24"} height={"24"}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon iconId={"tlg"} width={"24"} height={"24"}/>
                        </SocialIconLink>
                    </SocialIconsItem>


                </SocialIconsList>
            </StyledSidebarFooter>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 300px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  //background-color: #333333; 
  background-color: ${myTheme.colors.sidebarBg};
`

const StyledName = styled.span`
  font-family: ${myTheme.fonts.TiltNeon};
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
`

const StyledMainTitle = styled.h1`
  margin-bottom: 40px;
  font-family: ${myTheme.fonts.FiraCode};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${myTheme.colors.accentOne};

  max-width: 270px;
`

const StyledText = styled.p`
  font-size: 14px;
  color: #dedede;
  padding: 0 15px;
  text-align: center;
  margin-bottom: 30px;
`

const StyledSidebarFooter = styled.div`
  display: flex;
  padding: 10px 0px;
`

const SocialIconsList = styled.ul`
  display: flex;
  gap: 12px;
  margin: 0 auto;
`

const SocialIconsItem = styled.li`
list-style: none;
`
const SocialIconLink = styled.a`
cursor: pointer;
  transition: transform .7s linear ;
  
  &:hover > svg {
    transform: scale(1.1);
  }
  
  
`
