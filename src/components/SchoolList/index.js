import React, { Component } from "react";
import { observer } from "mobx-react";
import { Container } from "react-bootstrap";

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
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <div>
          <h3 style={{ color: "green", textAlign: "center" }}>
            المرحله المدرسيه
          </h3>
          <div className="row">{schoolCards}</div>
        </div>
      </Container>
    );
  }
}
export default observer(SchoolList);
