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
        <NavLink to="/posts" className="Navigation">
          Posts
        </NavLink>
        {isAuthenticated ? (
          <NavLink to="/myposts" className="Navigation">
            My Posts
          </NavLink>
        ) : (
          ""
        )}
      </div>
      {isAuthenticated ? (
        <NavLink to="/profile" className="Login-Profile">
          Profile
        </NavLink>
      ) : (
        <NavLink to="/login" className="Login-Profile">
          Login / Register
        </NavLink>
      )}
    </div>
  );
};

export default NavBar;
