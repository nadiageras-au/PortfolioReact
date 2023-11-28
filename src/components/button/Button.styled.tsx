import styled,  {css}  from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type StyledButtonPropsType = {
    btnType?: string
}
export const StyledButton = styled.button<StyledButtonPropsType>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 40px;

  border-radius: 4px;
  border-color: ${myTheme.colors.accentOne};

  font-family: ${myTheme.fonts.FiraCode};
  text-transform: uppercase;
  color: ${myTheme.colors.accentOne};

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  
  ${props => props.btnType === "outlined" && css<StyledButtonPropsType>`
    //outlined
    background: transparent;
    border: 2px solid ${myTheme.colors.accentOne};
    color: ${myTheme.colors.accentOne};
    transition: background-color .2s linear, color .2s linear;

    &:hover {
      background-color: ${myTheme.colors.accentOne};
      color: ${myTheme.colors.sidebarBg};
      border: 2px solid ${myTheme.colors.accentOne};
      outline-width: 0;
    }
  `}

  ${props => props.btnType === "primary" && css<StyledButtonPropsType>`
    //primary
    background-color: ${myTheme.colors.accentOne};
    color:  ${myTheme.colors.sidebarBg};
    border: 2px solid ${myTheme.colors.accentOne};

    transition: background-color .2s linear, color .2s linear;

    &:hover {
      background-color: ${myTheme.colors.sidebarBg};
      color: ${myTheme.colors.accentOne};
      border: 2px solid ${myTheme.colors.accentOne};
      outline-width: 0;
    }
  `}
`
