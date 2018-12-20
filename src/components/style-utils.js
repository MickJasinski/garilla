import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900'); 
    body {
        margin: 0;
        font-family: 'Lato';
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
`; 

export const colors = {
    black: "#00000",
    red: "#9f1118",
    redG: "linear-gradient(90deg,#9f1118 0,#ce1a24 50%,#9f1118)",
    gray: "#6f7071",
    darkGrey: "#212529",
}

export const H1 = styled.h1`
    font-family: inherit;
    font-size: ${({big}) => big ? '4.1rem' : '3rem'};
    font-weight: 500;
    color: ${({gray}) => gray ? "#6f7071" : "white"};
`;

export const H2 = styled(H1)`
    font-size: 2.6rem;
`;

export const HP = styled(H1)`
    font-size: 1.9rem;
    font-weight: 100;
    line-height: 2.75rem;
`;

export const Textbox = styled.div`
    width: 100%;
    max-width: 775px;
    margin: 0 auto;
    text-align: center;
`;
