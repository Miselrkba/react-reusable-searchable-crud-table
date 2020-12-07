import React, { useEffect, useState } from "react";
import { data } from "../data/userData";
import { createId } from "../helpers/helpers";
import AddUserForm from "./AddUserForm";
import Search from "./Search";
import TableDataCells from "./TableDataCells";
import TableHeaders from "./TableHeaders";

const Table = () => {
  const initialFormState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const [tableData, setTableData] = useState(data);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(initialFormState);
  const [id, setId] = useState(createId());
  const [searchInput, setSearchInput] = useState("");
  const [newTableData, setNewTableData] = useState([...tableData]);
  const [addNewUser, setAddNewUser] = useState(false);

  //Search functionality
  //if there is value in searchInput filter updated table
  //else display updated table
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

  //set search value to target value
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  //Adding new user functionality
  //set First Name and Last Name Email and Contact to target value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //after Submiting add new user to old tableData and newTabledata
  //copy tableData and add new user to it
  //also set newTableData to be able to get latest values
  //if editing use the current id of user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.firstName && !user.lastName) {
      return;
    }
    if (edit) {
      const newUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        contact: user.contact,
      };
      setTableData([...tableData, newUser]);
      setNewTableData([...tableData, newUser]);
      setUser(initialFormState);
      setEdit(false);
      setId(createId());
    } else {
      const newUser = {
        id: id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        contact: user.contact,
      };
      setTableData([...tableData, newUser]);
      setNewTableData([...tableData, newUser]);
      setUser(initialFormState);
      setEdit(false);
      setId(createId());
    }
  };

  //Editing functionality
  //set editing to true and filter updated table data to all users except selected user
  //find user to be edited and set input value to this user
  const handleEdit = (id) => {
    setEdit(true);
    setTableData(newTableData.filter((item) => item.id !== id));
    setUser(newTableData.find((item) => item.id === id));
  };

  //Delete user functionality
  //if a user is being edited switch off delete funtionality
  //filter all users that are not being deleted
  const handleDelete = (id) => {
    if (edit) {
      return;
    }
    setNewTableData(tableData.filter((item) => item.id !== id));
  };

  return (
    <div className='main-table-container'>
      <h1>Employee Table</h1>
      <Search handleSearch={handleSearch} searchInput={searchInput} />
      <button className='btn btn-primary' onClick={() => setAddNewUser(!addNewUser)}>Add new user</button>
      {addNewUser ? (
        <AddUserForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          user={user}
          edit={edit}
        />
      ) : null}
      <div className="table-responsive">
        <table className="table table-dark table-hover">
          <TableHeaders />
          <TableDataCells
            tableData={tableData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </table>
      </div>
    </div>
  );
};

export default Table;
