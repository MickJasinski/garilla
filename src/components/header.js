import React from 'react';
import { Link } from 'gatsby'
import styled from "styled-components"

import logo from '../images/logo.png'
import fb from '../images/facebook.svg'

// Styled components
const HeaderWrap = styled.div`
    width: 100%;
    height: 100px;
    background: black;
`;

const Logo = styled.img`
    position: absolute;
    right: 0;
`;

const Menu = styled.div`
    height: 100px;
    width: 300px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: left;
    width: 100%;
    padding-inline-start: 20px;
    list-style: none;
`;

const MenuLink  = styled(Link)`
    color: white;
    font-size: 1.4rem;
    text-decoration: none;
    padding: 10px 20px;
`;

const Fb = styled.img`
    width: 40px;
`;

const Header = () => (
    <HeaderWrap>
        <Menu>
            <a href="https://www.facebook.com/garillauk/" target="blank"><Fb src={fb} alt="Facebook Link"/></a>
            <MenuList>
                <li><MenuLink to="/">Home</MenuLink></li>
                <li><MenuLink to="about">About</MenuLink></li>
            </MenuList>
        </Menu>
        <Logo src={logo} alt="Garilla Logo"/>
    </HeaderWrap>
);

export default Header;