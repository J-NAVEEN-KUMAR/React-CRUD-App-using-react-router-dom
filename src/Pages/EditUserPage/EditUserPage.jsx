import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editUserPage.scss";

const EditUserPage = () => {
  let Navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const { name, email } = values;
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setValues(res.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:3003/users/${id}`, values);
    console.log(res.data);
    Navigate("/");
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="editUser-container">
      <h1>Enter the details and submit to update user</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="create-form">
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
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};

export default EditUserPage;
