import React from 'react'
import styled from "styled-components"
// import { Link } from 'gatsby'

import { GlobalStyle, Colors } from '../components/style-utils'
import Header from '../components/header'


const Hero  = styled.div`
  height: calc(100vh - 100px);
  width: 100vw;
  background: ${Colors.redG};
`;


const IndexPage = () => (
  <div>
    <GlobalStyle/>
    <Header/>
    <Hero>
      
    </Hero>
    
  </div>
)

export default IndexPage
