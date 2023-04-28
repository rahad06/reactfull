import React from 'react';
import {Link} from "react-router-dom";

function SimpleCard(props) {
    return (
        <div className="card p-3">
            <Link to="/">
                {props.name}
                <p>{props.count}</p>
            </Link>
        </div>
    );
}

export default SimpleCard;
