import Cookies from "universal-cookie";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import Header from "./components/layouts/Header";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Account from "./components/pages/Account";
import UserAds from "./components/pages/UserAds";
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
    console.log(jwt);
    cookies.set("jwt", jwt);
    setLoggedIn(true);
  };

  const logOut = async () => {
    await cookies.remove("jwt");
    setLoggedIn(false);
  };
  return (
    <ThemeProvider theme={theme}>
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
                    render={() => <Login logIn={logIn} loggedIn={loggedIn} />}
                  />
                  <Route exact path="/" render={() => <Home />} />
                  <Route path="/register" render={() => <Registration />} />
                  <Route path="/user/account" render={() => <Account />} />
                  <Route path="/user/ads" render={() => <UserAds />} />
                </Switch>
              </Grid>
              <Grid item xs={false} sm={false} md={1} />
            </Grid>
          </Box>{" "}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
