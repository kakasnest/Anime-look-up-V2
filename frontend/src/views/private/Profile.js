import React, { useState, useEffect } from "react";
import axios from "axios";

import useUser from "../../hooks/useUser.js";
import { getUserDataURL } from "../../request_constants/private.js";
import { basicAPI } from "../../utils/AxiosInstances.js";

const Profile = () => {
  const { logout } = useUser();
  const [user, setUser] = useState({ _id: "", username: "" });

  const getUserData = async () => {
    try {
      const { data } = await basicAPI.get(getUserDataURL);
      setUser(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {`${user.username}'s profile`}
      <br />
      {`(UUID: ${user._id})`}
      <br />
      <button onClick={logout} className="LogOutButton">
        Logout
      </button>
    </div>
  );
};

export default Profile;
