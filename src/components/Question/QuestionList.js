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
          <h1 className="text-success text-center ">الاسئلة</h1>
          <h3 className="text-right">النقاط: {this.state.points}</h3>
          <div className="row">{questionCards}</div>
          <div className="text-right">
            <Button
              variant="primary"
              onClick={this.handleSubmit}
              className="col-lg-3"
            >
              اضغط هنا
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default observer(QuestionList);
