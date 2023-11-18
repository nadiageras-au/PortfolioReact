import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    flex?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "wrap"};
  gap: ${props => props.gap || "15px"};
  flex: ${props => props.flex || "auto"};
`
