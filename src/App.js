import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import SchoolList from "./components/SchoolList";
import CategoryList from "./components/SchoolList/CategoryList";
import SubjectList from "./components/SchoolList/CategoryList/SubjectList";

// Store
import authStore from "./components/store/authStore";
import categoriesStore from "./components/store/categoriesStore";

function App() {
  // const getView = () => {
  //   if (authorStore.loading || bookStore.loading) {
  // return <Loading />;
  // } else {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/schoollist/" component={SchoolList} />
      <Route path="/schoollist/:categorylist?" component={CategoryList} />
      <Route
        path="/schoollist/categorylist/:subjectlist?"
        component={SubjectList}
      />
    </Switch>
  );
}
// };

export default withRouter(observer(App));
