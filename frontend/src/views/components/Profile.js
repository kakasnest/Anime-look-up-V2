import React from "react";
import axios from "axios";

const Profile = () => {
  const handleLogout = async () => {
    try {
      const {
        data: { message },
      } = await axios.delete("api/cookieclear");
      console.log(message);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      hello
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
