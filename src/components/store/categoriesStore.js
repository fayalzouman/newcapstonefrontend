import { decorate, observable } from "mobx";

import { instance } from "./instance";

class CategoriesStore {
  categories = [];
  subjects = [];
  schools = [];
  loading = true;

  fetchCategories = async schoolID => {
    try {
      const res = await instance.get("categorylist/");
      const categories = res.data;
      this.categories = categories;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  fetchSchools = async () => {
    try {
      const res = await instance.get("schoollist/");
      const schools = res.data;
      this.schools = schools;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  fetchSubjects = async () => {
    try {
      const res = await instance.get("subjectlist/");
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
categoriesStore.fetchSchools();

export default categoriesStore;
