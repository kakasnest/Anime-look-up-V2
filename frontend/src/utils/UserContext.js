import React, { createContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <UserContext.Provider
      value={{ setAuthenticated, isAuthenticated }}
      {...props}
    />
  );
};

export default UserContext;
