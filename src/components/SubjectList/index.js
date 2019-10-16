import React, { Component } from "react";
import { observer } from "mobx-react";
import { Container } from "react-bootstrap";

// Components
import SubjectCard from "./SubjectCard";
import categoriesStore from "../store/categoriesStore";
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
          <h3 style={{ color: "green", textAlign: "center" }}>Subjects</h3>
          <div className="row">{subjectCards}</div>
        </div>
      </Container>
    );
  }
}

export default observer(SubjectList);
