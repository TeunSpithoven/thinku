// import { getAllQuizzes } from "@/services/QuizService.js";

import { useToast } from 'vue-toastification'
const toast = useToast()

const answerStore = {
  state: {
    answers: [],
  },
  getters: {
    getAllAnswers(state) {
      return state.answers;
    },
    getAnswerById(state, id) {
      const index = state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
      return state.answers[index];
    },
    getAnswerIndexById(state, id) {
      return state.answers
      .map((x) => {
        return x.id;
      })
      .indexOf(id);
    },
  },
  mutations: {
    createAnswer(state, answer) {
      state.answers.push(answer);
    },
    updateAnswer(state, answer) {
      const index = state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(answer.id);
        // const index = state.getAnswerIndexById(answer.id);

      if (index > -1 && index !== null && index !== undefined) {
        state.answers[index].number = answer.number;
        state.answers[index].answer = answer.answer;
        state.answers[index].isCorrect = answer.isCorrect;
        toast.success('answer updated');
      } else {
        console.log("error: the answer you are trying to update was not found");
        toast.error('answer update error');
      }
    },
    updateAnswers(state, answers) {
      state.answers = answers;
    },
    deleteAnswer(state, id) {
      const index = state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
      if (index > -1 && index !== null && index !== undefined) {
        state.answers.splice(index);
        toast.success('answer deletet');
      } else {
        console.log("error: the answer you are trying to update was not found");
        toast.error('answer delete error');
      }
    },
    deleteAllAnswers(state) {
      state.answers = [];
    },
  },
};
export { answerStore };
