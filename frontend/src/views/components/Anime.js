import React from "react";

const Anime = ({ anime }) => {
  return (
    <div className="anime">
      <img
        src={anime.image_url}
        alt={JSON.stringify(anime.title) + " image"}
        className="anime-image"
      />
      <div className="anime-title">Title: {anime.title}</div>
      <div className="anime-text">
        <div className="anime-detail">Score on MyAnimeList: {anime.score}</div>
        <div className="anime-detail">
          Synopsis: {anime.synopsis}
          <a href={anime.url} target="_blank" rel="noopener noreferrer">
            link
          </a>
        </div>
        <div className="anime-detail">Episodes: {anime.episodes}</div>
        <div className="anime-detail">Type: {anime.type}</div>
      </div>
    </div>
  );
};

export default Anime;