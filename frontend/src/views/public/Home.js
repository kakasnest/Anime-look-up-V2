import React, { useEffect } from "react";

import useAnime from "../../hooks/useAnime.js";
import Anime from "../components/Anime.js";

const Home = () => {
  const { anime, load } = useAnime();

  useEffect(() => load(1), []);

  return (
    <div className="AnimeList">
      {anime.map((animeObject) => (
        <Anime key={animeObject.url} anime={animeObject} />
      ))}
    </div>
  );
};

export default Home;
