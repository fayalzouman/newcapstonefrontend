import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SchoolList from "./components/SchoolList";
import Questionlist from "./components/Question/QuestionList";
import CategoryList from "./components/CategoryList";
import SubjectList from "./components/SubjectList/index";
import SubjectDetail from "./components/SubjectList/SubjectDetail";
import CreateQuestion from "./components/forms/createQuestion";
import CreateSubject from "./components/forms/createSubject";
import CreateAnswer from "./components/forms/createAnswer";

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
      <Route path="/profile" component={Profile} />
      <Route path="/schoollist" component={SchoolList} />
      <Route path="/questionlist/:subjectID" component={Questionlist} />
      <Route path="/categorylist/:schoolID?" component={CategoryList} />
      <Route path="/subjectlist/:categoryID?" component={SubjectList} />
      <Route
        path="/subjectdetail/:subjectdetailID?"
        component={SubjectDetail}
      />
      <Route path="/createquestion" component={CreateQuestion} />
      <Route path="/createsubject" component={CreateSubject} />
      <Route path="/createanswer" component={CreateAnswer} />
    </Switch>
  );
}
// };

export default withRouter(observer(App));

//is admin =true for teacher when regestering
