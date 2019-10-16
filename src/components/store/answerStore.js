import { decorate, observable, computed } from "mobx";

import { instance } from "./instance";

class AnswerStore {
  answers = [];
  loading = true;

  postAnswer = async (answerData, history) => {
    try {
      const res = await instance.post("answer/create/", answerData);
      const as = res.data;
      console.log("response of creating answer", as);
      history.replace(`/questionlist/${answerData.question}/`);
    } catch (err) {
      console.error(err.response);
    }
  };
}

decorate(AnswerStore, {
  answers: observable,
  loading: observable
});

const answerStore = new AnswerStore();

export default answerStore;
