import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { Form, Button } from "react-bootstrap";

// Stores
import answerStore from "../store/answerStore";

class CreateAnswerForm extends Component {
  state = {
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    is_correct1: false,
    is_correct2: false,
    is_correct3: false,
    is_correct4: false,
    question: this.props.location.state.question,
    subject: this.props.location.state.subject
    // subject: this.props.subjectID
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    await answerStore.postAnswer({
      option: this.state.answer1,
      is_correct: this.state.is_correct1,
      question: this.state.question
    });
    await answerStore.postAnswer({
      option: this.state.answer2,
      is_correct: this.state.is_correct2,
      question: this.state.question
    });
    await answerStore.postAnswer({
      option: this.state.answer3,
      is_correct: this.state.is_correct3,
      question: this.state.question
    });
    await answerStore.postAnswer({
      option: this.state.answer4,
      is_correct: this.state.is_correct4,
      question: this.state.question
    });
    this.props.history.replace(`/questionlist/${this.state.subject}/`);
  };

  render() {
    if (answerStore.user) return <Redirect to="/schoollist/" />;

    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <Form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Answer 1</Form.Label>
                  <Form.Control
                    name="answer1"
                    placeholder="Create your answers"
                    onChange={this.handleChange}
                  />
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="radio"
                      name="is_correct1"
                      label="Right Answer"
                      value={this.state.is_correct1}
                      checked={this.state.is_correct1}
                      onClick={event =>
                        this.setState({
                          [event.target.name]: !this.state[event.target.name]
                        })
                      }
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Answer 2</Form.Label>
                  <Form.Control
                    name="answer2"
                    placeholder="Create your answers"
                    onChange={this.handleChange}
                  />
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="radio"
                      name="is_correct2"
                      label="Right Answer"
                      checked={this.state.is_correct2}
                      value={this.state.is_correct2}
                      onClick={event =>
                        this.setState({
                          [event.target.name]: !this.state[event.target.name]
                        })
                      }
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Answer 3</Form.Label>
                  <Form.Control
                    name="answer3"
                    placeholder="Create your answers"
                    onChange={this.handleChange}
                  />
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="radio"
                      name="is_correct3"
                      label="Right Answer"
                      checked={this.state.is_correct3}
                      value={this.state.is_correct3}
                      onClick={event =>
                        this.setState({
                          [event.target.name]: !this.state[event.target.name]
                        })
                      }
                    />
                  </Form.Group>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Answer 4</Form.Label>
                  <Form.Control
                    name="answer4"
                    placeholder="Create your answers"
                    onChange={this.handleChange}
                  />
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="radio"
                      name="is_correct4"
                      label="Right Answer"
                      checked={this.state.is_correct4}
                      value={this.state.is_correct4}
                      onClick={event =>
                        this.setState({
                          [event.target.name]: !this.state[event.target.name]
                        })
                      }
                    />
                  </Form.Group>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(CreateAnswerForm);
