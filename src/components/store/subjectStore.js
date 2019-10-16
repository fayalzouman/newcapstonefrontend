import { decorate, observable, computed } from "mobx";

import { instance } from "./instance";

class SubjectStore {
  subjects = [];
  loading = true;

  postSubject = async (subjectData, history) => {
    try {
      const res = await instance.post("subject/create/", subjectData);
      const subs = res.data;
      console.log("response of creating answer", subs);
      history.replace(`/subjectlist/${subjectData.category_subject}/`);
    } catch (err) {
      console.error(err.response);
    }
  };
}

decorate(SubjectStore, {
  subjects: observable,
  loading: observable
});

const subjectStore = new SubjectStore();

export default subjectStore;
