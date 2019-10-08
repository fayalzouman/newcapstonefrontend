import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
  const category = props.category;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/categories/${category.id}`} className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={category.imageUrl} />
        </div>
        <div className="card-body"></div>
      </Link>
    </div>
  );
}

export default CategoryCard;
