import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../button/Button.styled";

export const ContactForm = () => {
    return (
        <StyledForm>
            <Field placeholder={"name"}/>
            <Field placeholder={"email"}/>
            <Field placeholder={"subject"}/>
            <Field placeholder={"message"} as={"textarea"}/>
            <StyledButton>Send message</StyledButton>
        </StyledForm>
    );
};

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const Field = styled.input`
  width: 100%;
  height: auto;
  padding-left: 10px;
`

// const StyledForm = styled.form`
//
// `


