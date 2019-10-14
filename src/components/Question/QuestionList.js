import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import QuestionCard from "./QuestionCard";
import Loading from "../../Loading";

// Store
import questionStore from "../store/questionStore";

class QuestionList extends Component {
  async componentDidMount() {
    console.log(this.props.match.params.subjectID);
    await questionStore.fetchQuestionsAnswers(
      this.props.match.params.subjectID
    );
  }

  render() {
    if (questionStore.loading) {
      return <Loading />;
    }
    // call the questionsfetch method and pass it the id
    console.log(questionStore.questions);

    const questionCards = questionStore.questions.map(question => (
      <QuestionCard key={question.id} question={question} />
    ));

    return (
      <div>
        <h3>Questions</h3>

        <div className="row">{questionCards}</div>
      </div>
    );
  }
}

export default observer(QuestionList);
