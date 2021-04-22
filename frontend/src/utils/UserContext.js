import React, { createContext } from "react";
import axios from "axios";

import useLocalStorage from "../hooks/useLocalStorage";
import { cookieClearURL } from "../request_constants/public.js";

const UserContext = createContext();

export const UserProvider = (props) => {
  const { values, setValue } = useLocalStorage("user", false);

  const login = () => {
    setValue(true);
  };

  const logout = async () => {
    setValue(false);
    try {
      if (values) {
        const {
          data: { message },
        } = await axios.delete(cookieClearURL);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{ login, logout, isAuthenticated: values }}
      {...props}
    />
  );
};

export default UserContext;
