import { createQuiz, getQuiz } from "@/services/QuizService.js";

import { useToast } from "vue-toastification";

const toast = useToast();

const createQuizStore = {
  state: {
    userId: 1,
    title: "",
    description: "",
    image: "",
    questions: [],

    editQuestion: -1,
    renderList: true,
    toast: { type: "", text: "" },
  },
  getters: {
    sortedQuestions(state) {
      return state.questions;
    },
  },
  mutations: {
    // QUIZ
    saveQuizToDB(state) {
      const n = {
        quiz: {
          userId: state.userId,
          title: state.title,
          description: state.description,
          image: state.image,
          questions: state.questions,
        },
      };
      try {
        createQuiz(n.quiz).then((response) => {
          console.log(response);
          toast.success("Quiz opgeslagen!");
        });
      } catch (err) {
        toast.error(err);
      }
    },
    setEditQuiz(state, n) {
      getQuiz(n.id).then((response) => {
        const resQuiz = JSON.parse(response);
        state.userId = resQuiz.userId;
        state.title = resQuiz.title;
        state.description = resQuiz.description;
        state.image = resQuiz.image;
        state.questions = resQuiz.questions;
        console.log(resQuiz.questions[0]);
        toast(`got quiz with id: ${n.id} from api`);
      });
    },
    updateCreateQuiz(state, n) {
      state.userId = n.userId;
      state.title = n.title;
      state.description = n.description;
      state.image = n.image;
      state.questions = n.questions;
    },
    updateCreateQuizInfo(state, n) {
      state.userId = n.userId;
      state.title = n.title;
      state.description = n.description;
      state.image = n.image;
    },
    updateQuizTitle(state, n) {
      state.title = n.title;
    },
    updateQuizDescription(state, n) {
      state.description = n.description;
    },
    updateCreateQuizImage(state, n) {
      // state.image = toString(n.image);
      state.image = n.image;
      console.log(state.image);
    },
    updateCreateQuizQuestions(state, n) {
      state.questions = n.questions;
    },
    // QUESTION
    addQuestion(state, n) {
      // console.log(state.questions)
      state.questions.push(n.question);
      // console.log(state.questions)
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
    updateQuestionList(state, n) {
      state.questions = n;
      state.questions.forEach((answer, index) => (answer.number = index));
    },
    unrenderQuestions(state) {
      state.renderList = false;
    },
    renderQuestions(state) {
      state.renderList = true;
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
    createAnswer(state, n) {
      var questionIndex = state.questions
        .map((x) => {
          return x.number;
        })
        .indexOf(n.questionNumber);
      state.questions[questionIndex].answers.push(n);
    },
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
      var correctAnswers = 2;
      if (n.isCorrect === true || correctAnswers > 1) {
        state.questions[questionIndex].answers[answerIndex].isCorrect =
          n.isCorrect;
      }
    },
    deleteAnswer(state, n) {
      var questionIndex = state.questions
        .map((x) => {
          return x.number;
        })
        .indexOf(n.questionNumber);

      if (state.questions[questionIndex].answers.length > 1) {
        var index = state.questions[questionIndex].answers
          .map((x) => {
            return x.number;
          })
          .indexOf(n.number);

        state.questions[questionIndex].answers.splice(index, 1);
        state.questions[questionIndex].answers.forEach(
          (answer, index) => (answer.number = index)
        );
        // console.log(state.questions[questionIndex].answers)
      } else {
        state.error = "there must be at least one answer in a question";
      }
    },
  },
  actions: {},
  modules: {},
};

export { createQuizStore };
