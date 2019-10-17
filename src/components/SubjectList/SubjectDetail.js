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
      <Container className="p-5">
        <div>
          <h1 className="text-center" style={{ color: "grey" }}>
            {subject.subject_name}
          </h1>
          <div className="card p-5">
            <div className="text-right">
              {profileStore.profile.is_teacher && (
                <Link
                  to={{
                    pathname: "/createquestion",
                    state: {
                      subjectID: this.props.match.params.subjectdetailID
                    }
                  }}
                  className="btn btn-outline-success mb-3"
                >
                  Add Questions
                </Link>
              )}
            </div>

            <h5
              style={{ color: "orange", textAlign: "left", lineHeight: "35px" }}
              className="text-justify mb-5"
            >
              {viewedDescription}
            </h5>

            <div style={{ textAlign: "center" }}>
              <a
                className="btn btn-outline-primary my-2 my-sm-0"
                href="https://youtube.com/khanacademy"
                style={{ marginRight: "30px" }}
              >
                Learn More
              </a>

              <Link
                to={`/questionlist/${subject.id}`}
                className="btn btn-danger my-2 my-sm-0"
              >
                Take Exam{" "}
              </Link>

              {/* Link that will take me to the createQuestion page then i will send the subject id in this format subjectID */}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default observer(SubjectDetail);
