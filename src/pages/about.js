import React from 'react'
import styled from "styled-components"

import { GlobalStyle, Colors } from '../components/style-utils'
import Header from '../components/header'


const Content  = styled.div`
  height: calc(100vh - 100px);
  width: 100vw;
  background: white;
`;


const IndexPage = () => (
  <div>
    <GlobalStyle/>
    <Header/>
    <Content>
      
    </Content>
    
  </div>
)

export default IndexPage
