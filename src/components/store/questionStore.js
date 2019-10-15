import { decorate, observable, computed } from "mobx";

import { instance } from "./instance";

class QuestionStore {
  questions = [];

  loading = true;

  fetchQuestionsAnswers = async subjectID => {
    console.log(subjectID);
    try {
      const res = await instance.get(`questionlist/${subjectID}/`);
      const subject = res.data;
      this.questions = subject.questions;
      this.loading = false;
      console.log("QUESTIONS");
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(QuestionStore, {
  questions: observable,
  loading: observable
});

const questionStore = new QuestionStore();

export default questionStore;
