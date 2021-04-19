import React from "react";

const Home = () => {
  return (
    <div>
      What would you like to watch today?
      <form>
        <label>Search:</label>
        <input type="text" max={50} min={3}></input>
        <button>Go</button>
      </form>
    </div>
  );
};

export default Home;
