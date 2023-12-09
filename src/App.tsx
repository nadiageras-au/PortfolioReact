import './App.css';
import styled from 'styled-components';
import {Header} from "./layouts/header/Header";
import {Sidebar} from "./layouts/sidebar/Sidebar";
import React from "react";
import {ContentBox} from "./layouts/content/ContentBox";


type AppPropsTypes = {
    id?: string
}

function App(props: AppPropsTypes) {
    return (
        <StyledApp className="App" id={"home"}>
            <Sidebar/>
            <ContentBox/>
        </StyledApp>
    );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  overflow: hidden;`
export default App;

