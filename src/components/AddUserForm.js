import React from "react";

const AddUserForm = ({handleSubmit, handleChange, user, edit}) => {
  return (
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
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={user.email}
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
  );
};

export default AddUserForm;
