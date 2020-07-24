import Cookies from "universal-cookie";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";

import Header from "./components/layouts/Header";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Account from "./components/pages/Account";
import UserAds from "./components/pages/UserAds";
import Home from "./components/pages/Home";

const cookies = new Cookies();

function App() {
  const [loggedIn, setLoggedIn] = useState(cookies.get("jwt")!=null);

  

  const logIn = (jwt) => {
    cookies.set("jwt", jwt )
    setLoggedIn(true);
   
  };

  const logOut = () => {
    cookies.remove("jwt")
    setLoggedIn(false);
  };
  return (
    
    <div className="App">
      <Router>
        <Header isSignedIn={loggedIn} logOut={logOut} />
        <Box mt="2rem">
          <Grid container item alignItems="center">
            <Grid item xs={false} sm={false} md={1} />
            <Grid item xs={12} sm={12} md={10}>
              <Switch>
              <Route
                path="/login"
                render={() => <Login logIn={logIn} loggedIn = {loggedIn} />}
              />
              <Route
                exact
                path="/"
                render={() => <Home  />}
              />
              <Route
                path="/register"
                render={() => <Registration  />}
              />
              <Route
                path="/user/account"
                render={() => <Account  />}
              />
              <Route
                path="/user/ads"
                render={() => <UserAds  />}
              />
              </Switch>
            </Grid>
            <Grid item xs={false} sm={false} md={1} />
          </Grid>
        </Box>{" "}
      </Router>
    </div>
  );
}

export default App;
