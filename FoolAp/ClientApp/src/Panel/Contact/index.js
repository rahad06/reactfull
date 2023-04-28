
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicForm from "../Common/DynamicForm";
import DF from "../Common/DF";


let inputTypes = [
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