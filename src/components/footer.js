import React from 'react';
import styled from "styled-components"

import { colors, Textbox, H1 } from '../components/style-utils'

//////// Styled components
const FooterWrap = styled.div`
    padding: 80px 20px;
    background: ${colors.darkGrey};
`;


const Footer = () => (
    <FooterWrap>
        <Textbox>
            <H1 big>GET YOUR JOB BOOKED<br/>NOW, IT'S EASY!</H1>
        </Textbox>
    </FooterWrap>
);

export default Footer