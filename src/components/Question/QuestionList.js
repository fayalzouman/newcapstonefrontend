import React from "react";
import { observer } from "mobx-react";

// Components
import QuestionCard from "./QuestionCard";
import questionStore from "../store/questionStore";
// Store

const QuestionList = () => {
  const questionCards = questionStore.fetchQuestionsAnswers.map(question => (
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
