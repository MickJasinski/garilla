import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:400,900'); 
    body {
        margin: 0;
        font-family: 'Lato';
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
`; 

export const Colors = {
    black: "#00000",
    red: "#9f1118",
    redG: "linear-gradient(90deg,#9f1118 0,#ce1a24 50%,#9f1118)",
}

