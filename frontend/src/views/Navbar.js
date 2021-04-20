import React from "react";
import { NavLink } from "react-router-dom";

import useUser from "../hooks/useUser.js";

const NavBar = () => {
  const { isAuthenticated } = useUser();

  return (
    <div className="Header">
      <NavLink to="/" className="Logo">
        Anime-Look-Up 2.0
      </NavLink>
      <div className="NavBar">
        <NavLink to="/" className="Navigation">
          Home
        </NavLink>
        <NavLink to="/" className="Navigation">
          Home
        </NavLink>
        <NavLink to="/" className="Navigation">
          Home
        </NavLink>
      </div>
      {!isAuthenticated ? (
        <NavLink to="/login" className="Login-Profile">
          Login / Register
        </NavLink>
      ) : (
        <NavLink to="/profile" className="Login-Profile">
          Profile
        </NavLink>
      )}
    </div>
  );
};

export default NavBar;
