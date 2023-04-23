import React, { useState } from 'react';

const DynamicForm = () => {
    const [inputType, setInputType] = useState('text');

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

  

    return (
        <div>
            <label>
                Input Type:
                <select value={inputType} onChange={handleTypeChange}>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="password">Password</option>
                </select>
            </label>
            {renderInput()}
        </div>
    );
};

export default DynamicForm;
