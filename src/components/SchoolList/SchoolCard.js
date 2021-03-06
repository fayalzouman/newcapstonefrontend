import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function SchoolCard({ school }) {
  return (
    <Container className="col-lg-4 col-md-6 col-12 ">
      <div className="card-deck">
        <Link to={`/categorylist/${school.id}`} className="card">
          <div className="image">
            <img className="card-img-top img-fluid" src={school.image} />
          </div>
        </Link>
      </div>
    </Container>

    //     <div className="col-lg-4 col-md-6 col-12">
    //       <Link to={`/categorylist/${school.id}`} className="card">
    //         <div className="image">
    //           <img className="card-img-top img-fluid" src={school.image} />
    //         </div>
    //         <div className="card-body">{school.school_name}</div>
    //       </Link>
    //     </div>
  );
}

export default SchoolCard;
