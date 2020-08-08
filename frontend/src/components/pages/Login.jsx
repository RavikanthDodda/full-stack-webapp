import React, { Component } from "react";
import {
  Button,
  FormControl,
  TextField,
  CircularProgress,
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
    };
  }

  authenticate = async () => {
    this.setState({
      form: this.state.form,
      loading: true,
    });
    await AuthService.authenticate(this.state.form)
      .then((response) => {
        this.props.logIn(response.data);
      })
      .catch((err) => {
        console.log("wrong creds");
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

  isLoading = () => {
    return this.state.loading ? (
      <CircularProgress />
    ) : (
      <Button onClick={this.authenticate}>LogIn</Button>
    );
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
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <FormControl>
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            onChange={this.updateField}
          />
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            onChange={this.updateField}
          />
          <div style={{ textAlign: "center" }}>{this.isLoading()}</div>
          {this.redirect()}
        </FormControl>
      </div>
    );
  }
}

export default Login;
