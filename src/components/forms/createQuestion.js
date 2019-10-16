import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import questionStore from "../store/questionStore";

class CreateQuestioForm extends Component {
  state = {
    question: "",
    subject: 1
    // subject: this.props.subjectID
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    questionStore.postForm(this.state, this.props.history);
  };

  render() {
    if (questionStore.user) return <Redirect to="/schoollist/" />;

    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="question">Question</label>
                <input
                  type="text"
                  className="form-control"
                  id="question"
                  value={this.state.question}
                  name="question"
                  placeholder="Put your question"
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

export default observer(CreateQuestioForm);
