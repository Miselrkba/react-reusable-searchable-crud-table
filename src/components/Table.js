import React, { useEffect, useState } from "react";
import employ from "../employ.json";
import { createId } from "../helpers/helpers";

const Table = () => {
  const initialFormState = {
    id: createId(),
    firstName: "",
    lastName: "",
  };

  const [tableData, setTableData] = useState(employ.data);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(initialFormState);
  const [id, setId] = useState(createId());

  useEffect(() => {
    let tableData = employ.data;
    setTableData(
      tableData.map((item) => {
        return {
          id: createId(),
          firstName: item.firstName,
          lastName: item.lastName,
          contact: item.contact,
        };
      })
    );
  }, []);

  const headers = [
    <input type="checkbox" />,
    "id",
    "firstName",
    "lastName",
    "numbers",
    "actions",
  ];

  const generateHeaders = headers.map((header) => (
    <th key={header}>
      <a href="/#" id={header}>
        {header}
      </a>
    </th>
  ));
  const generateData = tableData.map((data) => (
    <React.Fragment key={data.id}>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{data.id}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.numbers}</td>
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.firstName && !user.lastName) {
      return;
    }
    const newUser = {
      id: id,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    setTableData([...tableData, newUser]);
    setUser(initialFormState);
    setId(createId());
    setEdit(false);
  };

  const handleEdit = (id) => {
    setEdit(!edit);
    setTableData(tableData.filter((item) => item.id !== id));
    setUser(tableData.find((item) => item.id === id));
  };

  const handleDelete = (id) => {
    if (edit) {
      return;
    }
    setTableData(tableData.filter((item) => item.id !== id));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
        />
        <input
          type="text"
          placeholder="First name"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
        />
        <button>{edit ? "Edit" : "Add"}</button>
      </form>
      <table className="table table-dark table-hover">
        <thead>
          <tr>{generateHeaders}</tr>
        </thead>
        <tbody>{generateData}</tbody>
      </table>
    </div>
  );
};

export default Table;
