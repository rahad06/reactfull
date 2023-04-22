import React from 'react';

function TableWProps(props) {
    return (
        <>
            <div className="card">
                <div className="card-body"><h4 className="card-title">Basic Table</h4><p
                    className="card-description">Add class <code>.table</code></p>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Profile</th>
                                <th>VatNo.</th>
                                <th>Created</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.blog?.map((b,i) => (
                            <tr key={i}>
                                <td>{b.title}</td>
                                <td>{b.id}</td>
                                <td>15 May 2017</td>
                                <td><label className="badge badge-warning">In progress</label></td>
                            </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableWProps;