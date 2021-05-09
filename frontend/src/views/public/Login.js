import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";

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
    <form onSubmit={handleSubmit} className="LoginBox">
      <h1>Login</h1>
      <div className="TextField">
        <FaUserAlt className="UserIcon" />
        <input
          type="text"
          maxLength={20}
          onChange={handleUsername}
          placeholder="Username"
        />
      </div>
      <div className="TextField">
        <FaLock className="PasswordIcon" />
        <input
          type="password"
          maxLength={20}
          onChange={handlePassword}
          placeholder="Password"
        />
      </div>
      <button disabled={username === "" || password === ""}>Login</button>
      <NavLink to="/register" className="LoginLink">
        Not a member yet? Register here
      </NavLink>
      <div className="ResponseMessage">{responseMessage}</div>
    </form>
  );
};

export default Login;
