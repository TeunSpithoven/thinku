import { getters } from "@/store/modules/answerStore";

const state = {
  answers: [],
};
const answer1 = {
  id: 1,
  questionId: 1,
  questionNumber: 1,
  number: 1,
  answer: "testantwoord",
  isCorrect: true,
};
const answer2 = {
  id: 2,
  questionId: 1,
  questionNumber: 1,
  number: 1,
  answer: "testantwoord",
  isCorrect: true,
};
it("getAllAnswers_success", () => {
  state.answers = [];
  state.answers.push(answer1);
  state.answers.push(answer2);

  const result = getters.getAllAnswers(state);

  expect(result).toStrictEqual([answer1, answer2]);
});
it("getAllAnswersByQuestionId2_1_success", () => {
  state.answers = [];
  state.answers.push(answer1);
  state.answers.push(answer2);
  const questionId = 1;

  const result = getters.getAllAnswersByQuestionId2(state, { questionId });

  expect(result.length).toBe(2);
  expect(result).toStrictEqual([answer1, answer2]);
});

it("getAnswerId2_1_success", () => {
  state.answers = [];
  state.answers.push(answer1);
  const id = 1;

  const result = getters.getAnswerById2(state, { id });

  expect(result).toStrictEqual(answer1);
});
