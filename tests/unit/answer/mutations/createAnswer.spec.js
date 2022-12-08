import { mutations } from "@/store/modules/answerStore";

const state = {
  answers: [],
  id: 1,
};

it("createAnswer_Answer_success", () => {
  const answer = {
    questionId: 1,
    questionNumber: 1,
    number: 1,
    answer: "testantwoord",
    isCorrect: true,
  };

  mutations.createAnswer(state, answer);

  expect(state.answers[0]).toStrictEqual({
    id: 1,
    questionId: 1,
    questionNumber: 1,
    number: 1,
    answer: "testantwoord",
    isCorrect: true,
  });
});
