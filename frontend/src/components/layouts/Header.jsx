import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    bar: {
        display:"flex",
        justifyContent:"start"
    },
    options:{
        width:"100%",
        display:"flex",
        justifyContent:"end",
    },
    link: {
        textDecoration:"None",
        marginLeft: "0.6rem"
    }
});

function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.bar}>
         <Link to="/" className={classes.link}>
            <Typography variant="h6">Home</Typography>
          </Link>
        <div className={classes.options}>{headerOptions(props.isSignedIn, props.logOut,classes)}</div>
      </Toolbar>
    </AppBar>
  );
}
const headerOptions = (isSignedIn, logOut, classes) => {
  if (isSignedIn) {
    return (
      <React.Fragment>
        <Link to="/user/account" className={classes.link} >
          <Typography>account</Typography>
        </Link>
        <Link to="/user/ads" className={classes.link} >
        <Typography >my ads</Typography>
        </Link>
        <Link to="/login" className={classes.link} onClick={logOut} >
        <Typography >logout</Typography>
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link to="/login" className={classes.link}>
        <Typography>Sign in</Typography>
        </Link>
        <Link to="/register" className={classes.link}>
        <Typography>Sign up</Typography>
        </Link>
      </React.Fragment>
    );
  }
};

export default Header;
