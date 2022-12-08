import { mutations } from "@/store/modules/questionStore";

const state = {
  renderQuestions: true,
  dragQuestions: false,
};

it("renderQuestions_success", () => {
  mutations.renderQuestions(state);

  expect(state.renderQuestions).toBe(true);
});

it("unrenderQuestions_success", () => {
  mutations.unrenderQuestions(state);

  expect(state.renderQuestions).toBe(false);
});
it("updateDragQuestions_true_success", () => {
  const input = true;

  mutations.updateDragQuestions(state, input);

  expect(state.dragQuestions).toBe(input);
});
it("updateDragQuestions_false_success", () => {
  const input = false;

  mutations.updateDragQuestions(state, input);

  expect(state.dragQuestions).toBe(input);
});
