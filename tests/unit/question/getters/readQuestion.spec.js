import { getters } from "@/store/modules/questionStore";

const state = {
  questions: [],
};

it("sortedQuestions_success", () => {
  const question1 = {
    id: 3,
    quizId: 5,
    number: 2,
    question: "shouldbesecond",
    type: "type",
    time: 54,
  };
  const question2 = {
    id: 4,
    quizId: 5,
    number: 1,
    question: "shouldbefirst",
    type: "othertype",
    time: 34,
  };
  state.questions.push(question1);
  state.questions.push(question2);

  const result = getters.sortedQuestions(state);

  expect(result.length).toEqual(2);
  expect(result[0].id).toBe(3);
  expect(result[0].number).toBe(1);
  expect(result[1].id).toBe(4);
  expect(result[1].number).toBe(2);
});
it("questionById_1_success", () => {
  state.questions = [];
  const question1 = {
    id: 3,
    quizId: 5,
    number: 2,
    question: "shouldbesecond",
    type: "type",
    time: 54,
  };
  state.questions.push(question1);
  const id = 3;

  const result = getters.questionById2(state, {id});

  console.log(result);
  expect(result).toStrictEqual(question1);
});
