import React from 'react'
import { createGlobalStyle } from 'styled-components'
// import { Link } from 'gatsby'

import Header from '../components/header'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,900'); 
  body {
    margin: 0;
    font-family: 'Montserrat';
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`; 


const IndexPage = () => (
  <div>
    <GlobalStyle/>
    <Header/>
    
  </div>
)

export default IndexPage
