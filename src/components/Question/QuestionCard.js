import React, { Component } from "react";
import axios from "axios";
import { Card, Form, Row, Col } from "react-bootstrap";
import questionStore from "../store/questionStore";

class QuestionCard extends Component {
  state = {
    chosen: false
  };
  handleSelect = (event, answer) => {
    this.setState({ chosen: true });
    if (answer.is_correct) {
      this.props.addPoints();
    }
  };
  render() {
    const question = this.props.question;
    const answers = question.answers.map((answer, idx) => (
      <Form.Check
        type="radio"
        label={answer.option}
        value={answer.option}
        name={question.id}
        key={idx}
        disabled={this.state.chosen}
        id={`formHorizontalRadios${idx}`}
        onClick={event => this.handleSelect(event, answer)}
      />
    ));
    return (
      <Card className="col-3 m-5" style={{ width: "18rem" }}>
        <Card.Body>
          {/* <Card.Title>{question.id}</Card.Title> */}
          <Card.Subtitle className="mb-2 text-muted">
            Choose the correct answer!
          </Card.Subtitle>
          <Card.Text>{question.question}</Card.Text>
        </Card.Body>
        <Form.Group as={Row}>
          <Form.Label as="legend" as={Row}>
            Choose me
          </Form.Label>
          <div className="row mt-2">
            <Col sm={10}>{answers}</Col>
          </div>
        </Form.Group>
      </Card>
    );
  }
}

export default QuestionCard;
