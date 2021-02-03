import React, { useEffect, useState } from 'react';
import createId from '../helpers/createId';
import AddUserForm from './AddUserForm';
import Search from './Search';
import TableHeaders from './TableHeaders';
import '@fortawesome/fontawesome-free/css/all.css';
import TableRow from './TableRow';

const Table = ({ data }) => {
  const initialFormState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
  };
  const [tableData, setTableData] = useState([]);
  const [isEditUserModeActive, setIsEditUserModeActive] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [id, setId] = useState(createId());
  const [filterText, setFilterText] = useState('');
  const [addNewUser, setAddNewUser] = useState(false);

  // get data
  const getTableData = async () => {
    const importTableData = await data;
    setTableData(importTableData);
  };

  useEffect(() => {
    getTableData();
  }, []);

  // add new user functionality
  // set First Name and Last Name Email and Contact to target value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  // on submit add new user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser.firstName && !currentUser.lastName) {
      return;
    }
    if (isEditUserModeActive) {
      const newUser = {
        id: currentUser.id,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        contact: currentUser.contact,
      };
      setTableData([...tableData, newUser]);
      setCurrentUser(initialFormState);
      setIsEditUserModeActive(false);
      setId(createId());
    } else {
      const newUser = {
        id,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        contact: currentUser.contact,
      };
      setTableData([...tableData, newUser]);
      setCurrentUser(initialFormState);
      setIsEditUserModeActive(false);
      setId(createId());
    }
  };

  // editing user functionality
  // set editing to true and filter updated table data to all users except selected user
  // find user to be edited and set input value to this user
  const handleEdit = (userId) => {
    setIsEditUserModeActive(true);
    setAddNewUser(true);
    setTableData(
      tableData.filter((item) => {
        return item.id !== userId;
      })
    );
    setCurrentUser(
      tableData.find((item) => {
        return item.id === userId;
      })
    );
  };

  // delete user functionality
  // if a user is being edited switch off delete funtionality
  // filter all users that are not being deleted
  const handleDelete = (userId) => {
    if (isEditUserModeActive) {
      return;
    }
    setTableData(
      tableData.filter((item) => {
        return item.id !== userId;
      })
    );
  };

  // search functionality - search by Last name
  // check target value of filtertext input againts tableData
  // and push to row
  const rows = [];

  tableData.forEach((userName) => {
    if (userName.lastName.indexOf(filterText) === -1) {
      return;
    }

    rows.push(
      <TableRow
        userName={userName}
        key={userName.firstName}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    );
  });

  return (
    <div className="main-table-container">
      <div className="header">
        <h1>Manage Employees</h1>
      </div>
      {isEditUserModeActive && (
        <div className="alert alert-success fade-in" role="alert">
          Edit user mode on
        </div>
      )}
      <button
        type="button"
        className="btn btn-info add-button"
        onClick={() => {
          setAddNewUser((prevstate) => {
            return !prevstate;
          });
        }}
      >
        <i className="fas fa-user-plus" />
        Add new user
      </button>
      <Search filterText={filterText} onFilterTextChange={setFilterText} />
      {addNewUser && (
        <AddUserForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          currentUser={currentUser}
          isEditUserModeActive={isEditUserModeActive}
        />
      )}
      <div className="table-responsive">
        <table className="table table-dark table-hover table-bordered">
          <TableHeaders />
          <tbody>
            {tableData.length < 1 ? (
              <tr>
                <td>No users</td>
              </tr>
            ) : (
              rows
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
