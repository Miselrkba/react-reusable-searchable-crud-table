import React from 'react';

const AddUserForm = ({ handleSubmit, handleInputChange, currentUser, isEditUserModeActive }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row form-container">
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleInputChange}
            value={currentUser.firstName}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleInputChange}
            value={currentUser.lastName}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={currentUser.email}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Contact"
            name="contact"
            onChange={handleInputChange}
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

export default AddUserForm;
