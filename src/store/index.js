import { createStore } from 'vuex';

import { quizStore } from './modules/quizStore.js';
import { questionStore } from './modules/questionStore.js';
import { answerStore } from './modules/answerStore.js';
import { createQuizStore } from './modules/createQuizStore.js';

export default createStore({
  modules: {
    cQ: createQuizStore,
    Quiz: quizStore,
    Question: questionStore,
    Answer: answerStore,
  }
})
