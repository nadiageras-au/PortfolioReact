import React from 'react';
import styled from "styled-components";

export const Testimonial = () => {
    return (
        <StyledTestimonial>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem dolorem eos esse nobis quae
                quisquam vitae! Accusamus dicta dolor neque nobis totam veniam voluptates? Alias eligendi possimus
                repellat temporibus.</p>
            <span>Client Name</span>
        </StyledTestimonial>
    );
};

const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 650px;
  

`
