import React, { useState } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AuthService from "../../services/AuthService";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    margin: "0.3rem 0rem",
  },
  button: {},
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
      <FormControl>
        <TextField
          className={classes.text}
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          onChange={onChange}
        />
        <TextField
          className={classes.text}
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          onChange={onChange}
        />
        <TextField
          className={classes.text}
          variant="outlined"
          label="First Name"
          name="firstname"
          onChange={onChange}
        />
        <TextField
          className={classes.text}
          variant="outlined"
          label="Last Name"
          name="lastname"
          onChange={onChange}
        />
        <TextField
          className={classes.text}
          variant="outlined"
          label="Phone"
          name="phone"
          type="tel"
          onChange={onChange}
        />
        <Button onClick={register}>Sign up</Button>
      </FormControl>
    </div>
  );
}

export default Registration;
