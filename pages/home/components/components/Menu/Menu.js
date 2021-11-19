import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import styled from 'styled-components';
import logo from './navi_logo.svg';
// import twitter from '../../../page/Footer/twitter.svg'
// import opensea from '../../../page/Footer/opensea.svg'

const MenuItems = styled.div`
  display: grid;
  place-items: center;
  margin-top: 30%;
`

const Link1 = styled.a`
    display: flex;
    margin: 0 2rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    position: absolute;
    left: 2rem;
    top: -0.3rem;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 0;
    align-items: center;
`;

const Img = styled.img`
    width: 3rem;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
`;

const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 16px;
    margin-top: 1rem;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const H = styled.h1`

@font-face {
  font-family: myFirstFont;
  src: url(./inter.ttf);
}

    font-family: myFirstFont !important;
  
`;

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link1 href="#HOME" ><img src={logo} alt="Logo"/></Link1>

      <MenuItems>
        <a style={{padding:"0"}} href="/" >
           <H>Home</H> 
        </a>
        <a style={{padding:"0"}} href="/" >
          <H>Buy Intellects</H>
        </a>
        <a style={{padding:"0"}} href="/" >
          <H> Roadmap</H>
        </a>
        <a style={{padding:"0"}} href="/" >
         <H>Connect Wallet</H> 
        </a>
      </MenuItems>

      <Right>
        <Flex>
          {/* <Img src={twitter} alt="" />
          <Img src={opensea} alt="" /> */}
        </Flex>
        <T>Intellects NFT All Right Reserved.</T>
      </Right>

    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
