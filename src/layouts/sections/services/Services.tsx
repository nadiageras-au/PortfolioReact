import React from 'react';
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {ServiceItem} from "./Service";


export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle>
                Services
            </SectionTitle>
            <Slider/>
        </StyledServices>
    );
};

const StyledServices = styled.section`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
`

