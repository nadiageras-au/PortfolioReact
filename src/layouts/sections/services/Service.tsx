import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";

type ServiceItemPropsType = {
    src:string
}
export const ServiceItem = (props: ServiceItemPropsType) => {
    return (
        <StyledServiceItem src={props.src}>
        <ServiceTitle>Web Design</ServiceTitle>
            <ServiceText>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congueonsectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</ServiceText>


        </StyledServiceItem>
    );
};

const StyledServiceItem = styled.div<ServiceItemPropsType>`
  border: 3px solid dodgerblue;
  border-radius: 2px;
  background-image: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  height: 300px;
  width: 550px;
`

const ServiceTitle = styled.h3`
font-size: 26px;
  color: lawngreen;
`

const ServiceText = styled.p`
  font-size: 16px;
  color: #a9a900;
`
