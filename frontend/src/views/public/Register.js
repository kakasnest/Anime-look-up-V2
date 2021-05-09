import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { registerURL } from "../../request_constants/public.js";
import {
  successfulRegisterMessage,
  usernameTakenMessage,
} from "../../response_constants/public.js";
import { basicAPI } from "../../utils/AxiosInstances.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    username,
    password,
  };
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { message },
      } = await basicAPI.post(registerURL, user);
      setResponseMessage(message);
    } catch (err) {
      if (err.response.data.message === usernameTakenMessage)
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

  if (responseMessage === successfulRegisterMessage) {
    return <div className="RegComplete">Registration complete</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="LoginBox">
      <h1>Register</h1>
      <div className="TextField">
        <FaUserAlt className="UserIcon" />
        <input
          type="text"
          maxLength={20}
          minLength={6}
          onChange={handleUsername}
          placeholder="Username"
        />
      </div>
      <div className="TextField">
        <FaLock className="PasswordIcon" />
        <input
          type="password"
          maxLength={20}
          minLength={6}
          onChange={handlePassword}
          placeholder="Password"
        />
      </div>
      <button disabled={username === "" || password === ""}>Register</button>
      <NavLink to="/login" className="LoginLink">
        A member already? Login here
      </NavLink>
      <div className="ResponseMessage">{responseMessage}</div>
    </form>
  );
};

export default Register;
