import React from 'react';
import {SectionTitle} from "../../../components/headings/SectionTitle.styled";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {ServiceItem} from "./Service";
import {Container} from "../../../components/container/Container";


export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle>
                    Services
                </SectionTitle>
                <Slider/>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
  width: 100%;
`

