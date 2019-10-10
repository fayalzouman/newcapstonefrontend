import { decorate, observable, computed } from "mobx";

import { instance } from "./instance";

class QuestionStore {
  questions = [];

  loading = true;

  fetchQuestionsAnswers = async () => {
    // pass the subject id as an atgument and add it to the get request
    try {
      const res = await instance.get("questions/subjectID");
      const questions = res.data;
      this.questions = questions;
      this.loading = false;
      console.log("QUESTIONS");
    } catch (err) {
      console.log(err.response.data);
    }
  };
}

decorate(QuestionStore, {
  questions: observable,
  loading: observable
});

const questionStore = new QuestionStore();

export default questionStore;
