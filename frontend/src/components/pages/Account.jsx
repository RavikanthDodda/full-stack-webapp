import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserService from "../../services/UserService";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    margin: "0.3rem 0rem",
  },
  button: {},
});

function Account(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  useEffect(() => {
    setLoading(true);
    console.log("account");
    const getUser = async () => {
      const response = await UserService.getUserDetails();
      setUser(response.data);
    };
    getUser();
    setLoading(false);
  }, []);

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

  const update = () => {
    UserService.updateProfile(user).then((res) => {
      console.log(res.status);
    });
  };
  const getContent = () => {
    if (loading) {
      return <CircularProgress />;
    } else {
      return (
        <FormControl>
          <TextField
            className={classes.text}
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            defaultValue={user.email}
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
          <Button onClick={update}>Update profile</Button>
        </FormControl>
      );
    }
  };
  return <div className={classes.root}>{getContent()}</div>;
}

export default Account;
