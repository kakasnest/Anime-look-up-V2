import React, { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "./views/Navbar.js";
import Container from "./views/Container.js";
import { UserProvider } from "./utils/UserContext.js";

import "./App.css";

const App = () => {
  const [initialized, setInitialized] = useState(false);

  const getCsrfProtection = async () => {
    const {
      data: { csrfToken },
    } = await axios.get("/api/csrf-protection");

    axios.defaults.headers.common["X-XSRF-TOKEN"] = csrfToken;
  };

  useEffect(() => {
    if (!initialized) {
      getCsrfProtection();
      setInitialized(true);
    }
  }, []);

  return (
    <UserProvider>
      <NavBar />
      <Container />
    </UserProvider>
  );
};

export default App;
