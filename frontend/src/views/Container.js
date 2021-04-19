import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./components/Home.js"));
const Login = React.lazy(() => import("./components/Login.js"));
const Register = React.lazy(() => import("./components/Register.js"));

const Container = () => {
  return (
    <Suspense fallback={<div className="Loading"></div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Redirect to="/" path="*" />
      </Switch>
    </Suspense>
  );
};

export default Container;
