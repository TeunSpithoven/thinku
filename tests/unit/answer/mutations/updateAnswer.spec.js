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
  number: 1,
  answer: "testantwoord",
  isCorrect: true,
});

it("updateAnswer_existingAnswer_success", () => {
  const answer = {
    id: 1,
    questionId: 1,
    questionNumber: 1,
    number: 2,
    answer: "updatetestandwoord",
    isCorrect: false,
  };

  mutations.updateAnswer(state, answer);

  expect(state.answers[0]).toStrictEqual({
    id: 1,
    questionId: 1,
    questionNumber: 1,
    number: 2,
    answer: "updatetestandwoord",
    isCorrect: false,
  });
});

it("updateAnswer_nonExistingAnswer_fails", () => {
  state.errorMessage = "";
  const answer = {
    id: 2,
    questionId: 1,
    questionNumber: 1,
    number: 2,
    answer: "dontBecomeMePlease",
    isCorrect: false,
  };

  mutations.updateAnswer(state, answer);

  expect(state.errorMessage).toBe("update answer failed");
  expect(state.answers[0].answer).toBe("updatetestandwoord");
});

it("updateAnswers_twoAnswers_success", () => {
  const answers = [
    {
      id: 1,
      questionId: 1,
      questionNumber: 1,
      number: 1,
      answer: "firstanswer",
      isCorrect: false,
    },
    {
      id: 2,
      questionId: 1,
      questionNumber: 1,
      number: 2,
      answer: "secondanswer",
      isCorrect: false,
    },
  ];

  mutations.updateAnswers(state, answers);

  expect(state.answers.length).toBe(2);
  expect(state.answers[0]).toStrictEqual(answers[0]);
  expect(state.answers[1]).toStrictEqual(answers[1]);
});
