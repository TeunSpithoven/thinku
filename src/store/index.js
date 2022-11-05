import { createStore } from 'vuex'

import { createQuizStore } from './quiz/createQuizStore.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cQ: createQuizStore,
  }
})
