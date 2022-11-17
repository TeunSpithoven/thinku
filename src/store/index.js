import { createStore } from 'vuex';

import { quizStore } from './quiz/quizStore.js';
import { createQuizStore } from './quiz/createQuizStore.js';

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
    Q: quizStore,
  }
})
