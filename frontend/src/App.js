import React, { useEffect } from "react";
import axios from "axios";

import NavBar from "./views/Navbar.js";
import Container from "./views/Container.js";
import useUser from "./hooks/useUser.js";
import { loggedInCheckURL } from "./request_constants/private.js";
import { csrfURL } from "./request_constants/public.js";
import { basicAPI } from "./utils/AxiosInstances.js";

import "./App.css";

const App = () => {
  const { logout } = useUser();

  basicAPI.interceptors.response.use(
    function (response) {
      return response;
    },
    function (err) {
      if (
        err.response.data.message.name === "TokenExpiredError" ||
        err.response.data.message.name === "JsonWebTokenError"
      )
        logout();
      return Promise.reject(err);
    }
  );

  const getCsrfProtection = async () => {
    try {
      const {
        data: { csrfToken },
      } = await axios.get(csrfURL);
      basicAPI.defaults.headers.common["X-XSRF-TOKEN"] = csrfToken;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCsrfProtection();
    document.title = "Anime-Look-Up V2";
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Container />
    </div>
  );
};

export default App;
