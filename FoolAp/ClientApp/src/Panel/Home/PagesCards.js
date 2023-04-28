import React from 'react';
import {Link} from "react-router-dom";
import SimpleCard from "./SimpleCard";

function PagesCards(props) {
    return (
        <div className="d-flex align-items-center justify-content-between home-top-cards">
           <SimpleCard name="home" count={40}/>
           <SimpleCard name="home" count={40}/>
           <SimpleCard name="home" count={40}/>
           <SimpleCard name="home" count={40}/>
           <SimpleCard name="home" count={40}/>
        </div>
    );
}

export default PagesCards;
