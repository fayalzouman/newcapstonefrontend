import React from "react";
import { Link } from "react-router-dom";
import categoriesStore from "../store/categoriesStore";

function SubjectCard({ subject }) {
  return (
    // <div className="col-lg-4 col-md-6 col-12" className="image">
    <div className="col-lg-4 col-md-6 col-12 card-deck mb-5">
      <Link to={`/subjectdetail/${subject.id}`} className="card">
        <div className="image">
          <img
            className="card-img-top"
            style={{ objectFit: "cover" }}
            height="200px"
            src={subject.image}
          />
        </div>
        <h3 className="card-body text-right">{subject.subject_name}</h3>
      </Link>
    </div>
  );
}

export default SubjectCard;
