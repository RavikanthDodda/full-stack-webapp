import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormControl,
  TextField,
  CircularProgress,
  Snackbar,
  Typography,
} from "@material-ui/core";
import AuthService from "../../services/AuthService";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        Password: "",
      },
      loading: false,
      error: false,
    };
  }

  authenticate = async (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      loading: true,
    });
    await AuthService.authenticate(this.state.form)
      .then((response) => {
        this.props.logIn(response.data.jwt);
      })
      .catch((err) => {
        console.log(err.status);
        this.setState({
          error: true,
        });
      });
    this.setState({
      form: this.state.form,
      loading: false,
    });
  };

  redirect = () => {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }
  };
  handleClose = () => {
    this.setState({
      error: false,
    });
  };

  updateField = (event) => {
    switch (event.target.name) {
      case "email":
        this.setState({
          form: {
            email: event.target.value,
            password: this.state.form.password,
          },
        });
        break;
      case "password":
        this.setState({
          form: {
            email: this.state.form.email,
            password: event.target.value,
          },
        });
        break;

      default:
        break;
    }
  };
  isLoading = () => {
    return this.state.loading ? (
      <CircularProgress />
    ) : (
      <Button variant="outlined" type="submit">
        Log In
      </Button>
    );
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.error}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message="Incorrect Email or password"
        ></Snackbar>
        <form onSubmit={this.authenticate}>
          <TextField
            style={{ margin: "0.5rem 0rem" }}
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            onChange={this.updateField}
            required="true"
          />
          <br></br>
          <TextField
            style={{ margin: "0.5rem 0rem" }}
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            onChange={this.updateField}
            required="true"
          />
          <div style={{ textAlign: "center", margin: "0.5rem 0" }}>
            {this.isLoading()}
          </div>
          {this.redirect()}
        </form>
        <Typography>
          Do not have an account?
          <Link to="/register" style={{ textDecoration: "none" }}>
            {" "}
            Sign up{" "}
          </Link>
          now
        </Typography>
      </div>
    );
  }
}

export default Login;
