import React from "react";
import { observer } from "mobx-react";

// Components
import SubjectCard from "./SubjectCard";
import categoriesStore from "../../../store/categoriesStore";
// Store

const SubjectList = () => {
  const categoryID = props.match.params.categoryID;
  const subject = categoriesStore.fetchSubjects(subjectID);
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
};

export default observer(SubjectList);
