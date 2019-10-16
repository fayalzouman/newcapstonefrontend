import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import authStore from "../store/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  handleSubmit = event => {
    event.preventDefault();
    authStore.login(this.state, this.props.history);
  };
  render() {
    if (authStore.user) return <Redirect to="/profile" />;
    const { username, password } = this.state;
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit} className="form-inline">
              <div className="form-group">
                <input
                  className="form-control "
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <input
                  className="form-control "
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-primary my-2 my-sm-0 mr-2"
                  type="submit"
                >
                  Login
                </button>
                <Link to="/signup" className="btn btn-success my-2 my-sm-0">
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
