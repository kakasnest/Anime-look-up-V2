import React from "react";

import Anime from ".anime/Anime.js";

const AnimeList = ({ anime }) => {
  return (
    <div className="anime-list">
      {anime.map((animeObject) => (
        <Anime key={animeObject.url} anime={animeObject} />
      ))}
    </div>
  );
};

export default AnimeList;
