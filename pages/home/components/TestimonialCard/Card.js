import React from 'react'
import styled from 'styled-components'

const StyledTesti = styled.div`
    width: 20rem;
    height: 20rem;
    // padding:1rem;
    border-radius:12px;
    background-color: rgba(255, 255, 255, 0.08);
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
    -webkit-box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
            box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
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
    margin:auto;
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

const Image = styled.div`
    //   width: 5rem;
      height: 8rem;
      display:block;
      margin:auto;

`

const Card = (props) => {
    return (
        <StyledTesti onClick={() => { props?.onClick() || console.log("hii"); }}>

            <Image>
                <img src={`${props.link ? props.link : "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"}`} alt="mlogo" style={{ height: "100%", width: "100%", borderRadius: "12px 12px 0px 0px" }} />
            </Image>
            <div style={{ padding: "1rem" }}>
                <H>{`${props.name ? props.name : "DOT"}`} </H>

                <T>{`${props.desc ? props.desc : "A paragraph is a series of sentences that are organized and coherent"}`} </T>
            </div>
            {/* <H>{`${props.name ? props.name : "DOT"}`} </H>

            <T>{`${props.desc ? props.desc : "A paragraph is a series of sentences that are organized and coherent"}`} </T> */}
        </StyledTesti>
    )
}

export default Card
