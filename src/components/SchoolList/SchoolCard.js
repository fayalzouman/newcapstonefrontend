import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function SchoolCard({ school }) {
  return (
    <Container className="col-lg-4 col-md-6 col-12">
      <div>
        <Link to={`/categorylist/${school.id}`} className="card">
          <div className="image">
            <img className="card-img-top img-fluid" src={school.imageUrl} />
          </div>
          <div className="card-body">{school.school_name}</div>
        </Link>
      </div>
    </Container>
  );
}

export default SchoolCard;
