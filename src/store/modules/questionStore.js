import { useToast } from "vue-toastification";
const toast = useToast();

const questionStore = {
  state: {
    questions: [],
    id: 1,
    renderQuestions: true,
    dragQuestions: false,
  },
  getters: {
    sortedQuestions(state) {
      // console.log('sorted questions')
      // console.log(state.questions)
      state.questions.forEach((q) => {
        var index = state.questions
          .map((x) => {
            return x.id;
          })
          .indexOf(q.id);

        q.number = index + 1;
      });
      return state.questions;
    },
    questionById: (state) => (id) => {
      var questionIndex = state.questions
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
      return state.questions[questionIndex];
    },
  },
  actions: {
    createQuestion({ rootState, commit }, question) {
      question.quizId = rootState.Quiz.id;
      commit("addQuestion", question);
      // console.log(question);
      question.answers.forEach((answer) => {
        // DEBUG: Hier gaat het ook goed
        answer.questionId = question.id;
        commit("createAnswer", answer);
      });
    },
  },
  mutations: {
    addQuestion(state, question) {
      question.id = state.id;
      const newQuestion = {
        id: state.id,
        quizId: question.quizId,
        number: question.number,
        question: question.question,
        type: question.type,
        time: question.time,
      };
      // console.log({ ...question });
      // console.log(newQuestion);
      // state.questions.push({ ...question });
      state.questions.push(newQuestion);
      state.id++;
    },
    updateQuestion(state, question) {
      var index = state.questions
        .map((x) => {
          return x.id;
        })
        .indexOf(question.id);

      if (index > -1 && index !== null && index !== undefined) {
        state.questions[index].question = question.question;
        state.questions[index].type = question.type;
        state.questions[index].number = question.number;
        state.questions[index].time = question.time;
        // toast.success("question updated");
      } else {
        // console.log(`error: question ${question.id} was not found`);
      }
    },
    updateAllQuestions(state, questions) {
      // console.log({...questions})
      state.questions = questions;
    },
    deleteQuestion(state, id) {
      if (state.questions.length > 1) {
        var index = state.questions
          .map((x) => {
            return x.id;
          })
          .indexOf(id);
        toast(`deleting question with id ${id}`);
        state.questions.splice(index, 1);
      } else {
        state.error = "there must be at least one question in the quiz";
      }
    },
    unrenderQuestions(state) {
      state.renderQuestions = false;
    },
    renderQuestions(state) {
      state.renderQuestions = true;
    },
    updateDragQuestions(state, value) {
      state.dragQuestions = value;
    },
    enableQuestionDrag(state) {
      // console.log('question drag true')
      state.dragQuestions = true;
    },
    disableQuestionDrag(state) {
      // console.log('question drag false')
      state.dragQuestions = false;
    },
  },
};
export const mutations = questionStore.mutations;
export { questionStore };
