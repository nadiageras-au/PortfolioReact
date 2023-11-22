import React from 'react';
import styled from "styled-components";
import {ServiceItem} from "../../layouts/sections/services/Service";
import imgServ from "../../../src/assets/img/projects/proj2.jpeg"

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <ServiceItem src={imgServ}/>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 1px solid hotpink;
  max-width: 550px;
`
const Slide = styled.div`
text-align: center;`
const Text = styled.div``
const Name = styled.div``
