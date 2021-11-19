import React, { useState } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
import Testi from '../home/components/TestimonialCard/Testi';
import Card from './components/TestimonialCard/Card';

const StyledTestimonials = styled.section`
    background-color: #000;
    min-height: 100vh; width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    flex-direction: column;
    background-image:url('../images/bg1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
    } 
`;
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

const Heading = styled.div``

const Projects = () => {
    const [modal, setmodal] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <StyledTestimonials>
            <Heading >
                <T>Our</T>
                <H>Projects</H>
                {/* <H>OUR UNIVERSE</H> */}
            </Heading>
            <Card onClick={() => { setmodal(true) }}></Card>
            {modal &&

                <Modal isOpen={modal}
                    onRequestClose={() => setmodal(false)}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <button onClick={() => setmodal(false)}>close</button>
                </Modal>

            }
        </StyledTestimonials>
    )
}

export default Projects
