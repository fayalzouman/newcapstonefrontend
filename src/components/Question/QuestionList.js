import React from "react";
import { observer } from "mobx-react";

// Components
import QuestionCard from "./QuestionCard";
import loading from "../../Loading";
import subjectID from "../CategoryList/index";

// Store
import questionStore from "../store/questionStore";
import Loading from "../../Loading";

const QuestionList = props => {
  let subjectID = props.match.params.subjectID;
  if (loading) {
    return <Loading />;
  }
  // call the questionsfetch methos and pass it the id
  //dont forget tot add a loading condition
  const questionCards = questionStore.questions.map(question => (
    <QuestionCard key={question.id} question={question} />
  ));

  return (
    <div>
      <h3>Questions</h3>

      <div className="row">{questionCards}</div>
    </div>
  );
};

export default observer(QuestionList);
