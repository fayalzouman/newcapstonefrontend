import React from "react";
import { Link } from "react-router-dom";
import { Card, Question, Form, Row, Col, OptionRow } from "react-bootstrap";
import questionStore from "../store/questionStore";

const QuestionCard = props => {
  const question = props.question;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{question.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Choose the correct answer!
        </Card.Subtitle>
        <Card.Text>{question.question}</Card.Text>
      </Card.Body>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label={questionStore.option.map(option => (
                <h1>{option.option}</h1>
              ))}
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
          </Col>
        </Form.Group>
      </fieldset>
    </Card>
  );
};

export default QuestionCard;
