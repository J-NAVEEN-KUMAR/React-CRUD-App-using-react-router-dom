import React, { useState } from "react";
import "./editUserPage.scss";

const EditUserPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const handleChangeName = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  return (
    <div>
      <h1>Enter the details and submit to update user</h1>
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            required
            value={values.name}
            onChange={handleChangeName}
          />
        </div>
        <div className="item">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
            value={values.email}
            onChange={handleChangeEmail}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUserPage;
