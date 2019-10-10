import { decorate, observable, computed } from "mobx";

import { instance } from "./instance";

class QuestionStore {
  questions = [];

  loading = true;

  fetchQuestionsAnswers = async () => {
    try {
      const res = await instance.get("questions/<int:questions_id>/");
      const questions = res.data;
      this.questions = questions;
      this.loading = false;
    } catch (err) {}
  };
}

decorate(QuestionStore, {
  questions: observable,
  loading: observable
});

const questionStore = new QuestionStore();
questionStore.fetchQuestionsAnswers();

export default questionStore;
