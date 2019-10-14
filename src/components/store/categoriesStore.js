import { decorate, observable } from "mobx";

import { instance } from "./instance";

class CategoriesStore {
  // categories = [];
  subjects = [];
  schools = [];
  school = null;
  loading = true;
  subject = null;

  fetchSchoolByID = schoolID => {
    this.school = this.schools.find(school => school.id === schoolID);
    console.log("[categoriesStore:]", this.school);
  };

  fetchSubjectByID = subjectID => {
    this.subject = this.subjects.find(subject => subject.id === subjectID);
    console.log("[categoriesStore:]", this.subject);
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
    this.loading = true;
    try {
      const res = await instance.get(`category/${categoryID}/`);
      const subjects = res.data;
      this.subjects = subjects.subjects; //is this correct? check postman
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
