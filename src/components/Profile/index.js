import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
// Stores
import authStore from "../store/authStore";
import profileStore from "../store/profileStore";
import categoiresStore from "../store/categoriesStore";

import Loading from "../../Loading";

class Profile extends Component {
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchProfile();
      categoiresStore.fetchSubjects();
    }
  }

  render() {
    const profile = profileStore.profile;

    return (
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div className="card p-5">
          <div>
            <div className="text-right">
              <Link to="/schoollist" className="btn btn-outline-info mx-3">
                Go to school list
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => authStore.logout(this.props.history)}
              >
                Logout
              </button>
            </div>

            <center>
              <img
                src={
                  "https://media.giphy.com/media/3bc9YL28QWi3pYzi1p/giphy.gif"
                }
                className="img-responsive"
                alt="tag"
              />
            </center>
          </div>
          <div>
            <h1 style={{ color: "green", textAlign: "center" }}>
              {profile.username}
            </h1>
            <h3 className="text-right">الدورات التي اتخذت</h3>
            <div className="card p-2 text-right mb-5">
              {profile.courses_taken}
            </div>
            <h4>النقاط: {profile.points}</h4>

            <ProgressBar animated now={10} />
          </div>
        </div>
      </Container>
    );
  }
}

export default observer(Profile);
