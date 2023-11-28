import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled";

export const GlobalStyle = createGlobalStyle`

  /* CSS */
  //@import url(https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css);

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Fira Code', monospace, 'Tilt Neon', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${myTheme.colors.fontColor};
  }

  a {
    text-decoration: none;
    color: ${myTheme.colors.accentOne};
    
    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  li,
  ol {
    list-style: none;
  }

  h2 {
    font-family: ${myTheme.fonts.FiraCode};
    color: ${myTheme.colors.accentTwo};
    text-shadow: 0px 0px 8px rgba(247, 255, 209, 0.6);
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  h3 {
    color: ${myTheme.colors.accentTwo};
    text-shadow: 0px 0px 8px #A2A2A2;
    font-family: ${myTheme.fonts.FiraCode};
    font-size: 26px;
    font-weight: 400;
  }

  h4 {
    font-family: ${myTheme.fonts.TiltNeon};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    text-transform: capitalize;
  }

  h5 {
    font-family: ${myTheme.fonts.FiraCode};
    font-size: 18px;
    font-weight: 400;
  }

  //@supports (font-variation-settings: normal) {
  //  code { font-family: 'Fira Code VF', monospace; }
  //}

`