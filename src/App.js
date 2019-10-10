import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import SchoolList from "./components/SchoolList";
import CategoryList from "./components/SchoolList/CategoryList";
import SubjectList from "./components/SchoolList/CategoryList/SubjectList";
import Questionlist from "./components/Question/QuestionList";

// Store
import authStore from "./components/store/authStore";
import categoriesStore from "./components/store/categoriesStore";
import questionStore from "./components/store/questionStore";

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
      <Route path="/schoollist/:categorylist" component={CategoryList} />
      <Route path="/questionlist/:subjectID" component={Questionlist} />
      <Route
        path="/schoollist/categorylist/:subjectlist?"
        component={SubjectList}
      />
    </Switch>
  );
}
// };

export default withRouter(observer(App));
