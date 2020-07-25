import styled, { createGlobalStyle } from "styled-components";

export const AppGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        display:flex;
        height: 100vh;
        
    }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
