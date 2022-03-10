import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createUserPage.scss";

const CreateUserPage = () => {
  let Navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const { name, email } = values;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3003/users", values);
    console.log(res.data);
    Navigate("/");
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Enter the details and submit to add user</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="item">
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            required
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="item">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUserPage;
