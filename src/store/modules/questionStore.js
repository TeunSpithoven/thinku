// import { getAllQuizzes } from "@/services/QuizService.js";

import { useToast } from "vue-toastification";
const toast = useToast();

const questionStore = {
  state: {
    questions: [],
    renderQuestions: true,
  },
  getters: {
    getAllQuestions(state) {
      return state.questions;
    },
    sortedQuestions(state) {
      // TODO: sort quesions by number
      return state.questions;
    },
    sortedQuestionByNumber: (state) => (number) => {
      var questionIndex = state.questions
        .map((x) => {
          return x.number;
        })
        .indexOf(number);
      return state.questions[questionIndex];
    },
    questionAnswers: (state, getters, rootState) => {
      return state.items.map(({ id }) => {
        const answer = rootState.Answer.answers.find(
          (answer) => answer.id === id
        );
        return {
          id: answer.id,
          answer: answer.answer,
          isCorrect: answer.isCorrect,
          number: answer.number,
        };
      });
    },
  },
  actions: {
    createQuestion({ commit }, { question }) {
      commit('addQuestion', question);
      question.answers.forEach((answer) => {
        console.log(`creating answer with number: ${answer.number}, answer: ${answer.answer}`);
        answer.questionId = question.id;
        commit('createAnswer', answer);

      })
      // for (let i = 0; i < question.answers.length; i++){
        // commit('createAnswer', question.answer[i]);
      // }
    },
  },
  mutations: {
    addQuestion(state, question) {
      state.questions.push({
        id: state.questions.length + 1,
        quizId: question.quizId,
        question: question.question,
        number: question.number,
        type: question.type,
        time: question.time,
      });
    },
    updateQuestion(state, question) {
      var index = state.questions
        .map((x) => {
          return x.id;
        })
        .indexOf(question.id);

      if (index > -1 && index !== null && index !== undefined) {
        state.questions[index].question = question.question;
        state.questions[index].type = question.type;
        state.questions[index].time = question.time;
        toast.success("question updated");
      } else {
        console.log(`error: question with id: ${question.id} was not found`);
        toast.error("answer delete error");
      }
    },
    updateAllQuestions(state, questions) {
      state.questions = questions;
      // give the questions a new index based on question.number
      state.questions.forEach((question, index) => (question.number = index));
    },
    deleteQuestion(state, n) {
      if (state.questions.length > 1) {
        var index = state.questions
          .map((x) => {
            return x.number;
          })
          .indexOf(n.number);

        state.questions.splice(index, 1);
      } else {
        state.error = "there must be at least one question in the quiz";
      }
    },
    unrenderQuestions(state) {
      state.renderQuestions = false;
    },
    renderQuestions(state) {
      state.renderQuestions = true;
    },
  },
};
export { questionStore };
