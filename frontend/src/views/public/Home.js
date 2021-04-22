import React from "react";

import anime from "../components/Anime.js";

const Home = () => {
  return <div>hello on home</div>;
  /*  return (
    <div className="anime-list">
      {anime.map((animeObject) => (
        <Anime key={animeObject.url} anime={animeObject} />
      ))}
    </div>
  ); */
};

export default Home;
