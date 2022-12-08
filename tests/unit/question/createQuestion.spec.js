import { mutations } from "@/store/modules/questionStore";

const state = {
  questions: [],
  id: 1,
  renderQuestions: true,
  dragQuestions: false,
};

it("addQuestion_Question_success", () => {
  const question = {
    quizId: 6,
    number: 1,
    question: "testquestion",
    type: "testtype",
    time: 80,
  };

  mutations.addQuestion(state, question);

  expect(state.questions.length).toBe(1);
  expect(state.questions[0]).toStrictEqual({
    id: 1,
    quizId: 6,
    number: 1,
    question: "testquestion",
    type: "testtype",
    time: 80,
  });
});
