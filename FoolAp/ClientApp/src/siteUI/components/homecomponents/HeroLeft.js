import React from 'react';
import HeroLeftImg from '../../images/1.png';
import {Container, Row} from "reactstrap";
function HeroLeft(props) {
    return (
        <Container>
            <Row> 
                <div className="col"></div>
                <div className="col-10">                
                    <div className={`d-flex align-items-end justify-content-center flex-column hero-left-flex`}>
            <div className="hero-left-img-holder text-right">
                <img src={HeroLeftImg} alt=""/>
            </div>
            <div className="hero-left-content">
                <h2>Welcome</h2>
                <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius excepturi exercitationem fugit illum in incidunt inventore, ipsam libero, maxime modi nihil non numquam, officia perspiciatis ratione sapiente ut voluptates.
                </p>
                <div>
                    <p>lorem fmekiosdfvc edmken </p>
                    <button>Learn More</button>
                </div>
                </div>
        </div>
                </div>
            </Row>
        </Container>
    );
}

export default HeroLeft;
