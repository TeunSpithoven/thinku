import { getQuiz } from "@/services/QuizService.js";

const playStore = {
  state: {
    playQuiz: {},
    isConnected: false,

    user: {
      userId: 1,
      userName: "testTeun",
    },
    roomName: "",
    
    errorMessage: "",
  },
  getters: {
    getPlayQuiz(state) {
      return state.playQuiz;
    },
    getStudent(state) {
      return state.user;
    },
    getRoomName(state) {
      return state.roomName;
    },
  },
  mutations: {
    setPlayQuiz(state, quizId) {
      getQuiz(quizId).then((response) => {
        const resQuiz = JSON.parse(response);
        console.log(resQuiz);
        state.playQuiz = resQuiz;
        state.roomName =  'test' + resQuiz.title;
      });
    },
    setIsConnected(state, isConnected) {
      state.isConnected = isConnected;
    },
    setStudent(state, user) {
      state.user = user;
    },
    setRoomName(state, roomName) {
      state.roomName = roomName;
    },
  },
};
export const getters = playStore.getters;
export const mutations = playStore.mutations;
export { playStore };
