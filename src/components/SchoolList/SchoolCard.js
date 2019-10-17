import React from "react";
import { Link } from "react-router-dom";

function SchoolCard({ school }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 card-deck">
      <Link to={`/categorylist/${school.id}`} className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={school.image} />
        </div>
      </Link>
    </div>
  );
}

export default SchoolCard;
