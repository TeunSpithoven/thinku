const createQuizStore = {
  state: {
    userId: 1,
    title: "",
    description: "",
    giphyUrl: "",
    questions: [],

    editQuestion: -1,
    error: "",
  },
  getters: {
    sortedQuestions (state) {
      return state.questions.sort((a, b) => {
        return a.number - b.number
      })
    }
  },
  mutations: {
    // QUIZ
    saveQuizToDB(state, n){
      console.log("userId: " + state.userId);
      console.log(n.quiz);
    },
    updateCreateQuizInfo(state, n) {
      state.userId = n.userId;
      state.title = n.title;
      state.description = n.description;
      state.giphyUrl = n.giphyUrl;
    },
    updateQuizInfo (state, n) {
      state.title = n.title;
      state.description = n.description;
    },
    updateCreateQuizQuestions(state, n) {
      state.questions = n.questions;
    },
    updateEditQuestion(state, n) {
      state.editQuestion = n.editQuestion;
    },
    // QUESTION
    addQuestion(state, n) {
      state.questions.push(n.question);
    },
    updateQuestion(state, n) {
      var index = state.questions
        .map((x) => {
          return x.number;
        })
        .indexOf(n.number);

      state.questions[index].question = n.question;
      state.questions[index].type = n.type;
      state.questions[index].time = n.time;
    },
    deleteQuestion(state, n) {
      if (state.questions.length > 1) {
        var index = state.questions
          .map((x) => {
            return x.number;
          })
          .indexOf(n.number);

        state.questions.splice(index, 1);
      } else {
        state.error = "there must be at least one question in the quiz";
      }
    },
    // ANSWER
    updateAnswer(state, n) {
      var questionIndex = state.questions
      .map((x) => {
        return x.number;
      })
      .indexOf(n.questionNumber);
      var answerIndex = state.questions[questionIndex].answers
      .map((x) => {
        return x.number;
      })
      .indexOf(n.number);
      
      state.questions[questionIndex].answers[answerIndex].number = n.number;
      state.questions[questionIndex].answers[answerIndex].answer = n.answer;

      // TODO: get the amount of correct answers
      var correctAnswers = 1;
      if(n.isCorrect === true || correctAnswers > 1){
        state.questions[questionIndex].answers[answerIndex].isCorrect = n.isCorrect;
      }
    },
  },
  actions: {},
  modules: {},
};

export { createQuizStore };
