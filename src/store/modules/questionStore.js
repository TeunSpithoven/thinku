import { useToast } from "vue-toastification";
const toast = useToast();

// DEBUG: het veranderen van de quiz id's en numbers gaat niet fout in dit bestand

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
    questionById: (state) => (id) => {
      var questionIndex = state.questions
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
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
    createQuestion({ rootState, commit }, question) {
      console.log(question);
      question.quizId = rootState.Quiz.id;
      commit("addQuestion", question);
      question.answers.forEach((answer) => {
        // DEBUG: Hier gaat het ook goed
        answer.questionId = question.id;
        commit("createAnswer", answer);
      });
    },
  },
  mutations: {
    addQuestion(state, question) {
      question.id = state.questions.length + 1;
      state.questions.push(question);
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
        state.questions[index].number = question.number;
        state.questions[index].time = question.time;
        toast.success("question updated");
      } else {
        console.log(`error: question ${question.id} was not found`);
      }
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
