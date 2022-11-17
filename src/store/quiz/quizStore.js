import { getAllQuizzes } from "@/services/QuizService.js";

const quizStore = {
  state: {
    responseText: "",
    quizzes: [],
  },
  mutations: {
    getAllQuizzes(state) {
      getAllQuizzes().then((response) => {
        state.responseText = response;
        state.quizzes = JSON.parse(response);
      });
    },
  },
};
export { quizStore };
