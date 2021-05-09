import React, { createContext, useState } from "react";

import { outerAPI } from "./AxiosInstances.js";

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  const [anime, setAnime] = useState([]);

  const load = async (page) => {
    const {
      data: { results },
    } = await outerAPI(`${process.env.REACT_APP_API_URL}${page}`);
    setAnime(results);
  };

  return <AnimeContext.Provider value={{ anime, load }} {...props} />;
};
