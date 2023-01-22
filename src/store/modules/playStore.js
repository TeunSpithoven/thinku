import { getQuiz } from "@/services/QuizService.js";

const playStore = {
  state: {
    playQuiz: {},
    answers: [],
    id: 1,
    renderAnswers: true,
    errorMessage: "",
  },
  getters: {
    getPlayQuiz(state) {
      return state.playQuiz;
    },
  },
  mutations: {
    setPlayQuiz(state, quizId) {
      getQuiz(quizId).then((response) => {
        const resQuiz = JSON.parse(response);
        console.log(resQuiz);
        state.playQuiz = resQuiz;
      });
    },
  },
};
export const getters = playStore.getters;
export const mutations = playStore.mutations;
export { playStore };
