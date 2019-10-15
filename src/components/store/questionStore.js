import { decorate, observable, computed } from "mobx";

import { instance } from "./instance";
import ProfileStore from "./profileStore";
class QuestionStore {
  questions = [];
  loading = true;

  calculatePoints = async (obj, history) => {
    try {
      alert("hi");
      obj.points = obj.points + ProfileStore.points;
      const res = await instance.put(`profile/update/`, obj);
      ProfileStore.points = res.data.points;
      history.replace("/profile");
    } catch (error) {
      console.log(error.response);
    }
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
