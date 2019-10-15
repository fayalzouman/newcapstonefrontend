import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import SchoolCard from "./SchoolCard";
// Store
import categoriesStore from "../store/categoriesStore";

class SchoolList extends Component {
  componentDidMount() {
    console.log(this.props.match.params.schoolID);
    categoriesStore.fetchSchools(this.props.match.params.schoolID);
  }

  render() {
    console.log(categoriesStore.schools);
    const schoolCards = categoriesStore.schools.map(school => (
      <SchoolCard key={school.id} school={school} />
    ));
    return (
      <div>
        <h3>Schools</h3>
        <div className="row">{schoolCards}</div>
      </div>
    );
  }
}
export default observer(SchoolList);
