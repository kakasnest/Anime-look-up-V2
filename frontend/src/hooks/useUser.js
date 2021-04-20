import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export default useUser;
