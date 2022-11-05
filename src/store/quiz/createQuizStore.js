const createQuizStore = {
  state: {
    id: 1,
    userId: 1,
    title: "",
    description: "",
    giphyUrl: "",
    questions: [],
    
    editQuestion: 69,
    error: "",
  },
  getters: {},
  mutations: {
    updateCreateQuizInfo(state, n) {
      state.id = n.id;
      state.userId = n.userId;
      state.title = n.title;
      state.description = n.description;
      state.giphyUrl = n.giphyUrl;
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
    deleteQuestion(state, n) {
      if (state.questions.length > 1) {
        var index = state.questions
          .map((x) => {
            return x.id;
          })
          .indexOf(n.id);

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
