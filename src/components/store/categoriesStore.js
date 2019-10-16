import { decorate, observable } from "mobx";

import { instance } from "./instance";

class CategoriesStore {
  // categories = [];
  subjects = [];
  schools = [];
  school = null;
  loading = true;
  subject = null;

  fetchSchoolByID = async schoolID => {
    this.school = this.schools.find(school => +school.id === +schoolID);
    // const res = await instance.get(`schoollist/`);
  };

  fetchSubjectByID = async subjectID => {
    try {
      const res = await instance.get(`subjectdetail/${subjectID}/`);
      this.subject = res.data;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  fetchSchools = async () => {
    try {
      const res = await instance.get(`schoollist/`);
      const schools = res.data;
      this.schools = schools;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  fetchSubjects = async categoryID => {
    try {
      const res = await instance.get(`subjectlist/${categoryID}/`);
      const subjects = res.data;
      this.subjects = subjects;
      console.log("SUBJJJECTS IN STORE", this.subjects);
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

decorate(CategoriesStore, {
  loading: observable,
  // categories: observable,
  subjects: observable,
  subject: observable,
  schools: observable,
  school: observable
});

const categoriesStore = new CategoriesStore();
categoriesStore.fetchSchools();

export default categoriesStore;
