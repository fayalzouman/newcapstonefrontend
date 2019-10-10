import React from "react";
import { Link } from "react-router-dom";
import categoriesStore from "../store/categoriesStore";

function CategoryCard(props) {
  const categoryID = props.match.params.categoryID;
  const category = categoriesStore.fetchCategories(categoryID);
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/categorylist/${category.id}`} className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={category.imageUrl} />
        </div>
        <div className="card-body"></div>
      </Link>
    </div>
  );
}

export default CategoryCard;
