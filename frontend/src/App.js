import Cookies from "universal-cookie";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import Header from "./components/layouts/Header";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Account from "./components/pages/Account";
import UserAds from "./components/pages/UserAds";
import AdPage from "./components/pages/AdPage";
import Home from "./components/pages/Home";

const cookies = new Cookies();

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#388e3c",
      contrastText: "#fff",
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
});

function App() {
  const [loggedIn, setLoggedIn] = useState(cookies.get("jwt") != null);
  const logIn = async (jwt) => {
    cookies.set("jwt", jwt);
    setLoggedIn(true);
  };

  const logOut = async () => {
    cookies.remove("jwt");
    setLoggedIn(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header isSignedIn={loggedIn} logOut={logOut} />
        <Box mt="2rem">
          <Grid container item alignItems="center">
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Switch>
                <Route
                  path="/login"
                  render={() => <Login logIn={logIn} loggedIn={loggedIn} />}
                />
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/register" render={() => <Registration />} />
                <Route exact path="/user/account" render={() => <Account />} />
                <Route exact path="/user/ads" render={() => <UserAds />} />
                <Route
                  exact
                  path="/ad"
                  render={(props) => <AdPage {...props} />}
                />
              </Switch>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Box>{" "}
      </div>
    </ThemeProvider>
  );
}

export default App;
