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
                                {props.data?.map((d, i) => (
                                    <th key={i}>{d.title}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {props.data?.map((b, i) => (
                                <tr key={i} className={`${props.isFullWidth ? "w-100" : ""}`}>
                                    <td>{b.title}</td>
                                    <td>{b.id}</td>
                                    <td>
                                        {props.isEditable ? (
                                        <button onClick={e => props.handleEdit(e)} className="btn mx-1 text-success">
                                            <i className="ri-edit-line"></i>
                                        </button>
                                        ) : null}
                                        {props.isDeletable ? (
                                        <button onClick={e => props.handleDelete(e)} className="btn text-danger">
                                            <i className="ri-delete-bin-3-line"></i>
                                        </button>

                                        ) : null}
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