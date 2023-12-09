import React from 'react';
import {Testimonial} from "./Testimonial";
import {SectionTitle} from "../../../components/titles/SectionTitle.styled";
import {Container} from "../../../components/container/Container";

export const Testimonials = () => {
    return (
        <div>
            <Container>
                <SectionTitle>
                    What Clients Say
                </SectionTitle>
                <Testimonial/>

            </Container>

        </div>
    );
};

