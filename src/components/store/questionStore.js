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
  postForm = async (questionData, history) => {
    try {
      const res = await instance.post("question/create/", questionData, {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxMjg2NzM1LCJqdGkiOiI1MTExNGNmMDk3ZGM0MDkwYWM4ZWQwY2NjN2YwOWNjNyIsInVzZXJfaWQiOjF9.vCheKvkWh5o8VeZYwEg39FN9VGh6itPg-AluIweCn94"
      });
      const qs = res.data;
      console.log("response of creating", qs);
      history.replace({
        pathname: `/createanswer`,
        state: { subject: questionData.subject, question: qs.id }
      });
    } catch (err) {
      console.error(err.response);
    }
  };
}

decorate(QuestionStore, {
  questions: observable,
  loading: observable
});

const questionStore = new QuestionStore();

export default questionStore;
