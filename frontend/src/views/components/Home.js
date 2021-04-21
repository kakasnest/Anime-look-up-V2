import React from "react";

const Home = () => {
  return (
    <div>
      What would you like to watch?
      <form>
        <label>Search:</label>
        <input type="text" maxLength={50} minLength={3}></input>
        <button>Go</button>
      </form>
    </div>
  );
};

export default Home;
