import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import SchoolList from "./components/SchoolList";
import Questionlist from "./components/Question/QuestionList";
import CategoryList from "./components/CategoryList";
import SubjectList from "./components/SubjectList/index";
import SubjectDetail from "./components/SubjectList/SubjectDetail";

// "./components/CategoryList/SubjectList";

// Store
import authStore from "./components/store/authStore";
import categoriesStore from "./components/store/categoriesStore";
import questionStore from "./components/store/questionStore";

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* <Route path="/profile" component={Profile} />  ADD PROFILE*/}
      <Route path="/schoollist" component={SchoolList} />
      <Route path="/questionlist/:subjectID" component={Questionlist} />
      <Route path="/categorylist/:schoolID?" component={CategoryList} />
      <Route path="/subjectlist/:categoryID?" component={SubjectList} />
      <Route
        path="/subjectdetail/:subjectdetailID?"
        component={SubjectDetail}
      />
    </Switch>
  );
}
// };

export default withRouter(observer(App));
