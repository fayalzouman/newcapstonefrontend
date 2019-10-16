import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components

// Stores
import categoriesStore from "../store/categoriesStore";
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
      // <Container style={{ backgroundColor: "white", padding: "20px" }}>
      <div>
        <h3 style={{ color: "green", textAlign: "center" }}>
          {subject.subject_name}
        </h3>
        <h5 style={{ color: "red", textAlign: "left" }}>{viewedDescription}</h5>
        <div style={{ textAlign: "center" }}>
          <a
            className="btn btn-success my-2 my-sm-0"
            href="https://youtube.com/khanacademy"
            style={{ marginRight: "30px" }}
          >
            Learn More
          </a>

          {/* <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName} />*/}
          <Link
            to={`/questionlist/${subject.id}`}
            className="btn btn-success my-2 my-sm-0"
          >
            Take Exam{" "}
          </Link>
          <Link
            to={{
              pathname: "/createquestion",
              state: {
                subjectID: this.props.match.params.subjectdetailID
              }
            }}
          >
            Add Questions
          </Link>
          {/* Link that will take me to the createQuestion page then i will send the subject id in this format subjectID */}
        </div>
      </div>
    );
  }
}

export default observer(SubjectDetail);
