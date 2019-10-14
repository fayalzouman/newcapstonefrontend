import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
// import BookTable from "./BookTable";

// Stores
import categoriesStore from "../store/categoriesStore";

class SubjectDetail extends Component {
  render() {
    const subjectdetailID = this.props.match.params.subjectdetailID;
    categoriesStore.fetchSubjectByID(subjectdetailID);
    const subject = categoriesStore.subject;
    return (
      <div>
        <div>
          <h3>{subject.subject_name}</h3>
          {/* <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName} */}
          /> // add a button thst takes you to the question list
        </div>
      </div>
    );
  }
}

export default observer(SubjectDetail);
