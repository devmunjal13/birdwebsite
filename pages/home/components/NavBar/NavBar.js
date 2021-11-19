import React,{useState, useEffect, useRef } from 'react'
// import './NavBar.css';
// import logo from '../../components/images/logo/logo.png';
// import mlogo from '../../components/images/logo/logo.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import BtnImg from './button.svg'
import { Burger, Menu } from '../components';
import FocusLock from 'react-focus-lock';
import { Link, animateScroll as scroll } from "react-scroll";


const H = styled.h1`
  margin-left: 1rem;
  font-size: 3rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`
const Link1 = styled(Link)`
    display: flex;
    margin: 0 2rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    width: 13rem;
`;

const Link2 = styled(Link)`
    display: flex;
    margin: 0 3rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    @media only screen and (max-width: 1025px) {
      margin: 0 ;
 }
    @media only screen and (max-width: 768px) {
         margin: 0 1rem;
    }
`;

const Button = styled(motion.div)`
    cursor: pointer;
    height: 3.5rem ;
    padding: 0 2rem;
    color: #E5E5E5;
    font-weight: bold;
    display: grid;
    place-items: center;
    border-radius: 1.4rem; 
    background: linear-gradient(to right, #bc4e9c, #f80759);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: none;
    @media only screen and (max-width: 768px) {
      width: 6rem;
    }
    
`;

const Mobile = styled.div`
    display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }`

const PC = styled.div`
  display: block;
@media only screen and (max-width: 768px) {
  display: none;
}`

const Li = styled(motion.li)``


const NavBar = () => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })  

    return (
        <nav className={navbar ? "navActive" : "nav"} >
          <PC>
            <Link1 to="home" spy={true} smooth={true}  ><img  
              src="../images/logo/logo.png"
              
            alt="Logo" className= "Logo" style={{width:"100%",height:"100%"}}/></Link1>
          </PC>
          <Mobile>
            <Link1 to="home" spy={true} smooth={true}  style={{marginRight:"0"}}  ><img src="../images/logo/logo.png" alt="mlogo" className="LogoB"/></Link1>
          </Mobile>
          <PC>
            <ul className="list">
              <Link2 to="home" spy={true} smooth={true} ><Li>Services</Li></Link2>
              <Link2 to="intellect" spy={true} smooth={true}  ><Li>About</Li></Link2>
              <Link2 to="roadmap" spy={true} smooth={true}><Li>Career</Li></Link2> 
                
              <Button 
                whileHover={{ scale: 1.1,boxShadow:"0 0 15px rgb(250, 0, 117)"}}
                whileTap={{ scale: 0.7 }}
                style={{marginRight:"2rem"}}
              >
                Telegram
              </Button>

              <Button 
                whileHover={{ scale: 1.1,boxShadow:"0 0 15px rgb(250, 0, 117)"}}
                whileTap={{ scale: 0.7 }}
              >
                Whatsapp
              </Button>
                
            </ul> 
          </PC>
          {/* <Mobile>
            <Button 
               style={{margin:"1.5rem 6rem 0 0"}}
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.7 }}
            >
              <img src={BtnImg} alt=""/>
            </Button>
          </Mobile> */}
          <Mobile ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </Mobile>
         
          </nav>   
    )
}

export default NavBar
