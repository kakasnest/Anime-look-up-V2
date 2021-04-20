import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";

import useUser from "../hooks/useUser.js";

const Home = React.lazy(() => import("./components/Home.js"));
const Login = React.lazy(() => import("./components/Login.js"));
const Register = React.lazy(() => import("./components/Register.js"));
const Profile = React.lazy(() => import("./components/Profile.js"));

const Container = () => {
  const { isAuthenticated } = useUser();

  return (
    <Suspense fallback={<div className="Loading"></div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          {isAuthenticated ? (
            <Redirect to="/profile" path="/login" />
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path="/register">
          {isAuthenticated ? (
            <Redirect to="/profile" path="/register" />
          ) : (
            <Register />
          )}
        </Route>
        <Route exact path="/profile">
          {isAuthenticated ? (
            <Profile />
          ) : (
            <Redirect to="/login" path="/profile" />
          )}
        </Route>
        <Redirect to="/" path="*" />
      </Switch>
    </Suspense>
  );
};

export default Container;
