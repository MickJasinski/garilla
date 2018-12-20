import React from 'react';
import styled from "styled-components"

import { colors, Textbox, H1 } from '../components/style-utils'

import phone from "../images/lower_icon_phone.png"
import email from "../images/lower_icon_email.png"

//////// Styled components
const FooterWrap = styled.div`
    padding: 80px 20px;
    background: ${colors.darkGrey};
`;

const Icons = styled.div`
    display: block;
    width: 360px;
    margin: 40px auto;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 20px;
`;

const Icon = styled.img`
    margin-right: 30px;
`;

export const H1contact = styled(H1)`
    font-size: 2rem;
    position: relative;
    top: -4px;
`;

const Footer = () => (
    <FooterWrap>
        <Textbox>
            <H1 big>GET YOUR JOB BOOKED<br/>NOW, IT'S EASY!</H1>
            <Icons>
                <Item>
                    <Icon src={phone} alt=""/>
                    <H1contact>01908 046 896</H1contact>
                </Item>
                <Item>
                    <Icon src={email} alt=""/>
                    <H1contact>sales@garilla.co.uk</H1contact>
                </Item>
            </Icons>
        </Textbox>
    </FooterWrap>
);

export default Footer