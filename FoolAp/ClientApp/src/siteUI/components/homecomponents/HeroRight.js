import React from 'react';
import HeroTopLeft from '../../images/2.png';
import Three from '../../images/3.png';
import Four from '../../images/4.png';
function HeroRight(props) {
    return (
        <div className={`hero-right-holder`}>
            <div className="hero-right-grid">
                <div className="hero-right-bg position-relative">
                    <div className="bg-blue"></div>
                    <div className="d-flex align-items-end hero-top-right-flex">
                        <div className="hero-img-right-top-left">
                            <img src={HeroTopLeft} alt=""/>
                        </div>
                        <div className="hero-img-right-top-right">
                            <img src={Three} alt=""/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="hero-img-right-bottom">
                            <img src={Four} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroRight;
