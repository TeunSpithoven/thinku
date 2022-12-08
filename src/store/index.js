import { createStore } from 'vuex';

import { quizStore } from './modules/quizStore.js';
import { questionStore } from './modules/questionStore.js';
import { answerStore } from './modules/answerStore.js';

export default createStore({
  modules: {
    Quiz: quizStore,
    Question: questionStore,
    Answer: answerStore,
  }
})
