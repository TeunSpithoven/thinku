import { mutations } from "@/store/modules/questionStore";

const state = {
  questions: [],
  error: "",
};

state.questions.push({
  id: 3,
  quizId: 33,
  number: 50,
  question: "deleteThisQuestion",
  type: "deleteQuestion",
  time: 500,
});

it("deleteQuestion_nonExistantQuestion_failure", () => {
  state.error = "";
  const id = 2;

  mutations.deleteQuestion(state, id);

  expect(state.questions.length).toBe(1);
  expect(state.error).toBe("there must be at least one question in the quiz");
});

it("deleteQuestion_oneQuestion_failure", () => {
  state.error = "";
  const id = 3;

  mutations.deleteQuestion(state, id);

  expect(state.questions.length).toBe(1);
  expect(state.error).toBe("there must be at least one question in the quiz");
});

it("deleteQuestion_twoQuestions_success", () => {
  const id = 4;
  state.questions.push({
    id: 4,
    quizId: 55,
    number: 40,
    question: "deleteThisQuestion",
    type: "deleteQuestion",
    time: 400,
  });

  mutations.deleteQuestion(state, id);

  expect(state.questions.length).toBe(1);
  expect(state.questions[0].id).toBe(3);
});
