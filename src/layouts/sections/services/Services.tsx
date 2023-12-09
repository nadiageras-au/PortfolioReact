import React from 'react';
import {SectionTitle} from "../../../components/titles/SectionTitle.styled";
import styled from "styled-components";
import {ServiceItem} from "./Service";
import {Container} from "../../../components/container/Container";


export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle>
                    Services
                </SectionTitle>
                <GridWrapper>
                    <ServiceItem title={"Web Design"} bgColor={'rgba(0,0,0, 0.2)'} gridArea={'1 / 1 / 4 / 5'}/>
                    <ServiceItem title={"Web Development"} bgColor={'#141619'} gridArea={'3 / 4 / 6 / 8'}/>
                    <ServiceItem title={"WordPress Solution"} bgColor={'#08090a'} gridArea={'5 / 7 / 8 / 11'}/>
                </GridWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
  width: 100%;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

