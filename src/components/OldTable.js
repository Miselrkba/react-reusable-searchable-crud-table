import React, { useEffect, useLayoutEffect, useState } from "react";
import employ from "../employ.json";
import { createId } from "../helpers/helpers";

const Table = () => {
  const initialFormState = {
    id: createId(),
    firstName: "",
    lastName: "",
    contact: "",
  };

  const [tableData, setTableData] = useState(employ.data);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(initialFormState);
  const [id, setId] = useState(createId());
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let tableData = [...employ.data];
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
    "contact",
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
      contact: user.contact,
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

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  useLayoutEffect

  useEffect(() => {
    if (searchInput) {
      const searchResults = tableData.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(searchInput) ||
          user.lastName.toLowerCase().includes(searchInput)
        );
      });
      setTableData(searchResults);
    }
    else setTableData(tableData)
  }, [searchInput]);

  //when returning from search need to check updated data

  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search..."
        value={searchInput}
      />
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
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
        />
        <input
          type="text"
          placeholder="Contact"
          name="contact"
          onChange={handleChange}
          value={user.contact}
        />
        <button>{edit ? "Edit" : "Add"}</button>
      </form>
      <table className="table table-dark table-hover">
        <thead>
          <tr>{generateHeaders}</tr>
        </thead>
        <tbody>
          {tableData.length < 1 ? (
            <tr>
              <td>No users</td>
            </tr>
          ) : (
            generateData
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
