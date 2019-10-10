import React from "react";
import { observer } from "mobx-react";

// Components
import CategoryCard from "./CategoryCard";
// Store
import categoriesStore from "../store/categoriesStore";

const CategoryList = props => {
  // vfetch id from the url and pass it to fetchCategories
  const schoolID = props.match.params.schoolID;
  categoriesStore.fetchSchoolByID(schoolID);
  //dont forget loading
  const categoryCards = categoriesStore.categories.map(category => (
    <CategoryCard key={category.id} category={category} />
  ));

  return (
    <div>
      <h3>Categories</h3>
      {/* <SearchBar store={authorStore} /> */}
      <div className="row">{categoryCards}</div>
    </div>
  );
};

export default observer(CategoryList);
