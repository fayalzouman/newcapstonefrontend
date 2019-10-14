import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components

// Stores
import categoriesStore from "../store/categoriesStore";
import Loading from "../../Loading";

class SubjectDetail extends Component {
  async componentDidMount() {
    const subjectdetailID = this.props.match.params.subjectdetailID;
    await categoriesStore.fetchSubjectByID(subjectdetailID);
  }

  render() {
    if (!categoriesStore.subject) return <Loading />;
    const subject = categoriesStore.subject;
    return (
      <div>
        <div>
          <h3 style={{ color: "white" }}>{subject.subject_name}</h3>
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
        </div>
      </div>
    );
  }
}

export default observer(SubjectDetail);
