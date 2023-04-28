import React from 'react';
import {Container, Row} from "reactstrap";

function HomeAbout(props) {
    return (
        <div className="bg-white about-container">
            <Container>
                <Row>
                    <div className="col-6">
                        <div className="index-about-left-outer">
                        <div className="index-main-about">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur cupiditate deleniti doloremque ducimus earum eius magni nam obcaecati, odit porro quae repellat sit tempore totam vel, veniam vitae, voluptatem?</p>
                            <button className="button-outline">Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-end justify-content-end">
                        <p className="home-main-about-text">
                            Please take a look at our <br/>portfolio and call or email <br/>to set up a consultation
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default HomeAbout;