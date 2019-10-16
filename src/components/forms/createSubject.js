import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import answerStore from "../store/subjectStore";

class CreateAnswerForm extends Component {
  state = {
    subject_name: "",
    teacher_name: "",
    description: "",
    image: null,
    category_subject: this.props.location.state.categoryID
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    answerStore.postSubject(this.state, this.props.history);
  };

  render() {
    if (answerStore.user) return <Redirect to="/schoollist/" />;
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={this.state.subject}
                  name="subject_name"
                  placeholder="Put your subject"
                  onChange={this.handleChange}
                />
                <label htmlFor="subject">Teacher</label>
                <input
                  type="text"
                  className="form-control"
                  id="teacher_name"
                  value={this.state.teacher_name}
                  name="teacher_name"
                  placeholder="Put your name"
                  onChange={this.handleChange}
                />
                <label htmlFor="subject">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={this.state.description}
                  name="description"
                  placeholder="Put your description"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(CreateAnswerForm);
