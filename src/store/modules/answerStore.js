// import { getAllQuizzes } from "@/services/QuizService.js";

import { useToast } from 'vue-toastification'
const toast = useToast()

const answerStore = {
  state: {
    answers: [],
    renderAnswers: true,
  },
  getters: {
    getAllAnswers(state) {
      return state.answers;
    },
    getAllAnswersByQuestionId: (state) => (questionId) => {
      console.log(questionId);
      if (state.answers.length > 0) {
        const answerList = state.answers.filter(answer => {
          return answer.questionId === questionId;
        });
        console.log(answerList);
        return answerList;
      } else {
        console.log("No answers in state");
      }
    },
    getAnswerById: (state) => (id) => {
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
      answer.id = state.answers.length + 1;
      state.answers.push(answer);
      // console.log(answer);
    },
    updateAnswer(state, answer) {
      const index = state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(answer.id);
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
        toast.success('answer deleted');
      } else {
        console.log(`error: the answer with id: ${id} was not found`);
      }
    },
    deleteAllAnswers(state) {
      state.answers = [];
    },
    unrenderAnswers(state) {
      state.renderAnswers = false;
    },
    renderAnswers(state) {
      state.renderAnswers = true;
    },
  },
};
export { answerStore };
