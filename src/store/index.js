import { createStore } from 'vuex'

export default createStore({
  state: {
    editQuestion: 1,

    createQuiz: {
      userId: -1,
      title: '',
      description: '',
      giphyUrl: '',
      questions: [],
    },
    questions: [],
    createQuizInfo: {
      userId: -1,
      title: '',
      description: '',
      giphyUrl: '',
    },
  },
  getters: {
  },
  mutations: {
    updateQuizInfo (state, n) {
      state.title = n.title;
      state.description = n.description;
    },
    updateQuestions (state, n) {
      state.questions = n.questions;
    },
  },
  actions: {
  },
  modules: {
  }
})
