import React, {useEffect, useState} from 'react';
import {Col, Input, Row} from "reactstrap";
import DF from "../Common/DF";

let inputTypes = [
    {
        label: 'Main Slider',
        type: 'file',
        htmlFor: 'MainSlider'
    },
    {
        label: 'Slider Title',
        type: 'text',
        htmlFor: 'SliderTitle'
    },
    {
        label: 'Slider SubTitle',
        type: 'text',
        htmlFor: 'SliderSubTitle'
    },
    {
        label: 'Slider Button Text',
        type: 'text',
        htmlFor: 'SliderButtonText'
    },
    {
        label: 'Slider Button Link',
        type: 'text',
        htmlFor: 'SliderButtonLink'
    },
    {
        label: 'About Image',
        type: 'file',
        htmlFor: 'AboutImg'
    },
    {
        label: 'About Title',
        type: 'text',
        htmlFor: 'AboutTitle'
    },
    {
        label: 'About SubTitle',
        type: 'text',
        htmlFor: 'AboutSubTitle'
    },
    {
        label: 'About Button Text',
        type: 'text',
        htmlFor: 'AboutButtonText'
    },
    
]
let inputEl;

function Index(props) {
  
    const [inputs, setInputs] =useState(inputTypes)
   
    return (
     <>
        <DF inputTypes={inputTypes}/>
         
     </>
    );
}

export default Index;
