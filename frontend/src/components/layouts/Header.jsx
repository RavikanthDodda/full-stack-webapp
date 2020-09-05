import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import logo from "../../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  bar: {
    display: "flex",
    justifyContent: "start",
  },
  options: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    textDecoration: "None",
    marginLeft: "1.5rem",
    link: "white",
    fontWeight: "500",
    color: theme.palette.text.primary,
  },
}));
function Header(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <AppBar position="static">
      <Toolbar className={classes.bar}>
        <Link to="/" className={classes.link}>
          <Typography variant="h6">
            <img src={logo} style={{ height: "1.6rem" }} />
          </Typography>
        </Link>
        <div className={classes.options}>
          {headerOptions(props.isSignedIn, props.logOut, classes)}
        </div>
      </Toolbar>
    </AppBar>
  );
}
const headerOptions = (isSignedIn, logOut, classes) => {
  if (isSignedIn) {
    return (
      <React.Fragment>
        <Link to="/user/ads" className={classes.link}>
          <Typography>My ads</Typography>
        </Link>
        <Link to="/user/account" className={classes.link}>
          <Typography>Account</Typography>
        </Link>

        <Link to="/login" className={classes.link} onClick={logOut}>
          <Typography>Logout</Typography>
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link to="/login" className={classes.link}>
          <Typography>Sign in</Typography>
        </Link>
      </React.Fragment>
    );
  }
};

export default Header;
