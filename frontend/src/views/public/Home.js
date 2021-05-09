import React, { useEffect, useState } from "react";

import useAnime from "../../hooks/useAnime.js";
import Anime from "../components/Anime.js";
import Pagination from "../components/Pagination.js";

const Home = () => {
  const { anime, load } = useAnime();
  const [pageCounter, setPageCounter] = useState(1);

  useEffect(() => load(pageCounter), [pageCounter]);

  return (
    <div className="Home">
      <h1>Popular anime you might want to check!</h1>
      <Pagination pageCounter={pageCounter} setPageCounter={setPageCounter} />
      <div className="AnimeList">
        {anime.map((anime) => (
          <Anime key={anime.url} anime={anime} />
        ))}
      </div>
      <Pagination pageCounter={pageCounter} />
    </div>
  );
};

export default Home;
