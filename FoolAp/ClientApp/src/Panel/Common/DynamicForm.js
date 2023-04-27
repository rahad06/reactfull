import React, {useEffect, useState} from 'react';
import * as PropTypes from "prop-types";
import DynamicFormInput from "./DynamicFormInput";



const DynamicForm = (props) => {
    const [inputType, setInputType] = useState('text');
    useEffect(() => {
        console.log(props);
        setInputType(props.inputType)
    }, [props])
    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

  

    return (
        <div key={props.key}>
            <DynamicFormInput inputType={inputType} handleTypeChange={handleTypeChange} />
        </div>
    );
};

export default DynamicForm;
