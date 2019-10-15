import { decorate, observable, computed } from "mobx";

import { instance } from "./instance";

class QuestionStore {
  questions = [];
  points = 0;
  loading = true;

  calculatePoints = async (obj, history) => {
    obj.points = obj.points + this.points;
    const res = await instance.post(`profileupdate/`, obj);
    this.points = res.data.points;
    history.replace("/profile");
  };

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
