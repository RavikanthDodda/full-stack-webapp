import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AuthService from "../../services/AuthService";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    "& button": {
      margin: "0.5rem 0",
    },
  },
  text: {
    margin: "0.5rem 0",
  },
  link: {
    textDecoration: "none",
  },
});

function Registration(props) {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  const onChange = (e) => {
    switch (e.target.name) {
      case "email":
        setUser({
          email: e.target.value,
          password: user.password,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone,
        });
        break;
      case "password":
        setUser({
          email: user.email,
          password: e.target.value,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone,
        });
        break;
      case "firstname":
        setUser({
          email: user.email,
          password: user.password,
          firstname: e.target.value,
          lastname: user.lastname,
          phone: user.phone,
        });
        break;
      case "lastname":
        setUser({
          email: user.email,
          password: user.password,
          firstname: user.firstname,
          lastname: e.target.value,
          phone: user.phone,
        });
        break;
      case "phone":
        setUser({
          email: user.email,
          password: user.password,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: e.target.value,
        });
        break;
      default:
    }
  };
  const register = () => {
    AuthService.register(user).then((res) => {
      console.log(res.status);
    });
  };

  return (
    <div className={classes.root}>
      <form>
        <TextField
          className={classes.text}
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          onChange={onChange}
          required
        />
        <br />
        <TextField
          className={classes.text}
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          onChange={onChange}
          required
        />
        <br />
        <TextField
          className={classes.text}
          variant="outlined"
          label="First Name"
          type="text"
          name="firstname"
          onChange={onChange}
          required
        />
        <br />
        <TextField
          className={classes.text}
          variant="outlined"
          label="Last Name"
          name="lastname"
          type="text"
          onChange={onChange}
          required
        />
        <br />
        <TextField
          className={classes.text}
          variant="outlined"
          label="Phone"
          name="phone"
          type="tel"
          onChange={onChange}
          required
        />
        <br />
        <Button variant="outlined" type="submit">
          Sign up
        </Button>
      </form>
      <br />
      <Typography>
        Already have an account?
        <Link className={classes.link} to="/login">
          {" "}
          Log in{" "}
        </Link>
        now
      </Typography>
    </div>
  );
}

export default Registration;
