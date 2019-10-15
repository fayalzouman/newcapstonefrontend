import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

// Stores
import authStore from "../store/authStore";
import profileStore from "../store/profileStore";
import Loading from "../../Loading";

class Profile extends Component {
  componentDidMount() {
    // if (authStore.user) {
    //   profileStore.fetchProfile();
    // }
  }

  render() {
    // if (!authStore.user) return <Redirect to="/login" />;
    // if (profileStore.loading) {
    //   return <Loading />;
    // }

    const profile = profileStore.profile;
    console.log(profile);
    console.log(authStore.checkForToken());

    return (
      <div>
        <div>
          <img src={profile.image} className="img-responsive" alt="tag" />
        </div>
        <div>
          <h1>{profile.username}</h1>
          <h1>{profile.courses_taken}</h1>
          <h1>{profile.points}</h1>
        </div>
      </div>
    );
  }
}

export default observer(Profile);
