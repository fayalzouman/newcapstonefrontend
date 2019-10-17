import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components

// Stores
import categoriesStore from "../store/categoriesStore";
import profileStore from "../store/profileStore";
import Loading from "../../Loading";
import { Container } from "react-bootstrap";

class SubjectDetail extends Component {
  async componentDidMount() {
    const subjectdetailID = this.props.match.params.subjectdetailID;
    await categoriesStore.fetchSubjectByID(subjectdetailID);
    console.log(categoriesStore.subject);
  }

  render() {
    if (!categoriesStore.subject) return <Loading />;
    const subject = categoriesStore.subject;
    let description = subject.description.split("...");
    let viewedDescription = description.map(des => <div>{des}</div>);

    return (
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div>
          <h3 style={{ color: "green", textAlign: "center" }}>
            {subject.subject_name}
          </h3>
          <h5 style={{ color: "blue", textAlign: "left" }}>
            {viewedDescription}
          </h5>
          <div style={{ textAlign: "center" }}>
            <a
              className="btn btn-success my-2 my-sm-0"
              href="https://youtube.com/wazzanmath"
              style={{ marginRight: "30px" }}
            >
              Learn More
            </a>

            <Link
              to={`/questionlist/${subject.id}`}
              className="btn btn-success my-2 my-sm-0"
            >
              Take Exam{" "}
            </Link>
            {profileStore.profile.is_teacher && (
              <Link
                to={{
                  pathname: "/createquestion",
                  state: {
                    subjectID: this.props.match.params.subjectdetailID
                  }
                }}
                className="btn btn-success my-2 my-sm-0"
              >
                Add Questions
              </Link>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default observer(SubjectDetail);
