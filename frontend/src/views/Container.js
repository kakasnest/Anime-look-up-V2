import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";

import useUser from "../hooks/useUser.js";

const Home = React.lazy(() => import("./public/Home.js"));
const Login = React.lazy(() => import("./public/Login.js"));
const Register = React.lazy(() => import("./public/Register.js"));
const Profile = React.lazy(() => import("./private/Profile.js"));
const Posts = React.lazy(() => import("./public/Posts.js"));
const MyPosts = React.lazy(() => import("./private/MyPosts.js"));

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
            <Redirect to="/profile" exact path="/login" />
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path="/register">
          {isAuthenticated ? (
            <Redirect to="/profile" exact path="/register" />
          ) : (
            <Register />
          )}
        </Route>
        <Route exact path="/profile">
          {isAuthenticated ? (
            <Profile />
          ) : (
            <Redirect to="/login" exact path="/profile" />
          )}
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/myposts">
          {isAuthenticated ? (
            <MyPosts />
          ) : (
            <Redirect to="/login" exact path="/profile" />
          )}
        </Route>
        <Redirect to="/" path="*" />
      </Switch>
    </Suspense>
  );
};

export default Container;
