import React from 'react'
import styled from "styled-components"

//////// Components
import { GlobalStyle, colors, Textbox, H1, H2, HP } from '../components/style-utils'
import Header from '../components/header'
import Footer from '../components/footer'

/////// Images
import garilla from '../images/garilla-big.png'

//////// Styled components
const Hero  = styled.div`
  width: 100vw;
  background: ${colors.redG};
  padding: 80px 20px;
`;

const Garilla = styled.img`
  display: block;
  width: 443px;
  margin: 0 auto;

  @media (max-width:483px) {
    width: 100%;
  }
`;


const IndexPage = () => (
  <div>
    <GlobalStyle/>
    <Header/>
    <Hero>
      <Garilla src={garilla} alt="Garilla"/>
      <Textbox>
        <H1>
        Garilla is your local and dependable creative agency service — but at freelancer prices.
        </H1>
        <HP space>
        We take on your super-urgent, stressful or laborious design and artwork jobs where a low price is the over-riding factor but you still need a decent and reliable agency service.
        </HP>
        <H2>
        With us, you get the best of both worlds.
        </H2>
      </Textbox>
      
    </Hero>
    <Footer/>
    
  </div>
)

export default IndexPage
