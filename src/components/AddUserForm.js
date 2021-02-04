import React from 'react';

const AddUserForm = ({ handleSubmit, handleInputChange, currentUser, isEditUserModeActive }) => {

  const addUserFormInputChange = (event) => {
    handleInputChange(event)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row form-container">
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={addUserFormInputChange}
            value={currentUser.firstName}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={addUserFormInputChange}
            value={currentUser.lastName}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            name="email"
            onChange={addUserFormInputChange}
            value={currentUser.email}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Contact"
            name="contact"
            onChange={addUserFormInputChange}
            value={currentUser.contact}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditUserModeActive ? 'Edit' : 'Add'}
        </button>
      </div>
    </form>
  );
};


// AddUserForm.propTypes = {
  
//   tableDefaultSortColumn: string.isRequired,
//   isActionsMenuVisible: bool.isRequired,
//   sortable: bool.isRequired,
//   handleSubmit, handleInputChange, currentUser, isEditUserModeActive
// };

export default AddUserForm;
