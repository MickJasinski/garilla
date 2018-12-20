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
    width: 500px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const MenuLink  = styled(Link)`
    color: white;
    text-decoration: none;
    display: 
`;

const Fb = styled.img`
    width: 40px;
`;

const Header = () => (
    <HeaderWrap>
        <Menu>
            <Fb src={fb} alt="Facebook Link"/>
            <MenuList>
                <li><MenuLink to="/">Home</MenuLink></li>
                <li><MenuLink to="about">About</MenuLink></li>
            </MenuList>
        </Menu>
        <Logo src={logo} alt="Garilla Logo"/>
    </HeaderWrap>
);

export default Header;