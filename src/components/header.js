import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../components/style-utils'
import '../components/fb.css'

//////// Images
import logo from '../images/logo.png'
import fb from '../images/facebook.svg'
import garilla from '../images/garilla-big.png'

//////// Styled components
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

// facebook
const FbWrap = styled.div`
    position: relative;
`;

const black = {
    background: "black"
};

const FbBg = styled.div`
position: absolute;
display: block;
top: 0;
left: 0;
width: 40px;
height: 40px;
z-index: 10;
`;

const GarillaFb = styled.img`
display: block;
position: absolute;
top: 0;
left: 0;
width: 40px;
transition: .5s;
`;

const Fb = styled.img`
    position: relative;
    width: 40px;
    z-index: 100;
`;

const Fba = styled.a`
    ${GarillaFb}:hover & {
        top: -30px;
    }
`;

const Header = () => (
    <HeaderWrap>
        <Menu>
            <FbWrap>
                <Fba className="fbicon" href="https://www.facebook.com/garillauk/" target="blank"><Fb src={fb} alt="Facebook Link"/></Fba>
                <FbBg style={black}></FbBg>
                <GarillaFb className="garfb" src={garilla} alt="Garilla Logo"/>
            </FbWrap>
            <MenuList>
                <li><MenuLink to="/">Home</MenuLink></li>
                <li><MenuLink to="about">About</MenuLink></li>
            </MenuList>
        </Menu>
        <Logo src={logo} alt="Garilla Logo"/>
    </HeaderWrap>
);

export default Header