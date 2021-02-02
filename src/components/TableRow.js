import React from 'react';

const TableRow = ({ userName, handleEdit, handleDelete }) => {
  return (
    <React.Fragment key={userName.id}>
      <tr>
        <td>{userName.id}</td>
        <td>{userName.firstName}</td>
        <td>{userName.lastName}</td>
        <td>{userName.email}</td>
        <td>{userName.contact}</td>
        <td>
          <span className="edit-button-container">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                handleEdit(userName.id);
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
                handleDelete(userName.id);
              }}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </span>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default TableRow;
