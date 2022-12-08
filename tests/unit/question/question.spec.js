import { mutations } from "@/store/modules/questionStore";

// TODO: move this into a beforeEach method
const state = {
  questions: [],
  id: 1,
  renderQuestions: true,
  dragQuestions: false,
};

describe("question mutations", () => {
  it("addQuestion", () => {
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
  it("updateQuestion", () => {
    const question = {
      id: 1,
      number: 2,
      question: "updatedQuestion",
      type: "updatetesttype",
      time: 81,
    };

    mutations.updateQuestion(state, question);

    expect(state.questions.length).toBe(1);
    expect(state.questions[0]).toStrictEqual({
      id: 1,
      quizId: 6,
      number: 2,
      question: "updatedQuestion",
      type: "updatetesttype",
      time: 81,
    });
  });
});
