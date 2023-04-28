import React from "react";

export default function DynamicFormInput({ type, label, ofr, ...rest }) {
    switch (type) {
        case "text":
        case "email":
        case "password":
        case "number":
        case "date":
            return (
                <div>
                    <label htmlFor={ofr}>{label}</label>
                    <input type={type} id={ofr} />
                </div>
            );
        case "textarea":
            return (
                <div>
                    <label>{label}</label>
                    <textarea />
                </div>
            );
        // case "select":
        //     const { options, ...selectProps } = rest;
        //     return (
        //         <div>
        //             <label>{label}</label>
        //             <select {...selectProps}>
        //                 {options.map((option) => (
        //                     <option key={option.value} value={option.value}>
        //                         {option.label}
        //                     </option>
        //                 ))}
        //             </select>
        //         </div>
        //     );
        case "file":
            return (
                <div>
                    <label>{label}</label>
                    <input type="file" />
                </div>
            );
        default:
            return null;
    }
}
