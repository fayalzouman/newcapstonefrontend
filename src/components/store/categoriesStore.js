import { decorate, observable } from "mobx";

import { instance } from "./instance";

class CategoriesStore {
  categories = [];
  subjects = [];
  schools = [];
  school = null;
  loading = true;

  fetchSchoolByID = schoolID => {
    this.school = this.schools.find(school => school.id === schoolID);
    console.log("[categoriesStore:]", this.school);
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

  fetchSubjects = async categoryID => {
    try {
      const res = await instance.get(`${categoryID}/subjectlist/`);
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
