import React from "react";

export default function DynamicFormInput({ type, label, ...rest }) {
    switch (type) {
        case "text":
        case "email":
        case "password":
        case "number":
        case "date":
            return (
                <div>
                    <label>{label}</label>
                    <input type={type} {...rest} />
                </div>
            );
        case "textarea":
            return (
                <div>
                    <label>{label}</label>
                    <textarea {...rest} />
                </div>
            );
        case "select":
            const { options, ...selectProps } = rest;
            return (
                <div>
                    <label>{label}</label>
                    <select {...selectProps}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case "file":
            return (
                <div>
                    <label>{label}</label>
                    <input type="file" {...rest} />
                </div>
            );
        default:
            return null;
    }
}
