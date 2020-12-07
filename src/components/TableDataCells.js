import React from "react";

const TableDataCells = ({ tableData, handleEdit, handleDelete }) => {
  const generateData = tableData.map((data) => (
    <React.Fragment key={data.id}>
      <tr>
        <td>{data.id}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.email}</td>
        <td>{data.contact}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => handleEdit(data.id)}
          >
            <i className="fas fa-user-edit"></i>
            {/* edit */}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(data.id)}
          >
            <i className="fas fa-trash-alt"></i>
            {/* delete */}
          </button>
        </td>
      </tr>
    </React.Fragment>
  ));

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
