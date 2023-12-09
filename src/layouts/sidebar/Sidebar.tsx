import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../../components/FlexWrapper";
import {StyledButton} from "../../components/button/Button.styled";
import imgPhoto from "../../assets/img/avatar.jpg"
import {Icon} from "../../components/icon/Icon";


export const Sidebar = () => {
    // @ts-ignore
    return (
        <StyledSidebar>

            <FlexWrapper direction={"column"} align={"center"} gap={"20px"} flex={"1"}>

                <Avatar srcSet={imgPhoto}/>
                <StyledName>
                    Nadia Gerasimova
                </StyledName>

                <StyledMainTitle>
                    Front End Developer
                </StyledMainTitle>

                <StyledText>
                   Based in Brisbane, Australia
                </StyledText>

                <SocialIconsList>
                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon iconId={"git_circle"} width={"44"} height={"44"}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon iconId={"inst_circle"} width={"44"} height={"44"}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon iconId={"twitter_circle"} width={"24"} height={"24"}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon iconId={"linkedin_circle"} width={"24"} height={"24"}/>
                        </SocialIconLink>
                    </SocialIconsItem>


                </SocialIconsList>

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

            </StyledSidebarFooter>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 50px 35px 35px;
  max-height: 100vh;
  width: 400px;
  border: 2px solid ${myTheme.colors.accentGray};
  border-radius: 30px;

  position: fixed;
  top: 100px;
  //transform: translateY(-50%);
  left: 40px;
  z-index: 1000;
`

const Avatar = styled.img`
  display: block;
  width: 330px;
  height: 220px;
  margin: 0 auto;
  margin-bottom: 2rem;
  position: relative;
  border: 2px solid ${myTheme.colors.accentBright};
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  transform: scaleX(-1);
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
  color: ${myTheme.colors.accentBright};

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
  transition: transform .7s linear;

  &:hover > svg {
    transform: scale(1.1);
  }


`
