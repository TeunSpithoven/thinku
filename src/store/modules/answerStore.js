// import { getAllQuizzes } from "@/services/QuizService.js";

import { useToast } from "vue-toastification";
const toast = useToast();

const answerStore = {
  state: {
    answers: [],
    id: 1,
    renderAnswers: true,
  },
  getters: {
    getAllAnswers(state) {
      console.log("allAnswers in store");
      console.log(state.answers);
      return state.answers;
    },
    getAllAnswersByQuestionId: (state) => (questionId) => {
      console.log('sorted answers')
      console.log(state.answers)
      if (state.answers !== undefined) {
        console.log(state.id);
        console.log(state.answers);
        return state.answers.filter((answer) => {
          return answer.questionId === questionId;
        });
      }
      // console.log(state.answers.length);
      // if (state.answers.length > 0) {
      //   const answerList = state.answers.filter((answer) => {
      //     return answer.questionId === questionId;
      //   });
      //   // console.log("answers for this question");
      //   // console.log(answerList);
      //   return answerList;
      // } else {
      //   console.log("No answers in state");
      // }
    },
    getAnswerById: (state) => (id) => {
      const index = state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
      return state.answers[index];
    },
    getAnswerIndexById(state, id) {
      return state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
    },
  },
  mutations: {
    // TODO: gaat het hier goed? debuggen🪲 veel plezier
    createAnswer(state, answer) {
      answer.id = state.id;
      console.log({ ...answer });
      state.answers.push({ ...answer });
      state.id++;
    },
    updateAnswer(state, answer) {
      console.log("update answer");
      const index = state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(answer.id);
      if (index > -1 && index !== null && index !== undefined) {
        state.answers[index].number = answer.number;
        state.answers[index].answer = answer.answer;
        state.answers[index].isCorrect = answer.isCorrect;
        toast.success("answer updated");
      } else {
        console.log("error: the answer you are trying to update was not found");
        toast.error("answer update error");
      }
    },
    updateAnswers(state, answers) {
      console.log("update answers");
      console.log({ ...answers });
      if(answers !== undefined && answers.length > 1) {
      state.answers = answers;
      }
      console.log(state.answers)
    },
    deleteAnswer(state, id) {
      console.log("delete answer");
      const index = state.answers
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
      if (index > -1 && index !== null && index !== undefined) {
        state.answers.splice(index, 1);
      } else {
        toast.error(`error: the answer with id: ${id} was not found`);
      }
    },
    unrenderAnswers(state) {
      state.renderAnswers = false;
    },
    renderAnswers(state) {
      state.renderAnswers = true;
    },
  },
};
export { answerStore };
