import React from "react";

import useUser from "../../hooks/useUser.js";

const Profile = () => {
  const { logout } = useUser();

  return (
    <div>
      hello
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
