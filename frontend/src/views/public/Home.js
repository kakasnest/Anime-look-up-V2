import React, { useEffect } from "react";

import useAnime from "../../hooks/useAnime.js";
import Anime from "../components/Anime.js";

const Home = () => {
  const { anime, load } = useAnime();

  useEffect(() => load(1), []);

  return (
    <div className="Home">
      <h1>Popular anime you might want to check!</h1>
      <div className="AnimeList">
        {anime.map((anime) => (
          <Anime key={anime.url} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Home;
