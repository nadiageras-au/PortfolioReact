import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type StyledButtonPropsType = {
    sort?: string
}
export const StyledButton = styled.button`
  //display: block;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 40px;

  border-radius: 4px;
  outline: none;
  border-color: red;

  font-family: ${myTheme.fonts.TiltNeon};
  text-transform: uppercase;
  color: #da3689;
  line-height: 1;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  transition: border .3s linear;

  &:hover {
    border-color: #ffffff;
  }
`
