import React from 'react';

const TableRow = ({
  userName,
  handleEdit,
  handleDelete,
  isEditUserModeActive,
}) => {
  const tableRowEdit = () => {
    handleEdit(userName.id);
  };
  const tableRowDelete = () => {
    handleDelete(userName.id);
  };

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
              disabled={isEditUserModeActive}
              onClick={tableRowEdit}
            >
              <i className="fas fa-user-edit" />
            </button>
          </span>
          <span className="delete-button-container">
            <button
              type="button"
              className="btn btn-danger"
              disabled={isEditUserModeActive}
              onClick={tableRowDelete}
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
