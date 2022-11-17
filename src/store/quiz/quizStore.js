import { getAllQuizzes } from "@/services/QuizService.js";

import { useToast } from 'vue-toastification'

const toast = useToast()

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
        toast('quizzes loaded');
      });
    },
  },
};
export { quizStore };
