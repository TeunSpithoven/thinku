import { getAllQuizzes } from "@/services/QuizService.js";

const quizStore = {
  state: {
    responseText: "",
    quizzes: [],
  },
  mutations: {
    getAllQuizzes(state) {
      getAllQuizzes().then((response) => {
        console.log(response);
        state.responseText = response;
      });
    },
  },
};
export { quizStore };
