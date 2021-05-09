import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary.js";
import App from "./App";
import { UserProvider } from "./utils/UserContext.js";
import { AnimeProvider } from "./utils/AnimeContext.js";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <UserProvider>
          <AnimeProvider>
            <App />
          </AnimeProvider>
        </UserProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
