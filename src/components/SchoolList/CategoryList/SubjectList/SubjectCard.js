import React from "react";
import { Link } from "react-router-dom";

function SubjectCard(props) {
  const subject = props.subject;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/questionlist/${subject.id}`} className="card">
        {" "}
        //link goes to question
        <div className="image">
          <img className="card-img-top img-fluid" src={subject.imageUrl} />
        </div>
        <div className="card-body"></div>
      </Link>
    </div>
  );
}

export default SubjectCard;
