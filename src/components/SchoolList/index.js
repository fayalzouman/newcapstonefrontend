import React from "react";
import { observer } from "mobx-react";

// Components
import SchoolCard from "./SchoolCard";
// Store
import categoriesStore from "../store/categoriesStore";

const SchoolList = () => {
  const schoolCards = categoriesStore.fetchSchools.map(school => (
    <SchoolCard key={school.id} school={school} />
  ));

  return (
    <div>
      <h3>Schools</h3>
      {/* <SearchBar store={authorStore} /> */}
      <div className="row">{schoolCards}</div>
    </div>
  );
};

export default observer(SchoolList);
