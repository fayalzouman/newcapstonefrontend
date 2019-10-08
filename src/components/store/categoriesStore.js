import { decorate, observable, computed } from "mobx";
import axios from "axios";
import React from "react";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});


const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});


class CategoriesStore {
  categories = [];
  subjects = [];
  schools = [];
  loading = true;

  fetchCategories = async () => {
    try {
      const res = await instance.get("schools/categories/");
      const categories = res.data;
      this.categories = categories;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
  fetchSchools = async () => {
    try {
      const res = await instance.get("schools/");
      const schools = res.data;
      this.schools = schools;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  fetchSubjects = async () => {
    try {
      const res = await instance.get("schools/categories/subjects/");
      const subjects = res.data;
      this.subjects = subjects;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}
decorate(CategoriesStore, {
  loading: observable,
  categories: observable,
  subjects: observable,
  schools: observable
});

const categoriesStore = new CategoriesStore();
// categoriesStore.fetchCategories();


const categoriesStore = new CategoriesStore();
// categoriesStore.fetchCategories();


export default categoriesStore;
