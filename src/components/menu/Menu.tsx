import React from 'react';
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="#">{item}</a>
                    </li>

                })}

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    gap: 25px;
    color: white;

    li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`

