import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const StyledMainPage = styled.section`
    background-color: #000;
    min-height: 100vh; width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
    } 

`
const T = styled.p`
    color: #E5E5E5;
    font-weight: light;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    // text-align: center;
    font-family: 'Montserrat', sans-serif !important;
    @media only screen and (max-width: 1600px) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: 1400px) {
        font-size: 1.3rem;
      } 

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const H = styled.h1`
    color: #E5E5E5;
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif !important;
    margin: 0;
    @media only screen and (max-width: 1600px) {
        font-size: 3.5rem;
      }
    @media only screen and (max-width: 1400px) {
        font-size: 3rem;
      }
    @media only screen and (max-width: 768px) {
    
        font-size: 1.8rem;
        font-weight: bold;
        
      }
`;

const Left = styled(motion.div)`
      cursor: grab;
      padding: 1rem 2rem 0.5rem 2rem;
      border-radius: 1rem;
`

const Right = styled(Tilt)`
      height: 45rem; 
      width: auto;
      cursor: grab;
      @media only screen and (max-width: 1600px) {
        height: 35rem; 
      }
      @media only screen and (max-width: 1400px) {
        height: 30rem; 
      }
      @media only screen and (max-width: 1000px) {
        height: 25rem; 
      }
      @media only screen and (max-width: 786px) {
        height: auto; 
        width: 85%;
      }
`


const MainPage = () => {
    return (
        <StyledMainPage>
            <Left
                 whileHover={{ scale: 1.1,boxShadow:"0 0 25px rgb(250, 0, 117)"}}
                 whileTap={{ scale: 0.7 }}
            >
                <H>HOW WE WORK</H>
                <T>Bird Software solutions ensure complete </T>
                <T> perfection in undergoing all our projects.</T>
                <T>We deliver excellent projects by organizing</T>  
                <T>the work procedure into simple phases.</T> 
                
            </Left>
            <Right>
                {/* <Image src={logo} alt=""  style={{width:"100%",height:"100%"}}/> */}
                <img src="../images/bss.png" alt="mlogo" style={{height:"100%",width:"100%"}}/>
            </Right>
        </StyledMainPage>
    )
}

export default MainPage
