const createQuizStore = {
  state: {
    editQuestion: 69,

    id: 1,
    userId: 1,
    title: "",
    description: "",
    giphyUrl: "",

    questions: [],
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
  },
  actions: {},
  modules: {},
};

export { createQuizStore };
