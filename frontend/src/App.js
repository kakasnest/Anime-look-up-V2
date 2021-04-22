import React, { useEffect } from "react";
import axios from "axios";

import NavBar from "./views/Navbar.js";
import Container from "./views/Container.js";
import useUser from "./hooks/useUser.js";
import { loggedInCheckURL } from "./request_constants/private.js";
import { csrfURL } from "./request_constants/public.js";

import "./App.css";

const App = () => {
  const { logout } = useUser();

  const getCsrfProtection = async () => {
    try {
      const {
        data: { csrfToken },
      } = await axios.get(csrfURL);

      axios.defaults.headers.common["X-XSRF-TOKEN"] = csrfToken;
    } catch (err) {
      console.log(err.message);
    }
  };

  const checkCookie = async () => {
    try {
      const {
        data: { message },
      } = await axios.get(loggedInCheckURL);
    } catch (err) {
      console.log(err.message);
      logout();
    }
  };

  useEffect(() => {
    getCsrfProtection();
    checkCookie();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Container />
    </div>
  );
};

export default App;
