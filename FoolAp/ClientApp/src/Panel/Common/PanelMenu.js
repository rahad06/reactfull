import React from 'react';
import {Link} from "react-router-dom";

function PanelMenu(props) {
    return (
        <nav className="sidebar sidebar-offcanvas vh-100 sidebar-menu-wrapper" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-category">
                    Welcome
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="mdi mdi-grid-large menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item nav-category">UI Elements</li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="true"
                       aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-floor-plan"></i>
                        <span className="menu-title">UI Elements</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse show" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                             <Link to="/panel/home">
                                    Home
                             </Link>
                            </li>
                            <li className="nav-item">
                             <Link to="/panel/About">
                                    About
                             </Link>
                            </li>
                            <li className="nav-item">
                             <Link to="/panel/Contact">
                                    Contact
                             </Link>
                            </li>
                           
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/panel/about" className="nav-link">
                        <i className="menu-icon mdi mdi-floor-plan"></i>
                        <span className="menu-title">
                        Settings
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/panel/contact" className="nav-link">
                        <i className="menu-icon mdi mdi-floor-plan"></i>
                        <span className="menu-title">
                        Languages
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default PanelMenu;
