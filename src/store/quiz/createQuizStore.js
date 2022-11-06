const createQuizStore = {
  state: {
    userId: 1,
    title: "",
    description: "",
    giphyUrl: "",
    questions: [],

    editQuestion: -1,
    error: "",
  },
  getters: {
    sortedQuestions (state) {
      return state.questions.sort((a, b) => {
        return a.number - b.number
      })
    }
  },
  mutations: {
    updateCreateQuizInfo(state, n) {
      state.userId = n.userId;
      state.title = n.title;
      state.description = n.description;
      state.giphyUrl = n.giphyUrl;
    },
    updateQuizInfo (state, n) {
      state.title = n.title;
      state.description = n.description;
    },
    updateCreateQuizQuestions(state, n) {
      state.questions = n.questions;
    },
    updateEditQuestion(state, n) {
      state.editQuestion = n.editQuestion;
    },
    addQuestion(state, n) {
      state.questions.push(n.question);
    },
    updateQuestion(state, n) {
      var index = state.questions
        .map((x) => {
          return x.number;
        })
        .indexOf(n.number);

      state.questions[index].question = n.question;
      state.questions[index].type = n.type;
      state.questions[index].time = n.time;
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
  },
  actions: {},
  modules: {},
};

export { createQuizStore };
