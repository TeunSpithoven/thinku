import { createStore } from 'vuex';

import { quizStore } from './modules/quizStore.js';
import { questionStore } from './modules/questionStore.js';
import { answerStore } from './modules/answerStore.js';
import { playStore } from './modules/playStore.js';

export default createStore({
  modules: {
    Play: playStore,
    Quiz: quizStore,
    Question: questionStore,
    Answer: answerStore,
  }
})
