import React from 'react';
import {Link} from "react-router-dom";

function TableEl(props) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Basic Table</h4>
                    <p className="card-description">
                        Add class <code>.table</code>
                    </p>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Profile</th>
                                <th>VatNo.</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to="/panel/about">About</Link>
                                </td>
                                <td>53275531</td>
                               
                            </tr>
                            <tr>
                                <td>                                   
                                    <Link to="/panel/contact">Contact</Link>
                                </td>
                                <td>53275532</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/panel/blog">Blog</Link>
                                </td>
                                <td>53275533</td>
                            </tr>
                          
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableEl;
