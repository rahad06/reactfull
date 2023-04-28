import React, {useState} from 'react';
import {Container} from "reactstrap";
import Logo from "./Logo";
import {Link} from "react-router-dom";

function TopMenuBar(props) {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <Container>
        <div className={`d-flex align-items-center justify-content-between p-2 top-menu`}>
            <div className="logo-holder">
                <Logo/>
            </div>
            <div className="menu-holder d-flex align-items-cneter justify-content-end ">
                <ol className={`d-flex align-items-center justify-content-center px-2 ${showMenu ? "show-menu" : "w-0"}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                </ol>
                <i className="ri-menu-line" onClick={e => setShowMenu(!showMenu)}></i>
            </div>
        </div>
        </Container>
    );
}

export default TopMenuBar;
