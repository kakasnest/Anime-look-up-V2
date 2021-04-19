import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Header">
      <NavLink to="/login" className="Logo">
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
      <NavLink to="/login" className="Login">
        Login / Register
      </NavLink>
    </div>
  );
};

export default NavBar;
