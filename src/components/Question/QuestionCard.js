import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Question, Form, Row, Col, OptionRow } from "react-bootstrap";
import questionStore from "../store/questionStore";

class QuestionCard extends Component {
  handleSelect = (event, answer) => {
    if (answer.is_correct) {
      alert("Do something when right");
    } else {
      alert("do something or nothing when wrong");
    }
    console.log(event.target.value);
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
        id={`formHorizontalRadios${idx}`}
        onClick={event => this.handleSelect(event, answer)}
      />
    ));
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {/* <Card.Title>{question.id}</Card.Title> */}
          <Card.Subtitle className="mb-2 text-muted">
            Choose the correct answer!
          </Card.Subtitle>
          <Card.Text>{question.question}</Card.Text>
        </Card.Body>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Options
            </Form.Label>
            <Col sm={10}>{answers}</Col>
          </Form.Group>
        </fieldset>
      </Card>
    );
  }
}

export default QuestionCard;
