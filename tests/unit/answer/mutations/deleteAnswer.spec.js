import { mutations } from "@/store/modules/answerStore";

const state = {
  answers: [],
  id: 1,
  errorMessage: "",
};

state.answers.push({
  id: 1,
  questionId: 1,
  questionNumber: 1,
  number: 2,
  answer: "dontBecomeMePlease",
  isCorrect: false,
});

it("deleteAnswer_nonExistingAnswer_failure", () => {
  const id = 2;

  mutations.deleteAnswer(state, id);

  expect(state.answers.length).toBe(1);
});

it("deleteAnswer_existingAnswer_success", () => {
  const id = 1;

  mutations.deleteAnswer(state, id);

  expect(state.answers.length).toBe(0);
});
