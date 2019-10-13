import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import QuestionCard from "./QuestionCard";
import Loading from "../../Loading";

// Store
import questionStore from "../store/questionStore";

class QuestionList extends Component {
  componentDidMount() {
    console.log(this.props.match.params.subjectID);
    questionStore.fetchQuestionsAnswers(this.props.match.params.subjectID);
  }

  // const QuestionList = props => {
  //   let subjectID = props.match.params.subjectID;
  render() {
    if (questionStore.loading) {
      return <Loading />;
    }
    // call the questionsfetch methos and pass it the id
    //dont forget tot add a loading condition
    console.log(questionStore.questions);

    const questionCards = questionStore.questions.map(questions => (
      <QuestionCard key={questions.id} question={questions} />
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
