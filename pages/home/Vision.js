import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'

const StyledVision = styled.section`
    background-color: #000;
    min-height: 100vh; width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    flex-direction: row-reverse;
    @media only screen and (max-width: 1200px) {
        flex-direction: column-reverse;
    } 
`;

const T = styled.p`
    color: #E5E5E5;
    font-weight: light;
    font-size: 1.7rem;
    margin-bottom: 1rem;
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
    font-size: 2.5rem;
    font-weight: bold;
    
    font-family: 'Roboto', sans-serif !important;
    @media only screen and (max-width: 1600px) {
        font-size: 1.5rem;
      }
    @media only screen and (max-width: 1400px) {
        font-size: 1.2rem;
      }
    @media only screen and (max-width: 768px) {
    
        font-size: 1.2rem;
        font-weight: bold;
        
      }
`;

const Left = styled.div`
      cursor: grab;
      padding: 1rem 2rem 0 2rem;
      border-radius: 1rem;
      display: flex;
`

const Right = styled(Tilt)`
      height: 30rem; 
      width: auto;
      cursor: grab;
      @media only screen and (max-width: 1600px) {
        height: 25rem; 
      }
      @media only screen and (max-width: 1400px) {
        height: 20rem; 
      }
      @media only screen and (max-width: 1000px) {
        height: 15rem; 
      }
      @media only screen and (max-width: 786px) {
        height: auto; 
        width: 85%;
      }
`

const Divider = styled(motion.div)`
    height: 20rem; 
        width: 5rem;
        margin: 0 2rem;
      
`

const Vision = () => {
    return (
        <StyledVision>
            <Left>
                <div>
                    <H>Vision</H>
                    <T>a verse or passage of Scripture chosen</T>
                    <T>especially for the subject of a sermon or for </T>
                    <T>authoritative support (as for a doctrine)</T>
                </div>
                <Divider
                  initial={{ x: 0, y:0}}
                  animate={{ x: 0, y: -15 }}
                  transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",
                 
                  }}
                >
                    <img src="../images/divider.png" alt="mlogo" style={{height:"100%",width:"100%"}}/>
                </Divider>
                <div>
                    <H>Mission</H>
                    <T>a verse or passage of Scripture chosen</T>
                    <T>especially for the subject of a sermon or for </T>
                    <T>authoritative support (as for a doctrine)</T>
                </div>
            </Left>
            <Right>
                {/* <Image src={logo} alt=""  style={{width:"100%",height:"100%"}}/> */}
                <img src="../images/boy.gif" alt="mlogo" style={{height:"100%",width:"100%"}}/>
            </Right>
        </StyledVision>
    )
}

export default Vision
