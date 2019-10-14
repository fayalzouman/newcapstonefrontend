import React, { Component } from "react";
import { observer } from "mobx-react";

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
      <div>
        <h3>Subjects</h3>
        {/* <SearchBar store={authorStore} /> */}
        <div className="row">{subjectCards}</div>
      </div>
    );
  }
}

export default observer(SubjectList);
