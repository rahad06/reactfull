import React from 'react';
import {Link} from "react-router-dom";

function GridNav(props) {
    let products = ['Living Room', 'Kitten', 'Bathroom', 'BedRoom']
    return (
        <div className="bg-tert port-nav">
            <ol>
            {products.map((product, id) =>(
                <li key={id}>
                    <span><Link to="/">{product}</Link></span>
                </li>
            ))}
            </ol>
        </div>
    );
}

export default GridNav;
