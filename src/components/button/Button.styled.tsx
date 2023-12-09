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
  border-color: ${myTheme.colors.accentBright};

  font-family: ${myTheme.fonts.FiraCode};
  text-transform: uppercase;
  color: ${myTheme.colors.accentBright};

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  
  ${props => props.btnType === "outlined" && css<StyledButtonPropsType>`
    //outlined
    background: transparent;
    border: 2px solid ${myTheme.colors.accentBright};
    color: ${myTheme.colors.accentBright};
    transition: background-color .2s linear, color .2s linear;

    &:hover {
      background-color: ${myTheme.colors.accentBright};
      border: 2px solid ${myTheme.colors.accentBright};
      outline-width: 0;
    }
  `}

  ${props => props.btnType === "primary" && css<StyledButtonPropsType>`
    //primary
    background-color: ${myTheme.colors.accentBright};
    border: 2px solid ${myTheme.colors.accentBright};

    transition: background-color .2s linear, color .2s linear;

    &:hover {
      color: ${myTheme.colors.accentBright};
      border: 2px solid ${myTheme.colors.accentBright};
      outline-width: 0;
    }
  `}
`
