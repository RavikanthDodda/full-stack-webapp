import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  TextField,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import AuthService from "../../services/AuthService";
import { useTheme, makeStyles } from "@material-ui/styles";
import LoadingButton from "../LoadingButton";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& button": {
      margin: "0.5rem 0",
    },
  },
  form: {
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
  text: {
    margin: "0.5rem 0",
    width: "100%",
  },
  link: {
    textDecoration: "none",
  },
}));

function Registration(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [user, setUser] = useState({
    email: "",
    password1: "",
    password2: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    switch (e.target.name) {
      case "email":
        setUser({
          ...user,
          email: e.target.value,
        });
        break;
      case "password":
        setUser({
          ...user,
          password: e.target.value,
        });
        break;
      case "password2":
        setUser({
          ...user,
          password2: e.target.value,
        });
        break;
      case "firstname":
        setUser({
          ...user,
          firstname: e.target.value,
        });
        break;
      case "lastname":
        setUser({
          ...user,
          lastname: e.target.value,
        });
        break;
      case "phone":
        setUser({
          ...user,
          phone: e.target.value,
        });
        break;
      default:
    }
  };
  const register = (e) => {
    e.preventDefault();
    setLoading(true);
    if (user.password === user.password2) {
      AuthService.register(user)
        .then((res) => {
          setMsg("Registration successful. Proceed to Login.");
          setOpen(true);
        })
        .catch((err) => {
          console.log(err);
          setMsg("Something wrong! Please try again later.");
          setOpen(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={msg}
      ></Snackbar>
      <form className={classes.form} onSubmit={register}>
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
          label="Re-type password"
          name="password2"
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
        <LoadingButton loading={loading} text={"Sign Up"} />
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
