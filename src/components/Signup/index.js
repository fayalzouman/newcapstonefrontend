import React, { Component } from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
// import {Calendar} from 'react-widgets/lib/Calendar'
import authStore from "../store/authStore";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    authStore.signup(this.state, this.props.history);
  };

  // const calendar  = ReactWidgets;
  // let formatter = Globalize.dateFormatter({ date: 'medium' })
  // let widget = ( <Calendar headerFormat={formatter} />)

  render(widget) {
    const { username, password } = this.state;
    return (
      <Container>
        <div className="col-6 mx-auto">
          <div className="card my-5">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    // value={Calendar}
                    name="first_name"
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    // value={Calendar}
                    name="last_name"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Signup;
