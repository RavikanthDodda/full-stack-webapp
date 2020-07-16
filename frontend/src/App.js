import Cookies from "universal-cookie";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";

import Header from "./components/layouts/Header";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

const cookies = new Cookies();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => {
    setLoggedIn(true);
  };
  const logOut = () => {
    cookies.remove("token")
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
              <Route
                path="/login"
                render={() => <Login logIn={logIn} />}
              />
              <Route
                exact
                path="/"
                render={() => <Home  />}
              />
            </Grid>
            <Grid item xs={false} sm={false} md={1} />
          </Grid>
        </Box>{" "}
      </Router>
    </div>
  );
}

export default App;
