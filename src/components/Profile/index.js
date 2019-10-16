import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

// Stores
import authStore from "../store/authStore";
import profileStore from "../store/profileStore";
import Loading from "../../Loading";

class Profile extends Component {
  handleSubmit = () => {
    authStore.logout(this.props.history);
  };

  render() {
    const profile = profileStore.profile;

    return (
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div>
          <div>
            <img
              src={"https://media.giphy.com/media/3bc9YL28QWi3pYzi1p/giphy.gif"}
              className="img-responsive"
              alt="tag"
              style={{ alignSelf: "center" }}
            />
          </div>
          <div>
            <h1 style={{ color: "green", textAlign: "center" }}>
              {profile.username}
            </h1>
            <h3 style={{ color: "blue", textAlign: "center" }}>
              Courses taken: {profile.courses_taken}
            </h3>
            <h4 style={{ color: "green", textAlign: "center" }}>
              Points: {profile.points}
            </h4>
            <Link to="/schoollist" className="btn btn-success my-2 my-sm-0">
              Go to school list
            </Link>
            <button
              className="btn btn-primary my-2 my-sm-0 mr-2"
              onClick={() => authStore.logout(this.props.history)}
            >
              Logout
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default observer(Profile);
