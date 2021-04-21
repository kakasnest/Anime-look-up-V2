import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
      } = await axios.post("/api/register", user);
      setResponseMessage(message);
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

  if (responseMessage === "Registration complete") {
    return <div>Registration complete</div>;
  }

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
      <button>Register</button>
      <NavLink to="/login">A member already? Login here</NavLink>
      {responseMessage}
    </form>
  );
};

export default Register;
