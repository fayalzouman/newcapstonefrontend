import React from "react";
import { Link } from "react-router-dom";
import categoriesStore from "../store/categoriesStore";

function SubjectCard({ subject }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/subjectdetail/${subject.id}`} className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={subject.imageUrl} />
        </div>
        <div className="card-body">{subject.subject_name}</div>
      </Link>
    </div>
  );
}

export default SubjectCard;
