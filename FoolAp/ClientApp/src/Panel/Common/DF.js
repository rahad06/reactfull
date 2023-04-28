import React, {useEffect, useState} from 'react';
import {Col, Input, Row} from "reactstrap";


let inputEl;

function Index(props) {

    const [inputs, setInputs] =useState(props.inputTypes)

    return (
        <>
            <div className="mt-5 px-3 w-100">
                <Row className=" align-items-center justify-content-center">
                    <Col md={8}>
                        <div className="card p-3">
                            <form>
                                {inputs.map((d, i) => {
                                    switch (d.type) {
                                        case "text":
                                        case "email":
                                        case "password":
                                        case "number":
                                        case "date":
                                            return (
                                                <div key={i} className={`form-group`}>
                                                    <label htmlFor={d.htmlFor}>{d.label}</label>
                                                    <input type={d.type} id={d.htmlFor} className={`form-control`}/>
                                                </div>
                                            );
                                        case "textarea":
                                            return (
                                                <div key={i} className={`form-group`}>
                                                    <label>{d.label}</label>
                                                    <textarea className={`form-control`}/>
                                                </div>
                                            );
                                        // case "select":
                                        //     const { options, ...selectProps } = rest;
                                        //     inputEl = (
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
                                        //     break;
                                        case "file":
                                            return (
                                                <div key={i} className={`form-group`}>
                                                    <label>{d.label}</label>
                                                    <input type="file" className={`form-control`}/>
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                                <div className={`d-flex align-items-cneter justify-content-end`}>
                                <button type="button" className={`btn btn-primary btn-success`}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row></div>

        </>
    );
}

export default Index;
