import { useContext } from "react";
import { AnimeContext } from "../utils/AnimeContext";

const useAnime = () => {
  const context = useContext(AnimeContext);
  return context;
};

export default useAnime;
