import React from 'react';

function TableWProps(props) {
    function handleEdit(e) {
        e.preventDefault();

    }

    function handleDelete(e) {
        e.preventDefault();

    }

    return (
        <>
            <div className="card">
                <div className="card-body"><h4 className="card-title">Basic Table</h4><p
                    className="card-description">Add class <code>.table</code></p>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                {props.data?.map((d, i) => (
                                    <th key={i}>{d.title}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {props.data?.map((b, i) => (
                                <tr key={i}>
                                    <td>{b.title}</td>
                                    <td>{b.id}</td>
                                    <td>
                                        <button onClick={e => handleEdit(e)} className="btn btn-primary">Edit</button>
                                        <button onClick={e => handleDelete(e)} className="btn btn-outline-danger">Delete
                                        </button>
                                    </td>
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