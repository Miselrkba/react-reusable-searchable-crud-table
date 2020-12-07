import React from "react";

const TableDataCells = ({tableData, handleEdit, handleDelete}) => {
  const generateData = tableData.map((data) => (
    <React.Fragment key={data.id}>
      <tr>
        <td>{data.id}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.email}</td>
        <td>{data.contact}</td>
        <td>
          <a href="/#" onClick={() => handleEdit(data.id)}>
            edit
          </a>
          <br />
          <a href="/#" onClick={() => handleDelete(data.id)}>
            delete
          </a>
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
