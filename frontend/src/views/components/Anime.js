import React from "react";

const Anime = ({ anime }) => {
  return (
    <div className="Anime">
      <img src={anime.image_url} alt={JSON.stringify(anime.title) + " image"} />
      <div className="AnimeTitle">{anime.title}</div>
      <div>
        <div>Score on MyAnimeList: {anime.score}</div>
        <div>
          Synopsis: {anime.synopsis}
          <a href={anime.url} target="_blank" rel="noopener noreferrer">
            link
          </a>
        </div>
        <div>Episodes: {anime.episodes}</div>
        <div>Type: {anime.type}</div>
      </div>
    </div>
  );
};

export default Anime;
