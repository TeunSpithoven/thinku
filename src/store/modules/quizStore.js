import { getAllQuizzes } from "@/services/QuizService.js";

// import { useToast } from 'vue-toastification'
// const toast = useToast()

const quizStore = {
  state: {
    id: -1,
    userId: 1,
    title: "",
    description: "",
    image: "",
    
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
