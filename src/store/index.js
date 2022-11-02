import { createStore } from 'vuex'

export default createStore({
  state: {
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
  },
  actions: {
  },
  modules: {
  }
})
