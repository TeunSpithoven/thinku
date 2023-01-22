import { getAllQuizzes, createQuiz, getQuiz, editQuiz } from "@/services/QuizService.js";

import { useToast } from 'vue-toastification'
const toast = useToast()

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
  actions: {
    saveQuizToDB({ rootState, state }) {
      const q = rootState.Question.questions
      const questions = [];
      q.forEach((question) => {
        question.answers = [];
        questions.push(question);
      });
      const answers = rootState.Answer.answers;
      console.log("answers");
      console.log(answers);
      questions.forEach((question) => {
        answers.forEach((answer) => {
          if(answer.questionId === question.id) {
            question.answers.push(answer);
          }
        });
      });
      console.log(JSON.parse(JSON.stringify(questions)));
      const n = {
        quiz: {
          userId: state.userId,
          title: state.title,
          description: state.description,
          image: state.image,
          questions: JSON.parse(JSON.stringify(questions)),
        },
      };
      console.log(n.quiz);
      try {
        createQuiz(n.quiz).then((response) => {
          console.log(response);
          toast.success("Quiz opgeslagen!");
        });
      } catch (err) {
        toast.error(err);
      }
    },
    getQuizFromDb({ state, dispatch }, quiz) {
      getQuiz(quiz.id).then((response) => {
        const resQuiz = JSON.parse(response);
        state.id = resQuiz.id;
        state.userId = resQuiz.userId;
        state.title = resQuiz.title;
        state.description = resQuiz.description;
        state.image = resQuiz.image;
        state.questions = resQuiz.questions;
        // console.log(resQuiz.questions);
        // Hier de questions en answers aan de state toevoegen
        resQuiz.questions.forEach((question) => {
          dispatch('createQuestion', question);
        });
      });
    },
  },
  mutations: {
    getAllQuizzes(state) {
      getAllQuizzes().then((response) => {
        state.responseText = response;
        state.quizzes = JSON.parse(response);
      });
    },
    editQuizToDB(state) {
      // get the quiz from state
      const n = {
        quiz: {
          userId: state.userId,
          title: state.title,
          description: state.description,
          image: state.image,
          questions: [],
        },
      };
      // fill the quiz with the correct question format
      state.questions.forEach((q) => {
        const question = {
          question: q.question,
          number: q.number,
          type: q.type,
          time: q.time,
          answers: q.answers,
        };
        n.quiz.questions.push(question);
      })
      // send request to api
      try {
        editQuiz(state.id, n.quiz).then((response) => {
          console.log(response);
          toast.success("Wijzigingen opgeslagen!");
        });
      } catch (err) {
        toast.error(err);
      }
    },
    updateCreateQuiz(state, n) {
      state.userId = n.userId;
      state.title = n.title;
      state.description = n.description;
      state.image = n.image;
      state.questions = n.questions;
    },
    updateCreateQuizInfo(state, n) {
      state.userId = n.userId;
      state.title = n.title;
      state.description = n.description;
      state.image = n.image;
    },
    updateQuizTitle(state, title) {
      state.title = title;
    },
    updateQuizDescription(state, description) {
      state.description = description;

    },
    updateCreateQuizImage(state, n) {
      // state.image = toString(n.image);
      state.image = n.image;
      // console.log(state.image);
    },
    updateCreateQuizQuestions(state, n) {
      state.questions = n.questions;
    },
  },
};
export const mutations = quizStore.mutations;
export { quizStore };
