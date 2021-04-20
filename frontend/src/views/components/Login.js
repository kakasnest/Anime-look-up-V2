import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import useUser from "../../hooks/useUser.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    username,
    password,
  };
  const [responseMessage, setResponseMessage] = useState("");
  const { setAuthenticated } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { message },
      } = await axios.post("/api/login", user);
      setResponseMessage(message);
      if (message === "success") setAuthenticated(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          maxLength={20}
          minLength={6}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          maxLength={20}
          minLength={6}
          onChange={handlePassword}
        />
      </div>
      <button>Login</button>
      <NavLink to="/register">Not a member yet? Register here</NavLink>
      {responseMessage === "success" ? "" : responseMessage}
    </form>
  );
};

export default Login;
