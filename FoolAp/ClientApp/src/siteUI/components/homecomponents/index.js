import React from 'react';
import {Container} from "reactstrap";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HomeAbout from "./HomeAbout";
import HomePortfolio from "./HomePortfolio";

function Index(props) {
    return (
        <>
        <div className="gry-bg hero-gray">
            <div className="d-grid her-grid-outer">
                <div className="hero-left">
                    <HeroLeft/>
                </div>
                <div className="hero-right">
                    <HeroRight/>
                </div>
            </div>
        </div>
            <div className="bg-white">
                <HomeAbout/>
            </div>
            <div>
                <div className="home-portfolio">
                    <HomePortfolio/>
                </div>
            </div>
        </>
    );
}

export default Index;
