import { mutations } from "@/store/modules/answerStore";

const state = {
  answers: [],
  renderAnswers: false,
  errorMessage: "",
};

it("renderAnswers_success", () => {
  state.renderAnswers = false;

  mutations.renderAnswers(state);

  expect(state.renderAnswers).toBe(true);
});

it("unrenderAnswers_success", () => {
  state.renderAnswers = true;

  mutations.unrenderAnswers(state);

  expect(state.renderAnswers).toBe(false);
});
