import React, { Component } from "react";
import { observer } from "mobx-react";

import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

// Components
import SubjectCard from "./SubjectCard";
import categoriesStore from "../store/categoriesStore";
import profileStore from "../store/profileStore";
import Loading from "../../Loading";
// Store

class SubjectList extends Component {
  async componentDidMount() {
    await categoriesStore.fetchSubjects(this.props.match.params.categoryID);
  }
  render() {
    if (!categoriesStore.subjects) {
      return <Loading />;
    }
    console.log(categoriesStore.subjects);
    const subjectCards = categoriesStore.subjects.map(subject => (
      <SubjectCard key={subject.id} subject={subject} />
    ));

    return (
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div>
          <h1 className="text-success text-center mb-5">المواضيع</h1>
          <div className="card p-5">
            <div className="row">{subjectCards}</div>
            {profileStore.profile.is_teacher && (
              <Link
                to={{
                  pathname: "/createsubject",
                  state: {
                    categoryID: this.props.match.params.categoryID
                  }
                }}
                className="btn btn-primary my-2 my-sm-0 mr-2 col-lg-3"
              >
                Add Subjects
              </Link>
            )}
          </div>

          {/* Link that will take u to the create subject page sending it the categoryid in this format categoryID */}
        </div>
      </Container>

      // <Container style={{ backgroundColor: "white", padding: "20px" }}>
      //   <div>
      //     <h3 style={{ color: "green", textAlign: "center" }}>Subjects</h3>
      //     <div className="row">{subjectCards}</div>
      //   </div>
      // </Container>
    );
  }
}

export default observer(SubjectList);
