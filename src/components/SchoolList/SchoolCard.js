import React from "react";
import { Link } from "react-router-dom";

function SchoolCard(props) {
  const school = props.school;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/schoollist/${school.id}`} className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={school.imageUrl} />
        </div>
        <div className="card-body"></div>
      </Link>
    </div>
  );
}

export default SchoolCard;
