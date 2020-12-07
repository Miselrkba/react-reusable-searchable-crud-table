import React, { useEffect, useState } from "react";
import { data } from "../data/userData";
import { createId } from "../helpers/helpers";

const Table = () => {
  const initialFormState = {
    id: "",
    firstName: "",
    lastName: "",
    contact: "",
  };
  const [tableData, setTableData] = useState(data);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(initialFormState);
  const [id, setId] = useState(createId());
  const [searchInput, setSearchInput] = useState("");
  const [newTableData, setNewTableData] = useState([...tableData]);

  //we need to copy latest userData object and setTabledata to it
  //then we need to display old latest object

  //2.now we need to filter through the latest data object object
  //3.and setTabledata to the newTableData object to render latest values

  //we re filtering copied tableData and setting oldTableData back to the results
  //then we're setting oldTabledata(that is being rendered) back to newTableData
  //which is updated with the latest users

  //after searching it puts back the original value so deleted values
  //are not showing up

  //i delete something from old table data which i want
  //but then it gets rendered back on again by generate headers which maps
  //old tableData which I want and Search reverts it to newTableData
  // which is not right
  // when search is at 0 it updates tabledata back to original value
  //instead of updated one

  useEffect(() => {
    if (searchInput.length >= 1) {
      const searchResults = [...newTableData].filter((user) => {
        return (
          user.firstName.toLowerCase().includes(searchInput) ||
          user.lastName.toLowerCase().includes(searchInput)
        );
      });
      setTableData(searchResults);
    } else {
      setTableData([...newTableData]);
    }
  }, [searchInput, newTableData]);

  const headers = [
    "Employee Code",
    "First Name",
    "Last Name",
    "Contact",
    "Actions",
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

  //add new user to object - and render this new object
  //copy tableData and add new user to it
  //also set newTableData to be able to get latest values
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
    setNewTableData([...tableData, newUser]);
    setUser(initialFormState);
    setEdit(false);
    setId(createId());
  };

  console.log(edit);
  //situation - when editing ids are being changed
  //task - keep the same Id when editing
  //action -
  //result -

  const handleEdit = (id) => {
    setEdit(true);
    setTableData(newTableData.filter((item) => item.id !== id));
    setUser(newTableData.find((item) => item.id === id));
  };

  //its deleting out of the old tableData
  //it needs to delete from new tableData
  //if item is deleted we need to update old tableData
  const handleDelete = (id) => {
    if (edit) {
      return;
    }
    setNewTableData(tableData.filter((item) => item.id !== id));
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // useEffect(() => {

  // }, [searchInput]);

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
