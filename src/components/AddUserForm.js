import React from 'react';

const AddUserForm = ({ handleSubmit, handleChange, user, edit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row form-container">
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
            value={user.firstName}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
            value={user.lastName}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className="col col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Contact"
            name="contact"
            onChange={handleChange}
            value={user.contact}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {edit ? 'Edit' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
