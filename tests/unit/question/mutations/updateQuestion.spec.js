import { mutations } from "@/store/modules/questionStore";

// TODO: move this into a beforeEach method
const state = {
  questions: [],
  id: 1,
  renderQuestions: true,
  dragQuestions: false,
};
state.questions.push({
  id: 1,
  quizId: 6,
  number: 1,
  question: "testquestion",
  type: "testquestion",
  time: 20,
});

it("updateQuestion", () => {
  const question = {
    id: 1,
    quizId: 6,
    number: 2,
    question: "updatedQuestion",
    type: "updatetesttype",
    time: 81,
  };

  mutations.updateQuestion(state, question);

  expect(state.questions.length).toBe(1);
  expect(state.questions[0]).toStrictEqual(question);
});
it("updateAllQuestions", () => {
  const questions = [
    {
      id: 3,
      quizId: 5,
      number: 4,
      question: "newquestion",
      type: "type",
      time: 54,
    },
    {
      id: 4,
      quizId: 5,
      number: 5,
      question: "question",
      type: "othertype",
      time: 34,
    },
  ];

  mutations.updateAllQuestions(state, questions);

  expect(state.questions).toStrictEqual(questions);
});
