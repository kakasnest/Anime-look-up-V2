import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import useUser from "../../hooks/useUser.js";
import { loginURL } from "../../request_constants/public.js";
import {
  successfulLoginMessage,
  usernameNotExistMessage,
  wrongPasswordMessage,
} from "../../response_constants/public.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    username,
    password,
  };
  const [responseMessage, setResponseMessage] = useState("");
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { message },
      } = await axios.post(loginURL, user);
      setResponseMessage(message);
      if (message === successfulLoginMessage) login();
    } catch (err) {
      if (
        err.response.data.message === usernameNotExistMessage ||
        err.response.data.message === wrongPasswordMessage
      )
        setResponseMessage(err.response.data.message);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" maxLength={20} onChange={handleUsername} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" maxLength={20} onChange={handlePassword} />
        </div>
        <button disabled={username === "" || password === ""}>Login</button>
        <NavLink to="/register">Not a member yet? Register here</NavLink>
        {responseMessage}
      </form>
    </div>
  );
};

export default Login;
