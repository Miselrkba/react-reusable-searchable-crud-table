import React from 'react';

const TableDataCells = ({ tableData, handleEdit, handleDelete }) => {
  const generateData = tableData.map((data) => {
    return (
      <React.Fragment key={data.id}>
        <tr>
          <td>{data.id}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
          <td>
            <span className="edit-button-container">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  handleEdit(data.id);
                }}
              >
                <i className="fas fa-user-edit" />
              </button>
            </span>
            <span className="delete-button-container">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  handleDelete(data.id);
                }}
              >
                <i className="fas fa-trash-alt" />
              </button>
            </span>
          </td>
        </tr>
      </React.Fragment>
    );
  });

  return (
    <tbody>
      {tableData.length < 1 ? (
        <tr>
          <td>No users</td>
        </tr>
      ) : (
        generateData
      )}
    </tbody>
  );
};

export default TableDataCells;
