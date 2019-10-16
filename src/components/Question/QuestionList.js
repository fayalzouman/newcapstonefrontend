import React, { Component } from "react";
import { observer } from "mobx-react";
import { Container } from "react-bootstrap";

import {
  Card,
  Question,
  Form,
  Row,
  Col,
  OptionRow,
  Button
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

// Components
import QuestionCard from "./QuestionCard";
import Loading from "../../Loading";

// Store
import questionStore from "../store/questionStore";

class QuestionList extends Component {
  state = {
    points: 0
  };

  addPoints = () => {
    this.setState({ points: this.state.points + 1 });
  };

  async componentDidMount() {
    console.log(this.props.match.params.subjectID);
    await questionStore.fetchQuestionsAnswers(
      this.props.match.params.subjectID
    );
  }
  handleSubmit = () => {
    questionStore.calculatePoints(this.state, this.props.history);
  };

  render() {
    if (!questionStore.questions) {
      return <Loading />;
    }
    console.log(questionStore.questions);
    const questionCards = questionStore.questions.map(question => (
      <QuestionCard
        addPoints={this.addPoints}
        key={question.id}
        question={question}
      />
    ));

    return (
      <Container style={{ padding: "20px" }}>
        <div>
          <h3 style={{ color: "green", textAlign: "center" }}>Questions</h3>

          <div className="row">{questionCards}</div>
          <h3>Points: {this.state.points}</h3>
          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </Container>
    );
  }
}

export default observer(QuestionList);
